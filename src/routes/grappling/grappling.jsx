// src/pages/the-grapple-hub/TheGrappleHub.jsx
import { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  FaArrowRight,
  FaCalendarAlt,
  FaCheckCircle,
  FaClock,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaUsers,
} from 'react-icons/fa';

import Gallery from '../../components/gallery/Gallery';
import DATA from '../../data/the-grapple-hub.json';
import TGHLogo from '../../assets/images/tgh-logo.jpg';
import SelectedImage from '../../components/gallery/image/SelectedImage';
import SEO from '../../components/SEO';
import GrapplingGuests from '../../assets/images/grappling-guests.jpeg';

const SIGNUP_URL = 'https://signup.thebutterflymovement.health/signup';

const benefits = [
  'Confidence through control',
  'Practical self-defence',
  'Problem-solving under pressure',
  'Discipline and respect',
  'Fitness, balance and coordination',
  'Community on and off the mats',
];

const workshopHighlights = [
  'UFC-inspired workshop experience',
  'Special guest feature with Paddy Pimblett & Arnold Allen',
  'Community engagement with Tinie Tempah',
  'Motivation, discipline and positive role models',
];

const Grappling = ({ setImageId }) => {
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
    <>
      <SEO
        title="Grappling | Brazilian Jiu Jitsu & Grappling in Tower Hamlets"
        description="Grappling is The Butterfly Movement's Brazilian Jiu Jitsu and grappling programme, helping children and adults build confidence, resilience and self-defence skills."
        path="/grappling"
        image="/logo.png"
      />

      <main className="min-h-screen bg-[#070707] text-white">
        {/* HERO */}
        <section className="relative isolate overflow-hidden bg-black pt-24">
          <div className="absolute inset-0 bg-black/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/30" />
          <div className="absolute left-0 top-0 hidden h-full w-2 bg-[#f5b400] sm:block" />
          <div className="absolute -right-40 top-24 h-80 w-80 rounded-full bg-[#f5b400]/10 blur-3xl md:h-[520px] md:w-[520px]" />

          <div className="relative z-10 mx-auto grid min-h-[calc(100svh-6rem)] max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1fr_0.9fr] lg:px-10 lg:py-24">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[#f5b400] sm:text-sm sm:tracking-[0.4em]">
                The Butterfly Movement Presents
              </p>

              <h1 className="mt-5 text-[clamp(3rem,13vw,7rem)] font-black uppercase leading-[0.86] tracking-tight">
                Grappling
                {/* <span className="block text-[#f5b400]">Grapple</span>
                <span className="block">Hub</span> */}
              </h1>

              <p className="mt-6 max-w-2xl text-base font-semibold uppercase tracking-wide text-white sm:text-lg">
                Brazilian Jiu Jitsu · Grappling · Community
              </p>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base md:text-lg">
                Grappling was founded as an independent project within The
                Butterfly Movement, creating a dedicated space for Brazilian Jiu
                Jitsu and grappling arts rooted in community, discipline and
                respect.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                {/* <a
                  href={SIGNUP_URL}
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#f5b400] px-6 py-4 text-center text-xs font-black uppercase tracking-[0.12em] text-black transition hover:scale-105 hover:bg-[#ffcc22] sm:px-8 sm:text-sm"
                >
                  Join Grappling
                  <FaArrowRight className="ml-3 shrink-0" />
                </a> */}

                <button
                  type="button"
                  onClick={() =>
                    document
                      .getElementById('ufc-workshop')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-6 py-4 text-xs font-bold uppercase tracking-[0.12em] text-white transition hover:border-[#f5b400] hover:bg-[#f5b400] hover:text-black sm:px-8 sm:text-sm"
                >
                  UFC Workshop
                </button>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
                <div className="absolute -inset-4 rounded-full bg-[#f5b400]/10 blur-2xl" />

                <div className="relative mx-auto flex aspect-square max-w-[280px] items-center justify-center overflow-hidden rounded-full border-4 border-[#f5b400] bg-white shadow-2xl sm:max-w-[340px] md:max-w-[390px]">
                  {/* <img
                    src={TGHLogo}
                    alt="The Grapple Hub logo"
                    className="h-[78%] w-[78%] object-contain"
                  /> */}
                </div>

                <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-center backdrop-blur-sm">
                  <p className="text-sm font-black uppercase tracking-[0.3em] text-[#f5b400]">
                    Grappling Arts
                  </p>

                  <p className="mt-2 text-xl font-bold text-white">
                    Community · Discipline · Respect
                  </p>

                  <p className="mt-1 text-sm text-white/60">
                    A dedicated space for learning, growth and connection on the
                    mats.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STORY */}
        <section className="bg-[#0b0d10] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#f5b400] sm:text-sm">
                Our Story
              </p>

              <h2 className="mt-4 text-3xl font-black uppercase leading-none sm:text-4xl md:text-5xl">
                Control. Confidence. Community.
              </h2>
            </div>

            <div className="space-y-5 text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
              <p>
                Grappling introduces young people and adults to Brazilian
                Jiu Jitsu, wrestling and submission grappling in a welcoming,
                structured and supportive environment.
              </p>

              <p>
                Unlike striking arts, grappling teaches control, patience,
                leverage and problem-solving. Every position becomes a puzzle,
                helping students develop resilience, confidence and composure
                under pressure.
              </p>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="bg-black px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 max-w-3xl">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#f5b400] sm:text-sm">
                Why Grappling?
              </p>

              <h2 className="mt-4 text-3xl font-black uppercase leading-none sm:text-4xl md:text-5xl">
                More Than Technique
              </h2>

              <p className="mt-5 text-sm leading-7 text-white/70 sm:text-base md:text-lg">
                Grappling builds physical confidence, emotional resilience and
                respect for others through safe, progressive training.
              </p>
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

        {/* UFC WORKSHOP */}
        <section
          id="ufc-workshop"
          className="bg-[#0f1115] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-10 lg:py-24"
        >
          <div className="mx-auto grid max-w-7xl gap-8 overflow-hidden rounded-3xl border border-[#f5b400]/40 bg-black p-5 shadow-2xl sm:p-7 md:p-10 lg:grid-cols-[0.95fr_1.05fr] lg:p-12">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#f5b400] sm:text-sm">
                Special Feature
              </p>

              <h2 className="mt-4 text-3xl font-black uppercase leading-none sm:text-4xl md:text-5xl">
                UFC Community Workshop
              </h2>

              <p className="mt-5 text-sm leading-7 text-white/70 sm:text-base">
                A dedicated workshop celebrating grappling, motivation and community
                engagement, featuring Arnold Allen, Tinie Tempah & Paddy Pimblett.
              </p>

              <div className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-2xl">
                <img
                  src={GrapplingGuests}
                  alt="Paddy Pimblett, Tinie Tempah and The Grapple Hub coach at a UFC community workshop"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <WorkshopGuest name="Arnold Allen" role="UFC Athlete" />
                <WorkshopGuest name="Tinie Tempah" role="Artist & Entrepreneur" />
                <WorkshopGuest name="Paddy Pimblett" role="UFC Athlete" />
              </div>

              <a
                href="/contact"
                className="mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#f5b400] px-6 py-4 text-center text-xs font-black uppercase tracking-[0.12em] text-black transition hover:scale-105 hover:bg-[#ffcc22] sm:w-auto sm:px-8 sm:text-sm"
              >
                Enquire About Workshops
                <FaArrowRight className="ml-3 shrink-0" />
              </a>
            </div>

            <div className="grid content-center gap-4">
              {workshopHighlights.map((item) => (
                <InfoCard key={item} icon={<FaCheckCircle />} text={item} />
              ))}

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <div className="grid gap-4 sm:grid-cols-3">
                  <MiniDetail icon={<FaUsers />} label="Audience" value="Youth & Community" />
                  <MiniDetail icon={<FaShieldAlt />} label="Focus" value="Discipline" />
                  <MiniDetail icon={<FaMapMarkerAlt />} label="Location" value="Shadwell, Tower Hamlets" />
                </div>
              </div>
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
                Inside The Grapple Hub
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                Moments from the mats - drilling, rolling, learning and building
                community through grappling.
              </p>
            </header>

            <Gallery
              data={DATA}
              setImageId={setImageId}
              projectUrl={location.pathname}
              onImageClick={handleImageClick}
            />
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
    </>
  );
};

function WorkshopGuest({ name, role }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
      <p className="text-xs font-black uppercase tracking-[0.22em] text-[#f5b400]">
        Guest
      </p>
      <h3 className="mt-2 text-xl font-black text-white">{name}</h3>
      <p className="mt-1 text-sm text-white/60">{role}</p>
    </div>
  );
}

function InfoCard({ icon, text }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-white/75">
      <span className="mt-1 shrink-0 text-[#f5b400]">{icon}</span>
      <span className="text-sm leading-6 sm:text-base">{text}</span>
    </div>
  );
}

function MiniDetail({ icon, label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
      <div className="text-lg text-[#f5b400]">{icon}</div>
      <p className="mt-3 text-[10px] font-black uppercase tracking-[0.22em] text-white/40">
        {label}
      </p>
      <p className="mt-1 text-sm font-bold text-white">{value}</p>
    </div>
  );
}

export default Grappling;