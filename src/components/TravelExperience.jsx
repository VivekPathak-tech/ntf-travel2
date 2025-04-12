import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import unforgettable from '../assets/why-book-online-with-ntf-travel-550x597.png'
import unforgettable2 from '../assets/why-book-online-with-ntf-travel-276x300.png'

function TravelExperience() {
    return (
        <section className="w-full py-10 flex flex-col lg:flex-row items-center justify-between">
            <div className="w-full lg:w-1/2 px-4">
                <div className="mb-9">
                    <span className="text-lg font-medium font-StyleFont text-customOrange flex items-center gap-2">
                        Why Book Online with NTF Travel?
                        <span className="inline-block relative ml-1 mt-1 w-10 h-[2px] bg-customOrange before:absolute before:left-11 before:w-2 before:h-[2px] before:bg-customOrange "></span>
                        <span className="inline-block relative ml-2 mt-1 w-2 h-[2px] bg-customOrange before:absolute before:left-3 before:w-2 before:h-[2px] before:bg-customOrange "></span>
                    </span>
                    <h2 className="text-3xl font-bold font-TitleFont text-black mt-4">
                        To create Unforgettable Travel Experiences
                    </h2>
                </div>
                <p className="text-gray-500 text-base mb-12">
                    We believe every trip is different, for everyone. At NTF Travel, we strive to bring you one of the best travel sites for ease of booking your next business or holiday trip.
                </p>
                <div className="grid grid-cols-2 gap-x-5 gap-y-10 max-w-[324px] lg:max-w-none">
                    {[
                        "Effortless Booking",
                        "Best-Valued Deals",
                        "Expertise At Your Service",
                        "Curated Travel Experiences",
                        "Safe and Secure",
                        "Online and Offline"
                    ].map((title, index) => (
                        <div key={index} className="flex gap-5 items-start text-sm max-w-[324px]">
                            <div className="w-20 h-20 flex items-center justify-center border-[5px] border-customOrange text-customOrange text-2xl rounded-full shrink-0">
                                <FontAwesomeIcon icon={faCheck} />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold font-TitleFont text-black">{title}</h3>
                                <p className="text-gray-600 text-sm">
                                    {/* Description can be dynamic if you pull it from an array */}
                                    {/* Replace these with appropriate descriptions */}
                                    Description text for {title}.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full lg:w-1/2 mt-10 lg:mt-0 px-4 flex justify-center">
                <img
                    src={unforgettable}
                    srcSet={`${unforgettable} 550w, ${unforgettable2} 276w`}
                    sizes="(max-width: 550px) 100vw, 550px"
                    width={550}
                    height={597}
                    alt="Why Book Online with NTF Travel"
                    className="w-full max-w-[550px] h-auto"
                />
            </div>
        </section>
    )
}

export default TravelExperience

