"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SectionOurKitchen() {
  return (
    <section
      id="our-kitchen"
      aria-label="The Kitchen at Oliva"
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
            <p className="eyebrow">From Our Kitchen</p>

            <h2 className="section-heading">
              Fresh, Authentic, and Irresistible Taste
            </h2>

            <div className="section-description space-y-4">
              <p>
                Behind every plate at Oliva is a kitchen built on honesty,
                rhythm, and care. It’s where the warmth of the clay oven meets
                the calm precision of daily craft: dough rising slowly, sauces
                stirred patiently, herbs added just before serving. Each dish
                begins with good ingredients and ends with a balance of flavor
                that feels effortless yet intentional.
              </p>
              <p>
                Our pizzas are baked to a perfect crisp, layered with Oliva’s
                signature tomato sauce, real mozzarella, and toppings that
                complement rather than compete. Pasta sauces are made in small
                batches each day, guided by traditional recipes and a respect
                for timing and freshness.
              </p>
              <p>
                The kitchen moves with quiet focus, open, visible, and full of
                life. It’s a space where simplicity is not a shortcut but a
                discipline, and where every meal carries the same spirit that
                has defined Oliva since 2011:{" "}
                <strong className="font-playfair italic font-extrabold">
                  food made by hand, shared with warmth, and remembered for its
                  honest flavor.
                </strong>
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
            src="/images/image-oliva-kitchen.webp"
            alt="Oliva’s warm interior with clay oven"
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
