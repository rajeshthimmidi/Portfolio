import React from "react";
import avatarImg from "../../assets/myhome2.jpg";


const Home = () => {
  return (
      <div className="text-white flex w-full justify-between p-10 md:p-20 flex-col md:flex-row items-center">
      <div className="md:w-3/4 md:pt-10 order-2 md:order-1">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
         Hello, I'm Rajesh
        </h1><br />
        <p className="text-sm md:text-2xl tracking-tight ">
          Results-driven software developer with 2 years of hands-on experience in Java, React.js, and JavaScript. Adept at designing and building scalable web applications, I am committed to delivering high-quality, efficient solutions that drive organizational success. Passionate about continuous learning and innovation, I strive to enhance my technical expertise while contributing to impactful, forward-thinking projects.
        </p>
        <button className="mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Contact Me
        </button>
      </div>
      <div className="order-1 md:order-2 flex justify-center md:justify-start w-full md:w-2/5">
        <img className="w-3/6 ml-0 md:ml-12 rounded-full object-cover aspect-square border-4 border-[#465697] shadow-lg" src={avatarImg} alt="" />
      </div>
    </div>
  );
};

export default Home;