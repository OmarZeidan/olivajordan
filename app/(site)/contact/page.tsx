import { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import ContactForm from "./_components/contact-form.client";

export const metadata: Metadata = {
  title: "Contact Us – Oliva Italian Restaurant",
  description:
    "Reach Oliva Pizza and Pasta in Amman, Jordan — serving authentic Italian cuisine since 2011 in Jabal Al-Lweibdeh and Shmeisani.",
  openGraph: {
    title: "Contact Us – Oliva Italian Restaurant",
    description:
      "Get in touch with Oliva — a neighborhood Italian kitchen in Jabal Al-Lweibdeh and Shmeisani, Amman. Since 2011.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Oliva Italian Restaurant in Amman – Jabal Al-Lweibdeh and Shmeisani",
      },
    ],
    url: "/contact",
    siteName: "Oliva Italian Restaurant",
  },
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section
      aria-label="Contact Oliva Italian Restaurant"
      className="relative max-md:py-32 overflow-hidden bg-background md:py-[120px]"
    >
      <div className="container-inner grid gap-12 lg:grid-cols-2 lg:gap-20">
        {/* LEFT — intro + quick info */}
        <div className="flex flex-col justify-center">
          <p className="eyebrow">Get in Touch</p>
          <h1 className="section-heading">Let’s talk over good food</h1>
          <p className="section-description max-w-md">
            Planning a gathering, have a question about our menu, or just want
            to say hello? Send us a message — we’d love to hear from you.
          </p>

          {/* quick info block */}
          <div className="mt-8 grid gap-6 grid-cols-2">
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-medium">
                <MapPin className="h-4 w-4" />
                <span>Visit Us</span>
              </div>
              <div className="text-sm/6 text-muted-foreground">
                Jabal Al-Lweibdeh, Amman
                <br />
                Shmeisani, Amman
                <div className="mt-2">
                  <Link
                    href="https://maps.google.com/?q=Oliva+Pizza+and+Pasta+Amman"
                    className="underline underline-offset-4 hover:no-underline"
                  >
                    Open in Google Maps
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 font-medium">
                <Clock className="h-4 w-4" />
                <span>Hours</span>
              </div>
              <div className="text-sm/6 text-muted-foreground">
                Daily 12:00 – 11:30 pm
                <br />
                Friday after prayer – 11:30 pm
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — contact form */}
        <div className="w-full rounded-2xl border border-primary-400/60 dark:border-primary-900/40 bg-primary-100/50 dark:bg-background shadow-md p-6 md:p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
