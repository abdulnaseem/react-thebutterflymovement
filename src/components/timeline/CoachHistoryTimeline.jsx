import React, { useEffect, useRef, useState } from 'react';

/**
 * Hook: detect prefers-reduced-motion
 */
function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (event) => {
      setPrefersReducedMotion(event.matches);
    };

    setPrefersReducedMotion(mediaQuery.matches);

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
    } else {
      mediaQuery.addListener(handleChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);

  return prefersReducedMotion;
}

/**
 * Hook: IntersectionObserver
 */
function useInViewOnce(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current || typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, ...options }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);

  return [ref, inView];
}

/**
 * Timeline Data
 */
export const coachHTimelineData = [
  {
    id: 'early-boxing',
    year: 'Early 2000s',
    title: 'Amateur Boxing Journey Begins',
    subtitle: 'Shadwell, Tower Hamlets',
    description:
      'Coach H starts his boxing journey in local clubs, using sport as an outlet from socio-economic challenges and building the discipline that would later underpin his community work.',
    imageUrl: 'https://via.placeholder.com/600x400?text=Early+Boxing+Career',
    category: 'Boxing',
  },
  {
    id: 'rooted-forum',
    year: 'Youth Work (The Rooted Forum)',
    title: 'Youth & Community Work at The Rooted Forum',
    subtitle: 'Frontline youth engagement',
    description:
      'Working as a youth practitioner at The Rooted Forum, Coach H delivers mentoring, group work, and educational workshops.',
    imageUrl: 'https://via.placeholder.com/600x400?text=The+Rooted+Forum',
    category: 'Youth Work',
  },
  {
    id: 'muslim-charity',
    year: 'Muslim Charity',
    title: 'Programme Lead at Muslim Charity',
    subtitle: 'Humanitarian & grassroots projects',
    description:
      'Connecting local community needs with global humanitarian initiatives.',
    imageUrl: 'https://via.placeholder.com/600x400?text=Muslim+Charity',
    category: 'Charity',
  },
  {
    id: 'brawlers-boxing',
    year: '2013',
    title: 'Founding of Brawlers Boxing',
    subtitle: 'Award-winning community boxing club',
    description:
      'A safe space combining boxing, mentoring and personal development.',
    imageUrl: 'https://via.placeholder.com/600x400?text=Brawlers+Boxing+2013',
    category: 'Founding',
  },
  {
    id: 'grapple-hub',
    year: '2020',
    title: 'Founding of The Grapple Hub',
    subtitle: 'Brazilian Jiu Jitsu & grappling community',
    description:
      'A space for discipline, emotional resilience, and community-building.',
    imageUrl: 'https://via.placeholder.com/600x400?text=The+Grapple+Hub+2020',
    category: 'Founding',
  },
];

/**
 * Single Timeline Item
 */
const TimelineItem = ({ item, index, prefersReducedMotion }) => {
  const [ref, hasEnteredView] = useInViewOnce();
  const shouldAnimate = !prefersReducedMotion;
  const isVisible = prefersReducedMotion ? true : hasEnteredView;

  const baseClasses =
    'relative flex flex-col md:flex-row md:items-center gap-6 md:gap-10 mb-12 md:mb-16 ' +
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f5b400] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0d10] rounded-lg';

  const animationClasses = isVisible
    ? 'opacity-100 translate-y-0'
    : shouldAnimate
    ? 'opacity-0 translate-y-8'
    : 'opacity-100 translate-y-0';

  const transitionClasses = shouldAnimate ? 'transition-all duration-700 ease-out' : '';

  const isLeft = index % 2 === 0;
  const alignmentClasses = isLeft ? 'md:flex-row' : 'md:flex-row-reverse md:text-right';

  return (
    <li
      ref={ref}
      tabIndex={0}
      aria-label={`${item.year}: ${item.title}`}
      className={`${baseClasses} ${animationClasses} ${transitionClasses} ${alignmentClasses}`}
      style={shouldAnimate ? { transitionDelay: `${index * 120}ms` } : undefined}
    >
      {/* Timeline Dot + Line */}
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex flex-col items-center h-full pointer-events-none">
        <div
          className="w-3 h-3 rounded-full bg-[#f5b400] border-2 border-[#0b0d10] shadow-md"
          aria-hidden="true"
        />
        <div
          className="flex-1 w-px bg-[#1b1d22] mt-1 hidden md:block"
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="md:w-1/2 bg-[#181a1f]/95 backdrop-blur-sm border border-[#1b1d22] rounded-2xl p-5 sm:p-6 shadow-lg">
        <div className="text-xs uppercase tracking-wide text-[#f5b400] font-semibold">
          {item.category}
        </div>
        <h3 className="mt-1 text-xl sm:text-2xl font-bold text-[#f5f0e5]">
          {item.title}
        </h3>
        <p className="text-sm text-slate-300 mt-1">{item.subtitle}</p>
        <p className="mt-3 text-sm sm:text-base text-slate-200 leading-relaxed">
          {item.description}
        </p>

        <p className="mt-4 inline-flex items-center rounded-full bg-[#0b0d10] px-3 py-1 text-xs font-semibold text-[#f5f0e5] border border-[#1b1d22]">
          <span
            className="w-1.5 h-1.5 rounded-full bg-[#f5b400] mr-2"
            aria-hidden="true"
          />
          <span>{item.year}</span>
        </p>
      </div>

      {/* Image */}
      <div className="md:w-1/2">
        <div className="w-full h-48 sm:h-56 md:h-64 rounded-2xl overflow-hidden border border-[#1b1d22] bg-[#0b0d10] shadow-lg">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </li>
  );
};

/**
 * Timeline Wrapper
 */
const CoachHistoryTimeline = ({ items = coachHTimelineData }) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section
      aria-labelledby="coach-h-history-heading"
      className="bg-[#0b0d10] text-[#f5f0e5] py-12 sm:py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-10 sm:mb-12">
          <h2
            id="coach-h-history-heading"
            className="text-3xl sm:text-4xl font-extrabold tracking-tight"
          >
            Coach H’s Journey
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-slate-300">
            A timeline of community work, youth engagement, and combat sports
            initiatives rooted in Shadwell, Tower Hamlets.
          </p>
        </header>

        <ol
          className="relative mt-4 md:mt-8"
          aria-label="Timeline of Coach H’s community contributions and founding work"
        >
          <div
            className="absolute left-4 top-0 bottom-0 w-px bg-[#1b1d22] md:left-1/2"
            aria-hidden="true"
          />

          {items.map((item, index) => (
            <TimelineItem
              key={item.id}
              item={item}
              index={index}
              prefersReducedMotion={prefersReducedMotion}
            />
          ))}
        </ol>
      </div>
    </section>
  );
};

export default CoachHistoryTimeline;
