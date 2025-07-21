import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaUsers, FaDumbbell, FaCalendarAlt, FaBell, FaChalkboardTeacher, FaUserFriends } from 'react-icons/fa';
import Button from '../../components/UI/button/button';
import Background from '../../assets/images/boxing.jpg';
import LogoImage from '../../assets/images/logo.png';

const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-black text-white min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[70vh] md:h-[90vh] flex flex-col justify-center items-center text-center px-5 md:px-10">
                <div className="absolute inset-0 bg-cover bg-center md:bg-fixed" style={{ backgroundImage: `url(${Background})`, opacity: 0.3 }}></div>
                <h1 className="text-4xl md:text-6xl font-bold drop-shadow-md relative">The Butterfly Movement - Health</h1>
                <h2 className="text-2xl md:text-4xl mt-2 drop-shadow-md relative">Educate · Empower · Exercise</h2>
                <p className="drop-shadow-md mt-3 md:px-[100px]">The Butterfly Movement offers an integrated approach to youth and community work through physical empowerment, bringing a fresh wave of movement that benefits clients, beneficiaries, and the wider community.</p>
                <Link to="/brawlers-boxing" className="mt-6 max-w-md w-full" aria-label="View Brawlers Boxing class details">
                    <div className="animate-pulse bg-white/80 text-black px-6 py-4 rounded-xl shadow-lg transition hover:shadow-xl hover:bg-white cursor-pointer">
                        <h3 className="text-lg md:text-xl font-semibold">🥊 Brawlers Boxing – Saturdays</h3>
                        <p className="mt-2 text-sm md:text-base"><strong>12:45pm – 1:45pm</strong> — Ages 5–10</p>
                        <p className="text-sm md:text-base"><strong>1:45pm – 2:45pm</strong> — Ages 11–17</p>
                    </div>
                </Link>
                <Button
                    className="mt-5 bg-white text-black hover:bg-gray-300 relative"
                    onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('programs').scrollIntoView({ behavior: 'smooth' });
                    }}
                >
                    Discover Our Programs
                </Button>            
            </section>
            
            {/* About Section */}
            <section className="py-10 md:py-20 px-5 md:px-10 flex flex-col md:flex-row items-center text-center md:text-left bg-[#111827] text-[#E5E7EB]">
                <img src={LogoImage} alt="Logo" className="w-2/3 md:w-1/3 max-w-xs drop-shadow-lg" />
                <div className="md:ml-10 mt-5 md:mt-0">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#FACC15]">Small Movements, Big Change</h2>
                    <p className="mt-4 text-base md:text-md leading-relaxed">
                        Inspired by the pioneers of the award-winning community interest club <b className="text-[#FACC15]">Brawlers Boxing</b> and the recently founded 
                        <b className="text-[#FACC15]"> The Grapple Hub</b>, <b className="text-[#FACC15]">The Butterfly Movement</b> aims to provide an integrated approach to youth & community work 
                        through physical empowerment. This venture promises to bring a new wave of movement keeping the wider community, our clients, 
                        and beneficiaries in mind. We are a limited company with core community interest values; our founding members and team are 
                        all driven to bring about positive change. Here at The Butterfly Movement, we believe that small movements can bring about 
                        huge changes, thus, we have made it our tagline: <span className="text-[#FACC15] font-semibold">Small Movements, Big Change.</span>
                    </p>
                    <Button className="mt-4 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black hover:from-yellow-400 hover:to-yellow-300 transition-all shadow-md px-6 py-2 rounded-md" onClick={() => navigate('/about')}>Learn More</Button>
                </div>
            </section>

            
            {/* Programs Section */}
            {/* <section className="py-10 md:py-20 bg-gray-800 px-5 md:px-10 text-center">
                <h2 className="text-3xl md:text-4xl font-bold">Our Programs</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    <div className="p-6 bg-gray-900 rounded-lg hover:scale-105 transition">
                        <FaUsers className="text-3xl md:text-4xl mx-auto text-yellow-500" />
                        <h3 className="text-xl md:text-2xl font-bold mt-4">Community Engagement</h3>
                        <p className="mt-2 text-sm md:text-base">Connecting youth through sports and mentorship.</p>
                    </div>
                    <div className="p-6 bg-gray-900 rounded-lg hover:scale-105 transition">
                        <FaDumbbell className="text-3xl md:text-4xl mx-auto text-red-500" />
                        <h3 className="text-xl md:text-2xl font-bold mt-4">Strength & Conditioning</h3>
                        <p className="mt-2 text-sm md:text-base">Physical training for all levels.</p>
                    </div>
                    <div className="p-6 bg-gray-900 rounded-lg hover:scale-105 transition">
                        <FaCalendarAlt className="text-3xl md:text-4xl mx-auto text-blue-500" />
                        <h3 className="text-xl md:text-2xl font-bold mt-4">Workshops & Events</h3>
                        <p className="mt-2 text-sm md:text-base">Join our upcoming sessions.</p>
                    </div>
                </div>
            </section> */}

            {/* Programs Section */}
            <section id="programs" className="py-10 md:py-20 bg-gray-800 px-5 md:px-10 text-center">
                <h2 className="text-3xl md:text-4xl font-bold">Our Programs</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    <div className="p-6 bg-gray-900 rounded-lg hover:scale-105 transition">
                        <FaBell className="text-3xl md:text-4xl mx-auto text-yellow-500" />
                        <h3 className="text-xl md:text-2xl font-bold mt-4">Saved by the Bell</h3>
                        <p className="mt-2 text-sm md:text-md">Boxing is an amazing tool to engage young people through counselling and mentoring sessions.</p>
                    </div>
                    <div className="p-6 bg-gray-900 rounded-lg hover:scale-105 transition">
                        <FaChalkboardTeacher className="text-3xl md:text-4xl mx-auto text-red-500" />
                        <h3 className="text-xl md:text-2xl font-bold mt-4">Wise Workshops</h3>
                        <p className="mt-2 text-sm md:text-md">We provide informal education through accredited AQA programmes, gang awareness, better health initiatives, and aspiration workshops.</p>
                    </div>
                    <div className="p-6 bg-gray-900 rounded-lg hover:scale-105 transition">
                        <FaDumbbell className="text-3xl md:text-4xl mx-auto text-blue-500" />
                        <h3 className="text-xl md:text-2xl font-bold mt-4">Personal Training/Group Sessions</h3>
                        <p className="mt-2 text-sm md:text-md">Start your journey to better health today with a mix of Boxing, Brazilian Jiu Jitsu, and Muay Thai. Whether your goal is fitness, learning a martial art, or general well-being, we tailor our training to suit you.</p>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;
