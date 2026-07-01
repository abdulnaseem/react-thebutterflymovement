import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaCheckCircle,
  FaClock,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaUsers,
} from "react-icons/fa";

import Gallery from "../../components/gallery/Gallery";
import DATA from "../../data/brawlers-boxing.json";
import BBLogo from "../../assets/images/brawlers-boxing.jpeg";
import BBNewSession from "../../assets/images/bb-new-session.jpeg";
import SelectedImage from "../../components/gallery/image/SelectedImage";
import CUBSImage from "../../assets/images/cubs.jpg";
import TIGERSImage from "../../assets/images/tigers.jpg";

const SIGNUP_URL = "https://signup.thebutterflymovement.health/signup";

const brawlersClasses = [
  {
    id: "cubs",
    title: "Cubs",
    subtitle: "Fundamentals",
    age: "Ages 5-10",
    day: "Saturday",
    time: "12:45pm - 1:45pm",
    location: "Osmani Trust, E1 5AW",
    coach: "Coach H & Team",
    imageUrl: CUBSImage,
    accent: "green",
  },
  {
    id: "tigers",
    title: "Tigers",
    subtitle: "Technical Boxing",
    age: "Ages 11-17",
    day: "Saturday",
    time: "1:45pm - 2:45pm",
    location: "Osmani Trust, E1 5AW",
    coach: "Coach H & Team",
    imageUrl: TIGERSImage,
    accent: "gold",
  },
];

const benefits = [
  "Confidence and self-belief",
  "Discipline and routine",
  "Fitness and coordination",
  "Positive role models",
  "Safe community environment",
  "Respect, teamwork and focus",
];

