import React from "react";
import { FaCss3, FaHtml5, FaJs, FaReact, FaJava, FaPython, FaNodeJs } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiMongodb, SiJenkins, SiDocker, SiKubernetes, SiHcl, SiRedux } from "react-icons/si";
import { RiNetflixFill } from "react-icons/ri";
import { FaAmazon } from "react-icons/fa";
const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
      <div className="flex flex-col md:flex-row items-start justify-around w-full">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl group relative cursor-pointer transition-transform duration-200 hover:scale-110 hover:shadow-lg">
            <FaReact color="#61DAFB" size={50} />
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-1 text-xs rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap z-20 border border-white/20">React</span>
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl group relative cursor-pointer transition-transform duration-200 hover:scale-110 hover:shadow-lg">
            <FaJava color="#E76F00" size={50} />
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-1 text-xs rounded-lg bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-semibold shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap z-20 border border-white/20">Java</span>
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl group relative cursor-pointer transition-transform duration-200 hover:scale-110 hover:shadow-lg">
            <FaNodeJs color="#3C873A" size={50} />
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-1 text-xs rounded-lg bg-gradient-to-r from-green-500 to-lime-400 text-white font-semibold shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap z-20 border border-white/20">Node.js</span>
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl group relative cursor-pointer transition-transform duration-200 hover:scale-110 hover:shadow-lg">
            <SiRedux color="#764ABC" size={50} />
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-1 text-xs rounded-lg bg-gradient-to-r from-purple-500 to-indigo-400 text-white font-semibold shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap z-20 border border-white/20">Redux</span>
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl group relative cursor-pointer transition-transform duration-200 hover:scale-110 hover:shadow-lg">
            <FaPython color="#3776AB" size={50} />
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-1 text-xs rounded-lg bg-gradient-to-r from-blue-600 to-blue-300 text-white font-semibold shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap z-20 border border-white/20">Python</span>
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl group relative cursor-pointer transition-transform duration-200 hover:scale-110 hover:shadow-lg">
            <SiMongodb color="#47A248" size={50} />
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-1 text-xs rounded-lg bg-gradient-to-r from-green-600 to-green-300 text-white font-semibold shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap z-20 border border-white/20">MongoDB</span>
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl group relative cursor-pointer transition-transform duration-200 hover:scale-110 hover:shadow-lg">
            <SiMysql color="#00758F" size={50} />
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-1 text-xs rounded-lg bg-gradient-to-r from-cyan-600 to-blue-300 text-white font-semibold shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap z-20 border border-white/20">MySQL</span>
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl group relative cursor-pointer transition-transform duration-200 hover:scale-110 hover:shadow-lg">
            <SiJenkins color="#D24939" size={50} />
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-1 text-xs rounded-lg bg-gradient-to-r from-red-500 to-orange-400 text-white font-semibold shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap z-20 border border-white/20">Jenkins</span>
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl group relative cursor-pointer transition-transform duration-200 hover:scale-110 hover:shadow-lg">
            <SiDocker color="#2496ED" size={50} />
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-1 text-xs rounded-lg bg-gradient-to-r from-sky-500 to-blue-400 text-white font-semibold shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap z-20 border border-white/20">Docker</span>
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl group relative cursor-pointer transition-transform duration-200 hover:scale-110 hover:shadow-lg">
            <FaHtml5 color="#E34F26" size={50} />
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-1 text-xs rounded-lg bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-semibold shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap z-20 border border-white/20">HTML5</span>
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl group relative cursor-pointer transition-transform duration-200 hover:scale-110 hover:shadow-lg">
            <FaCss3 color="#1572B6" size={50} />
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-1 text-xs rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap z-20 border border-white/20">CSS3</span>
          </span>
        
         
        </div>
        <div className="w-full md:w-3/5">
          <div className="flex gap-10 bg-gradient-to-br from-[#10121a] to-[#23263a] border border-[#465697] shadow-2xl rounded-3xl p-6 md:p-8 mt-4 items-center transition-all duration-300 hover:shadow-blue-900/40">
            <SiHcl color="#0066A1" size={90} className="min-w-[70px] min-h-[70px]" />
            <span className="text-white">
              <h2 className="leading-tight text-xl md:text-2xl font-bold text-[#7ea2ff] drop-shadow mb-1">Senior Software Engineer, <span className="text-[#b3c7f9]">HCL Software</span></h2>
              <p className="text-xs md:text-sm leading-tight font-semibold text-[#b3c7f9] mb-2">Aug 2023 - Present </p>
              <ul className="text-sm p-2 list-disc ml-2 space-y-2">
                <li>Contributed as a Developer to the globally adopted <span className="font-semibold text-[#7ea2ff]">Workload Automation</span> project by resolving issues and implementing enhancements based on customer feedback.</li>
                <li>Debugged, troubleshot, and resolved UI/UX issues, leading to improved usability and customer satisfaction.</li>
                <li>Contributed to backend development in <span className="font-semibold text-[#b3c7f9]">Java</span> by implementing RESTful APIs, fixing critical bugs, and optimizing services to improve stability and performance.</li>
                <li><span className="font-semibold text-[#7ea2ff]">Lead Developer for Automation Hub</span>, a centralized platform for managing and maintaining all plugins. Delivered new plugins and ensured seamless integration for customers, enhancing automation and operational efficiency. Directed the planning and release of plugin updates, addressing vulnerabilities and implementing enhancements to keep the platform secure, reliable, and up-to-date.</li>
                <li>Managed complex application state using <span className="font-semibold text-[#b3c7f9]">React Hooks, Context API, and Redux</span>, improving responsiveness and scalability.</li>
                <li>Delivered four versioned fix packs independently, demonstrating strong ownership and reliability.</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;