"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import SVGChef from "@/public/svg-chef.svg";
import { motion } from "framer-motion";
import { Clock, Leaf, Plus } from "lucide-react";
import Image from "next/image";
import * as React from "react";
import { MenuItem, Section } from "../_utils";

/** SMALL DIVIDER */

function OliveDivider({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "my-10 h-px w-full bg-linear-to-r from-transparent via-foreground/30 to-transparent",
        className,
      )}
    />
  );
}

function SVGPepper() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="currentColor"
      viewBox="0 0 256 256"
    >
      <path d="M167.27,40.42A40.06,40.06,0,0,0,128,8a8,8,0,0,0,0,16,24,24,0,0,1,22.85,16.66A64.08,64.08,0,0,0,96,104c0,46.75-25.75,78-76.53,93a16,16,0,0,0,1.77,31.13A264.8,264.8,0,0,0,66.75,232c40.78,0,86.16-9.15,117.53-35.46C210.64,174.44,224,143.3,224,104h0A64.07,64.07,0,0,0,167.27,40.42ZM160,56a48.07,48.07,0,0,1,45.37,32.37L192,95,163.58,80.83a8,8,0,0,0-7.16,0L128,95l-13.37-6.68A48.08,48.08,0,0,1,160,56Zm14,128.3c-18,15.07-43.6,25.26-74.12,29.47A254.08,254.08,0,0,1,24,212.37h0v0c57.23-16.87,87.63-54,88-107.42l12.44,6.22a8,8,0,0,0,7.16,0L160,96.93l28.42,14.21a8,8,0,0,0,7.16,0l12.41-6.2C207.78,138.84,196.35,165.54,174,184.29Z"></path>
    </svg>
  );
}

/** MENU ROW (WITH DOTTED LEADER) */

function MenuRow({ item }: { item: MenuItem }) {
  return (
    <li className={cn("group", item.isSmaller && "text-sm")}>
      <div className="flex items-center gap-3">
        <div className="flex items-baseline gap-2">
          <p className="font-medium text-primary-900 dark:text-primary-100">
            {item.name}
          </p>
          {item.badge && (
            <Badge
              className={cn(
                "text-[10px]",
                item.badge === "SPICY" && "bg-red-700/60",
              )}
              variant={item.badge === "SPICY" ? "destructive" : "default"}
            >
              {item.badge}
              {item.badge === "V" && <Leaf />}
              {item.badge === "SPICY" && <SVGPepper />}
              {item.badge === "ADD-ON" && <Plus />}
            </Badge>
          )}
        </div>
        <div className="flex-1 border-t border-dotted border-foreground/40 translate-y-1" />
        <div className="text-md font-medium text-primary-900 dark:text-primary-50 tabular-nums">
          {item.price}
        </div>
      </div>
      {!!item.desc && (
        <p className="mt-1 text-sm text-primary-800/80 dark:text-primary-100/70 max-w-md">
          {item.desc}
        </p>
      )}
    </li>
  );
}

/** SECTION WRAPPER */

function MenuSection({ section, index }: { section: Section; index: number }) {
  return (
    <motion.section
      id={section.id}
      aria-labelledby={`${section.id}-heading`}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.05,
      }}
      className="py-10"
    >
      <div className="flex items-baseline">
        <h2
          id={`${section.id}-heading`}
          className="tracking-[0.2em] text-3xl uppercase text-primary-800 dark:text-primary-500 font-bold font-playfair"
        >
          {section.title}
        </h2>
        {section.eyebrow && <p className="eyebrow">({section.eyebrow})</p>}
      </div>

      <ul className="mt-10 space-y-6">
        {section.items.map((it) => (
          <MenuRow key={`${section.id}-${it.name}`} item={it} />
        ))}
      </ul>
    </motion.section>
  );
}

/** MAIN MENU COMPONENT */

export default function SectionOlivaMenu({
  sections,
  fetchedAt,
}: {
  sections: Section[];
  fetchedAt: string;
}) {
  const updated = new Date(fetchedAt).toLocaleString("en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  return (
    <section
      id="oliva-menu"
      aria-label="Oliva Menu"
      className="bg-primary-100 dark:bg-background mt-(--header-h) py-16 md:py-24"
    >
      <div className="container-inner max-xl:mx-2 mx-auto border-2 rounded-2xl border-primary-500 dark:border-border bg-primary-200 dark:bg-primary/10 py-16 relative">
        <div
          aria-hidden="true"
          className={cn(
            "flex pointer-events-none absolute inset-0 items-start",
            "transform md:-translate-y-10 z-0",
            "justify-center",
          )}
        >
          {/*eslint-disable-next-line @next/next/no-img-element*/}
          <img
            src="/svg-leafs.svg"
            alt=""
            className="
                      w-[min(720px,82%)]
                      object-conver
                      opacity-10 dark:opacity-15
                      mix-blend-multiply
                      mask-[radial-gradient(ellipse_at_center,black_75%,transparent_85%)]
                      select-none
                    "
          />
        </div>

        <div
          aria-hidden="true"
          className={cn(
            "flex pointer-events-none absolute bottom-0",
            "transform md:-translate-y-10 z-0",
          )}
        >
          <Image
            src={SVGChef}
            alt=""
            className="
                      w-[min(720px,82%)]
                      opacity-10 dark:opacity-5
                      mix-blend-multiply
                      mask-[radial-gradient(ellipse_at_center,black_75%,transparent_85%)]
                      select-none
                    "
          />
        </div>

        {/* Header */}
        <header className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">From our clay oven & kitchen</p>
          <h1 className="font-playfair text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-primary-900 dark:text-primary-100">
            Our Menu
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-primary-800/80 dark:text-primary-100/70">
            Authentic Italian recipes, crafted with care and seasonal
            ingredients, a reflection of our kitchen in Jabal Al Lweibdeh.
          </p>
        </header>

        <OliveDivider />

        {/* Sections */}
        <div className="mx-auto max-w-4xl">
          {sections.map((section, i) => (
            <React.Fragment key={section.id}>
              <MenuSection section={section} index={i} />
              {i < sections.length - 1 && <OliveDivider />}
            </React.Fragment>
          ))}
        </div>

        {/* Footer note */}
        <OliveDivider className="my-8" />
        <footer className="mx-auto max-w-3xl text-center text-xs text-primary-800/70 dark:text-primary-100/60 space-y-3">
          <p>
            Prices are in Jordanian Dinar. Please ask our team about allergens
            or dietary preferences.
          </p>
          <p className="opacity-70">Last updated on {updated}</p>

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
        </footer>
      </div>
    </section>
  );
}
