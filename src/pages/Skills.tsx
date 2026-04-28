import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Briefcase, Code, Brain, Users } from "lucide-react";
import { motion } from "framer-motion";

const Skills = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://nandangoyal.me"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Skills",
        "item": "https://nandangoyal.me/skills"
      }
    ]
  };

  const skillCategories = [
    {
      title: "Project Management",
      icon: Briefcase,
      skills: [
        "Agile methodology, sprint planning",
        "Risk and timeline management",
      ],
    },
    {
      title: "Leadership",
      icon: Users,
      skills: [
        "Team onboarding and delegation",
        "Cross-functional coordination",
        "Stakeholder communication",
      ],
    },
    {
      title: "Technical",
      icon: Code,
      skills: [
        "Jira, Microsoft Office 360, Docs, Sheets, PowerPoint",
        "HTML/CSS/JavaScript, Python/Flask",
        "API integration, AI-assisted prototyping",
      ],
    },
    {
      title: "Analysis & Customer Service",
      icon: Brain,
      skills: [
        "Rapid prototyping, iterative development",
        "Actionable recommendations",
        "Empathy, conflict resolution, survey design",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden text-foreground selection:bg-accent selection:text-foreground">
      <SEO 
        title="Technical Skills & Expertise | Nandan Goyal | PM & Tech Consulting"
        description="Skills and certifications: Agile/Scrum, Jira, React/TypeScript, Python/Flask, Microsoft Power Platform (PL-900), CAPM certification. Project management and full-stack development expertise."
        canonical="https://nandangoyal.me/skills"
        structuredData={[breadcrumbSchema]}
      />
      
      {/* Ambient Background Orbs */}
      <div className="fixed top-[20%] left-[-10%] w-[40vw] h-[40vw] bg-accent/20 rounded-full blur-[150px] pointer-events-none mix-blend-screen opacity-40" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-blue-900/30 rounded-full blur-[150px] pointer-events-none mix-blend-screen opacity-30" />

      <Navigation />
      
      <main className="relative z-10 pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            
            {/* Header */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center mb-24"
            >
              <h1 className="text-5xl md:text-7xl font-black mb-6 text-white tracking-tight drop-shadow-2xl">
                My <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-300">Arsenal</span>.
              </h1>
              <p className="text-xl md:text-2xl text-foreground/70 font-medium max-w-3xl mx-auto leading-relaxed">
                A mix of technical abilities, leadership skills, and people-first thinking.
              </p>
            </motion.div>

            {/* Skills Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-20">
              {skillCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(255,122,0,0.15)] transition-all duration-500 group relative overflow-hidden"
                  >
                    {/* Glowing effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:to-transparent transition-all duration-500" />
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-5 mb-8">
                        <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-500 shadow-xl">
                          <Icon className="w-7 h-7 text-accent group-hover:text-background transition-colors duration-500" />
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-accent transition-colors duration-500">
                          {category.title}
                        </h2>
                      </div>
                      
                      <ul className="space-y-4">
                        {category.skills.map((skill, skillIndex) => (
                          <li 
                            key={skillIndex}
                            className="text-foreground/80 font-medium text-lg flex items-start gap-3 group/item"
                          >
                            <span className="text-accent mt-1.5 opacity-50 group-hover/item:opacity-100 transition-opacity">&bull;</span>
                            <span className="group-hover/item:text-white transition-colors">{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Certifications Cinematic Panel */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-2xl p-8 sm:p-12 shadow-2xl"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-accent" />
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent/10 blur-[100px] pointer-events-none" />
              
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-8 relative z-10">
                Certifications
              </h2>
              
              <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6 relative z-10">
                <div className="flex flex-col gap-2 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
                  <span className="text-xs font-bold text-accent tracking-widest uppercase">In Progress</span>
                  <p className="text-white font-medium text-lg">Microsoft Power Platform Fundamentals (PL-900)</p>
                </div>
                
                <div className="flex flex-col gap-2 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
                  <span className="text-xs font-bold text-accent tracking-widest uppercase">In Progress</span>
                  <p className="text-white font-medium text-lg">Certified Associate in Project Management (CAPM), PMI</p>
                </div>
                
                <div className="flex flex-col gap-2 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
                  <span className="text-xs font-bold text-accent tracking-widest uppercase">In Progress</span>
                  <p className="text-white font-medium text-lg">Digital Transformation</p>
                  <p className="text-foreground/50 text-sm">University of Waterloo</p>
                </div>
                
                <div className="flex flex-col gap-2 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
                  <span className="text-xs font-bold text-foreground/50 tracking-widest uppercase">2023</span>
                  <p className="text-white font-medium text-lg">Full Stack Web Development & C/C++</p>
                  <p className="text-foreground/50 text-sm">Bangalore Computer Education</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </main>
      
      <div className="relative z-20">
        <Footer />
      </div>
    </div>
  );
};

export default Skills;
