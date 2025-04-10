import React from "react";
import Icon_1 from "../assets/IATA Accredited Agent.svg";
import Icon_2 from "../assets/authorities-1075208.svg";
import Icon_3 from "../assets/international-travel-partners.svg";
import Icon_4 from "../assets/best-valued.svg";
import { height } from "@fortawesome/free-brands-svg-icons/fa42Group";

const AboutUsIcon = () => {
  return (
    <div className="flex flex-wrap justify-between gap-y-6">
      {[
        {
          icon: Icon_1,
          title: "IATA Certified",
          text: "IATA Certified",
          imgStyle: {height: "80px", width: "80px"},
        },
        {
          icon: Icon_2,
          title: "Licensed by the Govt",
          text: "Licensed by the Govt",
          imgStyle: {height: "30px", width: "30px"},
        },
        {
          icon: Icon_3,
          title: "International Travel Partners",
          text: "International Travel Partners",
          imgStyle: {height: "30px", width: "30px"},
        },
        {
          icon: Icon_4,
          title: "Best Valued Solutions",
          text: "Best-Valued Solutions",
          imgStyle: {height: "30px", width: "30px"},
        },
      ].map((item, index) => (
        <div
          key={index}
          className={`w-1/2 lg:w-1/4 text-center px-4 mb-10 relative  ${
            index !== 3 ? "lg:border-r lg:border-dashed lg:border-gray-400" : ""
          } `}
        >
          <div className="relative flex justify-center items-center w-20 h-20 bg-[rgba(249,181,69,0.1)] rounded-full mx-auto mb-6 mt-6">
            <div className="absolute inset-[10px] bg-[rgba(249,181,69,0.1)] rounded-full"></div>
            <img
              src={item.icon}
              style={item.imgStyle}
              alt="icon"
              className="relative z-10 mx-auto"
            />
          </div>
          <h2 className="text-lg font-TitleFont font-semibold mb-12">{item.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default AboutUsIcon;
