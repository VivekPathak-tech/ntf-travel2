import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft, faMapMarkerAlt, faPlay } from "@fortawesome/free-solid-svg-icons";
import GoaImage from "../assets/top-destination-goa-indias-paradise.jpg";
import italy from "../assets/italy-index.jpg";
import dreamCity from "../assets/top-destination-london-a-dream-city.jpg";

import goaThumbnail from "../assets/goa-square-thumbnail.png";
import italyThumbnail from "../assets/italy-square-thumbnail.png";
import londonThumbnail from "../assets/london-square-thumbnail.png";

const TravelDestination = () => {
    const destinations = [
        {
            name: "ITALY",
            description:
                "From the canals of Venice to the rolling hills of Tuscany, Italy invites you to a world of endless charm.",
            image: italy,
            link: "#",
        },
        {
            name: "GOA",
            description: "Love exploring cultures, history, and having fun?",
            image: GoaImage,
            link: "#",
        },
        {
            name: "LONDON",
            description:
                "London presents a vibrant mix of culture, history, and iconic landmarks.",
            image: dreamCity,
            link: "#",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? destinations.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === destinations.length - 1 ? 0 : prevIndex + 1
        );
    };

    // setTimeout(()=>{
    //     handlePrev();
    // },10000)

    return (
        <section className="my-15 py-25  bg-[#F5F5F5] " >
            <h3 className="text-customOrange text-center text-base font-StyleFont mb-4">Popular Destinations to Travel</h3>
            <h3 className="text-4xl text-center font-TitleFont font-bold mb-6">Top Travel Destinations</h3>
            <div className="flex flex-col justify-center items-start lg:flex-row lg:justify-between lg:items-start max-w-full mx-auto p-2 sm:p-4 gap-5">
                <div className="flex-1">
                    <h3 className="text-customOrange text-base font-TitleFont uppercase pb-2 lg:pb-4">LOCATIONS</h3>
                    <h1 className="text-3xl font-bold font-TitleFont pb-4 lg:pb-6 leading-tight">{destinations[currentIndex].name}</h1>
                    <p className="text-gray-600 text-lg text-justify leading-relaxed lg:h-25 mb-8">
                        {destinations[currentIndex].description}
                    </p>
                    <div className="flex lg:pt-25 gap-3">
                        <button
                            onClick={handlePrev}
                            className="size-14 rounded-full border-2 text-customOrange flex items-center justify-center text-xl hover:text-white hover:bg-orange-400 transition"
                        >
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </button>
                        <button
                            onClick={handleNext}
                            className="size-14 rounded-full border-2 text-customOrange flex items-center justify-center text-xl hover:text-white hover:bg-orange-400 transition"
                        >
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </div>
                </div>

                <div className="flex w-full items-center justify-center lg:justify-center flex-4 overflow-hidden">
                    {destinations.map((destination, index) => (
                        <div
                            onClick={() => setCurrentIndex(index)}
                            key={destination.name}
                            className={`relative w-80 h-[400px] rounded-lg overflow-hidden shadow-md transition-all ease-in duration-300 ${index === currentIndex ? "scale-x-100 opacity-100" : "scale-x-70 w-[200px] opacity-50"
                                }`}
                        >
                            <img
                                src={destination.image}
                                alt={destination.name}
                                className="w-full min-w-40 h-full object-cover"
                            />
                            <div className="absolute left-0 top-0 w-full h-full flex flex-col items-center justify-center bg-[#00000070] bg-opacity-100 text-white p-3">
                                <div className="flex justify-center gap-1">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-2xl mb-1" />
                                    <h3 className="text-3xl font-TitleFont font-bold mb-4">{destination.name}</h3>
                                </div>
                                <p className="text-sm mb-12">{destination.description}</p>
                                <a
                                    href={destination.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`inline-block px-5 py-2 border-2 text-white rounded text-base ${currentIndex == index ? 'hover:bg-customOrange' : 'pointer-events-none'} transition`}
                                >
                                    EXPLORE {destination.name}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                    <div className="w-full lg:w-80 h-[400px] relative rounded-lg overflow-hidden shadow-md">
                        <div className="before:absolute before:top-0 before:left-0 before:size-full before:bg-[#00000070]"></div>
                        <div className="flex justify-center items-center absolute top-[50%] left-[50%] -translate-[50%] rounded-full size-15 bg-customOrange border-2 border-white " >
                            <FontAwesomeIcon icon={faPlay} className="text-2xl text-white " />
                        </div>
                        <img src={italyThumbnail} className="size-full " alt="Thumbnail" />
                        <img src={goaThumbnail} className="size-full " alt="Thumbnail" />
                        <img src={londonThumbnail} className="size-full " alt="Thumbnail" />
                    </div>
            </div>
        </section>
    );
};

export default TravelDestination;