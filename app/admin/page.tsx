// app/admin/page.tsx
"use client";

import { useEffect, useState } from "react";
import { z } from "zod";

const schema = z.object({
  heroTitle: z.string().min(1),
  adminToken: z.string().min(8),
});

export default function AdminPage() {
  const [form, setForm] = useState({
    heroTitle: "",
    adminToken: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    // Load current values for a better UX
    fetch("/api/content")
      .then((r) => r.json())
      .then((data) => setForm((f) => ({ ...f, ...data })))
      .catch(() => {});
  }, []);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      setMessage("Please fill all fields.");
      return;
    }
    setLoading(true);
    setMessage(null);
    try {
      const res = await fetch("/api/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Failed");
      setMessage("Saved!");
    } catch (err: any) {
      setMessage(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold">Content Admin</h1>
      <p className="text-sm opacity-70 mb-6">Update hero & about text.</p>

      <form onSubmit={onSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium">Hero Title</label>
          <input
            className="mt-1 w-full rounded-md border px-3 py-2 bg-background"
            value={form.heroTitle}
            onChange={(e) => setForm({ ...form, heroTitle: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Admin Token</label>
          <input
            type="password"
            autoComplete="off"
            className="mt-1 w-full rounded-md border px-3 py-2 bg-background"
            value={form.adminToken}
            onChange={(e) => setForm({ ...form, adminToken: e.target.value })}
          />
          <p className="text-xs opacity-70 mt-1">
            Ask the developer for the token.
          </p>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center rounded-md border px-4 py-2 font-semibold hover:opacity-90 disabled:opacity-50"
        >
          {loading ? "Saving…" : "Save"}
        </button>

        {message && <p className="text-sm mt-2">{message}</p>}
      </form>
    </div>
  );
}
