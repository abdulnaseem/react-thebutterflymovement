import { useEffect } from 'react';
import './founder.css';
import Hannan from '../../assets/images/hanan.jpeg';
import { FaInstagram, FaLinkedin, FaTrophy, FaGraduationCap, FaRunning } from "react-icons/fa";
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
        backgroundImage: `url(${Project1})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }

    let project2Style = {
        backgroundImage: `url(${Project2})`,
        backgroundPosition: "right 50% bottom 35%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }

    const qualificationData = [
        { id: 0, icon: <FaGraduationCap size={30} />, title: "Joint Negotiating Committee, Level 6 in Youth & Community Work." },
        { id: 1, icon: <FaGraduationCap size={30} />, title: "BA in Youth & Community Work." },
        { id: 2, icon: <FaGraduationCap size={30} />, title: "The Amateur Boxing Association of England- Boxing Assistant & Head Coach." },
    ];

    const trainingData = [
        { id: 0, icon: <FaRunning size={30} />, title: "Advanced Safeguarding Children." },
        { id: 1, icon: <FaRunning size={30} />, title: "Behaviour Management & Gang Mediation." },
        { id: 2, icon: <FaRunning size={30} />, title: "Community Sports Leadership." },
    ];

    return (
        <>  
            <div className='founder-header bg-gray-700 p-3'>
                
                <h1 className="about-title p-5 text-white text-center text-6xl font-bold tracking-tight sm:text-6xl">Founder</h1>

                <div className='founder-container'>
                    <div className='founder-section-1'>
                        <img className='founder-img' src={Hannan} alt="" />
                    </div>

                    <div className='founder-section-2'>
                        <div className='founder-text-box bg-slate-400 p-4'>
                            <p className='founder-inner-text'>
                                <strong>Abdul Hannan</strong>, otherwise known as <strong>Coach.H</strong> is a social mobiliser and a mix martial artist from Tower Hamlets. Growing up through adverse poverty and socio-economic disadvantage, he developed a passion to create progressive change on a global and local scale by empowering hearts and minds through education and exercise. Now you may be questioning what (H) stands for. There have been numerous discussions regarding this topic. Some have said it stands for humanity and while others have said hero, but I guess we’ll leave that for you to decide!
                            </p>
                        </div>

                        <div className='founder-quote-section'>
                            <div className='founder-text-box bg-gray-500 p-4'>
                                <p className='founder-inner-text text-white'>
                                    "The viewpoint that I embrace in life is with a deep understanding that youth and community work is not a 9-5 job but rather a way of life. To bring the best out of young people and the wider community, we must be willing to give back to empower all those around us."
                                </p>
                                <p className='mt-2 text-white'><strong>~ Coach.H</strong></p>
                            </div>
                            <div className='founder-text-box bg-gray-500 p-4'>
                                <p className='founder-inner-text text-white'>
                                    “The ability to empower an individual or a group can be best fostered through two streams, education and exercise.”
                                </p>
                                <p className='mt-2 text-white'><strong>~ Coach.H</strong></p>
                            </div>
                        </div>

                        <div className='fouder-social-media-links'>
                            <div class="link-icon-wrap link-icon-effect">
                                <a href="https://www.instagram.com/coach.h/" class="link-icon link-icon-social-media" target="_blank"><FaInstagram size={30} /></a>
                                <a href="https://www.linkedin.com/in/abdulhannanm/" class="link-icon link-icon-social-media" target="_blank"><FaLinkedin size={30} /></a>
                            </div>
                        </div>
                        
                    </div>
                </div>

            </div>


            <div className='achievements-section'>
                
                <div className='founded-projects'>
                    <h2 className="about-title p-5 text-center text-4xl font-bold tracking-tight sm:text-4xl">Founded Projects</h2>

                    <div className='founded-projects-section text-center px-4'>
                        <Link to="/brawlers-boxing">
                            <div className='project-1' style={project1Style}>
                                <h2 className="project-1-title p-5 text-center text-2xl font-bold tracking-tight sm:text-2xl">Brawlers Boxing</h2>
                            </div>
                        </Link>
                        <Link to='/the-grapple-hub'>
                            <div className='project-2' style={project2Style}>
                                <h2 className="project-2-title p-5 text-center text-2xl font-bold tracking-tight sm:text-2xl">The Grapple Hub</h2>
                            </div>
                        </Link>
                    </div>
                </div>

                <h2 className="sporting-achievement-title p-5 mt-10 mb-10 text-center text-4xl font-bold tracking-tight sm:text-4xl">Achievements</h2>

                <div className='sporting-achievement'>
                    <SportingAchievements />
                </div>

                <div className='qualifications mt-10'>
                    {/* <h2 className="qualifications-title p-5 text-center text-4xl font-bold tracking-tight sm:text-4xl">Qualifications</h2> */}
                    {/* <Card cardData={qualificationData} itemDivStyle="hover-none drop-shadow-md" /> */}
                    <SectionCard title="Qualifications" data={qualificationData} />
                </div>
                
                <div className='training mt-10 mb-10'>
                    {/* <h2 className="training-title p-5 text-center text-4xl font-bold tracking-tight sm:text-4xl">Training</h2> */}
                    <SectionCard title="Training" data={trainingData} />
                </div>

            </div>

        </>
    )
}

export default Founder;