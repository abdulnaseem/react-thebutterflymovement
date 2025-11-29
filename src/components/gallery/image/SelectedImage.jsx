import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';

const SelectedImage = ({ imageUrl, previous, next, onClose }) => {
  const [direction, setDirection] = useState(0);

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
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  return (
    <div
      {...swipeHandlers}
      className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-[#181a1f] text-[#f5f0e5] hover:bg-[#252732] transition-colors text-xl"
        aria-label="Close"
      >
        ×
      </button>

      {/* Image */}
      <AnimatePresence custom={direction} initial={false}>
        <motion.img
          key={imageUrl}
          src={imageUrl}
          alt="Selected"
          className="max-w-[92vw] max-h-[80vh] object-contain rounded-lg shadow-2xl border border-[#1b1d22]"
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        />
      </AnimatePresence>

      {/* Previous / Next */}
      <button
        onClick={handlePrevious}
        className="absolute left-4 sm:left-6 w-10 h-10 flex items-center justify-center rounded-full bg-[#181a1f] text-[#f5f0e5] hover:bg-[#252732] transition-colors text-2xl"
        aria-label="Previous image"
      >
        ‹
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 sm:right-6 w-10 h-10 flex items-center justify-center rounded-full bg-[#181a1f] text-[#f5f0e5] hover:bg-[#252732] transition-colors text-2xl"
        aria-label="Next image"
      >
        ›
      </button>
    </div>
  );
};

export default SelectedImage;
