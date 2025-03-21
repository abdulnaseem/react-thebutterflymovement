import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Gallery from "../../components/gallery/Gallery";
import DATA from '../../data/the-grapple-hub.json';
import TGHLogo from '../../assets/images/tgh-logo.jpg';
import SelectedImage from '../../components/gallery/image/SelectedImage';
import './the-grapple-hub.css';

const TheGrappleHub = ({setImageId}) => {
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
                    <img className="bb-logo" src={TGHLogo} alt="" />
                </div>
                <h3 className="bb-sub-heading text-center text-2xl font-bold tracking-tight sm:text-2xl">Est 2013</h3>
                <p className="p-10 bb-text">The love for sports inspired Coach. H to give back to the wider community and harbour community cohesion using his skills, knowledge and experience. Shortly after the London 2012 Olympics, Coach.H initiated and founded a community project called ‘Brawlers Boxing’. The project arose to tackle youth delinquency and promote physical participation & better health. The movement went on to transform many lives, and along the way, won the ‘Tower Hamlets Community Safety Awards’ by Metropolitan Police and ‘The English Asian Business Awards’ (finalist) by Lloyds Bank.</p>
            </div>

            <div className="brawlers-boxing-gallery text-center pb-8">
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

export default TheGrappleHub;