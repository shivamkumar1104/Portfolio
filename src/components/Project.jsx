import React from 'react';
// 1. Import the specific icons
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    { 
      title: "Palm Oil Price Predictor", 
      desc: "ML model using LSTM networks to forecast market trends.", 
      tags: ["Python", "LSTM", "Pandas"],
      githubLink: "https://github.com/yourusername/palm-oil-ml",
      liveLink: "#" 
    },
    { 
      title: "SIH Import Simulator", 
      desc: "AI-powered simulation tool for analyzing tariff impacts.", 
      tags: ["AI/ML", "Python", "Data Science"],
      githubLink: "#",
      liveLink: "#"
    },
    { 
      title: "Connexa Chatbot", 
      desc: "Intelligent career guidance bot for students.", 
      tags: ["NLP", "React", "Python"],
      githubLink: "#",
      liveLink: "#"
    },
  ];

  return (
    <section id="projects" className="py-24 bg-black relative overflow-hidden text-white">
      
      {/* Background Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-900/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h3 className="text-4xl md:text-5xl font-extrabold mb-16 text-center tracking-tight">
           <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Technical Projects</span>
        </h3>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <div 
              key={i} 
              className="group relative p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm 
                         hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] 
                         transition-all duration-300 hover:-translate-y-2 flex flex-col"
            >
              
              {/* Image Placeholder */}
              <div className="h-48 mb-6 rounded-xl bg-gradient-to-br from-slate-800 to-black border border-white/5 flex items-center justify-center group-hover:border-blue-500/30 transition-colors overflow-hidden relative">
                 <FiFolder className="text-blue-500/40 w-16 h-16 group-hover:scale-110 transition-transform duration-500" />
                 <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Title & Icons Row */}
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {p.title}
                </h4>
                
                {/* --- ACTION ICONS --- */}
                <div className="flex gap-4">
                  {/* GitHub Icon */}
                  <a 
                    href={p.githubLink} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
                    title="View Code on GitHub"
                  >
                    <FiGithub size={24} />
                  </a>

                  {/* Live Project Icon */}
                  <a 
                    href={p.liveLink} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110"
                    title="View Live Demo"
                  >
                    <FiExternalLink size={24} />
                  </a>
                </div>
              </div>

              <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
                {p.desc}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {p.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="text-xs font-medium px-3 py-1 bg-blue-500/10 text-blue-300 border border-blue-500/20 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;