// src/pages/about/About.jsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Butterfly from '../../assets/images/butterfly1.jpeg';
import MuhammadAli from '../../assets/images/muhammad-ali.jpeg';
import ButterflyGuard from '../../assets/images/butterfly-guard.jpeg';
import Button from '../../components/UI/button/button';
import SEO from '../../components/SEO';

const storySections = [
  {
    id: 'butterfly-effect',
    badge: 'Our Symbol',
    title: 'The Butterfly Effect',
    image: Butterfly,
    imageAlt: 'Illustration of a butterfly symbolising change',
    body: [
      'The Butterfly Effect reminds us that everything in existence is connected. Small actions, repeated over time, can create profound and lasting change.',
      'At The Butterfly Movement, we believe no gesture is insignificant. A kind word, a coaching session, or a moment of mentorship can shape a life or spark a wider movement.',
      'The butterfly has long symbolised transformation, hope, and rebirth. Its journey from larva to caterpillar to chrysalis and finally to a fully formed butterfly mirrors the personal growth we champion in our community.'
    ]
  },
  {
    id: 'muhammad-ali',
    badge: 'Inspiration',
    title: 'Muhammad Ali - “Float like a butterfly”',
    image: MuhammadAli,
    imageAlt: 'Muhammad Ali in a boxing stance',
    body: [
      'Muhammad Ali (1942 - 2016) was not only one of the greatest heavyweight boxers of all time, but also a powerful activist and humanitarian.',
      'He used his platform to stand for civil rights, religious freedom, and justice. His commitment to speaking truth to power continues to inspire our work today.',
      'Ali’s iconic phrase, “Float like a butterfly, sting like a bee”, resonates deeply with our team - embodying grace, precision, and impact, both inside and outside the ring.'
    ]
  },
  {
    id: 'butterfly-guard',
    badge: 'Martial Arts Heritage',
    title: 'The Butterfly Guard',
    image: ButterflyGuard,
    imageAlt: 'Illustration of the butterfly guard position in grappling',
    body: [
      'The Butterfly Guard is one of the oldest and most traditional guard positions in Jiu Jitsu.',
      'Its hooks are designed to disrupt an opponent’s base, turning defence into opportunity. Historically, grappling has always been part of combat sports, but it was arts such as judo and Jiu Jitsu that truly developed guard systems.',
      'The butterfly guard is now a fundamental part of grappling worldwide, reflecting the same principles we value: balance, adaptability, and the power of subtle, well-timed movement.'
    ]
  }
];

const valuesData = [
  {
    id: 1,
    iconLetter: 'B',
    header: 'BE YOU',
    text: 'We encourage every member to embrace their individuality, approach life with confidence, and recognise their unique contribution to the world.'
  },
  {
    id: 2,
    iconLetter: 'U',
    header: 'ULTRA MINDSET',
    text: 'We nurture a “can do” attitude - building mental resilience, self-belief, and a commitment to continuous growth.'
  },
  {
    id: 3,
    iconLetter: 'T',
    header: 'TEACH OTHERS',
    text: 'The best way to learn is to teach. Sharing knowledge strengthens understanding and builds a culture of support.'
  },
  {
    id: 4,
    iconLetter: 'T',
    header: 'TARGETS',
    text: 'We support realistic, meaningful goal setting, with a focus on clear, achievable steps that move people forward.'
  },
  {
    id: 5,
    iconLetter: 'E',
    header: 'EMPOWERMENT',
    text: 'We aim to empower individuals and communities through education, movement, and opportunities to lead.'
  },
  {
    id: 6,
    iconLetter: 'R',
    header: 'REST',
    text: 'Rest is essential. We value recovery and reflection as much as training, protecting both physical and mental health.'
  }
];

// New, modern value card – does NOT reuse the old Card component
const ValueCard = ({ iconLetter, header, text }) => (
  <article className="group flex flex-col h-full rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
    <div className="flex items-center gap-4 px-5 pt-5">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white text-lg font-bold shadow-sm">
        {iconLetter}
      </div>
      <h3 className="text-base sm:text-lg font-semibold text-gray-900">
        {header}
      </h3>
    </div>
    <p className="mt-3 px-5 pb-5 text-sm sm:text-base leading-relaxed text-gray-600">
      {text}
    </p>
  </article>
);

const OurStory = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNavigate = () => {
    navigate('/contact');
  };

  return (
    <>
      <SEO
        title="About The Butterfly Movement | Youth Empowerment & Community Change"
        description="Learn about The Butterfly Movement, our story, values and mission to support young people through education, combat sports and community work."
        path="/about"
      />
    
      <div className="bg-white min-h-screen pt-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* Page header */}
          <header className="text-center mb-10 sm:mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
              Our Story
            </p>
            <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
              Small Movements, Big Change
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-gray-600 leading-relaxed">
              The Butterfly Movement brings together education, combat sports, and
              community work to unlock potential in young people and adults across
              Shadwell, Tower Hamlets and beyond.
            </p>
          </header>

          {/* Story sections */}
          <section aria-label="Origins and inspirations" className="space-y-12 sm:space-y-16">
            {storySections.map((section, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={section.id}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
                >
                  {/* Image */}
                  <div
                    className={`
                      w-full
                      ${!isEven ? 'lg:order-2' : ''}
                    `}
                  >
                    <div className="relative overflow-hidden rounded-2xl shadow-lg">
                      <img
                        src={section.image}
                        alt={section.imageAlt}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Text */}
                  <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                    <div className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 mb-3">
                      {section.badge}
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
                      {section.title}
                    </h2>
                    <div className="mt-4 space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                      {section.body.map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </section>

          {/* Values & beliefs */}
          <section
            aria-labelledby="values-heading"
            className="mt-14 sm:mt-16 border-t border-gray-200 pt-10 sm:pt-12"
          >
            <div className="text-center max-w-3xl mx-auto">
              <h2
                id="values-heading"
                className="text-2xl sm:text-3xl font-semibold text-gray-900"
              >
                Values &amp; Beliefs
              </h2>
              <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
                Our values shape every session, conversation, and decision.
                Together, they form the acronym{' '}
                <span className="font-semibold text-gray-900">B.U.T.T.E.R</span>,
                reflecting how we aim to support growth, resilience, and
                long-lasting change.
              </p>
            </div>

            <div className="mt-8 sm:mt-10 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {valuesData.map((value) => (
                <ValueCard
                  key={value.id}
                  iconLetter={value.iconLetter}
                  header={value.header}
                  text={value.text}
                />
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <Button
                onClick={handleNavigate}
                className="px-8 py-3 text-sm sm:text-base rounded-full bg-gray-900 text-white hover:bg-gray-800 shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                FLY WITH US
              </Button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default OurStory;
