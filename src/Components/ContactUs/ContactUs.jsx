import React, { useState } from "react";
import emailjs from 'emailjs-com';



const ContactUs = () => {
  const [showModal, setShowModal] = useState(false);
  const [fromEmail, setFromEmail] = useState("");
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

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
      setTitle("");
      setSubject("");
      setMessage("");
    } catch (error) {
      alert('Failed to send email. Please try again.');
    }
  };

  return (
    <>
      <button
        className="mt-10 md:mt-16 text-white py-2 px-6 text-lg md:text-xl font-bold rounded-3xl bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 shadow-lg shadow-cyan-400/40 ring-2 ring-cyan-300 hover:scale-110 hover:shadow-2xl hover:shadow-cyan-400/80 focus:outline-none focus:ring-4 focus:ring-cyan-300 transition-all duration-300 animate-pulse"
        onClick={() => setShowModal(true)}
        style={{ boxShadow: '0 0 16px 4px #22d3ee, 0 0 32px 8px #6366f1' }}
      >
        Contact Me
      </button>
      {/* Popup Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-[#181b2a] rounded-2xl shadow-2xl p-8 w-[90vw] max-w-md border border-[#465697] relative animate-fadeinup">
            <button
              className="absolute top-2 right-3 text-2xl text-gray-400 hover:text-white"
              onClick={() => setShowModal(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4 text-[#7ea2ff]">Contact Me</h2>
            <form className="flex flex-col gap-4" onSubmit={handleSend}>
              <label className="text-sm font-semibold text-gray-200">Name</label>
              <input
                type="text"
                className="p-2 rounded bg-zinc-900 border border-[#465697] text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Your Name"
                required
              />
              <label className="text-sm font-semibold text-gray-200">Title</label>
              <input
                type="text"
                className="p-2 rounded bg-zinc-900 border border-[#465697] text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="Title (e.g. Developer, Student)"
                required
              />
              <label className="text-sm font-semibold text-gray-200">From (Your Email)</label>
              <input
                type="email"
                className="p-2 rounded bg-zinc-900 border border-[#465697] text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={fromEmail}
                onChange={e => setFromEmail(e.target.value)}
                placeholder="your@email.com"
                required
              />
              <label className="text-sm font-semibold text-gray-200">Subject</label>
              <input
                type="text"
                className="p-2 rounded bg-zinc-900 border border-[#465697] text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={subject}
                onChange={e => setSubject(e.target.value)}
                placeholder="Enter subject"
                required
              />
              <label className="text-sm font-semibold text-gray-200">Message</label>
              <textarea
                className="p-2 rounded bg-zinc-900 border border-[#465697] text-white focus:outline-none focus:ring-2 focus:ring-blue-400 min-h-[80px]"
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder="Enter your message"
                required
              />
              <button
                type="submit"
                className="mt-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-4 py-2 rounded-lg font-semibold shadow hover:scale-105 hover:shadow-lg transition-transform duration-200"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactUs;
