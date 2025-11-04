"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Clock, Leaf } from "lucide-react";
import Image from "next/image";
import * as React from "react";
import SVGChef from "../../../public/svg-chef.svg";
import SVGLeafs from "../../../public/svg-leaf.svg";

/** TYPES & HELPERS */

type MenuItem = {
  name: string;
  desc?: string;
  price: string;
  badge?: "V" | "VG" | "SPICY" | "NEW";
};
type Section = {
  id: string;
  title: string;
  eyebrow?: string;
  items: MenuItem[];
};

/**MENU DATA */

export const MENU: Section[] = [
  {
    id: "appetizers",
    title: "Appetizers",
    items: [
      {
        name: "Bruschetta 2/4 pcs",
        desc: "Toasted bread topped with tomato, fresh basil, spring onion and balsamic vinegar",
        price: "2.25 / 3.25 JD",
      },
      {
        name: "Garlic Bread 2/4 pcs",
        desc: "Toasted bread with garlic butter topped with mozzarella",
        price: "1.75 / 2.50 JD",
      },
      {
        name: "Garlic Pesto Bread 2/4 pcs",
        desc: "Toasted bread with garlic butter topped with mozzarella and basil pesto",
        price: "2.00 / 3.00 JD",
      },
    ],
  },
  {
    id: "salads",
    title: "Salads",
    items: [
      {
        name: "Rocca",
        desc: "Rocca, fresh mushrooms, cranberries, walnuts and Padano cheese with balsamic dressing",
        price: "5.00 JD",
      },
      {
        name: "Caprese",
        desc: "Cherry tomatoes, bufala cheese and fresh basil with olive oil with balsamic dressing",
        price: "6.00 JD",
      },
      {
        name: "Quinoa",
        desc: "Quinoa, kale, beetroot, red onion, sundried tomatoes, feta cheese, raisins and fresh coriander with vinaigrette dressing",
        price: "6.00 JD",
      },
      {
        name: "Green",
        desc: "Iceberg lettuce, avocado, cucumber, carrot, spring onion, fresh dill and sunflower seeds with honey mustard dressing",
        price: "4.75 JD",
      },
      {
        name: "Mango (seasonal)",
        desc: "Mango, avocado, kale, red cabbage, pecan nuts, dried cranberry, coriander, honey mustard sauce",
        price: "6.50 JD",
      },
    ],
  },
  {
    id: "pasta",
    title: "Pasta",
    items: [
      {
        name: "Lasagna",
        desc: "Lasagna with a minced beef, tomato sauce and bechamel sauce",
        price: "7.50 JD",
      },
      {
        name: "Bolognese",
        desc: "Linguine with a minced beef and tomato sauce",
        price: "6.50 JD",
      },
      {
        name: "Pesto",
        desc: "Penne with basil pesto topped with cherry tomatoes",
        price: "6.00 JD",
      },
      {
        name: "Pesto Creamy",
        desc: "Penne with basil pesto and creamy white sauce",
        price: "6.50 JD",
      },
      {
        name: "Alfredo",
        desc: "Linguine with a creamy white sauce",
        price: "6.00 JD",
      },
      {
        name: "Arrabiata",
        desc: "Penne with a jalapeno spiced tomato sauce topped with green olives, cherry tomatoes and fresh parsley",
        price: "5.25 JD",
      },
      {
        name: "Rose",
        desc: "Penne with tomato sauce and creamy white sauce and jalapeno spiced tomato sauce",
        price: "6.00 JD",
      },
      {
        name: "Aglio e Olio",
        desc: "Linguine with olive oil, sauteed garlic, fresh coriander and fresh parsley topped with cherry tomatoes",
        price: "5.00 JD",
      },
    ],
  },
  {
    id: "pizza",
    title: "Pizza",
    eyebrow: "Served with fresh basil",
    items: [
      {
        name: "Bufala",
        desc: "Tomato sauce and bufala cheese",
        price: "8.00 JD",
      },
      {
        name: "Margherita",
        desc: "Oliva sauce and mozzarella",
        price: "5.25 JD",
      },
      {
        name: "Vegetarian",
        desc: "Oliva sauce, mozzarella, cherry tomatoes, fresh mushrooms, peppers and mixed olives",
        price: "6.00 JD",
      },
      {
        name: "Diavola",
        desc: "Oliva sauce, mozzarella and pepperoni",
        price: "6.00 JD",
      },
      {
        name: "Burrata",
        desc: "Oliva sauce, mozzarella and creamy burrata cheese",
        price: "9.00 JD",
      },
      {
        name: "Funghi",
        desc: "Oliva sauce, mozzarella and fresh mushrooms",
        price: "6.00 JD",
      },
      {
        name: "Spinach",
        desc: "Oliva sauce, mozzarella, spinach, feta cheese, lemon and garlic infused oil",
        price: "6.00 JD",
      },
      {
        name: "Quattro Formaggi",
        desc: "Oliva sauce, mozzarella, cheddar, Padano and Danish blue cheese",
        price: "6.00 JD",
      },
      {
        name: "Three Meats",
        desc: "Oliva sauce, mozzarella, beef bacon, roast beef and pepperoni",
        price: "6.00 JD",
      },
      {
        name: "Anchovy",
        desc: "Oliva sauce, mozzarella, anchovies, cherry tomatoes, capers, green olives and garlic",
        price: "6.00 JD",
      },
      {
        name: "Tuna",
        desc: "Oliva sauce, mozzarella, tuna, capers, spring onion, green olives and lemon",
        price: "7.00 JD",
      },
      {
        name: "Beef Bacon",
        desc: "Oliva sauce, mozzarella and beef bacon",
        price: "6.00 JD",
      },
      {
        name: "Salmon",
        desc: "Oliva sauce, mozzarella, salmon, capers, spring onion and lemon",
        price: "7.00 JD",
      },
      {
        name: "Chicken",
        desc: "Oliva sauce, mozzarella, grilled chicken and green olives",
        price: "6.00 JD",
      },
      {
        name: "Oliva",
        desc: "Oliva sauce, mozzarella, roast beef, turkey, fresh mushrooms, peppers and mixed olives",
        price: "6.00 JD",
      },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    items: [
      {
        name: "Tiramisu",
        desc: "Espresso, mascarpone, cocoa",
        price: "3.50 JD",
      },
      {
        name: "Affogato",
        desc: "Vanilla gelato with espresso",
        price: "2.75 JD",
      },
    ],
  },
  {
    id: "drinks",
    title: "Drinks",
    items: [
      { name: "Fresh Orange Juice", price: "3.00 JD" },
      { name: "Mineral water", price: "0.75 JD" },
      { name: "Espresso", price: "1.75 JD" },
      { name: "Soft drink", price: "1.00 JD" },
      { name: "Sparkling Water", price: "1.50 JD" },
    ],
  },
];

/** SMALL DIVIDER */

function OliveDivider({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "my-10 h-px w-full bg-linear-to-r from-transparent via-foreground/20 to-transparent",
        className
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
    <li className="group">
      <div className="flex items-center gap-3">
        <div className="flex items-baseline gap-2">
          <p className="font-medium text-primary-900 dark:text-primary-100">
            {item.name}
          </p>
          {item.badge && (
            <Badge
              className={cn(
                "text-[10px]",
                item.badge === "SPICY" && "bg-red-700/60"
              )}
              variant={item.badge === "SPICY" ? "destructive" : "default"}
            >
              {item.badge}
              {item.badge === "V" ? (
                <Leaf />
              ) : (
                item.badge === "SPICY" && <SVGPepper />
              )}
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

export default function OlivaMenu() {
  return (
    <section
      id="oliva-menu"
      aria-label="Oliva Menu"
      className="bg-primary-100 dark:bg-background mt-(--header-h) py-16 md:py-24"
    >
      <div className="container-inner  border-2 rounded-2xl border-primary-500 dark:border-border bg-primary-200 dark:bg-primary/10 py-16 relative">
        <div
          aria-hidden="true"
          className={cn(
            "flex pointer-events-none absolute inset-0 items-start",
            "transform md:-translate-y-10 z-0",
            "justify-center"
          )}
        >
          <Image
            src={SVGLeafs}
            alt=""
            className="
                      w-[min(720px,82%)]
                      object-conver
                      opacity-5 dark:opacity-15
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
            "transform md:-translate-y-10 z-0"
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
            ingredients — a reflection of our kitchen in Jabal Al Lweibdeh.
          </p>
        </header>

        <OliveDivider />

        {/* Sections */}
        <div className="mx-auto max-w-4xl">
          {MENU.map((section, i) => (
            <React.Fragment key={section.id}>
              <MenuSection section={section} index={i} />
              {i < MENU.length - 1 && <OliveDivider />}
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

          <div>
            <p className="uppercase font-semibold text-primary-900 dark:text-primary-200 tracking-wide flex items-center justify-center gap-1.5">
              <Clock className="h-3.5 w-3.5 opacity-80" />
              Opening Hours
            </p>
            <ul className="mt-2 space-y-1">
              <li>Daily — 12–11:30 pm</li>
              <li className="italic text-primary-900/80 dark:text-primary-300">
                Friday — after prayer – 11:30 pm
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
}
