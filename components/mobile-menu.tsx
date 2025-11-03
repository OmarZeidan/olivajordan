"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { MenuIcon } from "lucide-react";
import Link from "next/link";

const items = [
  { href: "/#story", label: "Our Story" },
  { href: "/#the-place", label: "The Place" },
  { href: "/#the-food", label: " The Food" },
  { href: "/contact", label: "Contact" },
];

export default function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          id="openMenu"
          size={"icon"}
          className="md:hidden"
          aria-label="Open menu"
        >
          <MenuIcon />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>

      {/* Content */}
      <SheetContent
        aria-describedby=""
        side="top"
        className={cn(
          "w-full border-b border-primary/10",
          "bg-background/70 backdrop-blur",
          "rounded-b-2xl shadow-sm",
          "pt-[max(env(safe-area-inset-top),12px)] pb-6",
          "data-[state=open]:animate-in data-[state=open]:slide-in-from-top",
          "data-[state=closed]:animate-out data-[state=closed]:slide-out-to-top"
        )}
      >
        {/* Header row inside the sheet */}
        <div className="container-inner flex h-12 items-center">
          <SheetTitle>
            <SheetClose asChild>
              <Link
                href="/"
                className="flex items-center"
                aria-label="Oliva — Home"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo-oliva.svg"
                  alt="Oliva"
                  className="w-18 h-auto"
                />
              </Link>
            </SheetClose>
          </SheetTitle>
        </div>

        {/* Links */}
        <nav className="container-inner mt-2">
          <motion.ul
            initial="hidden"
            animate="show"
            variants={{
              hidden: {
                transition: { staggerChildren: 0.05, staggerDirection: -1 },
              },
              show: {
                transition: { staggerChildren: 0.1, delayChildren: 0.2 },
              },
            }}
            className="flex flex-col gap-1 divide-y divide-primary/10"
          >
            {items.map((item) => (
              <motion.li
                key={item.href}
                variants={{
                  hidden: { y: 6, opacity: 0 },
                  show: { y: 0, opacity: 1 },
                }}
              >
                <SheetClose asChild>
                  <Link
                    href={item.href}
                    className="block rounded-xl px-3 py-3 text-lg active:bg-muted/70 transition-colors text-center"
                  >
                    {item.label}
                  </Link>
                </SheetClose>
              </motion.li>
            ))}
          </motion.ul>

          {/* Primary action */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: { y: -6, opacity: 0 },
              show: { y: 0, opacity: 1, transition: { delay: 0.5 } },
            }}
            className="mt-4"
          >
            <SheetClose asChild>
              <Link href="/menu">
                <Button className="rounded-xl w-full flex items-center">
                  Explore Our Menu
                </Button>
              </Link>
            </SheetClose>
          </motion.div>

          {/* Tiny footnote */}
          <p className="mt-3 text-xs text-primary-700">
            Clay-oven pizza • Fresh pasta • Seasonal salads
          </p>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
