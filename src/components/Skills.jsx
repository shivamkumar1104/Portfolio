import React from 'react';

const Skills = () => {
  const skillCategories = [
    { title: "Languages", skills: ["JavaScript", "Python", "HTML5", "CSS3", "Java", "React-Native"] },
    { title: "Frontend", skills: ["React", "Tailwind CSS", "TypeScript"] },
    { title: "Backend", skills: ["Node.js", "Express", "MongoDB", "SQL"] },
    { title: "Data & AI", skills: ["Machine Learning", "Deep Learning", "NLP", "Power BI"] },
    { title: "Tools", skills: ["Git", "Github", "Canva"] }
  ];

  return (
    <section id="skills" className="py-20 bg-black relative overflow-hidden text-white">
      
      {/* --- Background Glows (Matching Hero Section) --- */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-900/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Technical Skills</span>
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, i) => (
            <div 
              key={i} 
              className="group p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:-translate-y-2"
            >
              {/* Category Title */}
              <h3 className="text-2xl font-bold mb-6 text-blue-400 group-hover:text-blue-300 transition-colors border-b border-white/10 pb-2 inline-block">
                {cat.title}
              </h3>
              
              {/* Individual Skills Pills */}
              <div className="flex flex-wrap gap-3">
                {cat.skills.map(skill => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm font-medium text-blue-100 bg-gradient-to-r from-blue-900/30 to-slate-900/50 
                             border border-blue-500/30 rounded-full shadow-sm
                             transition-all duration-300 
                             hover:bg-blue-600 hover:text-white hover:border-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:scale-105 cursor-default"
                  >
                    {skill}
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

export default Skills;