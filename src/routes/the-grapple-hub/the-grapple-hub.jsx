// src/pages/the-grapple-hub/TheGrappleHub.jsx
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Gallery from '../../components/gallery/Gallery';
import DATA from '../../data/the-grapple-hub.json';
import TGHLogo from '../../assets/images/tgh-logo.jpg';
import SelectedImage from '../../components/gallery/image/SelectedImage';
import MmaClassGrid from '../../components/classes/MmaClassGrid';

// Dummy class data – same shape as Brawlers
const grappleHubClasses = [
  {
    id: 'kids-fundamentals',
    title: 'Kids Gi Fundamentals',
    day: 'Saturday',
    time: '10:00 AM – 11:00 AM',
    level: 'Beginner · Ages 6–11',
    location: 'Osmani Community Centre, E1 5AW',
    coach: 'Coach H & Team',
    imageUrl: 'https://via.placeholder.com/600x400?text=Kids+Gi+Class',
  },
  {
    id: 'youth-no-gi',
    title: 'Youth No-Gi Takedowns',
    day: 'Saturday',
    time: '11:15 AM – 12:15 PM',
    level: 'Intermediate · Ages 12–17',
    location: 'Osmani Community Centre, E1 5AW',
    coach: 'Assistant Coaches',
    imageUrl: 'https://via.placeholder.com/600x400?text=Youth+No-Gi',
  },
  {
    id: 'adults-mixed',
    title: 'Adults Mixed Levels',
    day: 'Weeknights',
    time: '7:00 PM – 8:30 PM',
    level: 'All Levels · 18+',
    location: 'Local Partner Gym · E1',
    coach: 'Coach H & Senior Coaches',
    imageUrl: 'https://via.placeholder.com/600x400?text=Adults+Gi+No-Gi',
  },
  {
    id: 'open-mat',
    title: 'Open Mat – Community Roll',
    day: 'Sunday',
    time: '10:30 AM – 12:00 PM',
    level: 'All Levels',
    location: 'Community Mat Space · E1',
    coach: 'Peer-led · Supervised',
    imageUrl: 'https://via.placeholder.com/600x400?text=Open+Mat',
  },
];

const TheGrappleHub = ({ setImageId }) => {
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
          {/* Logo block (matching Brawlers style) */}
          <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start">
            <div className="flex justify-center items-center">
              <div
                className="relative rounded-full border-4 border-[#f5b400] shadow-xl flex items-center justify-center"
                style={{
                  width: '270px',
                  height: '270px',
                  backgroundColor: '#ffffff',
                }}
              >
                <img
                  src={TGHLogo}
                  alt="The Grapple Hub Logo"
                  className="w-[85%] h-[85%] mt-2 rounded-t-full rounded-b-full object-contain"
                />
              </div>
            </div>

            <p className="mt-4 text-sm font-semibold tracking-[0.18em] uppercase text-[#f5b400]">
              Est. 2020 · Shadwell, Tower Hamlets
            </p>
          </div>

          {/* Story */}
          <div className="w-full lg:w-2/3">
            <h1 className="mma-logo-font text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-[#f5f0e5]">
              The Grapple Hub
            </h1>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed">
              The Grapple Hub was founded as a sister project to Brawlers
              Boxing, creating a space dedicated to Brazilian Jiu Jitsu and
              grappling arts rooted in community, discipline and respect.
            </p>
            <p className="mt-3 text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed">
              Sessions focus on emotional resilience, problem-solving and
              teamwork on the mats, helping young people and adults build
              confidence while learning practical self-defence and ground
              control.
            </p>
          </div>
        </div>
      </section>

      {/* Classes Grid – same reusable component */}
      {/* <MmaClassGrid
        title="Grappling Classes"
        subtitle="Gi and No-Gi sessions designed to build technical skill, resilience, and community through grappling."
        classes={grappleHubClasses}
      /> */}

      {/* Gallery Section */}
      <section className="bg-[#0b0d10] text-[#f5f0e5] py-12 md:py-16 px-5 md:px-10">
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-8 sm:mb-10">
            <h2 className="mma-logo-font text-3xl md:text-4xl font-bold tracking-wide">
              Inside The Grapple Hub
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-slate-300">
              Moments from the mats - drilling, rolling, and connecting through
              the art of grappling.
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

export default TheGrappleHub;
