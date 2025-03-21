import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';

const SelectedImage = ({ imageUrl, previous, next, onClose }) => {
    const [direction, setDirection] = useState(0);
    const navigate = useNavigate();

    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => handleNext(),
        onSwipedRight: () => handlePrevious(),
        preventScrollOnSwipe: true,
        trackMouse: true,
    });

    const handlePrevious = () => {
        setDirection(-1);
        previous();
    };

    const handleNext = () => {
        setDirection(1);
        next();
    };

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? "100%" : "-100%",
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction) => ({
            x: direction < 0 ? "100%" : "-100%",
            opacity: 0,
        }),
    };

    return (
        <div {...swipeHandlers} className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
            {/* Close Button */}
            <button
                onClick={onClose}
                className="absolute top-4 right-4 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-600 transition-colors duration-200"
            >
                <i className="bi bi-x text-2xl"></i>
            </button>

            {/* Image with Animation */}
            <AnimatePresence custom={direction} initial={false}>
                <motion.img
                    key={imageUrl}
                    src={imageUrl}
                    alt="Selected"
                    className="max-w-full max-h-full object-contain"
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                />
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
                onClick={handlePrevious}
                className="absolute left-4 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-600 transition-colors duration-200"
            >
                <i className="bi bi-chevron-left text-2xl"></i>
            </button>
            <button
                onClick={handleNext}
                className="absolute right-4 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-600 transition-colors duration-200"
            >
                <i className="bi bi-chevron-right text-2xl"></i>
            </button>
        </div>
    );
};

export default SelectedImage;