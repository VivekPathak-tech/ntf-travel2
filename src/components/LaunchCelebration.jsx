import React from 'react';
import coupon1 from '../assets/coupon-1-1.jpg';
import coupon2 from '../assets/coupon-2.jpg';

export default function LaunchCelebration() {
    return (
        <>
            <div className="flex flex-col lg:flex-row p-6 gap-4 my-10 w-full">
                {/* First Offer Card */}
                <div className="w-full lg:w-1/2">
                    <div className="sm:rounded-[20px] min-h-75 overflow-hidden bg-left bg-no-repeat bg-cover sm:p-12 p-[40px_15px] rounded-[10px]" style={{ backgroundImage: `url(${coupon2})` }}>
                        <h2 className="text-white font-bold font-body font-TitleFont text-[40px] md:text-4xl sm:text-[32px]">
                            LAUNCH CELEBRATION
                        </h2>
                        <h3 className="text-white font-TitleFont max-w-[274px] mt-5 mb-10 text-xl">
                            Limited Time Deals! Save 10% on Flights
                        </h3>
                        <div
                            className="bg-white text-center inline-block w-35 h-12 text-customOrange hover:bg-customOrange hover:text-white px-6 py-3 rounded transition-colors duration-300"
                        >
                            BOOK NOW
                        </div>
                    </div>
                </div>

                {/* Second Offer Card */}
                <div className="w-full lg:w-1/2">
                    <div className="sm:rounded-[20px] min-h-75 overflow-hidden bg-left bg-no-repeat bg-cover sm:p-12 p-[40px_15px] rounded-[10px]" style={{ backgroundImage: `url(${coupon1})` }}>
                        <h2 className="text-white font-bold uppercase font-body font-TitleFont text-[40px] md:text-4xl sm:text-[32px]">
                            Welcome Savings
                        </h2>
                        <h3 className="text-white font-TitleFont max-w-[274px] mt-5 mb-10 text-xl">
                            Sign-up &amp; Unlock! Exclusive Travel Deals
                        </h3>
                        <div
                            className="bg-white text-center inline-block w-35 h-12 text-customOrange hover:bg-customOrange hover:text-white px-6 py-3 rounded transition-colors duration-300 cursor-pointer"
                            id="Notlogin"
                            onClick={() => openLoginModal()}
                        >
                            Register
                        </div>
                        {/* <a href="pages/login.html" className="ot-btn">Register</a> */}
                    </div>
                </div>
            </div>
        </>
    )
}

