import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Banknote, Code, Briefcase, GraduationCap, Users, Heart, Shirt, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const Journey = () => {
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
        "name": "Journey",
        "item": "https://nandangoyal.me/journey"
      }
    ]
  };

  const milestones = [
    {
      date: "March 2023",
      title: "Started at Walmart & Discovered Web Development",
      description: "Began working as a cashier at Walmart, learning customer service excellence. Also discovered web development and started my coding journey.",
      icon: Code,
    },
    {
      date: "March 2023",
      title: "Floater Volunteer - FIRST Robotics Canada",
      description: "Provided logistics and support for competitions with 50–100 participants, swiftly adapting to team needs across multiple teams.",
      icon: Heart,
    },
    {
      date: "2023",
      title: "Completed Full Stack Web Development Certification",
      description: "Earned Full Stack Web Development certification from Bangalore Computer Education, along with C and C++ Programming certification.",
      icon: GraduationCap,
    },
    {
      date: "March 2023 - Present",
      title: "Started Vibe Coding (Freelance)",
      description: "Launched freelance web development practice, delivering 3+ commercial projects using AI-assisted development and Agile methodology.",
      icon: Briefcase,
    },
    {
      date: "2024",
      title: "Enrolled in BBA Project Management at Yorkville University",
      description: "Started pursuing BBA in Project Management, diving deep into project planning, execution, monitoring, and leadership.",
      icon: GraduationCap,
    },
    {
      date: "October 2024",
      title: "Event Volunteer - Pumpkins After Dark",
      description: "Supported logistics and crowd flow for 60,000 attendees at Canada's largest Halloween event (Tourism Burnaby), reducing wait times and improving guest experience.",
      icon: Heart,
    },
    {
      date: "February 2025 - Present",
      title: "Project Management Intern at I Support Your Business",
      description: (
        <>
          Leading end-to-end platform development (
          <a 
            href="https://www.isupportyouprogram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-accent hover:underline font-bold"
          >
            www.isupportyouprogram.com
          </a>
          ), implementing Jira for the organization, and managing Agile sprints across 5 departments.
        </>
      ),
      icon: Briefcase,
    },
    {
      date: "May 2025 - Present",
      title: "Vice President - Yorkville University Creators Club",
      description: "Co-founded the club, launched the official website, built a team of 8, and organized campus events for 150+ students. Earned university recognition for club impact.",
      icon: Users,
    },
    {
      date: "2025",
      title: "Pursuing Multiple Certifications",
      description: "Working towards CAPM, Power Platform Fundamentals (PL-900), and Digital Transformation certification from University of Waterloo.",
      icon: GraduationCap,
    },
    {
      date: "Expected March 2026",
      title: "BBA Graduation",
      description: "Set to graduate with BBA in Project Management from Yorkville University, ready to contribute to Technology Consulting roles.",
      icon: TrendingUp,
    },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden text-foreground selection:bg-accent selection:text-foreground">
      <SEO 
        title="My Journey | Nandan Goyal | From Vibe Coder to PM Intern"
        description="Timeline of Nandan Goyal's journey: From discovering web development in 2023 to becoming VP of YU Creators Club and PM Intern at ISYB. Leading 150+ students and delivering Agile sprints."
        canonical="https://nandangoyal.me/journey"
        structuredData={[breadcrumbSchema]}
      />
      
      {/* Ambient Background Orbs */}
      <div className="fixed top-[20%] left-[-10%] w-[40vw] h-[40vw] bg-accent/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen opacity-40" />
      <div className="fixed bottom-[10%] right-[-10%] w-[50vw] h-[50vw] bg-blue-900/20 rounded-full blur-[150px] pointer-events-none mix-blend-screen opacity-30" />

      <Navigation />
      
      <main className="relative z-10 pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            
            {/* Header */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center mb-24"
            >
              <h1 className="text-5xl md:text-7xl font-black mb-6 text-white tracking-tight drop-shadow-2xl">
                My <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-300">Path</span> So Far.
              </h1>
              <p className="text-xl md:text-2xl text-foreground/70 font-medium max-w-2xl mx-auto leading-relaxed">
                Still young. Still figuring it out. But every step is part of the story.
              </p>
            </motion.div>

            {/* Cinematic Timeline */}
            <div className="relative">
              {/* Glowing vertical line */}
              <div className="absolute left-8 md:left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-accent/0 via-accent/30 to-accent/0" />

              <div className="space-y-16">
                {milestones.map((milestone, index) => {
                  const Icon = milestone.icon;
                  return (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      className="relative flex gap-6 md:gap-10 group"
                    >
                      {/* Icon */}
                      <div className="relative z-10 flex-shrink-0 w-16 h-16 md:w-24 md:h-24 rounded-full bg-background border-4 border-white/10 flex items-center justify-center group-hover:border-accent group-hover:scale-110 transition-all duration-500 shadow-2xl">
                        <div className="absolute inset-0 bg-accent/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                        <Icon className="w-8 h-8 md:w-10 md:h-10 text-white/50 group-hover:text-accent transition-colors duration-500" />
                      </div>

                      {/* Content Panel */}
                      <div className="flex-1 pt-2 md:pt-4">
                        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 md:p-8 hover:bg-white/10 transition-colors duration-500 hover:shadow-[0_0_40px_rgba(255,122,0,0.1)] relative overflow-hidden group/card">
                          <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-transparent group-hover/card:from-accent/5 transition-all duration-500" />
                          
                          <div className="relative z-10">
                            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-accent/10 border border-accent/20 text-xs font-bold text-accent tracking-widest uppercase">
                              {milestone.date}
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight group-hover/card:text-accent transition-colors">
                              {milestone.title}
                            </h3>
                            <p className="text-lg text-foreground/80 leading-relaxed font-medium">
                              {milestone.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </main>
      
      <div className="relative z-20">
        <Footer />
      </div>
    </div>
  );
};

export default Journey;
