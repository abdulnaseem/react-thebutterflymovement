import { useEffect } from 'react';
import './what-we-provide.css';
import HeaderImage from '../../assets/images/boxing-community.jpeg';
import Card from '../../components/card/Card';


const WhatWeProvide = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    let sectionHeader = {
        width: "100%",
        height: "50vh",
        backgroundImage: `url(${HeaderImage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }

    let cardData = [
        {
            id: 0,
            iconLetter: "",
            header: "Saved by the Bell",
            text: "Boxing is an amazing tool to engage young people support through counselling and mentoring through our sessions."
        },
        {
            id: 1,
            iconLetter: "",
            header: "Wise Workshops",
            text: "We provide a combination of informal education through accredited AQA programmes, Gang awareness / better health and finally aspiration workshops."
        },
        {
            id: 2,
            iconLetter: "",
            header: "Personal Training/Group Sessions",
            text: "Start your journey to better health today. We provide a mixture of Boxing, Brazilian Jiu Jitsu and Muay Thai. Your personal trainer will have a tailored approach towards your goal and ambitions whether it may be improving your cardio vascular fitness, muscular endurance, learning a new martial art or just improving your general health & well-being. Remember a journey of a thousand miles begins with a single step."
        }
    ];

    return (
        <>
            <div className='what-we-provide-header' style={sectionHeader}>
                <h1 className="what-we-provide-text p-5 text-6xl font-bold tracking-tight text-white sm:text-6xl drop-shadow-md">What We Provide</h1>
            </div>

            <div className='text-center bg-white mt-5'>
                <Card cardData={cardData} itemDivStyle="drop-shadow-md border-item" itemTextStyle="mt-4" />
            </div>
        </>
    )
}

export default WhatWeProvide;