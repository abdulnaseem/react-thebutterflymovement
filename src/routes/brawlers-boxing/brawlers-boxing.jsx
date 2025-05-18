import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Gallery from '../../components/gallery/Gallery';
import DATA from '../../data/brawlers-boxing.json';
import BBLogo from '../../assets/images/brawlers-boxing.jpeg';
import SelectedImage from '../../components/gallery/image/SelectedImage';
import './brawlers-boxing.css';
import BBNewSession from '../../assets/images/bb-new-session.jpeg'

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

    // Function to handle "previous" button click
    const handlePrevious = () => {
        setSelectedImage((prev) => {
            const currentIndex = DATA.images.findIndex((img) => img.id === prev);
            const newIndex = currentIndex === 0 ? DATA.images.length - 1 : currentIndex - 1;
            return DATA.images[newIndex].id;
        });
    };

    // Function to handle "next" button click
    const handleNext = () => {
        setSelectedImage((prev) => {
            const currentIndex = DATA.images.findIndex((img) => img.id === prev);
            const newIndex = currentIndex === DATA.images.length - 1 ? 0 : currentIndex + 1;
            return DATA.images[newIndex].id;
        });
    };

    console.log('Selected Image ID:', selectedImage);

    return (
        <>
            <div className="bb-section">
                <div className="bb-inner-section">
                    <img className="bb-logo" src={BBLogo} alt="" />
                </div>
                <h3 className="bb-sub-heading text-center text-2xl font-bold tracking-tight sm:text-2xl">Est 2013</h3>
                <p className="p-10 bb-text">The love for sports inspired Coach. H to give back to the wider community and harbour community cohesion using his skills, knowledge and experience. Shortly after the London 2012 Olympics, Coach.H initiated and founded a community project called ‘Brawlers Boxing’. The project arose to tackle youth delinquency and promote physical participation & better health. The movement went on to transform many lives, and along the way, won the ‘Tower Hamlets Community Safety Awards’ by Metropolitan Police and ‘The English Asian Business Awards’ (finalist) by Lloyds Bank.</p>
            </div>

            <div className="bb-new-program-section px-4 py-10 flex flex-col lg:flex-row items-center justify-center gap-8 bg-white">
                <div className="w-full max-w-md lg:w-[500px] flex justify-center">
                    <img
                        src={BBNewSession} // adjust path if needed
                        alt="New Boxing Program"
                        className="max-w-full h-auto rounded-lg shadow-md"
                    />
                </div>
                <div className="w-full lg:w-1/2 text-center lg:text-left px-2 lg:px-0">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#4F7942] mb-4">
                        Learn to Box – Join the Movement!
                    </h2>
                    <p className="mb-4 text-base sm:text-lg">
                        Brawlers Boxing now offers new Saturday classes for young people:
                    </p>
                    <ul className="mb-4 list-disc list-inside text-left text-sm sm:text-base leading-relaxed max-w-md mx-auto lg:mx-0">
                        <li><strong>Cubs (Ages 5–10)</strong> – 12:45 PM & 1:45 PM</li>
                        <li><strong>Tigers (Ages 11–17)</strong> – 1:45 PM & 2:45 PM</li>
                    </ul>
                    <p className="mb-4 text-base sm:text-lg">
                        📍 <strong>Osmani Community Centre, E1 5AW</strong>
                    </p>
                    <button
                        onClick={() => window.open('https://docs.google.com/forms/d/1uzpysqh8pQORWbX40b3IOs5yJLXLxT55z0OIVIvQJ2s', '_blank')}
                        className="mt-2 px-6 py-3 bg-[#4F7942] text-white font-semibold rounded hover:bg-[#3e6335] transition duration-200"
                    >
                        Join Now!
                    </button>
                </div>
            </div>

            <div className="brawlers-boxing-gallery text-center pb-8 mt-5">
                <Gallery data={DATA} setImageId={setImageId} projectUrl={location.pathname} onImageClick={handleImageClick} />
            </div>

            {/* Render SelectedImage as a modal if an image is selected */}
            {selectedImage !== null && (
                <SelectedImage
                    imageUrl={DATA.images.find((img) => img.id === selectedImage).url}
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