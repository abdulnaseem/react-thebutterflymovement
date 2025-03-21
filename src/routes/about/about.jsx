import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './about.css';
import Butterfly from '../../assets/images/butterfly1.jpeg';
import MuhammadAli from '../../assets/images/muhammad-ali.jpeg';
import ButterflyGuard from '../../assets/images/butterfly-guard.jpeg';
import { useMediaQuery } from 'react-responsive';
import Card from '../../components/card/Card';
import Button from '../../components/UI/button/button';

const About = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const navigate = useNavigate();

    const isMobile = useMediaQuery({ maxWidth: "989px" });
    
    let info = [
        {
            text: `<strong>The Butterfly Effect</strong> is a theory which states that everything in existence is connected, and one component cannot help but affect the entirety of the other components that comprise the universe. Think of it this way: small things turn into big things… It is the little actions that add up to make significant changes. By focusing on small daily efforts, in time, they will mount up to tremendous change. Our movement believes that one should never underestimate the power of their actions, as one small gesture can change a person’s life or start a movement of change. The butterfly has been a symbol of transformation, hope, and rebirth for thousands of years, especially with its unique life cycle from larva to caterpillar to chrysalis and finally to a beautiful, flying butterfly.`,
        },
        {
            text: `<strong>Muhammad Ali (1942 - 2016)</strong> was a professional boxer and activist. He is regarded as one of the most significant sports figures of the 20th century and is often considered the greatest heavyweight boxer of all time. Besides his phenomenal boxing ability and achievements, Muhammad Ali was an activist and humanitarian. He received the Liberty Medal for his long-time role as an advocate for humanitarian causes, civil rights, and religious freedom. Ali was recognized as the "Champion of Freedom" for his unrelenting and persistent fight for equality, peace, and justice in every area of life, all over the world. Particularly, his catchphrase <strong>"Float like a Butterfly, Sting Like a Bee"</strong> resonates with our team.`,
        },
        {
            text: `<strong>The Butterfly Guard</strong> is one of the oldest and most traditional forms of guard playing in Jiu Jitsu. The Gentle Art is often labeled as a classic guard. The butterfly hooks are designed to jeopardize the base of the fighter. Although grappling has been a part of humanity since combat sports began, not much is shown about guard work in ancient paintings or scripts, and judo was thought to be the first martial art to truly open the awareness of this fighting form. The hooks guard (Butterfly guard) seems to have been one of the first recorded guard styles, a natural transition from a standing position to the ground. Today, the butterfly guard is commonly used by Jiu Jitsu practitioners all over the world and is part of The Butterfly Guard’s significant history.`,
        }
    ];

    let cardData = [
        {
            id: 1,
            iconLetter: "B",
            header: "BE YOU",
            text: "Our team encourages our members to embrace individuality. By doing so, they can approach life with a smile and truly make the world their oyster."
        },
        {
            id: 2,
            iconLetter: "U",
            header: "ULTRA MINDSET",
            text: "Nurturing a ‘can do’ attitude."
        },
        {
            id: 3,
            iconLetter: "T",
            header: "TEACH OTHERS",
            text: "The best way to learn is through teaching others. This not only helps memory recall but also creates a sense of communal support."
        },
        {
            id: 4,
            iconLetter: "T",
            header: "TARGETS",
            text: "Setting realistic and attainable goals (focusing on SMART goals)."
        },
        {
            id: 5,
            iconLetter: "E",
            header: "EMPOWERMENT",
            text: "Not only empowering oneself but also those around you through education and exercise."
        },
        {
            id: 6,
            iconLetter: "R",
            header: "REST",
            text: "The importance of rest is crucial to sustaining our bodies as well as our mental health."
        },
    ];

    const handleNavigate = () => {
        navigate('/contact');
    }

    return (
        <>
            <div className="max-w-7xl mx-auto px-6 py-10">
                <h1 className="about-title text-center text-6xl font-bold tracking-tight mb-10">About</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <img className='rounded-lg shadow-lg' src={Butterfly} alt="Butterfly" />
                    <p className='text-lg leading-relaxed' dangerouslySetInnerHTML={{ __html: info[0].text }} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-10">
                    <img className='rounded-lg shadow-lg' src={MuhammadAli} alt="Muhammad Ali" />
                    <p className='text-lg leading-relaxed' dangerouslySetInnerHTML={{ __html: info[1].text }} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-10">
                    <img className='rounded-lg shadow-lg' src={ButterflyGuard} alt="Butterfly Guard" />
                    <p className='text-lg leading-relaxed' dangerouslySetInnerHTML={{ __html: info[2].text }} />
                </div>
            </div>
            <div className='bg-gray-100 text-center py-10 mt-10 rounded-lg shadow-md'>
                <div className='max-w-7xl mx-auto px-6 py-10'>
                    <h2 className="text-4xl font-bold tracking-tight mb-6">Values and Beliefs</h2>
                    <Card cardData={cardData} style="bg-gray-100" itemDivStyle="border-item" />
                    <Button onClick={handleNavigate} className="mt-6 px-8 py-3 text-xl bg-black text-white hover:bg-gray-800 rounded-lg shadow-md">FLY</Button>
                </div>
            </div>
        </>
    )
}

export default About;
