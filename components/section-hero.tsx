"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function SectionHero() {
  return (
    <section
      className="relative max-md:py-42 md:h-svh flex flex-col items-center text-center justify-center overflow-hidden text-primary-100"
      aria-label="Oliva Italian Restaurant Hero"
    >
      <div className="container-inner flex flex-col items-center space-y-6 group overflow-hidden">
        <motion.div
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 m-0"
        >
          <Image
            src="/images/image-hero-oliva-2.webp"
            alt="Clay-oven pizza baking at Oliva Italian Restaurant, Amman"
            fill
            priority
            className="object-cover brightness-[0.9] contrast-[1.05] saturate-[1.2] hue-rotate-[5deg] transition-transform duration-700 ease-out group-hover:scale-102"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/55 mix-blend-multiply transition-opacity duration-700 group-hover:opacity-80 h-full m-0" />

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="relative z-10 w-fit rounded-xl bg-primary-500/90 px-3 py-1 mx-auto"
        >
          <p className="text-primary-50 font-medium text-sm">
            Over a Decade of Pizza, Pasta &amp; People
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-[45px]/[52px] md:text-7xl/[75px] max-w-5xl relative text-center font-playfair font-black"
        >
          Authentic Italian taste, crafted in the heart of Amman
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-xl max-w-xl relative text-center mx-auto"
        >
          Since 2011, Oliva has been serving clay-oven pizzas, handmade pasta,
          and seasonal dishes, a neighborhood restaurant rooted in flavor and
          community.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex gap-2 relative z-10"
        >
          <Link href="#story">
            <Button size={"2xl"} className="uppercase" variant={"static"}>
              Our Story
            </Button>
          </Link>
          <Link href="/menu">
            <Button size="2xl" variant={"static-outline"} className="uppercase">
              Our Menu
            </Button>
          </Link>
        </motion.div>
      </div>
      {/* Only for the sake of active items on the header -- see site-header.tsx */}
      <section id="top-sentinel" aria-hidden="true" className="h-px" />
    </section>
  );
}
