import React from "react";
import avatarImg from "../../assets/myhome2.jpg";
import emailjs from 'emailjs-com';
import ContactUs from "../ContactUs/ContactUs";

// AnimatedHello component for typewriter effect
const AnimatedHello = () => {
  const steps = ["","Hello", "Hello, I'm", "Hello, I'm Rajesh"];
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((prev) => (prev + 1) % steps.length);
    }, 550); // faster animation
    return () => clearTimeout(timeout);
  }, [index]);
  return (
  <span className="block mt-6 relative z-10 animate-gradient-move bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent font-extrabold tracking-widest drop-shadow-lg text-shadow-glow">
      <span key={index} className="inline-block transition-all duration-300 ease-in-out animate-fadeinup">{steps[index]}</span>
      <span className="inline-block w-2 h-7 align-middle ml-1 animate-blink bg-gradient-to-b from-cyan-300 via-blue-400 to-purple-400 rounded shadow-lg" style={{verticalAlign:'middle', boxShadow: '0 0 8px 2px #7dd3fc'}}></span>
    </span>
  );
};

const Home = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [fromEmail, setFromEmail] = React.useState("");
  const [name, setName] = React.useState("");

  // Send email using EmailJS (notification to owner and auto-reply to sender)
  const handleSend = async (e) => {
    if (e) e.preventDefault();
    if (!fromEmail || !name || !title || !subject || !message) return;
    try {
      // 1. Send notification to owner (you)
      await emailjs.send(
        'service_3opkm69', // your service ID
        'template_ccd8y8t', // notification template ID (To: timmidirajesh@gmail.com)
        {
          email: fromEmail, // sender's email
          name,
          title,
          subject,
          message,
        },
        'kdC-t2ibEGG-nO7cM' // your public key
      );
      // 2. Send auto-reply to sender
      await emailjs.send(
        'service_3opkm69', // your service ID
        'template_16re057', // auto-reply template ID (To: {{email}})
        {
          email: fromEmail, // sender's email
          name,
          title,
          subject,
          message,
        },
        'kdC-t2ibEGG-nO7cM' // your public key
      );
      alert('Email sent successfully!');
      setShowModal(false);
      setFromEmail("");
      setName("");
    } catch (error) {
      alert('Failed to send email. Please try again.');
    }
  };
  return (
    <div className="w-full">
      <div className="text-white flex w-full justify-between p-6 md:p-20 flex-col md:flex-row items-center">
  <div className="md:w-3/4 md:pt-10 order-2 md:order-1 mb-4 md:mb-0">
          <h1 className="text-xl md:text-6xl font-extrabold flex leading-normal tracking-tighter text-white drop-shadow-[0_2px_16px_rgba(59,130,246,0.7)] relative overflow-visible min-h-[2.5em]">
            <AnimatedHello />
          </h1><br />
          <p className="text-sm md:text-2xl tracking-tight ">
            Results-driven software developer with 2+ years of hands-on experience in Java, React.js, and JavaScript. Adept at designing and building scalable web applications, I am committed to delivering high-quality, efficient solutions that drive organizational success. Passionate about continuous learning and innovation, I strive to enhance my technical expertise while contributing to impactful, forward-thinking projects.
          </p>
  <div className="mt-10 md:mt-16">
    <ContactUs />
  </div>
        </div>
  <div className="order-1 md:order-2 flex justify-center md:justify-start w-full md:w-2/5 mt-4 md:mt-16">
          <div className="relative w-1/2 md:w-2/3 ml-0 md:ml-12 flex items-center justify-center">
            <span className="absolute inset-0 rounded-full animate-spin-slow bg-gradient-to-tr from-blue-500 via-cyan-400 to-purple-500 opacity-30 blur-lg z-0"></span>
            <img
              className="relative z-10 rounded-full object-cover aspect-square border-4 border-[#465697] shadow-2xl bg-gradient-to-br from-[#23263a] to-[#465697] p-2 transition-transform duration-300 hover:scale-110 hover:shadow-blue-900/60 hover:brightness-110 hover:-translate-y-2 animate-float animate-pulse-glow"
              src={avatarImg}
              alt=""
            />
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-4 bg-blue-500/30 blur-2xl rounded-full z-0"></span>
          </div>
        </div>
      </div>
      {/* Popup Modal */}
    </div>
  );
};

export default Home;