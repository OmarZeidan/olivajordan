import { cn } from "@/lib/utils";
import { Clock } from "lucide-react";

export default function SectionHint() {
  return (
    <section
      className="relative overflow-hidden bg-primary-200 dark:bg-background text-center py-4 text-sm"
      aria-label="Opening Hours of Oliva"
    >
      <div>
        <p className="uppercase font-semibold text-primary-900 dark:text-primary-200 tracking-wide flex items-center justify-center gap-1.5">
          <Clock className="h-3.5 w-3.5 opacity-80" />
          Opening Hours
        </p>
        <ul className="mt-2 space-y-1">
          <li>Daily — 12–11:30 pm</li>
          <li className="italic text-primary-900/80 dark:text-primary-300">
            After Friday prayer – 11:30 pm
          </li>
        </ul>
      </div>
      <div
        aria-hidden="true"
        className={cn(
          "max-md:hidden",
          "flex pointer-events-none absolute inset-0 items-center",
          "transform md:-translate-y-10 z-0",
        )}
      >
        {/*eslint-disable-next-line @next/next/no-img-element*/}
        <img
          src="/svg-leafs.svg"
          alt=""
          className={cn(
            "w-[min(720px,82%)] object-contain opacity-10 mix-blend-multiply",
            "mask-[radial-gradient(ellipse_at_center,black_75%,transparent_85%)]",
            "select-none",
          )}
        />
      </div>
    </section>
  );
}
