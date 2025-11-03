import Image from "next/image";

export default function SectionStory() {
  return (
    <>
      <section id="story" className="bg-primary-50 dark:bg-[#1b1c16]">
        <div className="container-inner py-16 md:py-24">
          <div className="grid md:grid-cols-2 items-center gap-12">
            {/** left side */}
            <div>
              <p className="eyebrow">Our Story</p>
              <h1 className="font-playfair text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-primary-900 dark:text-primary-100 mb-4">
                From a Clay Oven to <br /> a City Tradition.
              </h1>
              <p className="max-w-2xl text-base md:text-lg text-primary-800/90 dark:text-primary-100/80 leading-relaxed">
                What began as a small kitchen in Jabal Al Lweibdeh grew into a
                gathering place for friends, families, and neighbors. At Oliva,
                every meal is shaped by care — fresh pasta, wood-fired pizza,
                and the comfort of sharing something genuine.
              </p>
            </div>

            {/** Right side */}
            <div className="relative h-[420px] md:h-[520px]">
              <Image
                src="/image-hero-oliva.jpg"
                alt="Clay oven at Oliva"
                fill
                className="object-cover rounded-2xl shadow-lg"
              />
              <Image
                src="/image-hero-oliva-3.jpg"
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
