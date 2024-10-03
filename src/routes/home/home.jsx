import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';
import Background from '../../assets/images/boxing.jpg';
import LogoImage from '../../assets/images/Logo-image.jpg';
import { FaAward } from "react-icons/fa";
import Button from '../../components/UI/button/button';
 
const Home = () => {

    const navigate = useNavigate();

    const handleNavigate = (url) => {
        navigate(url);
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    let sectionStyle = {
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${Background})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    }

    let achievementText = [
        {
            icon: "",
            title: "Lorem Ipsum",
            text: "Lorem ipsum odor amet, consectetuer adipiscing elit. Nibh nisl neque faucibus quis lectus placerat maximus fringilla. Volutpat feugiat tincidunt eu ullamcorper est viverra. Magna magnis sit maximus dolor iaculis semper."
        },
        {
            icon: "",
            title: "Lorem Ipsum",
            text: "Lorem ipsum odor amet, consectetuer adipiscing elit. Nibh nisl neque faucibus quis lectus placerat maximus fringilla. Volutpat feugiat tincidunt eu ullamcorper est viverra. Magna magnis sit maximus dolor iaculis semper."
        },
        {
            icon: "",
            title: "Lorem Ipsum",
            text: "Lorem ipsum odor amet, consectetuer adipiscing elit. Nibh nisl neque faucibus quis lectus placerat maximus fringilla. Volutpat feugiat tincidunt eu ullamcorper est viverra. Magna magnis sit maximus dolor iaculis semper."
        }
    ];

    return (
        <>
            <div className='main-cover' style={sectionStyle}>
                <div className='main-cover-section'>
                    <h1 className="main-cover-title p-5 text-6xl font-bold tracking-tight text-white sm:text-6xl drop-shadow-md">The Butterfly Movement - Health</h1>
                    <h2 className="main-cover-slogan p-5 text-4xl font-bold tracking-tight text-white sm:text-4xl drop-shadow-md">Educate · Empower · Exercise</h2>
                    <p className='main-cover-text p-5 tracking-tight drop-shadow-md'>
                        <span>
                            <strong>The Butterfly Movement</strong> offers an integrated
                            approach to youth and community
                        </span>
                        <span>
                            work through physical empowerment, bringing a fresh wave of
                            movement that 
                        </span>
                        <span>
                            benefits clients, beneficiaries, and the wider community.
                        </span>
                    </p>
                    <Button className="ms-5 bg-white text-black hover:drop-shadow-[0_8px_8px_rgba(246,195,36,0.7)]" style="original" onClick={() => handleNavigate('/what-we-provide')}>WHAT WE PROVIDE</Button>
                </div>
            </div>

            <div className='grid-container'>
                <div className='grid-item'>
                    <img className='grid-logo-image' src={LogoImage} alt="" />
                </div>
                
                <div className='grid-item'>
                    <h3 className='grid-header sm:text-2xl'>Small Movements, Big Change</h3>
                    <p className='grid-text'>
                        Inspired by the pioneers of the award-winning community interest club <strong>Brawlers Boxing</strong> and the recently founded <strong>The Grapple Hub</strong>, <strong>The Butterfly Movement</strong> aims to provide an integrated approach to youth & community work through physical empowerment. This venture promises to bring a new wave of movement keeping the wider community, our clients, and beneficiaries in mind. We are a limited company with core community interest values; our founding members and team are all driven to bring about positive change. Here at The Butterfly Movement, we believe that small movements can bring about huge changes, thus, we have made it our tagline: Small Movements, Big Change.
                    </p>
                    <Button className="text-white ms-7 bg-gray-900 hover:drop-shadow-md" style="original" onClick={() => handleNavigate('/about')}>LEARN MORE</Button>
                </div>
            </div>
{/* 
            <h2 className="achievement-title pt-5 text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl drop-shadow-md text-center">Achievements</h2>
            <div class="grid-achievement-container">
                {
                    achievementText.map((achievement, index) => {
                        return (
                            <div class="grid-achievement-item bg-gray-600 mt-1" key={index}>
                                <FaAward className='grid-achievement-award' />
                                <h3 className='grid-achievement-header text-white sm:text-2xl'>{achievement.title}</h3>
                                <p className='grid-achievement-text text-white sm:text-sm'>{achievement.text}</p>
                            </div>
                        )
                    })
                }
            </div> */}
        </>
    )
}

export default Home;