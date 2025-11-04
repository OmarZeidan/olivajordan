import Image from "next/image";

export default function SectionStory() {
  return (
    <>
      <section
        id="story"
        aria-label="The Story at Oliva"
        className="bg-primary-50 dark:bg-background"
      >
        <div className="container-inner py-16 md:py-24">
          <div className="grid md:grid-cols-2 items-center gap-12">
            {/** left side */}
            <div>
              <p className="eyebrow">Our Story</p>
              <h2 className="section-heading">
                From a Clay Oven to <br /> a City Tradition
              </h2>
              <p className="section-description">
                What began as a small kitchen in Jabal Al Lweibdeh grew into a
                gathering place for friends, families, and neighbors. At Oliva,
                every meal is shaped by care — fresh pasta, wood-fired pizza,
                and the comfort of sharing something genuine.
              </p>
            </div>

            {/** Right side */}
            <div className="relative h-[420px] md:h-[520px]">
              <Image
                src="/images/image-oliva-interior-1.webp"
                alt="Clay oven at Oliva"
                fill
                className="object-cover rounded-2xl shadow-lg"
              />
              <Image
                src="/images/image-hero-oliva-3.webp"
                alt="Oliva table scene"
                width={280}
                height={200}
                className="absolute bottom-6 right-6 rounded-xl border-4 border-white/70 dark:border-neutral-800 shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
