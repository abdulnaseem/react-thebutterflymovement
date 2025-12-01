import { useEffect } from "react";
import HeaderImage from "../../assets/images/jj-contact-header.jpg";
import ContactForm from "../../components/ContactForm";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#f5f0e5] text-[#0b0d10] min-h-screen">
      {/* Hero Section */}
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

      {/* Main Content */}
      <main className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto grid gap-10 md:gap-12 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] items-start">
          {/* Left: Contact Form */}
          <div className="space-y-8">
            <ContactForm />
          </div>

          {/* Right: Contact Details */}
          <aside className="space-y-8">
            {/* Contact Information Card */}
            <div className="bg-[#0b0d10] text-[#f5f0e5] rounded-2xl shadow-xl border border-[#262933] p-5 sm:p-6 md:p-8">
              <div className="text-center mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-[#f5f0e5] mb-2">
                  Contact Information
                </h3>
                <div className="w-12 sm:w-16 h-1 bg-[#f5b400] mx-auto rounded-full"></div>
              </div>

              <div className="space-y-6">
                {/* Email */}
                <div className="text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#f5b400]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-[#f5b400]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#f5b400] mb-1">
                    Email Us
                  </p>
                  <a
                    href="mailto:info@thebutterflymovement.health"
                    className="text-[#f5f0e5] hover:text-[#f5b400] transition-colors text-base sm:text-lg font-medium break-words"
                  >
                    info@thebutterflymovement.health
                  </a>
                </div>

                {/* Phone */}
                <div className="text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#f5b400]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-[#f5b400]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#f5b400] mb-1">
                    Call or WhatsApp
                  </p>
                  <a
                    href="tel:07715316840"
                    className="text-[#f5f0e5] hover:text-[#f5b400] transition-colors text-base sm:text-lg font-medium"
                  >
                    07715 316840
                  </a>
                </div>

                {/* Response Time */}
                <div className="text-center p-3 sm:p-4 bg-[#262933]/50 rounded-lg">
                  <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#f5b400] mb-2">
                    Response Time
                  </p>
                  <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
                    We typically respond within{" "}
                    <strong className="text-[#f5b400]">24 hours</strong>. For urgent safeguarding
                    matters, please call directly.
                  </p>
                </div>
              </div>
            </div>

            {/* Privacy Card */}
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-5 sm:p-6 md:p-8">
              <h4 className="font-bold text-[#0b0d10] mb-3 text-base sm:text-lg">
                Your Privacy Matters
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                We treat all enquiries with strict confidentiality. Your information is secure and
                never shared without your explicit consent.
              </p>
              <div className="space-y-2 text-xs text-slate-600">
                <a
                  href="/privacy-policy"
                  className="text-[#0b0d10] hover:text-[#f5b400] transition-colors block"
                >
                  ↗ Privacy Policy
                </a>
                <a
                  href="/terms"
                  className="text-[#0b0d10] hover:text-[#f5b400] transition-colors block"
                >
                  ↗ Terms of Service
                </a>
                <a
                  href="/safeguarding"
                  className="text-[#0b0d10] hover:text-[#f5b400] transition-colors block"
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

export default Contact;
