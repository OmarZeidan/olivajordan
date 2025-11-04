// app/contact/page.tsx
import ContactForm from "./_components/contact-form.client";

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
