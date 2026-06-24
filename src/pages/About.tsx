import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Code, Rocket, Target } from "lucide-react";
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

  const leadershipSkills = [
    "Team Operations",
    "Workplace Dynamics",
    "Agile Project Management",
    "Resource Allocation",
    "Strategic Planning",
  ];

  const techSkills = [
    "Next.js",
    "React",
    "Supabase",
    "PostgreSQL",
    "AI Integration",
    "GitHub",
    "Vercel",
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden text-foreground selection:bg-accent selection:text-foreground">
      <SEO
        title="About Nandan Goyal | Builder, Leader, Relentless Learner"
        description="Learn about Nandan Goyal — a builder who mixes modern tools with raw craft, a people leader forged in high-stakes operations, and a relentless learner building toward an empire in India."
        canonical="https://nandangoyal.me/about"
        structuredData={[breadcrumbSchema]}
      />

      {/* Ambient Background Orbs */}
      <div className="fixed top-[10%] left-[-20%] w-[50vw] h-[50vw] bg-accent/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen opacity-50" />
      <div className="fixed bottom-[20%] right-[-10%] w-[40vw] h-[40vw] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen opacity-40" />
      <div className="fixed top-[50%] left-[40%] w-[25vw] h-[25vw] bg-accent/5 rounded-full blur-[100px] pointer-events-none opacity-30" />

      <Navigation />

      <main className="relative z-10 pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">

            {/* Page Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center mb-8"
            >
              <h1 className="text-5xl md:text-7xl font-black mb-6 text-white tracking-tight drop-shadow-2xl">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-300">Me</span>.
              </h1>
            </motion.div>

            {/* Hero Quote — Brick by Brick */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="mb-24"
            >
              <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 md:p-14 shadow-2xl overflow-hidden">


                <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                  {/* Goku Image */}
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center p-3 shrink-0 shadow-xl">
                    <img
                      src={gokuHappy}
                      alt="Goku — the spirit of relentless growth"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <blockquote className="text-center md:text-left">
                    <p className="text-2xl md:text-3xl lg:text-4xl font-black text-white leading-normal tracking-normal italic">
                      "It's brick by brick, level by level,{" "}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-300">
                        every single day.
                      </span>"
                    </p>
                  </blockquote>
                </div>
              </div>
            </motion.div>

            <div className="space-y-24">

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
                      I don't code like a Silicon Valley engineer, I build because I genuinely enjoy the craft of creating things that work, mixing modern tools like AI with my own skills to bring ideas to life. If I see a problem or want a platform to exist, I sit down, architect it, and push it live to a production URL myself.
                    </p>
                    <p>
                      Beyond the code, my real strength lies in managing people and high-stakes operations. Leading teams in high-volume, fast-paced environments has taught me how to navigate intense workplace dynamics, build deep trust, and rally a team to go above and beyond when the pressure is on. True leadership is understanding human behavior and moving a team forward collectively.
                    </p>

                    <p>
                      I'm not perfect. I don't have it all figured out. But I'm moving step by step, brick by brick, driven by a relentless spirit of growth and resilience.
                    </p>
                  </div>
                </div>
              </motion.section>

              {/* Toolkit & Competencies Section */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold mb-4 text-white flex items-center gap-4">
                  <span className="w-8 h-1 bg-accent rounded-full" />
                  Toolkit & Competencies
                </h2>
                <p className="text-lg text-foreground/60 mb-8 ml-12">
                  I bridge the gap between human-centric operational leadership and hands-on full-stack execution.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Leadership & Strategy Card */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-accent/50 transition-all duration-500 group relative overflow-hidden"
                  >
                    {/* Hover glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:to-transparent transition-all duration-500" />

                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-500 shadow-xl">
                          <Users className="w-6 h-6 text-accent group-hover:text-background transition-colors duration-500" />
                        </div>
                        <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors duration-500">
                          Leadership & Strategy
                        </h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {leadershipSkills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="text-sm bg-white/5 text-white/80 border border-white/10 hover:bg-accent hover:text-background hover:border-accent transition-all px-3 py-1.5 rounded-lg font-medium cursor-default"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* Full-Stack & Tools Card */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-accent/50 transition-all duration-500 group relative overflow-hidden"
                  >
                    {/* Hover glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:to-transparent transition-all duration-500" />

                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-500 shadow-xl">
                          <Code className="w-6 h-6 text-accent group-hover:text-background transition-colors duration-500" />
                        </div>
                        <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors duration-500">
                          Full-Stack & Tools
                        </h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {techSkills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="text-sm bg-white/5 text-white/80 border border-white/10 hover:bg-accent hover:text-background hover:border-accent transition-all px-3 py-1.5 rounded-lg font-medium cursor-default"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.section>

              {/* Active Builds Section */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold mb-8 text-white flex items-center gap-4">
                  <span className="w-8 h-1 bg-accent rounded-full" />
                  Active Builds
                </h2>
                <div className="space-y-6">

                  {/* Networking Pilot */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-10 hover:bg-white/10 hover:border-accent/50 transition-all duration-300 group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:to-transparent transition-all duration-500" />
                    <div className="relative z-10">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-500 shadow-xl">
                            <Rocket className="w-6 h-6 text-accent group-hover:text-background transition-colors duration-500" />
                          </div>
                          <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">
                            Networking Pilot
                          </h3>
                        </div>
                        <div className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-sm font-bold text-accent whitespace-nowrap self-start">
                          Live · Production
                        </div>
                      </div>
                      <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                        An AI-driven professional event discovery engine. Driven by my love for building, I took this project from absolute zero, handled the full-stack architecture, and scaled it to a live, production-ready stage.
                      </p>
                      <Link
                        to="/networking-pilot"
                        className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all duration-300"
                      >
                        Read the Case Study
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </motion.div>

                  {/* Next Milestone */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-10 hover:bg-white/10 hover:border-accent/50 transition-all duration-300 group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:to-transparent transition-all duration-500" />
                    <div className="relative z-10">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-500 shadow-xl">
                            <Target className="w-6 h-6 text-accent group-hover:text-background transition-colors duration-500" />
                          </div>
                          <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">
                            Next Milestone
                          </h3>
                        </div>
                        <div className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-bold text-foreground/60 whitespace-nowrap self-start">
                          In Progress
                        </div>
                      </div>
                      <p className="text-lg text-foreground/80 leading-relaxed">
                        Bringing this exact blend of high-value people leadership, technical execution, and relentless adaptability into fast-moving, high-stakes environments — specifically targeting technical operations or product management roles.
                      </p>
                    </div>
                  </motion.div>

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
