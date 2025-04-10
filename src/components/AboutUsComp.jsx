import React from 'react'
import about_1_1 from '../../src/assets/AboutUs/about-ntf-travel-site-1-1.jpg';
import about_1_2 from '../../src/assets/AboutUs/about-ntf-travel-site-1-2.jpg';
import about_1_3 from '../../src/assets/AboutUs/about-ntf-travel-site-1-3.png'
import '../pages/Home.css'

function AboutUsComp() {
  return (
    <div className='grid grid-cols-2 pt-25 pb-30 pl-4 gap-4'>

      <div className="relative z-20 mr-[50px] pb-[45px]">
        <div className="inline-block rounded-[20px] overflow-hidden">
          <img decoding="async" src={about_1_1} alt="about_1_1" />
        </div>

        <div className="absolute bottom-0 right-0 bg-white pt-[10px] pl-[10px] rounded-[20px]">
          <img decoding="async" src={about_1_2} alt="about_1_2" className="rounded-[20px]" />
        </div>

        <div className="absolute left-[-120px] bottom-[-30px] -z-10">
          <img decoding="async" src={about_1_3} alt="about_shape_1" />
        </div>
      </div>


      <div className='pr-6 pl-4'>
        <div className="mb-9">
          <span className="text-lg font-StyleFont text-customOrange relative">
            About NTF Travel
            <span className="relative inline-block w-[8px] h-[2px] bg-inherit rounded-full before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-inherit before:rounded-full"></span>
          </span>

          <h2 className="text-4xl font-TitleFont font-bold text-gray-800 mt-6">
            Book Travel Online with Confidence with NTF
          </h2>
        </div>

        <p className="text-[#687179] text-[16px] font-BodyFont mb-9 mt-2">
          In the sea of “travelling sites,” finding the best one could be challenging. If you are looking for one with competitive pricing and exceptional service, NTF Travel is here. Besides online travel booking, we also have a team of experts to curate personalized travel solutions for you, offline.
        </p>


        <div className="flex items-start gap-4 pb-10 border-b border-gray-400 mb-10">
          <div className="w-10 h-10 flex-shrink-0">
            <img decoding="async" src='src\assets\AboutUs\about-icon-2.svg' alt="about_media_1" className="w-full h-full object-contain" />
          </div>
          <div>
            <h3 className="text-xl font-TitleFont font-bold text-gray-800 mb-1">
              Licensed &amp; Certified
            </h3>
            <p className="text-[#687179] text-[16px] font-BodyFont">NTF Travel is registered with IATA and the government</p>
          </div>

          <div className="w-10 h-10 flex-shrink-0">
            <img decoding="async" src='src\assets\AboutUs\about-icon-1-1.svg' alt="about_media_1" className="w-full h-full object-contain" />
          </div>
          <div>
            <h3 className="text-xl font-TitleFont font-bold text-gray-800 mb-1">
              Industry Expertise
            </h3>
            <p className="text-[#687179] text-[16px] font-BodyFont">
              Travel experts and explorers are the brains behind NTF
            </p>
          </div>
        </div>

        {/* <div className="mt-4">
          <a
            className="inline-block bg-[#25256B] text-white font-BodyFont py-4 px-6 rounded hover:bg-[#1d1d59] transition-colors duration-300"
            href="pages/about.html"
          >
            DISCOVER MORE
          </a>
        </div> */}
            <button className='ot-btn'>DISCOVER MORE</button>
      </div>

    </div>
  )
}

export default AboutUsComp