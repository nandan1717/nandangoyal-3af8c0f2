import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";

const Achievements = () => {
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
        "name": "Achievements",
        "item": "https://nandangoyal.me/achievements"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden text-foreground selection:bg-accent selection:text-foreground">
      <SEO 
        title="Achievements & Certifications | Nandan Goyal"
        description="Key achievements: Led 10 Agile sprints at ISYB, delivered 3 web projects, volunteered at 60,000-attendee events. Certifications: CAPM, PL-900, Digital Transformation."
        canonical="https://nandangoyal.me/achievements"
        structuredData={[breadcrumbSchema]}
      />
      
      {/* Ambient Background Orbs */}
      <div className="fixed top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-accent/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen opacity-50" />
      <div className="fixed bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen opacity-40" />

      <Navigation />
      
      <main className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-black mb-6 text-white tracking-tight drop-shadow-2xl">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-300">Milestones</span>.
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 font-medium max-w-3xl mx-auto leading-relaxed">
              Key achievements and certifications that shaped my journey
            </p>
          </motion.div>

          <div className="space-y-16">
            {/* Key Achievements */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-8 text-white flex items-center gap-4">
                <span className="w-8 h-1 bg-accent rounded-full" />
                Impact & Key Achievements
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-accent/30 transition-all group">
                  <div className="text-4xl md:text-5xl font-black text-white mb-2 group-hover:text-accent transition-colors">10<span className="text-accent">+</span></div>
                  <h3 className="text-xl font-bold text-white mb-3">Agile Sprints Delivered</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Led end-to-end development of a client platform for ISYB on time and within budget. Implemented Jira for real-time tracking across 5 departments.
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-accent/30 transition-all group">
                  <div className="text-4xl md:text-5xl font-black text-white mb-2 group-hover:text-accent transition-colors">2<span className="text-accent"> Yrs</span></div>
                  <h3 className="text-xl font-bold text-white mb-3">Cashier to Manager</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Rapidly excelled from Cashier to Customer Service Manager at Walmart. Earned 5,000+ five-star ratings and successfully onboarded 5+ new team members.
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-accent/30 transition-all group">
                  <div className="text-4xl md:text-5xl font-black text-white mb-2 group-hover:text-accent transition-colors">70<span className="text-accent">%</span></div>
                  <h3 className="text-xl font-bold text-white mb-3">Efficiency Boost</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Dramatically improved project delivery speeds and technical execution by leveraging AI-assisted prototyping and modern web frameworks.
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-accent/30 transition-all group">
                  <div className="text-4xl md:text-5xl font-black text-white mb-2 group-hover:text-accent transition-colors">150<span className="text-accent">+</span></div>
                  <h3 className="text-xl font-bold text-white mb-3">Students Led</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Organized major campus events as Vice-President of the Creators Club at Yorkville University. Also supported 60,000-guest events like Pumpkins After Dark.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Academic Projects */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-8 text-white flex items-center gap-4">
                <span className="w-8 h-1 bg-accent rounded-full" />
                Academic Highlights
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors group">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors">Olympic Stadium Simulation</h3>
                  <p className="text-sm font-bold text-foreground/50 uppercase tracking-widest mb-4">Yorkville University</p>
                  <p className="text-foreground/80 leading-relaxed">
                    Designed a hypothetical $1M Olympic Stadium project managed through ClickUp. Developed comprehensive project scope statement, Work Breakdown Structure (WBS), and supporting documentation to simulate real-world planning and execution.
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors group">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors">Harvard Business School PM Simulation</h3>
                  <p className="text-sm font-bold text-foreground/50 uppercase tracking-widest mb-4">Completed by Robert D. Austin</p>
                  <p className="text-foreground/80 leading-relaxed">
                    Completed Project Management Simulation: Scope, Resources, Schedule V3. Managed trade-offs in scope, scheduling, and resource allocation under real-world constraints, strengthening decision-making and risk management skills.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Certifications */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-8 text-white flex items-center gap-4">
                <span className="w-8 h-1 bg-accent rounded-full" />
                Certifications
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: "Microsoft Power Platform Fundamentals (PL-900)", status: "In Progress" },
                  { title: "Certified Associate in Project Management (CAPM)", status: "PMI - In Progress" },
                  { title: "Digital Transformation", status: "University of Waterloo - 2025" },
                  { title: "Full Stack Web Development", status: "Bangalore Computer Education (2023)" },
                  { title: "C and C++ Programming", status: "Bangalore Computer Education (2023)" }
                ].map((cert, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -5 }}
                    className="bg-accent/5 backdrop-blur-md border border-accent/20 rounded-2xl p-6 text-center flex flex-col justify-center min-h-[160px] hover:bg-accent/10 hover:border-accent/40 transition-all shadow-lg"
                  >
                    <h3 className="text-lg font-bold text-white mb-3">{cert.title}</h3>
                    <p className="text-sm font-bold text-accent uppercase tracking-wider">{cert.status}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Volunteer Work */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-8 text-white flex items-center gap-4">
                <span className="w-8 h-1 bg-accent rounded-full" />
                Volunteer Work
              </h2>
              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors group flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <h3 className="text-xl font-bold text-white mb-2">Pumpkins After Dark</h3>
                    <p className="text-sm font-bold text-accent uppercase tracking-widest">October 2024</p>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-foreground/80 leading-relaxed text-lg">
                      Supported logistics and crowd flow at Canada's award-winning Halloween event with 60,000+ attendees, reducing wait times and ensuring smooth guest experiences.
                    </p>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors group flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <h3 className="text-xl font-bold text-white mb-2">FIRST Robotics Canada</h3>
                    <p className="text-sm font-bold text-accent uppercase tracking-widest">March 2023</p>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-foreground/80 leading-relaxed text-lg">
                      Supported logistics and participant needs across multiple teams during events of 50-100 attendees. Adapted quickly to shifting tasks, helping ensure smooth competition flow.
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>
            
          </div>
        </div>
      </main>
      <div className="relative z-20">
        <Footer />
      </div>
    </div>
  );
};

export default Achievements;
