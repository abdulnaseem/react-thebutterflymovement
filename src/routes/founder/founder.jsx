import { useEffect } from 'react';
import CoachHistoryTimeline, { coachHTimelineData } from '../../components/timeline/CoachHistoryTimeline';
import './founder.css';
import Hannan from '../../assets/images/hanan.jpeg';
import { FaInstagram, FaLinkedin, FaTrophy, FaGraduationCap, FaRunning, FaHeart, FaUsers, FaAward } from "react-icons/fa";
import Project1 from '../../assets/images/boxing-banner.jpg';
import Project2 from '../../assets/images/tgh7.jpg';
import { styled } from 'styled-components';
import Card from '../../components/card/Card';
import { Link } from 'react-router-dom';
import SportingAchievements from '../../components/card/SportingAchievements';
import SectionCard from '../../components/card/SectionCard';

const Founder = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    let project1Style = {
        backgroundImage: `linear-gradient(rgba(11, 13, 16, 0.8), rgba(11, 13, 16, 0.8)), url(${Project1})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }

    let project2Style = {
        backgroundImage: `linear-gradient(rgba(11, 13, 16, 0.8), rgba(11, 13, 16, 0.8)), url(${Project2})`,
        backgroundPosition: "right 50% bottom 35%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }

    const qualificationData = [
        { 
            id: 0, 
            icon: <FaGraduationCap className="text-[#f5b400]" size={24} />, 
            title: "Joint Negotiating Committee, Level 6 in Youth & Community Work",
            description: "Advanced professional qualification in youth work practice"
        },
        { 
            id: 1, 
            icon: <FaGraduationCap className="text-[#f5b400]" size={24} />, 
            title: "BA in Youth & Community Work",
            description: "University degree specialising in community development"
        },
        { 
            id: 2, 
            icon: <FaGraduationCap className="text-[#f5b400]" size={24} />, 
            title: "England Boxing - Head Coach Certification",
            description: "Highest level coaching qualification from national governing body"
        },
    ];

    const trainingData = [
        { 
            id: 0, 
            icon: <FaRunning className="text-[#f5b400]" size={24} />, 
            title: "Advanced Safeguarding Children",
            description: "Specialist training in child protection and welfare"
        },
        { 
            id: 1, 
            icon: <FaRunning className="text-[#f5b400]" size={24} />, 
            title: "Behaviour Management & Gang Mediation",
            description: "Expertise in conflict resolution and youth intervention"
        },
        { 
            id: 2, 
            icon: <FaRunning className="text-[#f5b400]" size={24} />, 
            title: "Community Sports Leadership",
            description: "Leadership certification for community sports delivery"
        },
    ];

    const impactStats = [
        { icon: FaUsers, number: "500+", label: "Young People Mentored" },
        { icon: FaAward, number: "15+", label: "Years Experience" },
        { icon: FaHeart, number: "3", label: "Community Projects Founded" },
        { icon: FaTrophy, number: "15+", label: "Awards & Recognitions" }
    ];

    return (
        <>  
            {/* Founder Hero Section */}
            <div className="relative bg-gradient-to-br from-[#0b0d10] to-[#0f1115] text-[#f5f0e5] py-16 px-5 sm:px-10 lg:px-20">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(245,180,0,0.15),_transparent_50%)]" />
                
                <div className="relative max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-3 bg-[#f5b400]/10 text-[#f5b400] px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#f5b400]/20">
                            <FaHeart className="text-[#f5b400]" />
                            Meet Our Founder
                        </div>
                        <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-4">
                            Abdul <span className="text-[#f5b400]">Hannan</span>
                        </h1>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                            Social Innovator • Mixed Martial Artist • Community Leader
                        </p>
                    </div>

                    {/* Main Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                        {/* Founder Image & Social */}
                        <div className="lg:col-span-1 flex flex-col items-center">
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-gradient-to-r from-[#f5b400] to-[#e6a500] rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition duration-300"></div>
                                <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#f5b400]/20 bg-[#181a1f]">
                                    <img
                                        src={Hannan}
                                        alt="Abdul Hannan - Founder of The Butterfly Movement"
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                                    />
                                </div>
                            </div>
                            
                            {/* Social Links */}
                            <div className="mt-8 flex gap-6">
                                <a
                                    href="https://www.instagram.com/coach.h/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#181a1f] p-4 rounded-xl border border-[#1b1d22] hover:border-[#f5b400] hover:bg-[#f5b400]/10 transition-all duration-300 group"
                                >
                                    <FaInstagram size={24} className="text-slate-300 group-hover:text-[#f5b400] transition-colors" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/abdulhannanm/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#181a1f] p-4 rounded-xl border border-[#1b1d22] hover:border-[#f5b400] hover:bg-[#f5b400]/10 transition-all duration-300 group"
                                >
                                    <FaLinkedin size={24} className="text-slate-300 group-hover:text-[#f5b400] transition-colors" />
                                </a>
                            </div>

                            {/* Impact Stats */}
                            <div className="mt-8 grid grid-cols-2 gap-4 w-full">
                                {impactStats.map((stat, index) => (
                                    <div key={index} className="text-center p-4 bg-[#181a1f] rounded-xl border border-[#1b1d22]">
                                        <stat.icon className="text-[#f5b400] mx-auto mb-2" size={20} />
                                        <div className="text-2xl font-bold text-[#f5f0e5]">{stat.number}</div>
                                        <div className="text-xs text-slate-400">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Founder Story & Quotes */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Main Story */}
                            <div className="bg-gradient-to-br from-[#181a1f] to-[#0b0d10] p-8 rounded-2xl shadow-2xl border border-[#1b1d22]">
                                <h2 className="text-3xl font-bold text-[#f5f0e5] mb-4">
                                    From Tower Hamlets to <span className="text-[#f5b400]">Community Champion</span>
                                </h2>
                                <div className="space-y-4 text-slate-200 leading-relaxed">
                                    <p>
                                        <strong>Abdul Hannan</strong>, known throughout the community as <strong className="text-[#f5b400]">Coach.H</strong>, 
                                        grew up in Shadwell, Tower Hamlets, facing the challenges of socio-economic disadvantage firsthand. 
                                        These experiences forged his determination to create meaningful change through physical and educational empowerment.
                                    </p>
                                    <p>
                                        The 'H' in Coach.H has sparked much discussion-some say it stands for <strong>Hope</strong>, others for <strong>Heart</strong> or <strong>Humanity</strong>. 
                                        Perhaps it represents all these qualities and the holistic approach he brings to community transformation.
                                    </p>
                                </div>
                            </div>

                            {/* Philosophy Quotes */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-[#1b1d22] p-6 rounded-xl border-l-4 border-[#f5b400]">
                                    <div className="text-4xl text-[#f5b400]/30 mb-2">"</div>
                                    <p className="text-slate-200 italic leading-relaxed">
                                        Youth and community work isn't a 9-to-5 job-it's a way of life. To bring out the best in others, 
                                        we must be willing to give our best every day.
                                    </p>
                                    <div className="flex items-center mt-4">
                                        <div className="w-8 h-0.5 bg-[#f5b400] mr-3"></div>
                                        <span className="text-[#f5b400] font-semibold">Coach.H</span>
                                    </div>
                                </div>

                                <div className="bg-[#1b1d22] p-6 rounded-xl border-l-4 border-[#f5b400]">
                                    <div className="text-4xl text-[#f5b400]/30 mb-2">"</div>
                                    <p className="text-slate-200 italic leading-relaxed">
                                        True empowerment flows through two streams: education that enlightens the mind, 
                                        and exercise that strengthens the body and spirit.
                                    </p>
                                    <div className="flex items-center mt-4">
                                        <div className="w-8 h-0.5 bg-[#f5b400] mr-3"></div>
                                        <span className="text-[#f5b400] font-semibold">Coach.H</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Timeline Section */}
            <div className="py-16 bg-[#0f1115]">
                <div className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-20">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-black text-[#f5f0e5] mb-4">
                            Coach H's <span className="text-[#f5b400]">Journey</span>
                        </h2>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                            A timeline of community work, youth engagement, and combat sports initiatives rooted in Shadwell, Tower Hamlets.
                        </p>
                    </div>
                    <CoachHistoryTimeline items={coachHTimelineData} />
                </div>
            </div>

            {/* Founded Projects Section */}
            <div className="py-16 bg-[#0b0d10]">
                <div className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-20">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-black text-[#f5f0e5] mb-4">
                            Community <span className="text-[#f5b400]">Initiatives</span>
                        </h2>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                            Transforming lives through innovative projects that combine physical activity with personal development
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <Link to="/brawlers-boxing" className="group">
                            <div 
                                className="relative h-80 rounded-2xl overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition duration-500"
                                style={project1Style}
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d10] via-transparent to-transparent"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-8">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-8 h-1 bg-[#f5b400]"></div>
                                        <span className="text-[#f5b400] font-semibold text-sm">BOXING CLUB</span>
                                    </div>
                                    <h3 className="text-3xl font-bold text-white mb-2">Brawlers Boxing</h3>
                                    <p className="text-slate-200">
                                        Award-winning community boxing club using sport as a tool for youth engagement and personal transformation
                                    </p>
                                    <div className="mt-4 inline-flex items-center gap-2 text-[#f5b400] font-semibold group-hover:gap-3 transition-all duration-300">
                                        Explore Project <FaRunning />
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link to="/the-grapple-hub" className="group">
                            <div 
                                className="relative h-80 rounded-2xl overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition duration-500"
                                style={project2Style}
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d10] via-transparent to-transparent"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-8">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-8 h-1 bg-[#f5b400]"></div>
                                        <span className="text-[#f5b400] font-semibold text-sm">MARTIAL ARTS</span>
                                    </div>
                                    <h3 className="text-3xl font-bold text-white mb-2">The Grapple Hub</h3>
                                    <p className="text-slate-200">
                                        Premier grappling academy fostering discipline, respect, and community through Brazilian Jiu-Jitsu
                                    </p>
                                    <div className="mt-4 inline-flex items-center gap-2 text-[#f5b400] font-semibold group-hover:gap-3 transition-all duration-300">
                                        Explore Project <FaRunning />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Qualifications & Training Section */}
            <div className="py-16 bg-gradient-to-br from-[#0f1115] to-[#0b0d10]">
                <div className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Qualifications */}
                        <div>
                            <div className="text-center lg:text-left mb-8">
                                <h2 className="text-4xl font-black text-[#f5f0e5] mb-4">
                                    Professional <span className="text-[#f5b400]">Qualifications</span>
                                </h2>
                                <p className="text-slate-300">
                                    Certified expertise backed by recognized institutions and governing bodies
                                </p>
                            </div>
                            <div className="space-y-4">
                                {qualificationData.map((item) => (
                                    <div key={item.id} className="bg-[#181a1f] p-6 rounded-xl border border-[#1b1d22] hover:border-[#f5b400]/30 transition-all duration-300 group">
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-[#f5f0e5] group-hover:text-[#f5b400] transition-colors">
                                                    {item.title}
                                                </h3>
                                                <p className="text-slate-400 text-sm mt-1">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Training & Specializations */}
                        <div>
                            <div className="text-center lg:text-left mb-8">
                                <h2 className="text-4xl font-black text-[#f5f0e5] mb-4">
                                    Specialist <span className="text-[#f5b400]">Training</span>
                                </h2>
                                <p className="text-slate-300">
                                    Advanced skills and certifications for safe, effective community work
                                </p>
                            </div>
                            <div className="space-y-4">
                                {trainingData.map((item) => (
                                    <div key={item.id} className="bg-[#181a1f] p-6 rounded-xl border border-[#1b1d22] hover:border-[#f5b400]/30 transition-all duration-300 group">
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-[#f5f0e5] group-hover:text-[#f5b400] transition-colors">
                                                    {item.title}
                                                </h3>
                                                <p className="text-slate-400 text-sm mt-1">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sporting Achievements */}
            <div className="py-16 bg-[#0f1115]">
                <div className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-20">
                    <SportingAchievements />
                </div>
            </div>

            {/* Final CTA */}
            <div className="py-16 bg-gradient-to-br from-[#0b0d10] to-[#0f1115]">
                <div className="max-w-4xl mx-auto text-center px-5 sm:px-10">
                    <h2 className="text-4xl font-black text-[#f5f0e5] mb-6">
                        Inspired by the <span className="text-[#f5b400]">Journey</span>?
                    </h2>
                    <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                        Join Coach.H and our community in creating positive change through movement and mentorship
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/contact"
                            className="bg-[#f5b400] text-[#0b0d10] hover:bg-[#e6a500] font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                        >
                            Get Involved Today
                        </Link>
                        {/* <Link
                            to="/programs"
                            className="border-2 border-[#f5b400] text-[#f5b400] hover:bg-[#f5b400] hover:text-[#0b0d10] font-semibold px-8 py-4 rounded-lg transition-all duration-300"
                        >
                            Explore Programs
                        </Link> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Founder;