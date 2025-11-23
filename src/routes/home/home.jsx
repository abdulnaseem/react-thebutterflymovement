import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    FaDumbbell,
    FaBell,
    FaChalkboardTeacher,
} from 'react-icons/fa';
import Button from '../../components/UI/button/button';
import Background from '../../assets/images/boxing.jpg';
import LogoImage from '../../assets/images/logo.png';
import React, { useRef, useState } from 'react';

/**
 * Hook: fade + slide in when element enters viewport (once)
 */
function useFadeInOnScroll(threshold = 0.2) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (!ref.current || typeof IntersectionObserver === 'undefined') {
            setVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisible(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold }
        );

        observer.observe(ref.current);
        return () => observer.disconnect();
    }, [threshold]);

    return [ref, visible];
}

const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [aboutRef, aboutVisible] = useFadeInOnScroll(0.25);
    const [programsRef, programsVisible] = useFadeInOnScroll(0.2);

    return (
        <div className="bg-[#0b0d10] text-[#f5f0e5] min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[70vh] md:h-[90vh] flex flex-col justify-center items-center text-center px-5 md:px-10">
                <div
                    className="absolute inset-0 bg-cover bg-center md:bg-fixed"
                    style={{ backgroundImage: `url(${Background})`, opacity: 0.3 }}
                ></div>

                <h1 className="mma-logo-font text-4xl md:text-6xl font-bold drop-shadow-md relative">
                    The Butterfly Movement - Health
                </h1>
                <h2 className="mma-logo-font text-2xl md:text-4xl mt-2 drop-shadow-md relative">
                    Educate · Empower · Exercise
                </h2>
                <p className="relative mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed text-slate-100/90 drop-shadow-md">
                    The Butterfly Movement offers an integrated approach to youth and community work
                    through physical empowerment, bringing a fresh wave of movement that benefits
                    clients, beneficiaries, and the wider community.
                </p>

                <Button
                    className="relative mt-6"
                    onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('programs')?.scrollIntoView({
                            behavior: 'smooth',
                        });
                    }}
                >
                    Discover Our Programs
                </Button>
            </section>

            {/* About Section – themed & animated */}
            <section
                ref={aboutRef}
                className={`
            py-12 md:py-20 px-5 md:px-10 bg-[#0f1115]
            transition-all duration-700 ease-out
            ${aboutVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-8'
                    }
            `}
            >
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-10">
                    {/* Logo card */}
                    <div
                        className={`
                flex justify-center md:justify-start w-full md:w-1/3
                transition-all duration-700 ease-out
                ${aboutVisible
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-4'
                            }
                `}
                        style={aboutVisible ? { transitionDelay: '120ms' } : undefined}
                    >
                        <div className="relative rounded-2xl border border-[#1b1d22] bg-[#181a1f] p-4 shadow-xl mx-auto">
                            <div className="overflow-hidden rounded-xl">
                                <img
                                    src={LogoImage}
                                    alt="The Butterfly Movement Logo"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Text block */}
                    <div
                        className={`
                w-full md:w-2/3 mx-auto
                transition-all duration-700 ease-out
                ${aboutVisible
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-4'
                            }
                `}
                        style={aboutVisible ? { transitionDelay: '220ms' } : undefined}
                    >
                        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#f5f0e5]">
                            Small Movements, Big Change
                        </h2>
                        <p className="mt-4 text-base md:text-lg leading-relaxed text-slate-200">
                            Inspired by the pioneers of the award-winning community interest club{' '}
                            <b className="text-[#f5f0e5]">Brawlers Boxing</b> and the recently founded
                            <b className="text-[#f5f0e5]"> The Grapple Hub</b>,{' '}
                            <b className="text-[#f5f0e5]">The Butterfly Movement</b> aims to provide an
                            integrated approach to youth &amp; community work through physical
                            empowerment.
                        </p>
                        <p className="mt-3 text-base md:text-lg leading-relaxed text-slate-300">
                            This venture brings a new wave of movement, keeping the wider community, our
                            clients, and beneficiaries in mind. We are a limited company with core
                            community interest values; our founding members and team are all driven to
                            bring about positive change.
                        </p>
                        <p className="mt-3 text-base md:text-lg leading-relaxed text-slate-300">
                            Here at The Butterfly Movement, we believe that small movements can bring
                            about huge changes, thus, we have made it our tagline:{' '}
                            <span className="text-[#f5f0e5] font-semibold">
                                Small Movements, Big Change.
                            </span>
                        </p>

                        <Button
                            className="mt-6"
                            onClick={() => navigate('/about')}
                        >
                            Learn More
                        </Button>
                    </div>
                </div>
            </section>

            {/* Programs Section – fade in on scroll */}
            <section
                id="programs"
                ref={programsRef}
                className={`
                py-12 md:py-20 bg-[#0b0d10] px-5 md:px-10
                transition-all duration-700 ease-out
                ${programsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
            >
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#f5f0e5]">
                        Our Programs
                    </h2>
                    <p className="mt-3 max-w-2xl mx-auto text-sm md:text-base text-slate-300">
                        Empowering young people and the wider community through structured programs in
                        boxing, education, and holistic health.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                        {/* Card 1 */}
                        <div
                            className={`
                        p-6 rounded-2xl bg-[#181a1f] border border-[#1b1d22]
                        shadow-lg hover:shadow-xl hover:-translate-y-1
                        transition-all duration-700 ease-out
                        ${programsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                        `}
                            style={programsVisible ? { transitionDelay: '80ms' } : undefined}
                        >
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#0b0d10] border border-[#f5b400]/60 mb-4">
                                <FaBell className="text-2xl text-[#f5b400]" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-[#f5f0e5]">
                                Saved by the Bell
                            </h3>
                            <p className="mt-3 text-sm md:text-base text-slate-300">
                                Boxing is an incredible tool to engage young people through counselling and
                                mentoring, helping them process challenges and build confidence.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div
                            className={`
                        p-6 rounded-2xl bg-[#181a1f] border border-[#1b1d22]
                        shadow-lg hover:shadow-xl hover:-translate-y-1
                        transition-all duration-700 ease-out
                        ${programsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                        `}
                            style={programsVisible ? { transitionDelay: '160ms' } : undefined}
                        >
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#0b0d10] border border-[#f5b400]/60 mb-4">
                                <FaChalkboardTeacher className="text-2xl text-[#f5b400]" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-[#f5f0e5]">
                                Wise Workshops
                            </h3>
                            <p className="mt-3 text-sm md:text-base text-slate-300">
                                We provide informal education through accredited AQA programmes, gang
                                awareness sessions, better health initiatives, and aspiration-building
                                workshops.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div
                            className={`
                        p-6 rounded-2xl bg-[#181a1f] border border-[#1b1d22]
                        shadow-lg hover:shadow-xl hover:-translate-y-1
                        transition-all duration-700 ease-out
                        ${programsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                        `}
                            style={programsVisible ? { transitionDelay: '240ms' } : undefined}
                        >
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#0b0d10] border border-[#f5b400]/60 mb-4">
                                <FaDumbbell className="text-2xl text-[#f5b400]" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-[#f5f0e5]">
                                Personal Training &amp; Group Sessions
                            </h3>
                            <p className="mt-3 text-sm md:text-base text-slate-300">
                                Start your journey to better health with a mix of Boxing, Brazilian Jiu
                                Jitsu, and Muay Thai. Whether your goal is fitness, learning a martial art,
                                or well-being, we tailor our training to suit you.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;
