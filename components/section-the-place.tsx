"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SectionThePlace() {
  return (
    <section
      id="the-place"
      aria-label="The Place at Oliva"
      className="relative overflow-hidden bg-primary-100 dark:bg-background"
    >
      <div className="grid md:grid-cols-2 min-h-[80vh]">
        {/* Full-height image (edge-left) */}
        <motion.div
          initial={{ opacity: 0, scale: 1.03 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative h-[50vh] md:h-auto max-md:order-1"
        >
          <Image
            src="/images/image-oliva-food-on-table.webp"
            alt="Oliva’s warm interior with clay oven and communal tables"
            fill
            priority={false}
            className="object-cover md:object-center"
          />
          <div className="absolute inset-0 bg-black/10 dark:bg-black/30" />
        </motion.div>

        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex items-center px-6 py-16 md:px-16 lg:px-24"
        >
          <div>
            <p className="eyebrow">The Place</p>

            <h2 className="section-heading">
              Where Simplicity <br /> Meets Flavor.
            </h2>

            <div className="section-description space-y-4">
              <p>
                At Oliva, guests experience the pleasure of generous,
                uncomplicated, and flavorsome food. The menu celebrates Italian
                classics and imaginative salads made with seasonal, locally
                sourced ingredients. Our clay-oven pizzas feature a crisp crust,
                Oliva’s signature tomato sauce, carefully balanced toppings, and
                real Italian mozzarella. Pasta sauces, inspired by traditional
                recipes, are prepared daily in small batches with fresh herbs.
              </p>
              <p>
                Our salads draw on farm-fresh specialties, offering wholesome,
                nourishing options with the finest grains and produce. Each dish
                honors ingredient and tradition — seasoned simply with fresh
                garlic, sun-ripened tomatoes, hand-picked basil, and
                cold-pressed local olive oil.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