const BrawlersBoxing = ({ setImageId }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const selectedImageObj = useMemo(() => {
    if (selectedImage == null) return null;
    return DATA.images.find((img) => img.id === selectedImage);
  }, [selectedImage]);

  const handleImageClick = (id) => {
    setSelectedImage(id);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handlePrevious = () => {
    setSelectedImage((prev) => {
      const currentIndex = DATA.images.findIndex((img) => img.id === prev);
      const newIndex =
        currentIndex === 0 ? DATA.images.length - 1 : currentIndex - 1;
      return DATA.images[newIndex].id;
    });
  };

  const handleNext = () => {
    setSelectedImage((prev) => {
      const currentIndex = DATA.images.findIndex((img) => img.id === prev);
      const newIndex =
        currentIndex === DATA.images.length - 1 ? 0 : currentIndex + 1;
      return DATA.images[newIndex].id;
    });
  };

  return (
    <main className="min-h-screen bg-[#070707] text-white">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-black pt-24">
        {/* <img
          src={BBNewSession}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        /> */}

        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/20" />
        <div className="absolute left-0 top-0 hidden h-full w-2 bg-[#2f8f2f] sm:block" />
        <div className="absolute -right-40 top-24 h-80 w-80 rounded-full bg-[#f5b400]/10 blur-3xl md:h-[520px] md:w-[520px]" />

        <div className="relative z-10 mx-auto grid min-h-[calc(100svh-6rem)] max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[0.95fr_1.05fr] lg:px-10 lg:py-24">
          <div className="order-2 lg:order-1">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#f5b400] sm:text-sm sm:tracking-[0.4em]">
              The Butterfly Movement Presents
            </p>

            <h1 className="mt-5 text-[clamp(3rem,13vw,7rem)] font-black uppercase leading-[0.86] tracking-tight">
              Brawlers
              <span className="block text-[#2f8f2f]">Boxing</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base font-semibold uppercase tracking-wide text-white sm:text-lg">
              Building confidence. Building champions. Building futures.
            </p>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base md:text-lg">
              Structured youth boxing sessions based at Vallance Road, serving young people across 
              Tower Hamlets and beyond through technical training, discipline and positive 
              mentorship in a safe community environment.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={SIGNUP_URL}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#f5b400] px-6 py-4 text-center text-xs font-black uppercase tracking-[0.12em] text-black transition hover:scale-105 hover:bg-[#ffcc22] sm:px-8 sm:text-sm"
              >
                Register Now
                <FaArrowRight className="ml-3 shrink-0" />
              </a>

              <button
                type="button"
                onClick={() =>
                  document
                    .getElementById("classes")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-6 py-4 text-xs font-bold uppercase tracking-[0.12em] text-white transition hover:border-[#2f8f2f] hover:bg-[#2f8f2f] sm:px-8 sm:text-sm"
              >
                View Classes
              </button>
            </div>

            <div className="mt-10 grid gap-3 text-sm text-white/70 sm:grid-cols-3">
              <HeroStat label="Established" value="2013" />
              <HeroStat label="Founded in" value="Shadwell" />
              <HeroStat label="Age Groups" value="5-17" />
            </div>
          </div>

          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
              <div className="absolute -inset-4 rounded-full bg-[#f5b400]/10 blur-2xl" />

              <div className="relative mx-auto flex aspect-square max-w-[280px] items-center justify-center overflow-hidden rounded-full border-4 border-[#f5b400] bg-white shadow-2xl sm:max-w-[340px] md:max-w-[390px]">
                <img
                  src={BBLogo}
                  alt="Brawlers Boxing logo"
                  className="h-[68%] w-[68%] object-contain"
                />
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 mt-8 text-center backdrop-blur-sm">
                <p className="text-sm font-black uppercase tracking-[0.3em] text-[#f5b400]">
                  SINCE 2013
                </p>

                <p className="mt-2 text-xl font-bold text-white">
                  Vallance Road
                </p>

                <p className="mt-1 text-sm text-white/60">
                  Founded in Shadwell, now proudly training from Vallance Road.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO STORY */}
      <section className="bg-[#0b0d10] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#f5b400] sm:text-sm">
              Our Story
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase leading-none sm:text-4xl md:text-5xl">
              Born From Community. Built Through Boxing.
            </h2>
          </div>

          <div className="space-y-5 text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
            <p>
              Born in the aftermath of London 2012, Brawlers Boxing was founded
              by Coach H to harness the power of boxing for community change.
            </p>

            <p>
              The project emerged to tackle youth delinquency and promote
              physical participation and better health. Along the way, the club
              has transformed lives and earned recognition including the{" "}
              <strong className="font-bold text-white">
                Tower Hamlets Community Safety Awards
              </strong>{" "}
              and a finalist place in{" "}
              <strong className="font-bold text-white">
                The English Asian Business Awards
              </strong>{" "}
              by Lloyds Bank.
            </p>
          </div>
        </div>
      </section>

      {/* CLASSES */}
      <section
        id="classes"
        className="bg-black px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl sm:mb-14">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#f5b400] sm:text-sm">
              Boxing Classes
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase leading-none sm:text-4xl md:text-5xl lg:text-6xl">
              Choose Your Session
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/70 sm:text-base md:text-lg">
              Saturday classes are split by age group so every young person can
              train safely, progress confidently and feel part of the team.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {brawlersClasses.map((item) => (
              <ClassCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* SUMMER TERM / SIGNUP */}
      <section className="bg-[#0b0d10] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 overflow-hidden rounded-3xl border border-[#2f8f2f]/40 bg-[#071007] p-5 shadow-2xl sm:p-7 md:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
          <div className="min-w-0">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#f5b400] sm:text-sm">
              Summer Term 2026
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase leading-none sm:text-4xl md:text-5xl">
              Registration Open
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/70 sm:text-base">
              Join the next Brawlers Boxing term at Osmani Trust. Limited
              places are available for each age group.
            </p>

            <a
              href={SIGNUP_URL}
              className="mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#f5b400] px-6 py-4 text-center text-xs font-black uppercase tracking-[0.12em] text-black transition hover:scale-105 hover:bg-[#ffcc22] sm:w-auto sm:px-8 sm:text-sm"
            >
              Sign Up Now
              <FaArrowRight className="ml-3 shrink-0" />
            </a>
          </div>

          <div className="grid min-w-0 gap-4">
            <InfoCard
              icon={<FaCalendarAlt />}
              title="Dates"
              main="Saturday 4th July 2026"
              sub="to Saturday 26th September 2026"
            />

            <div className="grid gap-4 sm:grid-cols-2">
              <InfoCard
                icon={<FaUsers />}
                title="Cubs"
                main="Ages 5-10"
                sub="12:45pm - 1:45pm"
                green
              />
              <InfoCard
                icon={<FaUsers />}
                title="Tigers"
                main="Ages 11-17"
                sub="1:45pm - 2:45pm"
                gold
              />
            </div>

            <InfoCard
              icon={<FaMapMarkerAlt />}
              title="Venue"
              main="Osmani Trust"
              sub="58 Underwood Road, London E1 5AW"
            />
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-black px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#f5b400] sm:text-sm">
              What Young People Gain
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase leading-none sm:text-4xl md:text-5xl">
              More Than Punches
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-white/75"
              >
                <FaCheckCircle className="mt-1 shrink-0 text-[#f5b400]" />
                <span className="text-sm leading-6 sm:text-base">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROMO IMAGE */}
      <section className="bg-[#0f1115] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#181a1f] shadow-2xl">
            <img
              src={BBNewSession}
              alt="Brawlers Boxing session information"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#f5b400] sm:text-sm">
              Join The Movement
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase leading-none sm:text-4xl md:text-5xl">
              Learn to Box in a Positive Environment
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/70 sm:text-base md:text-lg">
              Brawlers Boxing runs Saturday classes split by age and level, led
              by experienced coaches who prioritise safety, confidence and
              long-term development.
            </p>

            <div className="mt-8 grid gap-3 text-sm text-white/70 sm:grid-cols-2">
              <MiniDetail icon={<FaClock />} text="Saturday sessions" />
              <MiniDetail icon={<FaShieldAlt />} text="Safe environment" />
              <MiniDetail icon={<FaMapMarkerAlt />} text="Osmani Trust" />
              <MiniDetail icon={<FaUsers />} text="Ages 5-17" />
            </div>

            <a
              href={SIGNUP_URL}
              className="mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#f5b400] px-6 py-4 text-center text-xs font-black uppercase tracking-[0.12em] text-black transition hover:scale-105 hover:bg-[#ffcc22] sm:w-auto sm:px-8 sm:text-sm"
            >
              Register Now
            </a>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-[#0b0d10] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <header className="mb-10 text-center sm:mb-12">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#f5b400] sm:text-sm">
              Gallery
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase leading-none sm:text-4xl md:text-5xl">
              Inside Brawlers Boxing
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
              A look at the training environment, community spirit and moments
              that define the Brawlers experience.
            </p>
          </header>

          <div className="overflow-hidden">
            <Gallery
              data={DATA}
              setImageId={setImageId}
              projectUrl={location.pathname}
              onImageClick={handleImageClick}
            />
          </div>
        </div>
      </section>

      {selectedImageObj && (
        <SelectedImage
          imageUrl={selectedImageObj.url}
          previous={handlePrevious}
          next={handleNext}
          projectUrl={location.pathname}
          onClose={closeModal}
        />
      )}
    </main>
  );
};

function HeroStat({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
      <p className="text-[10px] font-black uppercase tracking-[0.22em] text-white/40">
        {label}
      </p>
      <p className="mt-2 text-xl font-black uppercase text-white">{value}</p>
    </div>
  );
}

function ClassCard({ item }) {
  const isGold = item.accent === "gold";

  return (
    <article className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-2xl transition duration-300 hover:-translate-y-1 hover:border-[#f5b400]/50">
      <div className="grid min-h-full md:grid-cols-[0.9fr_1.1fr]">
        <div className="relative min-h-64 overflow-hidden">
          <img
            src={item.imageUrl}
            alt={`${item.title} boxing class`}
            className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        </div>

        <div className="flex min-w-0 flex-col justify-between p-5 sm:p-7">
          <div>
            <p
              className={`text-xs font-black uppercase tracking-[0.25em] ${
                isGold ? "text-[#f5b400]" : "text-[#2f8f2f]"
              }`}
            >
              {item.age}
            </p>

            <h3 className="mt-3 text-3xl font-black uppercase leading-none text-white">
              {item.title}
            </h3>

            <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-white/50">
              {item.subtitle}
            </p>

            <div className="mt-6 space-y-3 text-sm text-white/70">
              <ClassDetail icon={<FaCalendarAlt />} text={item.day} />
              <ClassDetail icon={<FaClock />} text={item.time} />
              <ClassDetail icon={<FaMapMarkerAlt />} text={item.location} />
              <ClassDetail icon={<FaUsers />} text={item.coach} />
            </div>
          </div>

          <a
            href={SIGNUP_URL}
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-[#f5b400] px-6 py-4 text-xs font-black uppercase tracking-[0.12em] text-black transition hover:scale-105 hover:bg-[#ffcc22]"
          >
            Join This Class
          </a>
        </div>
      </div>
    </article>
  );
}

function ClassDetail({ icon, text }) {
  return (
    <div className="flex min-w-0 items-center gap-3">
      <span className="shrink-0 text-[#f5b400]">{icon}</span>
      <span className="min-w-0 break-words">{text}</span>
    </div>
  );
}

function MiniDetail({ icon, text }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      <span className="shrink-0 text-[#f5b400]">{icon}</span>
      <span>{text}</span>
    </div>
  );
}

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

export default BrawlersBoxing;