import { useEffect } from 'react';
import HeaderImage from '../../assets/images/boxing-community.jpeg';
import Card from '../../components/card/Card';

const WhatWeProvide = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const cardData = [
        {
            id: 0,
            header: "Saved by the Bell",
            text: "Boxing is an amazing tool to engage young people through counselling and mentoring sessions."
        },
        {
            id: 1,
            header: "Wise Workshops",
            text: "We provide informal education through accredited AQA programmes, gang awareness, better health initiatives, and aspiration workshops."
        },
        {
            id: 2,
            header: "Personal Training/Group Sessions",
            text: "Start your journey to better health today with a mix of Boxing, Brazilian Jiu Jitsu, and Muay Thai. Whether your goal is fitness, learning a martial art, or general well-being, we tailor our training to suit you."
        }
    ];

    return (
        <div className="w-full min-h-screen bg-gray-100">
            {/* Header Section */}
            <div className="relative h-[50vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${HeaderImage})` }}>
                <h1 className="text-white text-5xl md:text-6xl font-bold bg-black bg-opacity-60 px-6 py-3 rounded-lg shadow-lg">
                    What We Provide
                </h1>
            </div>

            {/* Cards Section */}
            <div className="container mx-auto px-4 py-12 text-center">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {cardData.map(({ id, header, text }) => (
                        <div key={id} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                            <div className="w-16 h-16 mx-auto flex items-center justify-center bg-gray-800 text-white text-2xl font-bold rounded-full mb-4">
                                {header.charAt(0)}
                            </div>
                            <h2 className="text-2xl font-semibold mb-4">{header}</h2>
                            <p className="text-gray-600">{text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhatWeProvide;
