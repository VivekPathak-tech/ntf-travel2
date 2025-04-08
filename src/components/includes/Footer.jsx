import React from "react";
import Button from "../Button";
import { useState } from 'react';
import ContactUs from "../ContactUs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { height, width } from "@fortawesome/free-brands-svg-icons/fa42Group";

export default function Footer() {
    const [isOpen, setIsOpen] = useState(false);
    const [Url, setUrl] = useState(null);
    const toggleMenu = (e) => {
        console.log(e.target);
        console.log(e.target.src);
        setIsOpen(!isOpen);
        if (e.target.src) {
            setUrl(e.target.src);
        }
    }
    return (
        <div className="bg-[#161921] text-white">

            {/* Footer Content */}
            <div className=" grid grid-cols-1 md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_150px_320px_1fr] p-4 pt-20 justify-between gap-6 w-full min-h-screen ">
                <div className="flex  flex-col gap-6 p-8 justify-center items-center">
                    <img src="src\assets\white-logo.png" className="rounded-full" alt="ntf-travel-white-logo" />
                    <p className="font-BodyFont">Established in 2021, NTF is a brainchild of travel lovers and
                        industry explorers. Our goal is to make travelling a friendly experience for your
                        pockets and souls. Being licensed and IATA-certified, NTF is one of the best travel
                        companies in India.
                    </p>
                    <div className='flex justify-start w-full gap-6 my-4'>
                        <Button>
                            <a href="https://www.facebook.com/ntftravel">
                                <FontAwesomeIcon style={{ fontSize: '20px' }} icon={faFacebookF} />
                            </a>
                        </Button>
                        <Button>
                            <a href="https://www.instagram.com/ntftravel">
                                <FontAwesomeIcon style={{ fontSize: '20px' }} icon={faInstagram} />
                            </a>
                        </Button>
                        <Button>
                            <a href="https://www.youtube.com/@ntftravel">
                                <FontAwesomeIcon style={{ fontSize: '20px' }} icon={faYoutube} />
                            </a>
                        </Button>
                    </div>
                </div>

                <div className="flex pt-2 flex-col gap-6 justify-start items-start">
                    <h3 className="relative before:absolute before:-bottom-4 before:border-b-2 before:border-customOrange before:w-15
                    after:absolute after:-bottom-4 after:left-16 after:border-b-2 after:border-customOrange after:w-2.5
                    text-2xl font-bold text-white font-TitleFont my-6">
                        Quick Links
                    </h3>
                    <ul className="flex ml-4 flex-col gap-4">
                        {[
                            { text: 'About Us', link: '/about' },
                            { text: 'Flight Booking', link: '#' },
                            { text: 'Hotel Booking', link: '#' },
                            { text: 'Holiday Packages', link: '#' },
                            { text: 'Blog', link: '#' },
                            { text: 'Contact Us', link: '#' }
                        ].map(({ text, link }, idx) => (
                            <li key={idx}>
                                <a href={link} className="hover:text-customOrange relative before:absolute before:-left-4 before:top-1.5 before:border before:w-2 before:h-2.5">
                                    {text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="pt-2">
                    <ContactUs></ContactUs>
                </div>

                <div className="flex p-2 flex-col gap-6 justify-start items-start">
                    <h3 className="relative before:absolute before:-bottom-4 before:border-b-2 before:border-customOrange before:w-15
                    after:absolute after:-bottom-4 after:left-16 after:border-b-2 after:border-customOrange after:w-2.5
                    text-2xl font-bold text-white font-TitleFont my-6">
                        Gallery Showcase
                    </h3>
                    <div className="grid grid-cols-3 gap-3 items-center justify-center ">
                        {
                            [1,2,3,4,5,6].map((elm, index)=>{
                                return (
                                    <div key={index} className="overflow-hidden relative hover:scale-105 transition-transform duration-300 ease-in-out" >
                                        <img onClick={toggleMenu} src={`src/assets/Gallery${elm}.jpg`} className="rounded-lg h-20 hover:border-2 hover:border-customOrange cursor-pointer" alt="Gallery ShowCase" />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            {/* Gallery ShowCase Toggle */}
            <div onClick={toggleMenu} className={` ${isOpen ? 'block' : 'hidden'} fixed top-0 right-0 w-full h-screen z-20 bg-[#000000b6] text-white`}>
                <div className="w-full h-full flex justify-center items-center">
                    <div className="relative w-[60%] h-[60%] ">
                        <img className="size-full" src={Url} alt="" />
                        <Button className='absolute top-3 right-3 hover:rotate-180 text-white' onClick={toggleMenu}>
                            <FontAwesomeIcon style={{ fontSize: '22px' }} icon={faTimes} />
                        </Button>
                    </div>
                </div>
            </div>

            {/* CopyRight Content */}
            <div className="mt-8 bg-[#212A37] p-6 xss:p-4 xss:px-10 fs:px-0 sm:px-20 flex flex-col lg:flex-row justify-between items-center">
                <p className="text-white font-BodyFont text-center md:text-left">
                    Copyright &copy; 2024 NTF Travel. All Rights Reserved by
                    <span className="text-customOrange"> NTF</span>
                </p>
                <div className="flex gap-2 lg:gap-4 mt-2 lg:mt-0">
                    {["Terms & Conditions", "Privacy Policy", "Returns & Refund Policy"].map((policy, index, array) => (
                        <a
                            href="#"
                            key={policy}
                            className={`hover:text-customOrange ${index !== array.length - 1 ? "pr-2 lg:pr-4 border-r border-white" : ""}`}
                        >
                            {policy}
                        </a>
                    ))}
                </div>
            </div>
        </div>

    );
}