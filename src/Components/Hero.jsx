import React, { useState, useEffect } from 'react';
import BannerIMG from '../assets/black gst banner.jpg';

const Hero = () => {
    const services = [
        "Marketing",
        "Development",
        "Design",
        "Latest Tech Stack",
        "24/7 Support",
        "Brand Photoshoot",
        "Brand Building"
    ];

    const [currentService, setCurrentService] = useState("");
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setCurrentService(services[index]);
        setDisplayedText("");

        const textInterval = setInterval(() => {
            setDisplayedText((prev) => {
                const nextChar = currentService[prev.length];
                if (nextChar) {
                    return prev + nextChar;
                } else {
                    clearInterval(textInterval);
                    return prev;
                }
            });
        }, 100);

        const serviceInterval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % services.length);
        }, 3000);

        return () => {
            clearInterval(textInterval);
            clearInterval(serviceInterval);
        };
    }, [index, currentService]);

    return (
<div className="hero-banner relative py-12 bg-gray-100 sm:py-16 lg:py-20 xl:pt-32 xl:pb-44">
            <div className="absolute inset-0 hidden lg:block">
                <img className="object-cover object-right-bottom w-full h-full" src={BannerIMG} alt="" />
            </div>

            <div className="relative px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-xl mx-auto text-center lg:max-w-md xl:max-w-lg lg:text-left lg:mx-0">
                    <h1 className="text-5xl font-bold text-gray-900 lg:text-gray-200 sm:text-5xl xl:text-5xl xl:leading-tight">We change brands through</h1>
                    
                    <div className='border-b-2 border-gray-200 mt-4'></div>

                    {/* Consistent height for service text */}
                    <h2 
                        className="text-3xl font-bold text-gray-900 lg:text-gray-200 sm:text-4xl xl:text-5xl xl:leading-tight mt-4"
                        style={{ minHeight: '1.5em' }} // Set min-height to prevent resizing
                    >
                        {displayedText}
                    </h2>

                    <div className="flex items-center justify-center mt-8 space-x-5 xl:mt-16 lg:justify-start">
                        <a
                            href="#"
                            title=""
                            className="
                                inline-flex
                                items-center
                                justify-center
                                px-3
                                py-3
                                text-base
                                font-bold
                                leading-7
                                text-gray-900
                                transition-all
                                duration-200
                                bg-white
                                border border-transparent
                                sm:px-6
                                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 focus:ring-offset-gray-100
                                hover:bg-gray-200
                                border-black
                            "
                            role="button"
                        >
                            Let's Discuss now
                        </a>
                    </div>
                </div>
            </div>

            <div className="mt-8 lg:hidden">
                <img className="object-cover w-full h-full" src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/hero/1/bg.png" alt="" />
            </div>
        </div>
    );
};

export default Hero;
