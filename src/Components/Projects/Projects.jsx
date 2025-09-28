import React from "react";
import "./../../index.css";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-24 pt-0 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
  <div className="py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full p-8 place-items-center">
        <ProjectCard
          title="E-Commerce Web Application"
          main="A full-stack platform built with React.js and Node.js/Express.js to simulate a real online shopping experience.
Includes product listings, shopping cart, user authentication, and order management.
Integrated RESTful APIs for seamless communication between frontend and backend, ensuring responsive performance across devices"
            codeLink="https://github.com/rajeshthimmidi/ecommerce"
        />
       
       
       
           <ProjectCard
          title="MovieManiac Web Application"
          main="A React.js web app to explore upcoming, popular, and top-rated movies using RESTful APIs.
Implemented rating-based filtering and detailed movie info display to enhance user engagement.
Focused on responsive UI development and strengthening skills in React.js, JavaScript, and API integration."
          codeLink="https://github.com/rajeshthimmidi/moviemaniac"
        />
       
       
       
        <ProjectCard
          title="Deep Retinex Network for Single Image Dehazing"
          main="Implemented a novel Retinex-based decomposition model for hazy images and developed an end-to-end image dehazing network, named Retinex Dehazing Network (RDN). RDN utilizes a multiscale residual dense network for accurate residual illumination estimation and a U-Net with channel and spatial attention mechanisms for haze-free image recovery."
        />
       
       
       
        <ProjectCard
          title="Hiding Data Using Combination of RSA Cryptography, Steganography techniques"
          main="Implemented a hybrid data compression algorithm combining lossy and lossless techniques, utilizing RSA cryptography for enhanced security. Applied Huffman coding for text compression and Discrete Wavelet Transform (DWT) for image compression. Integrated steganography for secure data hiding."
        />
       
       
       
        <ProjectCard
          title="Hostel Management System"
          main="Developed a Hostel Management System using PHP for backend logic, HTML/CSS for the user interface, and MySQL for database management. Implemented features such as student registration, room allocation, automated billing, and maintenance requests. Applied security measures to safeguard data integrity."
        />
       
       
       
        <ProjectCard
          title="Leave Management System"
          main="Designed and implemented a Leave Management System for the organization using PHP (backend), HTML/CSS (frontend), and MySQL (database). The system enables employees to view their leave balances, submit leave requests, and track leave history. Managers can review and approve requests, while the automated workflow streamlines the entire leave management process and enhances operational efficiency."
        />
      </div>
    </div>
  );
};

export default Projects;