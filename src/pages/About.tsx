import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import gokuHappy from "@/assets/goku-happy.png";

const About = () => {
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
        "name": "About",
        "item": "https://nandangoyal.me/about"
      }
    ]
  };

  const experience = [
    {
      title: "Customer Service Manager",
      org: "Walmart",
      date: "Dec 2025 – Present",
      bullets: [
        "Promoted from Cashier to Manager in under 2 years, managing high-volume operations",
        "Training and onboarding 5+ new team members to ensure consistent service standards",
        "Consistently received 5-star ratings for customer service excellence"
      ]
    },
    {
      title: "Project Management Intern",
      org: "I Support Your Business",
      date: "Feb 2025 – Dec 2025",
      bullets: [
        "Led 10+ Agile sprints with cross-functional teams across 5 departments",
        "Implemented Jira for improved project tracking and team alignment",
        "Facilitated sprint planning, retrospectives, and stakeholder communication"
      ]
    },
    {
      title: "Vice President",
      org: "Yorkville University Creators Club",
      date: "May 2025 – Mar 2026",
      bullets: [
        "Led 150+ students across music, photography, and web development initiatives",
        "Organized and executed campus events with cross-functional teams",
        "Built community engagement and member retention strategies"
      ]
    },
    {
      title: "Vibe Coder",
      org: "Freelance",
      date: "Mar 2023 – Present",
      bullets: [
        "Delivered 3 web projects using React, TypeScript, and Supabase",
        "Improved delivery speed by 70% with AI-assisted prototyping",
        "Managed client relationships and iterative feedback cycles"
      ]
    },
    {
      title: "Cashier",
      org: "Walmart",
      date: "Apr 2023 – Dec 2025",
      bullets: [
        "Developed customer service and communication skills in a fast-paced retail environment",
        "Learned patience, people management, and handling pressure in high-volume transactions",
        "Applied problem-solving skills to resolve customer issues efficiently"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden text-foreground selection:bg-accent selection:text-foreground">
      <SEO 
        title="About Nandan Goyal | BBA Student & Tech Leader"
        description="Learn about Nandan Goyal's journey: BBA Project Management student at Yorkville University, PM Intern at ISYB, VP of YU Creators Club. From vibe coding to leading 150+ students."
        canonical="https://nandangoyal.me/about"
        structuredData={[breadcrumbSchema]}
      />
      
      {/* Ambient Background Orbs */}
      <div className="fixed top-[10%] left-[-20%] w-[50vw] h-[50vw] bg-accent/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen opacity-50" />
      <div className="fixed bottom-[20%] right-[-10%] w-[40vw] h-[40vw] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen opacity-40" />

      <Navigation />
      
      <main className="relative z-10 pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            
            {/* Header */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center mb-24"
            >
              <h1 className="text-5xl md:text-7xl font-black mb-6 text-white tracking-tight drop-shadow-2xl">
                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-300">Journey</span>.
              </h1>
              <p className="text-xl md:text-2xl text-foreground/70 font-medium max-w-3xl mx-auto leading-relaxed">
                I'm a 21-year-old BBA Project Management student bridging the gap between technical execution and strategic leadership.
              </p>
            </motion.div>

            {/* Classic Stacked Layout */}
            <div className="space-y-20">
              
              {/* My Story Section */}
              <motion.section 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold mb-8 text-white flex items-center gap-4">
                  <span className="w-8 h-1 bg-accent rounded-full" />
                  My Story
                </h2>
                <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl">
                  <div className="space-y-6 text-lg text-foreground/80 leading-relaxed max-w-4xl">
                    <p>
                      I don't code like a Silicon Valley engineer — I build because I enjoy creating things that work, mixing tools like AI and my own skills.
                    </p>
                    <p>
                      My dream? To build an empire in India centered around sustainability and agro-waste innovation. 
                    </p>
                    <p>
                      I'm not perfect. I don't have it all figured out. But I'm moving — step by step, brick by brick.
                    </p>
                  </div>
                  
                  <div className="mt-10 flex items-center gap-6">
                    <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center p-2">
                      <img 
                        src={gokuHappy} 
                        alt="Goku"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="text-sm text-foreground/50 italic max-w-xs">
                      Driven by the same spirit of growth and resilience.
                    </p>
                  </div>
                </div>
              </motion.section>

              {/* Education Section */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold mb-8 text-white flex items-center gap-4">
                  <span className="w-8 h-1 bg-accent rounded-full" />
                  Education
                </h2>
                <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl group hover:bg-white/10 transition-colors">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Bachelor of Business Administration</h3>
                  <p className="text-xl text-accent font-medium mb-6">Yorkville University, Canada &middot; Mar 2026</p>
                  <p className="text-lg text-foreground/70 leading-relaxed">
                    <span className="font-semibold text-white">Focus Areas:</span> Project Management, Teams and Leadership, Project Planning, Business Strategy, Sustainability.
                  </p>
                </div>
              </motion.section>

              {/* Experience Section */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold mb-8 text-white flex items-center gap-4">
                  <span className="w-8 h-1 bg-accent rounded-full" />
                  Experience
                </h2>
                <div className="space-y-6">
                  {experience.map((exp, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-accent/50 transition-all duration-300 group"
                    >
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-accent transition-colors">{exp.title}</h3>
                          <p className="text-lg text-foreground/60 font-medium">{exp.org}</p>
                        </div>
                        <div className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-sm font-bold text-accent whitespace-nowrap self-start">
                          {exp.date}
                        </div>
                      </div>
                      <ul className="space-y-3">
                        {exp.bullets.map((bullet, i) => (
                          <li key={i} className="flex items-start gap-3 text-lg text-foreground/80 leading-relaxed">
                            <span className="text-accent mt-1">&bull;</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
              
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

export default About;
