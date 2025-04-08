import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import TabsComponent from './TabsComponent/TabsComponent';

const Banner = () => {
    const settings = {
        // dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        fade: true,
  cssEase: 'linear'
    };

    return (
        <div className="relative z-10 overflow-hidden">
            <Slider {...settings} className="relative">
                {[
                    {
                        bg: '/Gallery1.jpg',
                        subtitle: 'Travel Made Easy',
                        title1: 'Book Your Next',
                        title2: 'Flight with Ease',
                        text: 'Unlock hidden savings on booking flights and hotels online.\nUnleash your wanderlust with the best travel deals here.',
                        link: 'pages/book-a-flight',
                        buttonText: 'Book Now'
                    },
                    {
                        bg: '/Gallery2.jpg',
                        subtitle: 'World Awaits',
                        title1: 'Find that perfect',
                        title2: 'holiday package inside',
                        text: 'NTF Travel is your one-stop shop for booking the perfect vacation online or offline.\nGet in touch to explore your options and deals.',
                        link: 'pages/holidays-in-india',
                        buttonText: 'Explore Now'
                    },
                    {
                        bg: '/Gallery3.jpg',
                        subtitle: 'NTF Travel',
                        title1: 'Top-rated',
                        title2: 'Travel Booking Site',
                        text: 'Forget comparing travel sites for your next trip.\nBook travel online with NTF and find your escape with ease.',
                        link: 'pages/about',
                        buttonText: 'Learn More'
                    }
                ].map((slide, index) => (
                    <div key={index} className="relative h-[600px] flex items-center justify-center">
                        <div className="absolute inset-0 
                        before:content-[''] before:absolute before:top-0 before:left-0 before:w-[60%] before:h-full before:bg-[linear-gradient(90deg,rgb(180,234,187)_0%,rgb(178,227,200)_17.06%,rgb(178,221,224)_38.29%,rgba(178,240,244,0.85)_52.45%,rgba(170,236,250,0.7)_64.97%,rgba(172,229,240,0.6)_77.13%,rgba(173,226,236,0.44)_88.14%,rgba(176,216,223,0)_100%)]
                        bg-cover bg-center" style={{ backgroundImage: `url(${slide.bg})` }}></div>
                        <div className="relative max-w-lg text-left ml-30 text-black px-6 py-10 ">
                            <span className="text-customOrange text-lg capitalize " style={{ fontFamily: "var(--style-font)" }}>{slide.subtitle}</span>
                            <h1 className="text-3xl font-TitleFont mt-2 leading-tight drop-shadow-xl">{slide.title1}</h1>
                            <h1 className="text-3xl font-TitleFont mb-4 leading-tight drop-shadow-lg">{slide.title2}</h1>
                            <p className="text-sm mb-6 leading-relaxed opacity-90">{slide.text}</p>
                            <a href={slide.link} className="inline-block bg-customBlue hover:bg-customOrange text-white px-6 py-3 rounded-lg  hover:underline transition-all shadow-md text-lg font-medium duration-300 ease-in-out">
                                {slide.buttonText}
                            </a>
                        </div>
                    </div>
                ))}
            </Slider>
            <TabsComponent />
        </div>
    );
};

export default Banner;
