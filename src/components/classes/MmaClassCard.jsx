import { FaClock, FaMapMarkerAlt, FaUserAlt } from 'react-icons/fa';

const MmaClassCard = ({
  title,
  day,
  time,
  level,
  location,
  coach,
  imageUrl,
}) => {
  return (
    <article className="group relative overflow-hidden rounded-2xl bg-[#181a1f] border border-[#1b1d22] shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
      {/* Image */}
      <div className="relative h-40 sm:h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d10]/80 via-transparent to-transparent" />
        <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#0b0d10]/80 border border-[#f5b400]/60 text-[0.7rem] font-semibold tracking-wide uppercase text-[#f5f0e5]">
          {level}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3">
        <h3 className="text-lg sm:text-xl font-semibold text-[#f5f0e5]">
          {title}
        </h3>

        <div className="flex flex-wrap gap-2 text-xs sm:text-sm text-slate-300">
          <span className="inline-flex items-center gap-1 rounded-full bg-[#0b0d10] px-3 py-1">
            <FaClock className="text-[#f5b400]" />
            <span>{day} · {time}</span>
          </span>
          {coach && (
            <span className="inline-flex items-center gap-1 rounded-full bg-[#0b0d10] px-3 py-1">
              <FaUserAlt className="text-[#f5b400]" />
              <span>{coach}</span>
            </span>
          )}
        </div>

        <div className="mt-1 flex items-center gap-2 text-xs sm:text-sm text-slate-300">
          <FaMapMarkerAlt className="text-[#f5b400]" />
          <span>{location}</span>
        </div>
      </div>
    </article>
  );
};

export default MmaClassCard;