import React from 'react';
// Import the required icons
import { FiGithub, FiLinkedin, FiHeart } from 'react-icons/fi';

const Footer = () => {
  // Automatically get the current year
//   const currentYear = new Date().getFullYear();

  // --- REPLACE WITH YOUR ACTUAL SOCIAL LINKS ---
  const socialLinks = {
    github: "https://github.com/shivamkumar1104", // Replace with yours
    linkedin: "https://www.linkedin.com/in/shivam-kumar-563680292/", // Replace with yours
  };

  return (
    // Added z-20 to ensure it sits on top, and a top border for separation
    <footer className="py-12 bg-black relative overflow-hidden text-white border-t border-white/10 z-20">
      
      {/* --- Subtle Background Atmosphere (Bottom Glow) --- */}
      <div className="absolute bottom-[-20%] left-1/2 transform -translate-x-1/2 w-96 h-96 bg-blue-900/20 rounded-full blur-[120px] pointer-events-none opacity-70"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Left Side: Brand & Copyright */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-500">Shivam Kumar</span>
            </h2>
            <p className="text-gray-400 text-sm flex items-center justify-center md:justify-start gap-1">
              {/* © {currentYear} | */}
               Built with <FiHeart className="text-blue-500 animate-pulse" size={14} fill="currentColor" /> in India
            </p>
          </div>

          {/* Right Side: Social Icons */}
          <div className="flex gap-4">
            
            {/* LinkedIn Icon Button */}
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="p-3 bg-white/5 border border-white/10 rounded-full text-gray-400 
                         hover:text-white hover:bg-blue-500/10 hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] 
                         transition-all duration-300 hover:-translate-y-1 group"
            >
              <FiLinkedin size={20} className="group-hover:scale-110 transition-transform" />
            </a>

             {/* GitHub Icon Button */}
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="p-3 bg-white/5 border border-white/10 rounded-full text-gray-400 
                         hover:text-white hover:bg-blue-500/10 hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] 
                         transition-all duration-300 hover:-translate-y-1 group"
            >
              <FiGithub size={20} className="group-hover:scale-110 transition-transform" />
            </a>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;