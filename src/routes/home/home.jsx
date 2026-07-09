// src/pages/home/Home.jsx
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
  FaHandshake,
  FaQuoteLeft,
} from "react-icons/fa";
import SEO from "../../components/SEO";
import OsmaniLogo from "../../assets/images/osmani.jpg";
import THMLogo from "../../assets/images/thm.png";
import THYLLogo from "../../assets/images/thyl.png";

import Background from "../../assets/images/boxing.jpg";

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
      { threshold },
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

const leadershipTeam = [
  {
    name: "Abdul Hannan",
    role: "Founder & Head Coach",
    text: "Founder of The Butterfly Movement, leading the organisation's vision through boxing, grappling, mentoring and youth development. Abdul is committed to helping young people build confidence, discipline, resilience and positive life skills through structured community programmes.",
    badges: ["Founder", "Head Coach", "Youth Mentor", "Community Leader"],
  },
  {
    name: "Abdul Naseem Khan",
    role: "Director of Technology & Operations",
    text: "Leads technology, digital strategy and operational systems across The Butterfly Movement. A Qualified Computing Teacher and former Software Engineer, Abdul oversees the organisation's digital infrastructure, programme operations and technology strategy.",
    badges: ["QTS", "Computing Teacher", "Former Software Engineer", "Operations"],
  },
];

const coachingTeam = [
  {
    name: "Jamee",
    role: "Lead Coach",
    text: "Jamee leads sessions across The Butterfly Movement and takes responsibility for programme delivery. With a background in youth work and gang mediation, he brings leadership, mentoring and conflict resolution skills.",
    badges: ["Lead Coach", "Youth Work", "Mentoring"],
  },
  {
    name: "Fahimul Hoque",
    role: "Assistant Coach",
    text: "Supports participants during sessions, encouraging teamwork, discipline and continuous improvement in a positive and structured environment.",
    badges: ["Assistant Coach", "Teamwork", "Discipline"],
  },
  {
    name: "Emon",
    role: "Assistant Coach",
    text: "Assists in coaching sessions and community activities, helping create an inclusive environment where young people can learn, grow and develop confidence.",
    badges: ["Assistant Coach", "Community", "Inclusive Support"],
  },
];

const partners = [
  {
    name: "Osmani Trust",
    logo: OsmaniLogo,
    description:
      "Osmani Trust provides the venue for our weekly Brawlers Boxing sessions, giving young people a safe and accessible place to train, learn and grow.",
  },
  {
    name: "Tower Hamlets Mosque",
    logo: THMLogo,
    description:
      "Tower Hamlets Mosque supports our outreach by advertising our programmes within the local community, helping families discover opportunities through The Butterfly Movement.",
  },
  {
    name: "Tower Hamlets Youth League",
    logo: THYLLogo,
    description:
      "Tower Hamlets Youth League partnered with The Butterfly Movement to deliver community Boxing and Grappling workshops, creating positive experiences for young people across the borough.",
  },
];

