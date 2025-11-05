"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  "/images/image-oliva-enterance.webp",
  "/images/image-oliva-interior-1.webp",
  "/images/oliva-enterance-oven.webp",
  "/images/image-team.webp",
  "/images/image-interior-people.webp",
  "/images/image-oliva-food-on-table.webp",
];
export default function SectionGallery() {
  return (
    <>
      <section
        id="our-gallery"
        aria-label="Some moments at Oliva"
        className="relative overflow-hidden bg-primary-100 dark:bg-background"
      >
        <div className="container-inner py-16 md:py-24">
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex items-center"
          >
            <div>
              <p className="eyebrow">From the Gallery</p>

              <h2 className="section-heading">Moments from Oliva</h2>

              <p className="section-description">
                Capturing the spirit of Oliva — the glow of the oven, the hum of
                the kitchen, and the joy that fills every table.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-16">
            <div className="relative col-span-2 row-span-2 overflow-hidden rounded-2xl">
              <Image
                src={images[0]}
                alt="Clay oven at Oliva"
                width={1200}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
            {images.slice(1).map((src, i) => (
              <div key={i} className="relative overflow-hidden rounded-2xl">
                <Image
                  src={src}
                  alt="Oliva Restaurant gallery photo"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
