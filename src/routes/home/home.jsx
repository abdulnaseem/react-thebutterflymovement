import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    FaDumbbell,
    FaBell,
    FaChalkboardTeacher,
    FaShieldAlt,
    FaUsers,
    FaArrowRight,
    FaStar,
    FaCheckCircle
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
    const [ctaRef, ctaVisible] = useFadeInOnScroll(0.3);

    return (
        <div className="bg-[#0b0d10] text-[#f5f0e5] min-h-screen">
            {/* Hero Section - Enhanced with better value proposition */}
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
                <p className="relative text-xl max-w-3xl mx-auto leading-relaxed text-slate-100/90 drop-shadow-md mt-2">
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

            {/* About Section – Enhanced with better structure */}
            <section
                ref={aboutRef}
                className={`
            py-20 md:py-28 px-5 md:px-10 bg-[#0f1115]
            transition-all duration-700 ease-out
            ${aboutVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-8'
                    }
            `}
            >
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#f5f0e5] mb-4">
                            Small Movements, <span className="text-[#f5b400]">Big Change</span>
                        </h2>
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                            We believe that consistent, small steps lead to transformative results in physical and mental wellbeing.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Logo card */}
                        <div
                            className={`
                flex justify-center
                transition-all duration-700 ease-out
                ${aboutVisible
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-4'
                            }
                `}
                            style={aboutVisible ? { transitionDelay: '120ms' } : undefined}
                        >
                            <div className="relative rounded-2xl border-2 border-[#f5b400]/20 bg-gradient-to-br from-[#181a1f] to-[#0b0d10] p-8 shadow-2xl">
                                <div className="overflow-hidden rounded-xl">
                                    <img
                                        src={LogoImage}
                                        alt="The Butterfly Movement - Community Health and Empowerment"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div className="mt-6 text-center">
                                    <div className="w-16 h-1 bg-[#f5b400] mx-auto mb-4 rounded-full"></div>
                                </div>
                            </div>
                        </div>

                        {/* Text block */}
                        <div
                            className={`
                transition-all duration-700 ease-out
                ${aboutVisible
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-4'
                            }
                `}
                            style={aboutVisible ? { transitionDelay: '220ms' } : undefined}
                        >
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-[#f5f0e5] mb-3">
                                        Our Proven Approach
                                    </h3>
                                    <p className="text-lg leading-relaxed text-slate-200">
                                        Born from the success of award-winning community initiatives{' '}
                                        <strong className="text-[#f5b400]">Brawlers Boxing</strong> and{' '}
                                        <strong className="text-[#f5b400]">The Grapple Hub</strong>, we've 
                                        perfected a model that combines physical training with personal development.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="flex items-start gap-3">
                                        <FaCheckCircle className="text-[#f5b400] mt-1 flex-shrink-0" />
                                        <span className="text-slate-200">Evidence-based methodologies</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <FaCheckCircle className="text-[#f5b400] mt-1 flex-shrink-0" />
                                        <span className="text-slate-200">Qualified, passionate coaches</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <FaCheckCircle className="text-[#f5b400] mt-1 flex-shrink-0" />
                                        <span className="text-slate-200">Safe, inclusive environment</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <FaCheckCircle className="text-[#f5b400] mt-1 flex-shrink-0" />
                                        <span className="text-slate-200">Measurable progress tracking</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 mt-8">
                                <Button
                                    className="bg-[#f5b400] text-[#0b0d10] hover:bg-[#e6a500] font-semibold"
                                    onClick={() => navigate('/about')}
                                >
                                    Our Story & Mission
                                </Button>
                                {/* <Button
                                    variant="outline"
                                    className="border-[#f5b400] text-[#f5b400] hover:bg-[#f5b400] hover:text-[#0b0d10]"
                                    onClick={() => navigate('/contact')}
                                >
                                    Meet Our Team
                                </Button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Programs Section – Enhanced with better CTAs */}
            <section
                id="programs"
                ref={programsRef}
                className={`
                py-20 md:py-28 bg-[#0b0d10] px-5 md:px-10
                transition-all duration-700 ease-out
                ${programsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
            >
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#f5f0e5] mb-4">
                            Transformative <span className="text-[#f5b400]">Programs</span>
                        </h2>
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                            Each program is carefully designed to address specific needs while building 
                            foundational skills for lifelong success.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div
                            className={`
                        group relative bg-gradient-to-b from-[#181a1f] to-[#0b0d10] p-8 rounded-2xl border-2 border-[#1b1d22]
                        shadow-2xl hover:shadow-2xl hover:-translate-y-2 hover:border-[#f5b400]/30
                        transition-all duration-500 ease-out
                        ${programsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                        `}
                            style={programsVisible ? { transitionDelay: '80ms' } : undefined}
                        >
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#f5b400] to-[#e6a500] mb-6 group-hover:scale-110 transition-transform duration-300">
                                <FaBell className="text-2xl text-[#0b0d10]" />
                            </div>
                            <h3 className="text-2xl font-bold text-[#f5f0e5] mb-4">
                                Saved by the Bell
                            </h3>
                            <p className="text-slate-300 leading-relaxed mb-6">
                                Boxing becomes the gateway to meaningful conversations. Our certified mentors 
                                use training sessions as opportunities for counseling and personal development.
                            </p>
                            <ul className="space-y-2 mb-6">
                                <li className="flex items-center gap-2 text-sm text-slate-300">
                                    <FaCheckCircle className="text-[#f5b400] flex-shrink-0" />
                                    One-on-one mentoring sessions
                                </li>
                                <li className="flex items-center gap-2 text-sm text-slate-300">
                                    <FaCheckCircle className="text-[#f5b400] flex-shrink-0" />
                                    Confidence and resilience building
                                </li>
                                <li className="flex items-center gap-2 text-sm text-slate-300">
                                    <FaCheckCircle className="text-[#f5b400] flex-shrink-0" />
                                    Safe space for personal challenges
                                </li>
                            </ul>
                            {/* <Button
                                variant="outline"
                                className="w-full border-[#f5b400] text-[#f5b400] hover:bg-[#f5b400] hover:text-[#0b0d10]"
                                onClick={() => navigate('/programs/saved-by-the-bell')}
                            >
                                Learn More <FaArrowRight className="ml-2" />
                            </Button> */}
                        </div>

                        {/* Card 2 */}
                        <div
                            className={`
                        group relative bg-gradient-to-b from-[#181a1f] to-[#0b0d10] p-8 rounded-2xl border-2 border-[#1b1d22]
                        shadow-2xl hover:shadow-2xl hover:-translate-y-2 hover:border-[#f5b400]/30
                        transition-all duration-500 ease-out
                        ${programsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                        `}
                            style={programsVisible ? { transitionDelay: '160ms' } : undefined}
                        >
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#f5b400] to-[#e6a500] mb-6 group-hover:scale-110 transition-transform duration-300">
                                <FaChalkboardTeacher className="text-2xl text-[#0b0d10]" />
                            </div>
                            <h3 className="text-2xl font-bold text-[#f5f0e5] mb-4">
                                Wise Workshops
                            </h3>
                            <p className="text-slate-300 leading-relaxed mb-6">
                                Practical education that makes a difference. From accredited qualifications 
                                to life skills, we prepare young people for real-world success.
                            </p>
                            <ul className="space-y-2 mb-6">
                                <li className="flex items-center gap-2 text-sm text-slate-300">
                                    <FaCheckCircle className="text-[#f5b400] flex-shrink-0" />
                                    AQA-accredited programs
                                </li>
                                <li className="flex items-center gap-2 text-sm text-slate-300">
                                    <FaCheckCircle className="text-[#f5b400] flex-shrink-0" />
                                    Gang awareness & prevention
                                </li>
                                <li className="flex items-center gap-2 text-sm text-slate-300">
                                    <FaCheckCircle className="text-[#f5b400] flex-shrink-0" />
                                    Career and aspiration building
                                </li>
                            </ul>
                            {/* <Button
                                variant="outline"
                                className="w-full border-[#f5b400] text-[#f5b400] hover:bg-[#f5b400] hover:text-[#0b0d10]"
                                onClick={() => navigate('/programs/wise-workshops')}
                            >
                                View Workshops <FaArrowRight className="ml-2" />
                            </Button> */}
                        </div>

                        {/* Card 3 */}
                        <div
                            className={`
                        group relative bg-gradient-to-b from-[#181a1f] to-[#0b0d10] p-8 rounded-2xl border-2 border-[#1b1d22]
                        shadow-2xl hover:shadow-2xl hover:-translate-y-2 hover:border-[#f5b400]/30
                        transition-all duration-500 ease-out
                        ${programsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                        `}
                            style={programsVisible ? { transitionDelay: '240ms' } : undefined}
                        >
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#f5b400] to-[#e6a500] mb-6 group-hover:scale-110 transition-transform duration-300">
                                <FaDumbbell className="text-2xl text-[#0b0d10]" />
                            </div>
                            <h3 className="text-2xl font-bold text-[#f5f0e5] mb-4">
                                Personal & Group Training
                            </h3>
                            <p className="text-slate-300 leading-relaxed mb-6">
                                Whether you're seeking fitness, self-defense skills, or stress relief, 
                                our expert coaches create personalised pathways to your goals.
                            </p>
                            <ul className="space-y-2 mb-6">
                                <li className="flex items-center gap-2 text-sm text-slate-300">
                                    <FaCheckCircle className="text-[#f5b400] flex-shrink-0" />
                                    Boxing, BJJ, and Muay Thai
                                </li>
                                <li className="flex items-center gap-2 text-sm text-slate-300">
                                    <FaCheckCircle className="text-[#f5b400] flex-shrink-0" />
                                    Personalised fitness plans
                                </li>
                                <li className="flex items-center gap-2 text-sm text-slate-300">
                                    <FaCheckCircle className="text-[#f5b400] flex-shrink-0" />
                                    All levels welcome
                                </li>
                            </ul>
                            {/* <Button
                                variant="outline"
                                className="w-full border-[#f5b400] text-[#f5b400] hover:bg-[#f5b400] hover:text-[#0b0d10]"
                                onClick={() => navigate('/programs/training')}
                            >
                                Start Training <FaArrowRight className="ml-2" />
                            </Button> */}
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section
                ref={ctaRef}
                className={`
                py-20 md:py-28 bg-gradient-to-br from-[#0f1115] to-[#0b0d10] px-5 md:px-10
                transition-all duration-700 ease-out
                ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
            >
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#f5f0e5] mb-6">
                        Ready to Begin Your <span className="text-[#f5b400]">Transformation</span>?
                    </h2>
                    <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                        Join hundreds of community members who have discovered their strength, 
                        built their confidence, and found their tribe.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                        <Button
                            className="bg-[#f5b400] text-[#0b0d10] hover:bg-[#e6a500] font-bold px-8 py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105"
                            onClick={() => navigate('/contact')}
                        >
                            Get In Touch
                        </Button>
                        {/* <Button
                            variant="outline"
                            className="border-2 border-[#f5b400] text-[#f5b400] hover:bg-[#f5b400] hover:text-[#0b0d10] font-semibold px-8 py-4 text-lg rounded-lg"
                            onClick={() => navigate('/resources')}
                        >
                            Explore Free Resources
                        </Button> */}
                    </div>

                    {/* Final Trust Indicators */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-slate-400 text-sm">
                        <div className="flex items-center justify-center gap-2">
                            <FaShieldAlt className="text-[#f5b400]" />
                            <span>DBS Certified Coaches</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <FaUsers className="text-[#f5b400]" />
                            <span>Inclusive Community</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <FaStar className="text-[#f5b400]" />
                            <span>Proven Results</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;