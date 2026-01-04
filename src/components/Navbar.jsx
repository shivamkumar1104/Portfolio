import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
// import { motion } from 'framer-motion';
import Logo from './Logo.jsx';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll to add background style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' }, // Make sure your Hero section has id="home"
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-md border-b border-white/10 shadow-[0_0_20px_rgba(59,130,246,0.1)] py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
      <Logo />

       

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors relative group"
            >
              {link.name}
              {/* Animated Underline */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
{/*           
          {/* Resume Button (Optional small version) */}
          {/* <a 
            href="/Resume.pdf" 
            download="Resume.pdf"
            className="px-4 py-2 text-sm font-bold text-black bg-blue-500 rounded-full hover:bg-blue-400 transition-colors"
          >
            Resume
          </a>  */}


        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white hover:text-blue-400 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {/* Used absolute positioning to slide down from top or appear below nav */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col items-center gap-6 py-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)} // Close menu on click
              className="text-lg font-medium text-gray-300 hover:text-blue-400 transition-colors"
            >
              {link.name}
            </a>
          ))}


           {/* <a 
            href="/Resume.pdf" 
            download="Resume.pdf"
            className="px-6 py-2 text-sm font-bold text-black bg-blue-500 rounded-full hover:bg-blue-400 transition-colors"
          >
            Download Resume
          </a> */}

          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;