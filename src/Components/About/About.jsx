import React from "react";
import AboutImg from "../../assets/about.png";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
  className="text-white flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-[#10121a] to-[#23263a] border border-[#465697] shadow-2xl mx-2 md:mx-20 rounded-3xl px-6 md:px-16 py-4 md:py-6 min-h-[500px] my-12 md:my-20 transition-all duration-300 hover:shadow-blue-900/40"
    >
      <img
        className="w-56 h-56 md:w-80 md:h-80 object-cover rounded-full shadow-xl mb-6 md:mb-0 md:mr-12 border-4 border-[#465697] bg-[#181b2a]"
        src={AboutImg}
        alt="About Rajesh Thimmidi"
      />
  <div className="flex-1 w-full max-w-3xl px-2 md:px-8">
  <h2 className="text-2xl md:text-4xl font-bold mb-4 text-[#7ea2ff] tracking-wide drop-shadow-lg">About Me</h2>
        <div className="flex gap-3 py-4 items-start">
          <IoArrowForward size={30} className="mt-1 shrink-0" />
          <div className="w-full">
            <h1 className="text-xl md:text-2xl font-semibold leading-normal mb-2 text-[#b3c7f9] drop-shadow">Full-Stack Developer</h1>
            <div className="space-y-4 text-sm md:text-md leading-relaxed text-gray-200 bg-[#181b2a]/60 rounded-xl px-4 py-3 shadow-inner border border-[#23263a]">
              <p>
                I am a passionate and results-driven <span className="font-semibold text-[#7ea2ff]">Full-Stack Developer</span> with hands-on experience in building dynamic, high-performance web applications. My expertise spans both frontend and backend development, allowing me to deliver end-to-end solutions that are not only visually appealing but also technically robust.
              </p>
              <p>
                <span className="text-[#b3c7f9] font-medium">On the frontend</span>, I specialize in creating responsive and interactive user interfaces using React, Redux, and modern JavaScript (ES6+). I have a strong eye for translating design mockups into pixel-perfect, user-friendly web experiences, while optimizing performance and ensuring cross-browser compatibility. My goal is to make applications intuitive and engaging for users.
              </p>
              <p>
                <span className="text-[#b3c7f9] font-medium">On the backend</span>, I am skilled in developing secure and scalable APIs and services using Java and Node.js. I have experience integrating third-party services, implementing authentication and authorization mechanisms, and building server-side logic that can handle high loads efficiently.
              </p>
              <p>
                I am passionate about leveraging modern technologies to solve real-world problems, enhance user experiences, and deliver solutions that are maintainable, efficient, and scalable. My approach combines technical expertise with attention to detail, ensuring every project I work on meets both functional and aesthetic standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;