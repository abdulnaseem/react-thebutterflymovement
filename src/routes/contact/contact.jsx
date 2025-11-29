import { useEffect } from "react";
import HeaderImage from "../../assets/images/jj-contact-header.jpg";
import ContactForm from "../../components/ContactForm";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#f5f0e5] text-[#0b0d10] min-h-screen">
      {/* Hero */}
      <section className="relative h-56 sm:h-64 md:h-72">
        <img
          src={HeaderImage}
          alt="Contact The Butterfly Movement"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative h-full max-w-5xl mx-auto flex flex-col justify-center px-4 sm:px-6 lg:px-8">
          <h1 className="mma-logo-font text-3xl sm:text-4xl md:text-5xl font-bold text-[#f5f0e5] drop-shadow-lg">
            Contact
          </h1>
          <p className="mt-3 max-w-xl text-sm sm:text-base text-slate-100/90">
            Questions, collaborations, or ready to join the movement? Reach out
            and we’ll get back to you as soon as we can.
          </p>
        </div>
      </section>

      {/* Body */}
      <main className="px-4 sm:px-6 lg:px-8 pb-16 -mt-10">
        <div className="max-w-5xl mx-auto grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-start">
          {/* Left: form */}
          <ContactForm />

          {/* Right: contact details / side card */}
          <aside className="bg-[#0b0d10] text-[#f5f0e5] rounded-2xl shadow-[0_18px_40px_rgba(0,0,0,0.6)] border border-[#262933] p-6 sm:p-7 lg:p-8">
            <h2 className="mma-logo-font text-2xl sm:text-3xl font-bold tracking-wide">
              The Butterfly Movement
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-200 leading-relaxed">
              We work with young people, schools, community organisations and
              partners across Tower Hamlets and beyond.
            </p>

            <div className="mt-6 space-y-4 text-sm sm:text-base">
              <div>
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#f5b400]">
                  Email
                </p>
                <a
                  href="mailto:info@thebutterflymovement.health"
                  className="mt-1 inline-flex items-center text-[#f5f0e5] hover:text-[#f5b400] transition-colors"
                >
                  info@thebutterflymovement.health
                </a>
              </div>

              <div>
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#f5b400]">
                  Phone / WhatsApp
                </p>
                <a
                  href="tel:07715316840"
                  className="mt-1 inline-flex items-center text-[#f5f0e5] hover:text-[#f5b400] transition-colors"
                >
                  07715 316840
                </a>
              </div>

              <div>
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#f5b400]">
                  Typical Response
                </p>
                <p className="mt-1 text-slate-200">
                  We usually respond within 2–3 working days. For safeguarding
                  or urgent matters, please call directly.
                </p>
              </div>
            </div>

            <div className="mt-6 border-t border-[#262933] pt-4 text-xs text-slate-400 space-y-2">
              <p>
                By submitting the form, you agree that we may use your details
                to respond to your enquiry. Your information is handled
                securely and never shared without consent.
              </p>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Contact;
