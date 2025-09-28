import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaArrowCircleUp } from "react-icons/fa";

const Footer = ({ onContactClick }) => {
  // Scroll to top handler
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <>
      <div
        id="Footer"
        className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
      >
        <div className="flex flex-col gap-3 items-start">
          <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
          <h3 className="text-sm md:text-2xl font-normal">
            Feel Free To reach out!
          </h3>
          <button
            className="mt-4 text-white py-2 px-6 text-lg md:text-xl font-bold rounded-3xl bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 shadow-lg shadow-cyan-400/40 ring-2 ring-cyan-300 hover:scale-110 hover:shadow-2xl hover:shadow-cyan-400/80 focus:outline-none focus:ring-4 focus:ring-cyan-300 transition-all duration-300 animate-pulse"
            style={{ boxShadow: '0 0 16px 4px #22d3ee, 0 0 32px 8px #6366f1' }}
            onClick={onContactClick}
          >
            Contact Me
          </button>
        </div>

        <ul className="text-sm md:text-xl">
          <li className="flex gap-1 items-center">
            <MdOutlineEmail size={20} />
            <a
              href="timmidirajesh@gmail.com"
              className="hover:text-gray-200"
            >
              timmidirajesh@gmail.com
            </a>
          </li>
          <li className="flex gap-1 items-center">
            <CiLinkedin />
            <a
              href="https://www.linkedin.com/in/rajesh-thimmidi-431824216"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200"
            >
              www.linkedin.com/in/rajesh-thimmidi-431824216
            </a>
          </li>
          <li className="flex gap-1 items-center">
            <FaGithub />
            <a
              href="https://github.com/rajeshthimmidi"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-gray-200"
            >
              github.com/rajeshthimmidi
            </a>
          </li>
        </ul>
      </div>
      {/* Round Up Icon Button */}
      <button
        onClick={handleScrollTop}
        className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 text-white rounded-full shadow-lg shadow-cyan-400/40 ring-2 ring-cyan-300 hover:scale-110 hover:shadow-2xl hover:shadow-cyan-400/80 focus:outline-none focus:ring-4 focus:ring-cyan-300 transition-all duration-300 animate-bounce p-3 md:p-4"
        style={{ boxShadow: '0 0 16px 4px #22d3ee, 0 0 32px 8px #6366f1' }}
        aria-label="Scroll to top"
      >
        <FaArrowCircleUp size={36} />
      </button>
    </>
  );
};

export default Footer;