const reviews = [
  {
    name: "Google Reviews",
    text: "Parent and community reviews will appear here once our Google Business Profile reviews are live.",
  },
  {
    name: "Community Feedback",
    text: "We are collecting genuine feedback from families, participants and partners to showcase the impact of our work.",
  },
  {
    name: "Coming Soon",
    text: "Once verified, this section can display live or selected Google reviews from The Butterfly Movement profile.",
  },
];

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [termRef, termVisible] = useFadeInOnScroll(0.2);
  const [programmesRef, programmesVisible] = useFadeInOnScroll(0.2);
  const [teamRef, teamVisible] = useFadeInOnScroll(0.2);
  const [partnersRef, partnersVisible] = useFadeInOnScroll(0.2);
  const [reviewsRef, reviewsVisible] = useFadeInOnScroll(0.2);
  const [ctaRef, ctaVisible] = useFadeInOnScroll(0.3);

  return (
    <>
      <SEO
        title="The Butterfly Movement | Youth Sport, Mentoring & Education"
        description="The Butterfly Movement supports young people through sport, mentoring and education. Our Brawlers Boxing programme helps children build confidence, discipline and resilience."
        path="/"
        schema={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "The Butterfly Movement",
          url: "https://www.thebutterflymovement.health",
          logo: "https://www.thebutterflymovement.health/logo.png",
        }}
      />

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
                      .getElementById("programmes")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-6 py-4 text-xs font-bold uppercase tracking-[0.12em] text-white transition hover:border-[#2f8f2f] hover:bg-[#2f8f2f] sm:px-8 sm:text-sm"
                >
                  View Programmes
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* PROGRAMMES / BRAWLERS BOXING */}
        <section
          id="programmes"
          ref={programmesRef}
          className={`bg-[#070707] px-4 py-16 transition-all duration-700 sm:px-6 sm:py-20 lg:px-10 lg:py-24 ${
            programmesVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 max-w-3xl sm:mb-14">
              <p className="mb-3 text-xs font-black uppercase tracking-[0.25em] text-[#f5b400] sm:text-sm">
                Programmes
              </p>
              <h2 className="text-3xl font-black uppercase leading-none sm:text-4xl md:text-5xl lg:text-6xl">
                Brawlers Boxing & Community Programmes
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/70 sm:text-lg">
                Our programmes use movement, mentoring and education to help
                young people develop confidence, discipline and positive life
                skills.
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

        {/* SUMMER TERM */}
        <section
          id="summer-term"
          ref={termRef}
          className={`bg-black px-4 py-16 transition-all duration-700 sm:px-6 sm:py-20 lg:px-10 lg:py-24 ${
            termVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mx-auto grid max-w-7xl gap-8 overflow-hidden rounded-3xl border border-[#2f8f2f]/40 bg-[#071007] p-4 shadow-2xl sm:p-7 md:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:p-12">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#f5b400] sm:text-sm">
                Summer Term 2026
              </p>

              <h2 className="mt-4 text-3xl font-black uppercase leading-none sm:text-4xl md:text-5xl lg:text-6xl">
                Brawlers Boxing
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-6 text-white/70 sm:text-base sm:leading-7 md:text-lg">
                Weekly Saturday sessions at Osmani Trust for Cubs aged 5-10 and
                Tigers aged 11-17.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={SIGNUP_URL}
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#f5b400] px-5 py-4 text-center text-[11px] font-black uppercase tracking-[0.08em] text-black transition hover:scale-105 hover:bg-[#ffca28] sm:w-auto sm:px-8 sm:text-sm"
                >
                  Sign Up Now
                </a>

                <button
                  type="button"
                  onClick={() => navigate("/contact")}
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/20 px-5 py-4 text-center text-[11px] font-bold uppercase tracking-[0.08em] text-white transition hover:border-[#f5b400] hover:text-[#f5b400] sm:w-auto sm:px-8 sm:text-sm"
                >
                  Ask a Question
                </button>
              </div>
            </div>

            <div className="grid gap-4">
              <InfoCard
                icon={<FaCalendarAlt />}
                title="Dates"
                main="Saturday 4th July 2026"
                sub="to Saturday 26th September 2026"
              />
              <div className="grid gap-4 sm:grid-cols-2">
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

        {/* MEET OUR TEAM */}
        <section
          ref={teamRef}
          className={`bg-[#0b0d10] px-4 py-16 transition-all duration-700 sm:px-6 sm:py-20 lg:px-10 lg:py-24 ${
            teamVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#f5b400] sm:text-sm">
                Meet Our Team
              </p>

              <h2 className="mt-4 text-3xl font-black uppercase leading-none text-white sm:text-4xl md:text-5xl lg:text-6xl">
                The People Behind The Movement
              </h2>

              <p className="mt-5 text-sm leading-7 text-white/70 sm:text-base md:text-lg">
                Our team combines coaching, mentoring, education, technology and
                community experience to create safe, structured and positive programmes
                for young people.
              </p>
            </div>

            <div>
              <h3 className="mb-5 text-sm font-black uppercase tracking-[0.25em] text-[#f5b400]">
                Leadership
              </h3>

              <div className="grid gap-5 lg:grid-cols-2">
                {leadershipTeam.map((member) => (
                  <article
                    key={member.name}
                    className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl transition duration-300 hover:-translate-y-1 hover:border-[#f5b400]/40"
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#f5b400] text-xl font-black text-black">
                        {member.name.charAt(0)}
                      </div>

                      <div>
                        <h3 className="text-2xl font-black uppercase text-white">
                          {member.name}
                        </h3>

                        <p className="mt-1 text-sm font-bold uppercase tracking-wide text-[#f5b400]">
                          {member.role}
                        </p>

                        <p className="mt-4 text-sm leading-7 text-white/70 sm:text-base">
                          {member.text}
                        </p>

                        <div className="mt-5 flex flex-wrap gap-2">
                          {member.badges.map((badge) => (
                            <span
                              key={badge}
                              className="rounded-full border border-[#f5b400]/30 bg-[#f5b400]/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#f5b400]"
                            >
                              {badge}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <h3 className="mb-5 text-sm font-black uppercase tracking-[0.25em] text-[#f5b400]">
                Coaching & Mentoring Team
              </h3>

              <div className="grid gap-5 lg:grid-cols-3">
                {coachingTeam.map((member) => (
                  <article
                    key={member.name}
                    className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl transition duration-300 hover:-translate-y-1 hover:border-[#f5b400]/40"
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start lg:flex-col">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#f5b400] text-xl font-black text-black">
                        {member.name.charAt(0)}
                      </div>

                      <div>
                        <h3 className="text-2xl font-black uppercase text-white">
                          {member.name}
                        </h3>

                        <p className="mt-1 text-sm font-bold uppercase tracking-wide text-[#f5b400]">
                          {member.role}
                        </p>

                        <p className="mt-4 text-sm leading-7 text-white/70 sm:text-base">
                          {member.text}
                        </p>

                        <div className="mt-5 flex flex-wrap gap-2">
                          {member.badges.map((badge) => (
                            <span
                              key={badge}
                              className="rounded-full border border-[#f5b400]/30 bg-[#f5b400]/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#f5b400]"
                            >
                              {badge}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PARTNERS */}
        <section
          ref={partnersRef}
          className={`bg-black px-4 py-16 transition-all duration-700 sm:px-6 sm:py-20 lg:px-10 lg:py-24 ${
            partnersVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 max-w-3xl">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#f5b400] sm:text-sm">
                Community Partners
              </p>
              <h2 className="mt-4 text-3xl font-black uppercase leading-none sm:text-4xl md:text-5xl lg:text-6xl">
                Working Together For Tower Hamlets
              </h2>
              <p className="mt-5 text-sm leading-7 text-white/70 sm:text-base md:text-lg">
                The Butterfly Movement works alongside trusted community organisations to provide safe training 
                spaces, promote opportunities, and deliver impactful programmes for young people across Tower Hamlets. 
                These partnerships enable us to create lasting opportunities through boxing, grappling, education, and mentorship.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-[#f5b400]/60 hover:bg-white/[0.05]"
                >
                  <div className="mx-auto flex h-32 items-center justify-center">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-24 max-w-[200px] object-contain transition duration-300 group-hover:scale-105"
                    />
                  </div>

                  <h3 className="mt-6 text-xl font-black uppercase text-white">
                    {partner.name}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/70">
                    {partner.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GOOGLE REVIEWS
        <section
          ref={reviewsRef}
          className={`bg-[#0b0d10] px-4 py-16 transition-all duration-700 sm:px-6 sm:py-20 lg:px-10 lg:py-24 ${
            reviewsVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#f5b400] sm:text-sm">
                Google Reviews
              </p>
              <h2 className="mt-4 text-3xl font-black uppercase leading-none sm:text-4xl md:text-5xl lg:text-6xl">
                What The Community Says
              </h2>
              <p className="mt-5 text-sm leading-7 text-white/70 sm:text-base md:text-lg">
                Reviews from parents, participants and community members will
                help others discover The Butterfly Movement.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {reviews.map((review) => (
                <article
                  key={review.name}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
                >
                  <FaQuoteLeft className="text-2xl text-[#f5b400]" />
                  <div className="mt-4 flex gap-1 text-[#f5b400]">
                    {[...Array(5)].map((_, index) => (
                      <FaStar key={index} />
                    ))}
                  </div>
                  <p className="mt-5 text-sm leading-7 text-white/70">
                    {review.text}
                  </p>
                  <p className="mt-5 text-sm font-black uppercase tracking-wide text-white">
                    {review.name}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section> */}

        {/* CONTACT CTA */}
        <section
          ref={ctaRef}
          className={`bg-gradient-to-br from-[#071007] to-black px-4 py-16 transition-all duration-700 sm:px-6 sm:py-20 lg:px-10 lg:py-24 ${
            ctaVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#f5b400] sm:text-sm">
              Ready to Start?
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase leading-none sm:text-4xl md:text-5xl lg:text-6xl">
              Join The Movement
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
              Register for Brawlers Boxing or get in touch to find out more
              about our youth and community work.
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
    </>
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
          <p className="break-words text-[9px] font-black uppercase tracking-[0.2em] text-white/45 sm:text-xs">
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