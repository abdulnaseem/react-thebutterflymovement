import { useEffect } from "react";
import HeaderImage from "../../assets/images/jj-contact-header.jpg";
import ContactForm from "../../components/ContactForm";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#f5f0e5] pt-16 text-[#0b0d10]">
      {/* Hero Section */}
      <section className="relative h-64 overflow-hidden md:h-80">
        <img
          src={HeaderImage}
          alt="Contact The Butterfly Movement"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/20" />

        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-center px-5 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.35em] text-[#f5b400]">
            Get In Touch
          </p>

          <h1 className="text-4xl font-black uppercase leading-none tracking-tight text-white md:text-6xl">
            Contact
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
            Questions, collaborations, or ready to join the movement? Reach out
            and we’ll get back to you as soon as we can.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
          <div>
            <ContactForm />
          </div>

          <aside className="space-y-8">
            <div className="rounded-3xl border border-white/10 bg-[#0b0d10] p-6 text-[#f5f0e5] shadow-2xl sm:p-8">
              <div className="mb-8 text-center">
                <h2 className="text-2xl font-black uppercase text-white">
                  Contact Information
                </h2>
                <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#f5b400]" />
              </div>

              <div className="space-y-8">
                <ContactInfoItem
                  label="Email Us"
                  value="info@thebutterflymovement.health"
                  href="mailto:info@thebutterflymovement.health"
                  icon="email"
                />

                <ContactInfoItem
                  label="Call or WhatsApp"
                  value="07715 316840"
                  href="tel:07715316840"
                  icon="phone"
                />

                <div className="rounded-2xl bg-white/[0.06] p-5 text-center">
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f5b400]">
                    Response Time
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-white/75">
                    We typically respond within{" "}
                    <strong className="text-[#f5b400]">24 hours</strong>. For
                    urgent safeguarding matters, please call directly.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-xl sm:p-8">
              <h3 className="text-xl font-black uppercase text-[#0b0d10]">
                Your Privacy Matters
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-slate-700">
                We treat all enquiries with strict confidentiality. Your
                information is secure and never shared without your explicit
                consent.
              </p>

              <div className="mt-5 space-y-2 text-sm font-semibold">
                <a
                  href="/privacy-policy"
                  className="block text-[#0b0d10] transition hover:text-[#f5b400]"
                >
                  ↗ Privacy Policy
                </a>

                <a
                  href="/terms"
                  className="block text-[#0b0d10] transition hover:text-[#f5b400]"
                >
                  ↗ Terms of Service
                </a>

                <a
                  href="/safeguarding"
                  className="block text-[#0b0d10] transition hover:text-[#f5b400]"
                >
                  ↗ Safeguarding Policy
                </a>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

function ContactInfoItem({ label, value, href, icon }) {
  return (
    <div className="text-center">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#f5b400]/20 text-[#f5b400]">
        {icon === "email" ? <EmailIcon /> : <PhoneIcon />}
      </div>

      <p className="mb-2 text-sm font-black uppercase tracking-[0.2em] text-[#f5b400]">
        {label}
      </p>

      <a
        href={href}
        className="break-words text-lg font-bold text-white transition hover:text-[#f5b400]"
      >
        {value}
      </a>
    </div>
  );
}

function EmailIcon() {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  );
}

export default Contact;