import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Gallery from '../../components/gallery/Gallery';
import DATA from '../../data/brawlers-boxing.json';
import BBLogo from '../../assets/images/brawlers-boxing.jpeg';
import BBNewSession from '../../assets/images/bb-new-session.jpeg';
import SelectedImage from '../../components/gallery/image/SelectedImage';
import MmaClassGrid from '../../components/classes/MmaClassGrid';

const brawlersClasses = [
  {
    id: 'cubs-early',
    title: 'Cubs - Fundamentals',
    day: 'Saturday',
    time: '12:45 PM - 1:45 PM',
    level: 'Ages 5-10',
    location: 'Osmani Community Centre, E1 5AW',
    coach: 'Coach H & Team',
    imageUrl: BBNewSession,
  },
  {
    id: 'tigers-early',
    title: 'Tigers - Technical Boxing',
    day: 'Saturday',
    time: '1:45 PM - 2:45 PM',
    level: 'Ages 11-17',
    location: 'Osmani Community Centre, E1 5AW',
    coach: 'Coach H & Team',
    imageUrl: 'https://via.placeholder.com/600x400?text=Tigers+Class',
  },
];

const BrawlersBoxing = ({ setImageId }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const selectedImageObj =
    selectedImage != null
      ? DATA.images.find((img) => img.id === selectedImage)
      : null;

  return (
    <>
      {/* Hero / Intro */}
      <section className="bg-[#0b0d10] text-[#f5f0e5] py-12 sm:py-16 px-5 md:px-10">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-center">
            {/* Logo block */}
            <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start">
                {/* Circle Container */}
                <div className="flex justify-center items-center">
                    <div
                        className="relative rounded-full border-4 border-[#f5b400] shadow-xl flex items-center justify-center"
                        style={{
                        width: "270px",   // circle size
                        height: "270px",
                        backgroundColor: "#ffffff", // white background inside the circle
                        }}
                    >
                        {/* Logo inside circle */}
                        <img
                            src={BBLogo}
                            alt="Brawlers Boxing Logo"
                            className="w-[75%] h-[75%] mb-4 rounded-t-full object-contain"
                        />
                    </div>
                </div>


                <p className="mt-4 text-sm font-semibold tracking-[0.18em] uppercase text-[#f5b400]">
                    Est. 2013 · Shadwell, Tower Hamlets
                </p>
            </div>

          {/* Story */}
          <div className="w-full lg:w-2/3">
            <h1 className="mma-logo-font text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-[#f5f0e5]">
              Brawlers Boxing
            </h1>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed">
              Born in the aftermath of London 2012, Brawlers Boxing was founded
              by Coach H to harness the power of boxing for community change.
            </p>
            <p className="mt-3 text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed">
              The project emerged to tackle youth delinquency and promote
              physical participation and better health. Along the way, the club
              has transformed lives and earned recognition including the{' '}
              <span className="font-semibold text-[#f5f0e5]">
                Tower Hamlets Community Safety Awards
              </span>{' '}
              and a finalist place in{' '}
              <span className="font-semibold text-[#f5f0e5]">
                The English Asian Business Awards
              </span>{' '}
              by Lloyds Bank.
            </p>
          </div>
        </div>
      </section>

      {/* Classes Grid (reusable) */}
      <MmaClassGrid
        title="Boxing Classes"
        subtitle="Structured sessions for young people and adults, combining technical boxing, discipline, and positive mentorship."
        classes={brawlersClasses}
      />

      {/* New Session / Promo Strip (optional emphasis) */}
      <section className="bg-[#0f1115] text-[#f5f0e5] py-10 px-5 md:px-10">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8">
          <div className="w-full max-w-md lg:w-[420px] flex justify-center">
            <div className="rounded-2xl overflow-hidden border border-[#1b1d22] shadow-xl bg-[#181a1f]">
              <img
                src={BBNewSession}
                alt="New Boxing Program"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="w-full lg:flex-1 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#f5f0e5]">
              Learn to Box - Join the Movement
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-200">
              Brawlers Boxing runs Saturday classes split by age and level, in
              a safe and uplifting environment led by experienced coaches.
            </p>

            <ul className="mt-4 space-y-2 text-sm sm:text-base text-slate-200">
              <li>
                <strong className="text-[#f5b400]">Cubs (Ages 5-10)</strong> - 12:45 PM - 1:45 PM
              </li>
              <li>
                <strong className="text-[#f5b400]">Tigers (Ages 11-17)</strong> - 1:45 PM - 2:45 PM
              </li>
            </ul>

            <p className="mt-4 text-sm sm:text-base text-slate-200">
              📍 <strong>Osmani Community Centre, E1 5AW</strong>
            </p>

            <button
              onClick={() =>
                window.open(
                  'https://docs.google.com/forms/d/1uzpysqh8pQORWbX40b3IOs5yJLXLxT55z0OIVIvQJ2s',
                  '_blank'
                )
              }
              className="mt-6 inline-flex items-center justify-center rounded-full bg-[#f5b400] px-8 py-3 text-sm font-semibold text-[#0b0d10] hover:bg-[#ffcd45] transition-colors shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
            >
              Join Now
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-[#0b0d10] text-[#f5f0e5] py-12 md:py-16 px-5 md:px-10">
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-8 sm:mb-10">
            <h2 className="mma-logo-font text-3xl md:text-4xl font-bold tracking-wide">
              Inside Brawlers Boxing
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-slate-300">
              A look at the training environment, community spirit, and moments
              that define the Brawlers experience.
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

      {/* Modal for selected image */}
      {selectedImageObj && (
        <SelectedImage
          imageUrl={selectedImageObj.url}
          previous={handlePrevious}
          next={handleNext}
          projectUrl={location.pathname}
          onClose={closeModal}
        />
      )}
    </>
  );
};

export default BrawlersBoxing;
