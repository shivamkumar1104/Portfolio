import React from 'react';
import { FiExternalLink } from 'react-icons/fi';

const Experience = () => {
  const jobs = [
    { 
      company: "CodSoft",
      role: "Web Developer Intern", 
      date: "Feb 2025 - Mar 2025", 
      desc: "Develops simple and clean frontend interfaces.",
      certificate: "https://drive.google.com/..." // Yahan apne certificate ka link dalein
    },
    { 
      company: "InAmigos Foundation",
      role: "Graphic Designer", 
      date: "Dec 2024 - Jan 2025", 
      desc: "Designs meaningful posters to help foundations and promote social welfare." ,
      certificate: "#"
    },
    {
      company: "Smart India Hackathon (SIH)",
      role: "SIH 2025 Finalist",
      date: "2025",
      desc: "Finalist at Smart India Hackathon 2025 for developing a ‘Palm-Oil Tariff Simulator’ to analyze and optimize tariff impacts.",
      certificate: "#"
    },
    {
      company: "GFG Student Chapter - GGV",
      role: "App Developer Executive",
      date: "2024 - 2025",
      desc: "Worked as App Developer Executive in GFG club at GGV.",
      certificate: "#"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-black relative overflow-hidden text-white">
      
      {/* --- Background Atmosphere --- */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-800/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-center tracking-tight">
         <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Work Experience</span>
        </h2>

        {/* Timeline Container */}
        <div className="space-y-12 border-l-2 border-blue-500/30 pl-8 ml-4 md:ml-12">
          {jobs.map((job, i) => (
            <div key={i} className="relative group">
              
              {/* Timeline Dot (Glowing Effect) */}
              <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-black border-[3px] border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)] group-hover:bg-blue-500 group-hover:scale-110 transition-all duration-300"></div>
              
              {/* Date Tag */}
              <span className="inline-block px-3 py-1 mb-2 text-xs font-bold tracking-wider text-blue-300 uppercase bg-blue-900/20 rounded-full border border-blue-800/50">
                {job.date}
              </span>

              {/* Role Title */}
              <h3 className="text-2xl font-bold text-white mt-1 group-hover:text-blue-400 transition-colors">
                {job.role}

                {/* certificate link icon */}
                <a 
                  href={job.certificate} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="ml-2 text-blue-400 hover:text-blue-300 transition-colors"
                  title="View Certificate"
                >
                  <FiExternalLink size={18} />
                </a>
              </h3>

              {/* Company Name */}
              <p className="text-blue-500 font-medium mb-3 text-lg">
                {job.company}
              </p>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed max-w-2xl">
                {job.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;