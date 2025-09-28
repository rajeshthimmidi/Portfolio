import React from "react";
import bannerImg from "../../assets/photo-C8q0KQHG.webp";
const ProjectCard = ({ title, main, codeLink }) => {
  return (
    <div className="p-3 md:p-6 flex flex-col w-96 min-h-[480px] h-full bg-gradient-to-br from-[#10121a] to-[#23263a] border border-[#465697] shadow-2xl rounded-3xl transition-all duration-300 hover:shadow-blue-900/40">
      <img className="p-4 rounded-xl shadow-md bg-[#181b2a] object-cover" src={bannerImg} alt="" />
      <h3 className="px-4 text-2xl md:text-3xl font-extrabold leading-snug mb-2 tracking-wide bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg">
        {title}
      </h3>
      <p className="px-4 text-sm md:text-base leading-normal py-2 text-gray-300 font-normal">
        {main}
      </p>
      <div className="mt-auto p-2 md:p-4 flex flex-row gap-2 md:gap-4 w-full justify-between items-center">
        {codeLink ? (
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] text-center"
          >
            Source Code
          </a>
        ) : (
          <button className="text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 font-semibold rounded-3xl bg-[#465697] opacity-60 cursor-not-allowed" disabled>
            Source Code
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;