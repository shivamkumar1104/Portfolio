import React, { useState, useEffect } from "react";
import { FiBriefcase, FiDownload, FiGithub } from "react-icons/fi";

const Hero = () => {
  // --- Logic (Typewriter Effect) - Unchanged ---
  const roles = [
    "WEB DEVELOPER",
    "DATA SCIENTIST",
    "GRAPHIC DESIGNER",
  ];

  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];
    let speed = 100;

    if (isDeleting) speed = 60;

    const timeout = setTimeout(() => {
      setText(
        isDeleting
          ? current.substring(0, text.length - 1)
          : current.substring(0, text.length + 1)
      );

      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, roles]);

  return (
    // --- Layout & Design ---
    // CHANGED: bg-[#0D0D1B] -> bg-black (Pure Black Background)
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-8 md:px-20 py-16 md:py-32 relative z-10 bg-black text-white min-h-screen overflow-hidden">
      
      {/* Optional: Subtle Blue Background Glows to break the pure black flatness */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-900/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-800/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Left Content */}
      <div className="text-left md:w-3/5 space-y-6 relative z-10">
        <div>
          {/* CHANGED: text-blue-300 -> text-blue-400 (Brighter Blue) */}
          <h2 className="text-xl md:text-2xl font-medium text-blue-400 mb-2">
            Hi, I am
          </h2>
          
          {/* Name with Gradient: White -> Blue */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-600">
              Shivam Kumar
            </span>
          </h1>
          
          {/* Typewriter Effect */}
          <div className="text-2xl md:text-4xl font-bold text-white mt-4 flex items-center h-12">
            {/* CHANGED: Gradient from Cyan to Blue */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              {text}
            </span>
            {/* Blinking Cursor: Blue */}
            <span className="inline-block w-1 h-8 bg-blue-500 ml-2 animate-pulse"></span>
          </div>
        </div>

        <p className="text-gray-400 max-w-xl text-lg leading-relaxed">
          I’m a CSE undergraduate specializing in AI, Data Science, and Power BI, 
          with strong experience in Web Development and Graphic Designing. 
          I focus on creating impactful, data-driven, and visually engaging digital solutions.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mt-10">
          {/* Primary Button: Blue Gradient */}
          <a 
            href="#projects" 
            className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-700 to-blue-500 text-white rounded-full font-semibold hover:opacity-90 transition-all shadow-lg shadow-blue-500/30 transform hover:-translate-y-1"
          >
            <FiBriefcase size={20} /> My Work
          </a>
          
          {/* Secondary Button: White Text with Blue Border */}
          <a 
            href="/Resume.pdf" 
            download="Resume.pdf"
            className="flex items-center gap-2 px-8 py-3 border-2 border-blue-500 text-blue-100 rounded-full font-semibold hover:bg-blue-900/30 transition-colors hover:opacity-90 transform hover:-translate-y-1"
          >
            <FiDownload size={20} /> Resume
          </a>

           {/* GitHub Icon: White/Gray */}
           <a 
            href="https://github.com/shivamkumar1104" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 border border-gray-700 rounded-full text-gray-400 hover:text-white hover:border-white transition-colors transform hover:-translate-y-1">
          
            <FiGithub size={20} />
          </a>
        </div>
      </div>

      {/* Right Side - Glowing Orb */}
      <div className="md:w-2/5 flex justify-center relative mt-12 md:mt-0">
        {/* CHANGED: Sphere Gradient -> Black/Blue/White mixture */}
        <div className="w-64 h-64 md:w-96 md:h-96 rounded-full relative z-10 shadow-[inset_-20px_-20px_60px_rgba(0,0,0,0.8)] overflow-hidden">
          <img src="shivam_image.png" alt="Shivam Kumar" className="w-full h-full rounded-full object-cover " />
        </div>
        
        {/* CHANGED: Glow Color -> Blue */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-600/20 rounded-full blur-3xl -z-10"></div>
      </div>
    </section>
  );
};

export default Hero;