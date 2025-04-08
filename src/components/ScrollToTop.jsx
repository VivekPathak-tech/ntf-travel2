import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import '../pages/Home.css'

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);
    const [progress, setProgress] = useState(100);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollProgress = scrollHeight ? (scrollTop / scrollHeight) * 100 : 0;

            setProgress(scrollProgress);
            setVisible(scrollTop > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            <button
                title="Scroll back to top"
                onClick={scrollToTop}
                className={`fixed cursor-pointer right-6 bottom-24 h-14 w-14 rounded-full z-50 flex items-center justify-center bg-black shadow-lg transition-all duration-300 
                ${visible ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
            >
                {/* Circular Background */}
                <div className="absolute inset-0 flex items-center justify-center bg-black text-white rounded-full border-4 border-white">
                    <FontAwesomeIcon style={{ fontSize: '30px' }} icon={faChevronUp} />
                </div>

                {/* Circular Progress Bar */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                    <circle
                        cx="50" cy="50" r="45"
                        stroke="#F9B545" strokeWidth="8"
                        fill="transparent" strokeDasharray="282.74"
                        strokeDashoffset={282.74 - (progress / 100) * 282.74}
                        strokeLinecap="round"
                        transform="rotate(-90 50 50)"
                    />
                </svg>
            </button>

            <div >
                <a href="https://wa.me/+917707860108" className="floating-button" target="_blank" title="Chat with us on WhatsApp">
                    <FontAwesomeIcon icon={faWhatsapp} />
                </a>
            </div>
        </>

    );
};

export default ScrollToTop;
