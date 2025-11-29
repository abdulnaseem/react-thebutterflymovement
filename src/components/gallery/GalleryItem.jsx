import { useState } from 'react';

const GalleryItem = ({ id, url, onClick }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <button
      type="button"
      onClick={() => onClick(id)}
      className="group block w-full overflow-hidden rounded-2xl bg-[#181a1f] border border-[#1b1d22] shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f5b400]"
    >
      {/* Skeleton */}
      {isLoading && (
        <div className="w-full h-40 sm:h-48 bg-[#111827] animate-pulse" />
      )}

      {/* Image */}
      <div className={`relative ${isLoading ? 'hidden' : 'block'}`}>
        <img
          src={url}
          alt="Training at Brawlers Boxing"
          className="w-full h-40 sm:h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
          onLoad={() => setIsLoading(false)}
          onError={() => setIsLoading(false)}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <span className="pointer-events-none absolute bottom-2 right-2 text-[0.65rem] px-2 py-1 rounded-full bg-black/70 text-[#f5f0e5] uppercase tracking-wide">
          View
        </span>
      </div>
    </button>
  );
};

export default GalleryItem;
