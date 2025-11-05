import { Metadata } from "next";
import ContactForm from "./_components/contact-form.client";

export const metadata: Metadata = {
  title: "Contact Us – Oliva Italian Restaurant",
  description:
    "Reach Oliva Pizza and Pasta in Amman, Jordan — serving authentic Italian cuisine since 2011 in Jabal Al-Lweibdeh and now also in Shmeisani.",
  openGraph: {
    title: "Contact Us – Oliva Italian Restaurant",
    description:
      "Get in touch with Oliva Pizza, Pasta & More — a neighborhood Italian kitchen in Jabal Al-Lweibdeh and Shmeisani, Amman.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Oliva Italian Restaurant in Amman – Jabal Al-Lweibdeh and Shmeisani",
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <section
      aria-label="Contact Oliva Italian Restaurant"
      className="relative max-md:py-32 overflow-hidden bg-background md:py-[120px]"
    >
      <div className="container-inner grid gap-12 lg:grid-cols-2 lg:gap-20">
        {/* LEFT — intro text */}
        <div className="flex flex-col justify-center">
          <p className="eyebrow">Get in Touch</p>
          <h1 className="section-heading">Let’s talk over good food</h1>
          <p className="section-description max-w-md">
            Planning a gathering, have a question about our menu, or just want
            to say hello? Send us a message — we’d love to hear from you.
          </p>
        </div>

        {/* RIGHT — contact form */}
        <div className="w-full rounded-2xl border border-primary-400/60 dark:border-primary-900/40 bg-primary-100/50 dark:bg-background shadow-md p-6 md:p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
