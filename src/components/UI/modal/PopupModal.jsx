import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import BBNewSession from '../../../assets/images/bb-new-session.jpeg';

Modal.setAppElement('#root'); // Needed for accessibility

const PopupModal = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const hasSeenModal = sessionStorage.getItem('hasSeenModal');
    if (!hasSeenModal) {
      setShowModal(true);
      sessionStorage.setItem('hasSeenModal', 'true');
    }
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <Modal
        isOpen={showModal}
        onRequestClose={closeModal}
        contentLabel="Welcome Modal"
        style={{
            overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            },
            content: {
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: 0, // Remove inline padding to use Tailwind
            border: 'none',
            borderRadius: '8px',
            maxWidth: '90%',
            width: '100%',
            maxHeight: '95%',
            height: 'auto',
            position: 'relative',
            overflow: 'auto',
            },
        }}
    >
    {/* Modal content with responsive styling */}
    <div className="relative p-6 sm:p-8 md:p-10 h-full flex flex-col items-center justify-center text-center">

        {/* Close Icon */}
        <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold focus:outline-none"
            aria-label="Close modal"
        >
            &times;
        </button>

        {/* Image */}
        <img className="w-[80%] max-w-sm sm:max-w-md md:max-w-md lg:max-w-lg" src={BBNewSession} alt="" />

        {/* Join Button */}
        <button
            onClick={() => window.open('https://docs.google.com/forms/d/1uzpysqh8pQORWbX40b3IOs5yJLXLxT55z0OIVIvQJ2s', '_blank')}
            className="px-5 py-2 mt-5 bg-[#4F7942] text-white font-bold rounded hover:bg-[#3e6335] transition-colors duration-200"
        >
            Join Now!
        </button>
    </div>
    </Modal>
  );
};

export default PopupModal;
