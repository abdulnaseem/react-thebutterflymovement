import { useEffect } from 'react';
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

    const isMobile = useMediaQuery({ maxWidth: "989px" });
    
    let info = [
        {
            text: `<strong>The Butterfly Effect</strong> is a theory which states that everything in existence is connected, and one component cannot help, but affect the entirety of the other components, which comprise the universe. Think of it this way: small things turn into big things… It is the little actions that add up to make significant changes. By focusing on small daily efforts, in time, they will mount up to tremendous change. Our movement believes that one should never underestimate the power of their actions, as one small gesture can change a person’s life or start a movement of change. The butterfly has been a symbol of transformation, hope, and rebirth for thousands of years, especially with its unique life cycle from larva to caterpillar to chrysalis and finally to a beautiful, flying butterfly.`,
        },
        {
            text: `<strong>Muhammed Ali (1942 - 2016)</strong> was a professional boxer and activist. He is regarded as one of the most significant sports figures of the 20th century and is often regarded as the greatest heavyweight boxer of all time. Besides his phenomenal boxing ability and achievements, Muhammed Ali was an activist and humanitarian. He received the Liberty Medal for his long-time role as an advocate for humanitarian causes, civil rights, and religious freedom. Ali was recognized as the "Champion of Freedom" for his unrelenting and persistent fight for equality, peace, and justice in every area of life, all over the world. Particularly his catchphrase <strong>"Float like a Butterfly, Sting Like a Bee"</strong> resonates with our team.`,
        },
        {
            text: `<strong>The Butterfly Guard</strong> is one of the oldest and most traditional forms of guard playing in Jiu Jitsu - The Gentle Art is often labelled as a classic guard. The butterfly hooks are designed to jeopardize the base of the fighter. Although grappling has been a part of humanity since combat sports began, not much is shown about guard work in ancient paintings or scripts, and judo was thought to be the first martial art to truly open the awareness of this fighting form. The hooks guard (Butterfly guard) seems to have been one of the first recorded guard styles, a natural transition from a standing up position to the ground. Today the butterfly guard is commonly used by Jiu Jitsu practitioners all over the world and is part of The Butterfly Buard’s significant history.`,
        }
    ];

    let cardData = [
        {
            id: 1,
            iconLetter: "B",
            header: "BE YOU",
            text: "Our team encourages our members to embrace individuality and by doing so they now can approach life with a smile and truly make the world their oyster."
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
            text: "The best way to learn is through teaching others. While this helps memory recall, it also creates a sense of communal support."
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
            text: "Not only empowering oneself, but also those around you through education and exercise."
        },
        {
            id: 6,
            iconLetter: "R",
            header: "REST",
            text: "The importance of rest is crucial to sustain our bodies as well as our mental health."
        },
    ];

    const web = () => {
        return (
            <div className="grid-container-about">
                <div className="grid-item-about">
                    <p className='grid-item-text' dangerouslySetInnerHTML={{ __html: info[1].text }} />
                </div>
                <div class="grid-item-about">
                    <img className='grid-item-butterfly-img muhammad-ali' src={MuhammadAli} alt="" />
                </div>
            </div>
        )
    }

    const mobile = () => {
        return (
            <div className="grid-container-about">
                <div className="grid-item-about">
                    <img className='grid-item-butterfly-img muhammad-ali' src={MuhammadAli} alt="" />
                </div>
                <div className="grid-item-about">
                    <p className='grid-item-text' dangerouslySetInnerHTML={{ __html: info[1].text }} />
                </div>
            </div>
        )
    }

    return (
        <>
            <h1 className="about-title p-5 text-center text-6xl font-bold tracking-tight sm:text-6xl">About</h1>

            <div className="grid-container-about">
                <div className="grid-item-about">
                    <img className='grid-item-butterfly-img butterfly' src={Butterfly} alt="" />
                </div>
                <div className="grid-item-about">
                    <p className='grid-item-text' dangerouslySetInnerHTML={{ __html: info[0].text }} />
                </div>
            </div>

            {
                isMobile ? mobile() : web()
            }

            <div className="grid-container-about">
                <div className="grid-item-about">
                    <img className='grid-item-butterfly-img butterfly-guard' src={ButterflyGuard} alt="" />
                </div>
                <div className="grid-item-about">
                    <p className='grid-item-text' dangerouslySetInnerHTML={{ __html: info[2].text }} />
                </div>
            </div>

            <div className='bg-gray-200 text-center'>
                <h2 className="grid-header-card p-5 text-center text-4xl font-bold tracking-tight sm:text-4xl bg-gray-200">Values and Beliefs</h2>
                <Card cardData={cardData} style="bg-gray-200" />
                <Button className="mb-10 drop-shadow-sm text-3xl bg-white hover:bg-black hover:text-white">FLY</Button>
            </div>
            
        </>
    )
}

export default About;