import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaCheckCircle,
  FaEnvelope,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaStar,
  FaUsers,
} from "react-icons/fa";

import Background from "../../assets/images/boxing.jpg";
import LogoImage from "../../assets/images/logo.png";

const SIGNUP_URL = "https://signup.thebutterflymovement.health/signup";

function useFadeInOnScroll(threshold = 0.2) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}

const programmes = [
  {
    title: "Brawlers Boxing",
    label: "Youth Boxing",
    text: "Structured weekly boxing sessions helping young people build confidence, fitness, discipline and belonging.",
    cta: "Register Now",
    href: SIGNUP_URL,
  },
  {
    title: "Saved by the Bell",
    label: "Mentoring",
    text: "Using boxing as the doorway into positive conversations, emotional support and personal development.",
  },
  {
    title: "Wise Workshops",
    label: "Education",
    text: "Practical workshops that equip young people with awareness, confidence and real-world life skills.",
  },
];

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [storyRef, storyVisible] = useFadeInOnScroll(0.25);
  const [termRef, termVisible] = useFadeInOnScroll(0.2);
  const [programmesRef, programmesVisible] = useFadeInOnScroll(0.2);
  const [ctaRef, ctaVisible] = useFadeInOnScroll(0.3);

  return (
    <main className="min-h-screen bg-[#070707] text-white">
      {/* HERO */}
      <section className="relative isolate min-h-[100svh] overflow-hidden bg-black">
        <img
          src={Background}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute left-0 top-0 hidden h-full w-2 bg-[#2f8f2f] sm:block" />
        <div className="absolute -right-40 top-24 h-72 w-72 rounded-full bg-[#f5b400]/10 blur-3xl sm:h-[500px] sm:w-[500px]" />

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl items-center px-4 pb-14 pt-28 sm:px-6 sm:pt-32 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#f5b400] sm:text-sm sm:tracking-[0.45em]">
              The Butterfly Movement
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] sm:gap-4 sm:text-sm sm:tracking-[0.25em]">
              <span className="text-[#f5b400]">Educate</span>
              <span className="text-white/30">/</span>
              <span className="text-white">Empower</span>
              <span className="text-white/30">/</span>
              <span className="text-[#2f8f2f]">Exercise</span>
            </div>

            <h1 className="mt-8 text-[clamp(3rem,13vw,7rem)] font-black uppercase leading-[0.88] tracking-tight">
              Building
              <span className="block text-white">Confidence.</span>
              <span className="block text-[#f5b400]">Futures.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8 md:text-xl">
              Through boxing, mentoring and education we help young people
              discover confidence, resilience and purpose in a safe,
              community-driven environment.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href={SIGNUP_URL}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#f5b400] px-6 py-4 text-center text-xs font-black uppercase tracking-[0.12em] text-black transition hover:scale-105 hover:bg-[#ffca28] sm:px-8 sm:text-sm"
              >
                Join Brawlers Boxing
                <FaArrowRight className="ml-3 shrink-0" />
              </a>

              <button
                type="button"
                onClick={() =>
                  document
                    .getElementById("summer-term")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-6 py-4 text-xs font-bold uppercase tracking-[0.12em] text-white transition hover:border-[#2f8f2f] hover:bg-[#2f8f2f] sm:px-8 sm:text-sm"
              >
                Summer Term
              </button>
            </div>

            <div className="mt-12 border-l-4 border-[#f5b400] pl-5 sm:mt-16 sm:pl-6">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-white/50 sm:text-xs">
                Flagship Programme
              </p>

              <h3 className="mt-3 text-2xl font-black uppercase sm:text-3xl">
                Brawlers Boxing
              </h3>

              <p className="mt-2 max-w-xl text-sm leading-6 text-white/60 sm:text-base">
                Weekly youth boxing sessions helping children and young people
                build confidence, discipline and lifelong skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT STRIP */}
      <section className="border-y border-white/10 bg-[#0b0d10] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["Confidence", "Every session builds self-belief."],
            ["Discipline", "Structure, respect and consistency."],
            ["Community", "A safe place to belong."],
          ].map(([title, text]) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6"
            >
              <p className="text-xl font-black uppercase text-[#f5b400] sm:text-2xl">
                {title}
              </p>
              <p className="mt-2 text-sm leading-6 text-white/65 sm:text-base">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SUMMER TERM */}
        <section
        id="summer-term"
        ref={termRef}
        className={`bg-black px-4 py-16 transition-all duration-700 sm:px-6 sm:py-20 lg:px-10 lg:py-24 ${
            termVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
        >
        <div className="mx-auto grid max-w-7xl gap-8 overflow-hidden rounded-3xl border border-[#2f8f2f]/40 bg-[#071007] p-4 shadow-2xl sm:p-7 md:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:p-12">
            <div className="min-w-0">
            <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#f5b400] sm:text-sm sm:tracking-[0.3em]">
                Summer Term 2026
            </p>

            <h2 className="mt-4 break-words text-3xl font-black uppercase leading-none sm:text-4xl md:text-5xl lg:text-6xl">
                Brawlers Boxing
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-6 text-white/70 sm:text-base sm:leading-7 md:text-lg">
                Weekly Saturday sessions at Osmani Trust for Cubs aged 5-10 and Tigers aged 11-17.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
                <a
                href={SIGNUP_URL}
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#f5b400] px-5 py-4 text-center text-[11px] font-black uppercase tracking-[0.08em] text-black transition hover:scale-105 hover:bg-[#ffca28] focus:outline-none focus:ring-4 focus:ring-[#f5b400]/40 sm:w-auto sm:px-8 sm:text-sm sm:tracking-wide"
                >
                Sign Up Now
                </a>

                <button
                type="button"
                onClick={() => navigate("/contact")}
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/20 px-5 py-4 text-center text-[11px] font-bold uppercase tracking-[0.08em] text-white transition hover:border-[#f5b400] hover:text-[#f5b400] sm:w-auto sm:px-8 sm:text-sm sm:tracking-wide"
                >
                Ask a Question
                </button>
            </div>
            </div>

            <div className="grid min-w-0 gap-4">
            <InfoCard
                icon={<FaCalendarAlt />}
                title="Dates"
                main="Saturday 4th July 2026"
                sub="to Saturday 26th September 2026"
            />

            <div className="grid min-w-0 gap-4 sm:grid-cols-2">
                <InfoCard title="Cubs" main="Ages 5-10" sub="12:45pm - 1:45pm" green />
                <InfoCard title="Tigers" main="Ages 11-17" sub="1:45pm - 2:45pm" gold />
            </div>

            <InfoCard
                icon={<FaMapMarkerAlt />}
                title="Venue"
                main="Osmani Trust"
                sub="58 Underwood Road, London E1 5AW"
            />

            <InfoCard
                icon={<FaEnvelope />}
                title="Contact"
                main="info@thebutterflymovement.health"
                sub="For registration and programme enquiries"
            />
            </div>
        </div>
        </section>

      {/* STORY */}
      <section
        ref={storyRef}
        className={`bg-[#0b0d10] px-4 py-16 transition-all duration-700 sm:px-6 sm:py-20 lg:px-10 lg:py-24 ${
          storyVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0"
        }`}
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-12">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <img
              src={LogoImage}
              alt="The Butterfly Movement logo"
              className="mx-auto max-h-56 w-full object-contain sm:max-h-72"
            />
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#f5b400] sm:text-sm sm:tracking-[0.3em]">
              Who We Are
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase leading-none sm:text-4xl md:text-5xl lg:text-6xl">
              More Than a Boxing Programme
            </h2>

            <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
              The Butterfly Movement uses sport, mentoring and education to
              create spaces where young people can build confidence, develop
              discipline and connect with positive role models.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Safe, inclusive environment",
                "Qualified, passionate coaches",
                "Youth-focused mentoring",
                "Community-led development",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-white/75">
                  <FaCheckCircle className="mt-1 shrink-0 text-[#f5b400]" />
                  <span className="text-sm leading-6 sm:text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMMES */}
      <section
        id="programmes"
        ref={programmesRef}
        className={`bg-[#070707] px-4 py-16 transition-all duration-700 sm:px-6 sm:py-20 lg:px-10 lg:py-24 ${
          programmesVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl sm:mb-14">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.25em] text-[#f5b400] sm:text-sm sm:tracking-[0.3em]">
              What We Build
            </p>
            <h2 className="text-3xl font-black uppercase leading-none sm:text-4xl md:text-5xl lg:text-6xl">
              Programmes With Purpose
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/70 sm:text-lg">
              Every programme is designed to turn movement into confidence,
              discipline and positive change.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {programmes.map((item) => (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-2 hover:border-[#f5b400]/60 sm:p-7"
              >
                <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-[#2f8f2f]/20 transition group-hover:bg-[#f5b400]/20 sm:h-28 sm:w-28" />

                <p className="relative text-xs font-black uppercase tracking-[0.25em] text-[#f5b400]">
                  {item.label}
                </p>

                <h3 className="relative mt-5 text-2xl font-black uppercase leading-none sm:text-3xl">
                  {item.title}
                </h3>

                <p className="relative mt-5 text-sm leading-relaxed text-white/70 sm:text-base">
                  {item.text}
                </p>

                {item.href && (
                  <a
                    href={item.href}
                    className="relative mt-8 inline-flex items-center text-sm font-black uppercase tracking-wide text-[#f5b400]"
                  >
                    {item.cta}
                    <FaArrowRight className="ml-2" />
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        ref={ctaRef}
        className={`bg-gradient-to-br from-[#071007] to-black px-4 py-16 transition-all duration-700 sm:px-6 sm:py-20 lg:px-10 lg:py-24 ${
          ctaVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#f5b400] sm:text-sm sm:tracking-[0.3em]">
            Ready to Start?
          </p>

          <h2 className="mt-4 text-3xl font-black uppercase leading-none sm:text-4xl md:text-5xl lg:text-6xl">
            Join the Movement
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            Register for Brawlers Boxing or get in touch to find out more about
            our youth and community work.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={SIGNUP_URL}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#f5b400] px-6 py-4 text-xs font-black uppercase tracking-wide text-black transition hover:scale-105 sm:px-8 sm:text-sm"
            >
              Register Now
            </a>

            <button
              type="button"
              onClick={() => navigate("/contact")}
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-6 py-4 text-xs font-bold uppercase tracking-wide text-white transition hover:border-[#f5b400] hover:text-[#f5b400] sm:px-8 sm:text-sm"
            >
              Contact Us
            </button>
          </div>

          <div className="mt-12 grid gap-4 text-sm text-white/60 sm:grid-cols-3">
            <TrustItem icon={<FaShieldAlt />} text="Safe Environment" />
            <TrustItem icon={<FaUsers />} text="Inclusive Community" />
            <TrustItem icon={<FaStar />} text="Positive Role Models" />
          </div>
        </div>
      </section>
    </main>
  );
};

function InfoCard({ icon, title, main, sub, green = false, gold = false }) {
    return (
      <div className="min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-4 sm:p-5">
        <div className="flex min-w-0 items-start gap-3 sm:gap-4">
          {icon && (
            <div className="mt-1 shrink-0 text-lg text-[#f5b400] sm:text-2xl">
              {icon}
            </div>
          )}
  
          <div className="min-w-0 flex-1">
            <p className="break-words text-[9px] font-black uppercase tracking-[0.2em] text-white/45 sm:text-xs sm:tracking-[0.25em]">
              {title}
            </p>
  
            <p
              className={`mt-2 break-words text-lg font-black uppercase leading-tight sm:text-2xl ${
                green ? "text-[#2f8f2f]" : gold ? "text-[#f5b400]" : "text-white"
              }`}
            >
              {main}
            </p>
  
            <p className="mt-1 break-words text-xs leading-5 text-white/65 sm:text-base sm:leading-6">
              {sub}
            </p>
          </div>
        </div>
      </div>
    );
  }

function TrustItem({ icon, text }) {
  return (
    <div className="flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/10 px-4 py-3">
      <span className="shrink-0 text-[#f5b400]">{icon}</span>
      <span>{text}</span>
    </div>
  );
}

export default Home;