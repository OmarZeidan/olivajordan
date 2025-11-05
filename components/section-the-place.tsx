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
            src="/images/image-interior-oliva.webp"
            alt="Oliva’s interior image"
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
              Where Simplicity <br /> Meets Flavor
            </h2>

            <div className="section-description space-y-4">
              <p>
                Tucked within the neighborhood rhythm of Amman, Oliva is a place
                shaped by warmth, light, and the pleasure of good food shared.
                The space reflects the same principles as our kitchen — modest,
                grounded, and thoughtfully made. Wood, clay, and natural tones
                create an atmosphere that feels lived in and welcoming, where
                weekday lunches stretch into slow afternoons and dinners feel
                easy and unhurried.
              </p>
              <p>
                The design mirrors the food: authentic, balanced, and full of
                character. Guests can see the open kitchen at work —{" "}
                <strong className="font-playfair font-extrabold">
                  the turning of pizza dough, the fragrance of fresh herbs, the
                  quiet focus of a team that cooks with care
                </strong>
                . Every detail, from the flicker of the oven to the sound of
                plates being set, carries the same spirit of generosity that
                defines Oliva.
              </p>
              <p>
                It’s a place built for connection — between people, flavors, and
                moments — where{" "}
                <strong className="font-playfair font-extrabold">
                  simplicity truly meets flavor.
                </strong>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
