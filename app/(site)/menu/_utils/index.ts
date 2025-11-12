import { z } from "zod";

export const revalidate = 2592000; // 30 days (seconds). Time-based revalidation in App Router.  :contentReference[oaicite:1]{index=1}

const Badge = z.preprocess(
  (v) => (typeof v === "string" && v.trim() === "" ? undefined : v),
  z.enum(["V", "VG", "SPICY", "NEW", "ADD-ON"]).optional(),
);

/** CSV row schema (validates bad cells gracefully) */
const Row = z.object({
  section: z.string().min(1),
  section_id: z.string().min(1),
  section_eyebrow: z.string().optional().default(""),
  section_order: z.coerce.number().optional().default(999),
  item_order: z.coerce.number().optional().default(999),
  name: z.string().min(1),
  desc: z.string().optional().default(""),
  price: z.string().optional().default(""),
  badge: Badge,
  isSmaller: z.string().optional().default("FALSE"),
  available: z.string().optional().default("TRUE"),
});
type Row = z.infer<typeof Row>;

function parseCsv(text: string): Row[] {
  const lines = text.trim().split(/\r?\n/);
  const headers = lines.shift()!.split(",");
  const rows: Row[] = [];

  for (const line of lines) {
    // Simple CSV parser that respects quotes
    const cells: string[] = [];
    let cur = "",
      inQ = false;
    for (let i = 0; i < line.length; i++) {
      const c = line[i];
      if (c === '"' && line[i + 1] === '"') {
        cur += '"';
        i++;
        continue;
      }
      if (c === '"') {
        inQ = !inQ;
        continue;
      }
      if (c === "," && !inQ) {
        cells.push(cur);
        cur = "";
        continue;
      }
      cur += c;
    }
    cells.push(cur);

    const obj: Record<string, string> = {};
    headers.forEach((h, i) => (obj[h.trim()] = (cells[i] ?? "").trim()));

    const parsed = Row.safeParse(obj);
    if (parsed.success) rows.push(parsed.data);
  }
  // hide unavailable items
  return rows.filter((r) => r.available.toUpperCase() === "TRUE");
}

export type MenuItem = {
  name: string;
  desc?: string;
  price: string;
  badge?: "V" | "VG" | "SPICY" | "NEW" | "ADD-ON";
  isSmaller?: boolean;
};
export type Section = {
  id: string;
  title: string;
  eyebrow?: string;
  items: MenuItem[];
};

export async function getSections(): Promise<{
  sections: Section[];
  fetchedAt: string;
}> {
  const res = await fetch(process.env.SHEET_CSV_URL!, { next: { revalidate } }); // seconds; App Router fetch caching.  :contentReference[oaicite:2]{index=2}
  const csv = await res.text();
  const rows = parseCsv(csv);

  // group by section_id
  const map = new Map<
    string,
    { title: string; eyebrow?: string; order: number; items: MenuItem[] }
  >();
  for (const r of rows) {
    const k = r.section_id;
    if (!map.has(k)) {
      map.set(k, {
        title: r.section,
        eyebrow: r.section_eyebrow || undefined,
        order: r.section_order,
        items: [],
      });
    }
    map.get(k)!.items.push({
      name: r.name,
      desc: r.desc || undefined,
      price: r.price || "",
      badge: r.badge,
      isSmaller: r.isSmaller.toUpperCase() === "TRUE",
    });
  }

  // sort sections and items
  const sections = [...map.entries()]
    .sort((a, b) => a[1].order - b[1].order)
    .map(([id, { title, eyebrow, items }]) => ({
      id,
      title,
      eyebrow,
      items,
    }));

  // store readable timestamp for display
  const fetchedAt = new Date().toISOString(); // UTC ISO string
  return { sections, fetchedAt };
}
