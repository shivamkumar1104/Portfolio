import React, { useRef, useState } from 'react';
import { FiSend, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
// 1. Import EmailJS
import emailjs from '@emailjs/browser';

const Contact = () => {
  // 2. State and Ref setup
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // --- REPLACE THESE WITH YOUR ACTUAL EMAILJS KEYS ---
    // You will get these from your EmailJS dashboard
    const SERVICE_ID = "service_087dk4p";
    const TEMPLATE_ID = "template_8el6oe9";
    const PUBLIC_KEY = "1JUQNkgIhBo8KlMb1";

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          setStateMessage("Message sent successfully!");
          setIsSubmitting(false);
          e.target.reset(); // Clear the form
          setTimeout(() => setStateMessage(null), 5000); // Hide message after 5 seconds
        },
        (error) => {
          setStateMessage("Failed to send message, please try again.");
          setIsSubmitting(false);
          console.error("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden text-white">
      
      {/* --- Background Atmosphere --- */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-900/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Let's Work Together</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I'm currently available for freelance work or part-time positions. 
            Reach out directly or send a message using the form.
          </p>
        </div>

        {/* --- GRID LAYOUT --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">

          {/* LEFT COLUMN: Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
            
            {/* Email Card */}
            <div className="flex items-start gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 group">
              <div className="p-3 bg-blue-500/10 text-blue-400 rounded-full group-hover:bg-blue-500 group-hover:text-white transition-colors">
                <FiMail size={24} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">Email</h4>
                <p className="text-gray-400">shivamkumaar2004@gmail.com</p>
              </div>
            </div>

            {/* Phone Card */}
            <div className="flex items-start gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 group">
              <div className="p-3 bg-blue-500/10 text-blue-400 rounded-full group-hover:bg-blue-500 group-hover:text-white transition-colors">
                <FiPhone size={24} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">Phone</h4>
                <p className="text-gray-400">+91 7493056960</p>
              </div>
            </div>

            {/* Location Card */}
            <div className="flex items-start gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 group">
              <div className="p-3 bg-blue-500/10 text-blue-400 rounded-full group-hover:bg-blue-500 group-hover:text-white transition-colors">
                <FiMapPin size={24} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">Location</h4>
                <p className="text-gray-400">Koni, Bilaspur, Chhattisgarh</p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Contact Form */}
          {/* 3. Attach ref and onSubmit handler */}
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            
            <div className="group">
              {/* Added name="user_name" */}
              <input 
                type="text" 
                name="user_name"
                placeholder="Your Name" 
                required
                className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 
                           focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 focus:ring-1 focus:ring-blue-500/50 
                           transition-all duration-300" 
              />
            </div>

            <div className="group">
              {/* Added name="user_email" */}
              <input 
                type="email" 
                name="user_email"
                placeholder="Email Address" 
                required
                className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 
                           focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 focus:ring-1 focus:ring-blue-500/50 
                           transition-all duration-300" 
              />
            </div>

            <div className="group">
              {/* Added name="message" */}
              <textarea 
                name="message"
                placeholder="Your Message" 
                rows="5" 
                required
                className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 
                           focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 focus:ring-1 focus:ring-blue-500/50 
                           transition-all duration-300 resize-none"
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-500 py-4 rounded-xl font-bold text-lg text-white 
                         hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:scale-[1.02] active:scale-95 
                         transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'} 
              {!isSubmitting && <FiSend size={20} />}
            </button>
            
            {/* Success/Error Message Display */}
            {stateMessage && (
              <p className="text-center text-blue-400 mt-4 font-semibold animate-pulse">
                {stateMessage}
              </p>
            )}
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;