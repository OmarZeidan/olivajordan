"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SectionTheFood() {
  return (
    <section
      id="the-food"
      aria-label="The Food at Oliva"
      className="relative overflow-hidden bg-primary-300 dark:bg-background"
    >
      <div className="grid md:grid-cols-2 min-h-[80vh]">
        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex items-center px-6 py-16 md:px-16 lg:px-24"
        >
          <div>
            <p className="eyebrow">The Food</p>

            <h2 className="section-heading">
              Fresh, Authentic, and Irresistible Taste.
            </h2>

            <div className="section-description space-y-4">
              <p>
                At Oliva, food is crafted with a spirit of generosity and
                simplicity — a reflection of Italian tradition and seasonal
                abundance. Each dish begins with honest ingredients and ends
                with full, balanced flavor. From the warmth of the clay oven to
                the first bite, the focus is always on freshness, care, and the
                pleasure of sharing good food.
              </p>
              <p>
                Our pizzas are baked to a perfect crisp, layered with Oliva’s
                signature tomato sauce, fresh mozzarella, and toppings that
                complement rather than compete. Pasta sauces are prepared daily
                in small batches, inspired by time-honored recipes and lifted by
                the fragrance of fresh herbs. Every plate is designed to feel
                both familiar and new, combining authenticity with a light,
                modern touch.
              </p>
              <p>
                Salads celebrate the season’s best produce — bright, nourishing,
                and full of texture. Farm-fresh vegetables, grains, and herbs
                come together simply, finished with cold-pressed local olive
                oil, sun-ripened tomatoes, and hand-picked basil. It’s food that
                feels effortless yet deeply satisfying — honest, flavorful, and
                unmistakably Oliva.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Full-height image (edge-left) */}
        <motion.div
          initial={{ opacity: 0, scale: 1.03 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative h-[50vh] md:h-auto"
        >
          <Image
            src="/images/image-hero-oliva.webp"
            alt="Oliva’s warm interior with clay oven and communal tables"
            fill
            priority={false}
            className="object-cover md:object-center"
          />
          <div className="absolute inset-0 bg-black/10 dark:bg-black/30" />
        </motion.div>
      </div>
    </section>
  );
}
