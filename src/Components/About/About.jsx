import React from "react";
import AboutImg from "../../assets/myphoto.jpeg";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold text-left md:text-left ml-0 md:ml-0">About</h2><br />
        <div className="md:flex flex-row flex-nowrap items-start">
          <img className="md:h-80 md:mr-20 md:mb-0 md:shrink-0 md:mt-6" src={AboutImg} alt="About img" />
          <ul className="flex-1">
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend Developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Experienced in building responsive and interactive user
                  interfaces using React, Redux, and modern JavaScript. Skilled in
                  translating design mockups into high-quality code, optimizing
                  performance, and ensuring cross-browser compatibility.
                </p>
              </span>
            </div>
           
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Backend Developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Skilled in developing robust backend services and APIs using
                  Java and Node.js. Experienced in integrating
                  third-party services, implementing authentication, and ensuring
                  secure, high-performance server-side logic.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;