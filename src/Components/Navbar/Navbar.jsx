import React from 'react';
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  // Close menu when a link is clicked (mobile only)
  const handleMenuLinkClick = (cb) => (e) => {
    if (cb) cb(e);
    setMenuOpen(false);
  };

  return (
    <nav className="flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20 relative">
      <span
        className="text-2xl md:text-3xl font-extrabold tracking-widest bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-gradient-move relative"
        style={{
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          color: '#22223b', // fallback for non-supporting browsers
          textShadow: '0 2px 8px #181b2a, 0 0 2px #fff',
        }}
      >
        Portfolio
      </span>

      <ul
        className={`mx-24 p-y2 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6 ${menuOpen ? 'block' : 'hidden'} md:block`}
      >
        <li
          className="text-md transition-all duration-300 p-1 md:p-0 cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 hover:underline hover:underline-offset-8 hover:scale-110 hover:drop-shadow-lg hover:bg-gradient-to-r hover:from-purple-400 hover:via-cyan-400 hover:to-blue-400"
          onClick={handleMenuLinkClick(e => {
            e.preventDefault();
            const el = document.getElementById('About');
            if (el) {
              const isMobile = window.innerWidth < 768;
              const offset = isMobile ? 120 : 40;
              const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
              window.scrollTo({ top: y, behavior: 'smooth' });
            }
          })}
        >
          About
        </li>
        <li
          className="text-md transition-all duration-300 p-1 md:p-0 cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 hover:underline hover:underline-offset-8 hover:scale-110 hover:drop-shadow-lg hover:bg-gradient-to-r hover:from-purple-400 hover:via-cyan-400 hover:to-blue-400"
          onClick={handleMenuLinkClick(e => {
            e.preventDefault();
            const el = document.getElementById('Experience');
            if (el) {
              const isMobile = window.innerWidth < 768;
              const offset = isMobile ? 80 : 40;
              const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
              window.scrollTo({ top: y, behavior: 'smooth' });
            }
          })}
        >
          Experience
        </li>
        <li
          className="text-md transition-all duration-300 p-1 md:p-0 cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 hover:underline hover:underline-offset-8 hover:scale-110 hover:drop-shadow-lg hover:bg-gradient-to-r hover:from-purple-400 hover:via-cyan-400 hover:to-blue-400"
          onClick={handleMenuLinkClick(e => {
            e.preventDefault();
            const el = document.getElementById('Projects');
            if (el) {
              const isMobile = window.innerWidth < 768;
              const offset = isMobile ? 120 : 40;
              const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
              window.scrollTo({ top: y, behavior: 'smooth' });
            }
          })}
        >
          Projects
        </li>
        <li
          className="text-md transition-all duration-300 p-1 md:p-0 cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 hover:underline hover:underline-offset-8 hover:scale-110 hover:drop-shadow-lg hover:bg-gradient-to-r hover:from-purple-400 hover:via-cyan-400 hover:to-blue-400"
          onClick={handleMenuLinkClick(e => {
            e.preventDefault();
            const el = document.getElementById('Footer');
            if (el) {
              const isMobile = window.innerWidth < 768;
              const offset = isMobile ? 70 : 50;
              const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
              window.scrollTo({ top: y, behavior: 'smooth' });
            }
          })}
        >
          Contact
        </li>
      </ul>

      {/* Hamburger / Close Icon */}
      <button
        className="md:hidden absolute right-10 top-6 transition-all duration-300 z-20"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        {menuOpen ? <RiCloseLine size={30} /> : <RiMenu2Line size={30} />}
      </button>
    </nav>
  );
};

export default Navbar;