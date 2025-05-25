import React from "react";
import { FaCss3, FaHtml5, FaJs, FaReact, FaJava, FaPython } from "react-icons/fa";
import { SiMongodb, SiJenkins, SiDocker, SiKubernetes, SiHcl, SiRedux } from "react-icons/si";
import { RiNetflixFill } from "react-icons/ri";
import { FaAmazon } from "react-icons/fa";
const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
      <div className="flex flex-col md:flex-row items-start justify-around w-full">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
           <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiRedux color="#764ABC" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb color="#47A248" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJava color="#007396" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaPython color="#3776AB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiJenkins color="#D24939" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiDocker color="#2496ED" size={50} />
          </span>
        
         
        </div>
        <div className="w-full md:w-3/5">
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <SiHcl color="#0066A1" size={90} className="min-w-[70px] min-h-[70px]" />
            <span className="text-white">
              <h2 className="leading-tight">Senior Software Engineer , HCL Software</h2>
              <p className="text-sm leading-tight font-thin">
                Aug 2023 - Present (2 years)
              </p>
              <ul className="text-sm p-2 list-disc ml-2">
                <li>Served as a Developer on the globally adopted "Workload Automation" project, efficiently resolving issues and consistently ensuring high customer satisfaction.</li>
                <li>Proactively identified and implemented enhancements based on customer feedback and requirements, delivering improvements in subsequent releases.</li>
                <li>Collaborated with cross-functional teams to seamlessly integrate new features and enhancements into the product.</li>
                <li>Acted as Lead Developer for "Automation Hub", overseeing the management and maintenance of all plugins. Responsible for delivering new plugins, making them available for customer integration, and leading the planning and release process for updates. Ensured plugins remained secure and up-to-date by addressing vulnerabilities and implementing enhancements, while also introducing new plugins to enhance automation and efficiency.</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;