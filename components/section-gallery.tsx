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
                Capturing the spirit of Oliva, the glow of the oven, the hum of
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
            <a
              href="https://www.instagram.com/oliva.amman"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex flex-col items-center justify-center rounded-2xl overflow-hidden border border-primary-300/40 bg-primary-200/20 dark:bg-primary/10 text-primary-900/70 dark:text-primary-100/70 md:hidden transition-all duration-300 hover:bg-primary-200/40 hover:border-primary-400/60"
            >
              <div className="absolute inset-0 bg-linear-to-t from-primary-200/40 dark:from-black/40" />
              <div className="relative z-10 flex flex-col items-center">
                <span className="w-6 mb-1">
                  <svg
                    viewBox="0 0 256 256"
                    aria-hidden="true"
                    fill="currentColor"
                  >
                    <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z" />
                  </svg>
                </span>
                <span className="text-xs font-medium tracking-wide text-center">
                  The story continues… <br />{" "}
                  <span className="opacity-80">@oliva.amman</span>
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
