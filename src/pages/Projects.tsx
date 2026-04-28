import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code, Briefcase, ExternalLink, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import isybEcosystem from "@/assets/isyb-ecosystem.png";
import isybEvents from "@/assets/isyb-events.png";
import isybPortfolio from "@/assets/isyb-portfolio.png";

const Projects = () => {
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
        "name": "Projects",
        "item": "https://nandangoyal.me/projects"
      }
    ]
  };

  const projects = [
    {
      title: "Project Management Intern",
      org: "I Support Your Business",
      highlights: [
        "Led requirements gathering and delivered features in 10 Agile sprints",
        "Facilitated Agile ceremonies and sprint planning",
        "Implemented Jira, improving cross-team alignment across 5 departments",
        "Hired and mentored new intern for Jira management",
        "Met all budget and timeline targets"
      ],
      icon: Briefcase,
      status: "Feb 2025 – Mar 2026 (Remote, Burnaby, Canada)",
      techStack: ["Agile", "Scrum", "Jira", "React", "TypeScript", "Supabase", "Tailwind CSS", "Figma"],
      link: "https://www.isupportyouprogram.com",
      screenshots: [isybEcosystem, isybEvents, isybPortfolio],
    },
    {
      title: "Vibe Coding",
      org: "Freelance",
      highlights: [
        "Delivered 3 web projects on schedule by breaking tasks into sprints",
        "Improved delivery speed by 70% with AI-assisted prototyping",
        "Maintained quality through iterative client feedback",
        "Implemented detailed prioritization and workflow management"
      ],
      icon: Code,
      status: "Mar 2023 – Present (Hybrid)",
      techStack: ["React", "TypeScript", "Supabase", "Lovable AI", "shadcn/ui", "Tailwind CSS", "Python", "Flask"],
      links: [
        { url: "https://nandangoyal.me", label: "Portfolio Website" },
        { url: "https://yucreatorsclub.ca", label: "YU Creators Club" },
        { url: "https://www.isupportyouprogram.com", label: "I Support Your Business" },
        { url: "https://www.mngarg.com", label: "MN Garg Trading Co." }
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden text-foreground selection:bg-accent selection:text-foreground">
      <SEO 
        title="Projects & Portfolio | Nandan Goyal | ISYB, YU Creators Club"
        description="Explore projects by Nandan Goyal: PM Intern at I Support Your Business, freelance web development, and leadership at YU Creators Club. Built with React, TypeScript, and Agile methodology."
        canonical="https://nandangoyal.me/projects"
        structuredData={[breadcrumbSchema]}
      />
      
      {/* Ambient Background Orbs */}
      <div className="fixed top-[30%] right-[-10%] w-[50vw] h-[50vw] bg-accent/20 rounded-full blur-[150px] pointer-events-none mix-blend-screen opacity-30" />
      <div className="fixed bottom-[-10%] left-[-20%] w-[40vw] h-[40vw] bg-blue-900/30 rounded-full blur-[150px] pointer-events-none mix-blend-screen opacity-40" />

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
                What I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-300">Building</span>.
              </h1>
              <p className="text-xl md:text-2xl text-foreground/70 font-medium max-w-3xl mx-auto leading-relaxed">
                I'm not the type who only shows finished things. Here's some of what I've been playing with, testing, or starting.
              </p>
            </motion.div>

            <div className="space-y-24">
              {projects.map((project, index) => {
                const Icon = project.icon;
                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                  >
                    {/* Glowing background layer */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-3xl blur-xl" />
                    
                    {/* Cinematic Glass Panel */}
                    <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                      
                      {/* Top Header Section */}
                      <div className="p-8 md:p-12 border-b border-white/10 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        
                        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                          <div className="flex items-start gap-6">
                            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 shadow-xl group-hover:border-accent/50 transition-colors duration-500">
                              <Icon className="w-8 h-8 text-accent" />
                            </div>
                            <div>
                              <h2 className="text-3xl font-black text-white tracking-tight mb-2 group-hover:text-accent transition-colors duration-500">
                                {project.title}
                              </h2>
                              <p className="text-xl text-foreground/80 font-medium">
                                {project.org}
                              </p>
                              <div className="mt-4 inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-accent tracking-widest uppercase">
                                {project.status}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="p-8 md:p-12 grid lg:grid-cols-12 gap-12">
                        
                        {/* Left: Details */}
                        <div className="lg:col-span-5 space-y-8">
                          <div>
                            <h3 className="text-sm font-bold text-foreground/50 uppercase tracking-widest mb-6">Key Achievements</h3>
                            <ul className="space-y-4">
                              {project.highlights.map((highlight, idx) => (
                                <li key={idx} className="flex items-start gap-3 group/item">
                                  <span className="text-accent mt-1 opacity-50 group-hover/item:opacity-100 transition-opacity">&bull;</span>
                                  <span className="text-white/80 leading-relaxed font-medium group-hover/item:text-white transition-colors">{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h3 className="text-sm font-bold text-foreground/50 uppercase tracking-widest mb-4">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                              {project.techStack.map((tech, techIdx) => (
                                <Badge 
                                  key={techIdx} 
                                  variant="secondary"
                                  className="bg-white/5 text-white/80 border-white/10 hover:bg-accent hover:text-white hover:border-accent transition-all px-3 py-1.5"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          {(project.link || project.links) && (
                            <div className="pt-4">
                              <h3 className="text-sm font-bold text-foreground/50 uppercase tracking-widest mb-4">Live Links</h3>
                              <div className="flex flex-wrap gap-3">
                                {project.link && (
                                  <Button 
                                    asChild 
                                    className="h-12 px-6 rounded-full bg-accent hover:bg-accent/90 text-white shadow-[0_0_20px_rgba(255,122,0,0.3)] hover:shadow-[0_0_40px_rgba(255,122,0,0.5)] transition-all font-semibold"
                                  >
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="gap-2">
                                      Visit Project
                                      <ArrowRight className="w-4 h-4" />
                                    </a>
                                  </Button>
                                )}
                                {project.links?.map((link, linkIdx) => (
                                  <Button 
                                    key={linkIdx}
                                    asChild 
                                    variant="outline"
                                    className="h-12 px-6 rounded-full border-white/20 bg-white/5 hover:bg-white/10 text-white transition-all font-semibold backdrop-blur-md"
                                  >
                                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="gap-2">
                                      {link.label}
                                      <ExternalLink className="w-4 h-4" />
                                    </a>
                                  </Button>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Right: Screenshots */}
                        {project.screenshots && project.screenshots.length > 0 && (
                          <div className="lg:col-span-7">
                            <h3 className="text-sm font-bold text-foreground/50 uppercase tracking-widest mb-6">Gallery</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              {project.screenshots.map((screenshot, idx) => (
                                <div 
                                  key={idx} 
                                  className={`rounded-2xl overflow-hidden border border-white/10 group/img relative ${idx === 0 ? 'sm:col-span-2' : ''}`}
                                >
                                  <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover/img:opacity-100 transition-opacity duration-500 mix-blend-screen z-10" />
                                  <img 
                                    src={screenshot} 
                                    alt={`${project.title} screenshot ${idx + 1}`}
                                    loading="lazy"
                                    className="w-full h-full min-h-[200px] object-cover object-top group-hover/img:scale-105 transition-transform duration-700"
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-24 text-center"
            >
              <p className="text-xl text-foreground/50 font-medium italic">
                Everything here is a work in progress. And I'm okay with that.
              </p>
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

export default Projects;
