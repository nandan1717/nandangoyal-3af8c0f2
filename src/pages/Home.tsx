import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { motion, AnimatePresence } from "framer-motion";
import { Award, BookOpen, Code, Briefcase, Brain, Users, Rocket, Shield, Cpu, ArrowRight, ExternalLink } from "lucide-react";
import carousel1 from "@/assets/carousel-1.jpeg";
import carousel2 from "@/assets/carousel-2.jpeg";
import carousel3 from "@/assets/carousel-3.jpeg";
import carousel4 from "@/assets/carousel-4.jpeg";
import carousel5 from "@/assets/carousel-5.mp4";
import networkingPilotLogo from "@/assets/networking-pilot-logo.png";

const Home = () => {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Nandan Goyal",
    "jobTitle": "Project Management Student & Tech Consultant",
    "url": "https://nandangoyal.me",
    "sameAs": [
      "https://linkedin.com/in/nandan-goyal-577b47226"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Yorkville University"
    },
    "knowsAbout": ["Project Management", "Tech Consulting", "Agile Methodology", "Full Stack Development", "Leadership"],
    "email": "nandannn.bti@gmail.com",
    "telephone": "+1-604-369-7940",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Surrey",
      "addressRegion": "BC",
      "addressCountry": "CA"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Nandan Goyal Portfolio",
    "url": "https://nandangoyal.me",
    "description": "Portfolio of Nandan Goyal - BBA Project Management Student, Tech Consultant, and Agile PM Intern",
    "author": {
      "@type": "Person",
      "name": "Nandan Goyal"
    }
  };

  const images = [carousel1, carousel2, carousel3, carousel4];
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImgIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden text-foreground selection:bg-accent selection:text-accent-foreground">
      <SEO
        title="Nandan Goyal | Tech Consultant & Project Manager | Available May 2026"
        description="BBA Project Management Student at Yorkville University. PM Intern at ISYB, VP of YU Creators Club. Leading Agile teams, building full-stack projects, and delivering results."
        canonical="https://nandangoyal.me"
        structuredData={[personSchema, websiteSchema]}
      />

      {/* Ambient Background Orbs */}
      <div className="fixed top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-accent/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen opacity-50 animate-pulse-slow" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-accent/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen opacity-30" />
      <div className="fixed top-[40%] left-[30%] w-[30vw] h-[30vw] bg-blue-900/20 rounded-full blur-[100px] pointer-events-none opacity-40" />

      <Navigation />

      <main className="relative z-10 pt-32 pb-0">

        {/* Cinematic Hero Section */}
        <section className="min-h-[85vh] flex items-center px-4 sm:px-6 mb-24">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left: Massive Typography */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="lg:col-span-7 space-y-8 relative z-20"
            >
              <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10 shadow-2xl">
                <div className="w-2 h-2 rounded-full bg-accent animate-ping" />
                <span className="text-sm font-medium text-foreground/80 tracking-wide uppercase">Open to Opportunities · May 2026</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-[1.1] tracking-tighter text-white drop-shadow-2xl">
                Delivering <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-300">Agile</span> Solutions <br />
                & Leading Cross-Functional Teams.
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-foreground/70 font-medium max-w-2xl leading-relaxed">
                Customer Service Manager Walmart | VP, YU Creators Club | BBA Project Management Graduate | Technical Founder @ NetworkingPilot
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/projects">
                  <Button size="lg" className="h-14 px-8 text-lg bg-accent hover:bg-accent/90 text-accent-foreground shadow-[0_0_40px_rgba(255,122,0,0.3)] hover:shadow-[0_0_60px_rgba(255,122,0,0.5)] transition-all rounded-full">
                    Explore My Work
                  </Button>
                </Link>
                <Link to="/about">
                  <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 text-white rounded-full transition-all">
                    My Journey
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Right: Carousel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative w-full aspect-[4/5] rounded-[2rem] bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.4)] overflow-hidden flex items-center justify-center group">
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent z-10" />

                {/* Abstract graphic representing code/management */}
                <div className="absolute inset-0 opacity-20 group-hover:scale-105 transition-transform duration-1000 z-10 pointer-events-none">
                  <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-accent/40 rounded-full animate-[spin_10s_linear_infinite]" />
                  <div className="absolute top-1/3 left-1/3 w-48 h-48 border border-white/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                </div>

                <div className="relative z-0 w-full h-full">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentImgIndex}
                      src={images[currentImgIndex]}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8 }}
                      className="absolute inset-0 w-full h-full object-cover object-top"
                      alt="Project Showcase"
                    />
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Expansive Stats Section */}
        <section className="px-4 sm:px-6 mb-32 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-7xl mx-auto w-full bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-10 sm:p-16 lg:p-24 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-12 sm:mb-16 relative z-10 tracking-tight">
              Impact <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-300">&amp;</span> Key Achievements
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16 relative z-10">
              <div className="space-y-4 border-l-2 border-accent/30 pl-6 hover:border-accent transition-colors">
                <div className="text-6xl sm:text-7xl font-black text-white">150<span className="text-accent">+</span></div>
                <h4 className="text-xl font-bold text-foreground/90 uppercase tracking-widest">Students Led</h4>
                <span className="text-xs font-semibold text-accent/80 uppercase tracking-[0.2em]">at YU Creators Club</span>
                <p className="text-foreground/60">As VP of YU Creators Club, fostering innovation.</p>
              </div>
              <div className="space-y-4 border-l-2 border-accent/30 pl-6 hover:border-accent transition-colors">
                <div className="text-6xl sm:text-7xl font-black text-white">5k<span className="text-accent">+</span></div>
                <h4 className="text-xl font-bold text-foreground/90 uppercase tracking-widest">5-Star Ratings</h4>
                <span className="text-xs font-semibold text-accent/80 uppercase tracking-[0.2em]">at Walmart</span>
                <p className="text-foreground/60">Delivered outstanding customer satisfaction.</p>
              </div>
              <div className="space-y-4 border-l-2 border-accent/30 pl-6 hover:border-accent transition-colors">
                <div className="text-6xl sm:text-7xl font-black text-white">10<span className="text-accent">+</span></div>
                <h4 className="text-xl font-bold text-foreground/90 uppercase tracking-widest">Agile Sprints</h4>
                <span className="text-xs font-semibold text-accent/80 uppercase tracking-[0.2em]">at ISYB — PM Internship</span>
                <p className="text-foreground/60">Managed complex delivery pipelines.</p>
              </div>

              {/* Row 2 – New Impact Figures */}
              <div className="space-y-4 border-l-2 border-accent/30 pl-6 hover:border-accent transition-colors">
                <div className="text-6xl sm:text-7xl font-black text-white">2 <span className="text-accent">Yrs</span></div>
                <h4 className="text-xl font-bold text-foreground/90 uppercase tracking-widest">Cashier to Manager</h4>
                <span className="text-xs font-semibold text-accent/80 uppercase tracking-[0.2em]">at Walmart</span>
                <p className="text-foreground/60">Rapidly excelled from Cashier to Customer Service Manager at Walmart. Earned 5,000+ five-star ratings and onboarded 5+ new team members.</p>
              </div>
              <div className="space-y-4 border-l-2 border-accent/30 pl-6 hover:border-accent transition-colors">
                <div className="text-6xl sm:text-7xl font-black text-white">70<span className="text-accent">%</span></div>
                <h4 className="text-xl font-bold text-foreground/90 uppercase tracking-widest">Efficiency Boost</h4>
                <span className="text-xs font-semibold text-accent/80 uppercase tracking-[0.2em]">across every role</span>
                <p className="text-foreground/60">Dramatically improved project delivery speeds and technical execution by leveraging AI-assisted prototyping and modern web frameworks.</p>
              </div>
              <div className="space-y-4 border-l-2 border-accent/30 pl-6 hover:border-accent transition-colors">
                <div className="text-6xl sm:text-7xl font-black text-white">5<span className="text-accent">+</span></div>
                <h4 className="text-xl font-bold text-foreground/90 uppercase tracking-widest">Projects Delivered</h4>
                <span className="text-xs font-semibold text-accent/80 uppercase tracking-[0.2em]">as a Developer</span>
                <p className="text-foreground/60">End-to-end delivery of full-stack apps, consulting engagements, and event platforms using Agile methodologies.</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Skill Arsenal Section */}
        <section className="px-4 sm:px-6 mb-32 relative z-20">
          <div className="max-w-7xl mx-auto w-full">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl font-black text-white mb-16 text-center tracking-tight"
            >
              My Skill <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-300">Arsenal</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
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
              ].map((category, index) => {
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
                        <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-accent transition-colors duration-500">
                          {category.title}
                        </h3>
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
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="px-4 sm:px-6 mb-32 relative z-20">
          <div className="max-w-7xl mx-auto w-full">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl font-black text-white mb-16 text-center tracking-tight"
            >
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-300">Projects</span>
            </motion.h2>

            {/* Networking Pilot Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Glowing background layer */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-3xl blur-xl" />

              <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl group">

                {/* Top Header */}
                <div className="p-8 md:p-12 border-b border-white/10 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 shadow-xl group-hover:border-accent/50 transition-colors duration-500 overflow-hidden">
                        <img src={networkingPilotLogo} alt="Networking Pilot" className="w-12 h-12 object-contain" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-black text-white tracking-tight mb-2 group-hover:text-accent transition-colors duration-500">
                          Networking Pilot
                        </h3>
                        <p className="text-xl text-foreground/80 font-medium">
                          Solo Builder — Product, Design & Engineering
                        </p>
                        <div className="mt-4 inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-accent tracking-widest uppercase">
                          2025 · Shipped
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 md:p-12 grid lg:grid-cols-12 gap-12">

                  {/* Left: Description & Highlights */}
                  <div className="lg:col-span-5 space-y-8">
                    <p className="text-foreground/70 text-lg leading-relaxed">
                      An intelligent, privacy-first career co-pilot that matches professionals with the right networking events — and generates personalized elevator pitches calibrated to their background.
                    </p>

                    <div>
                      <h4 className="text-sm font-bold text-foreground/50 uppercase tracking-widest mb-6">Key Highlights</h4>
                      <ul className="space-y-4">
                        {[
                          "AI alignment score per event based on resume",
                          "Personalized elevator pitch with tone toggle",
                          "Client-side PII scrubbing before any API call",
                          "Row Level Security on every Supabase table",
                          "Dual platform — web (Next.js) & mobile (Expo)",
                          "Automated re-engagement email pipelines"
                        ].map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-3 group/item">
                            <span className="text-accent mt-1 opacity-50 group-hover/item:opacity-100 transition-opacity">&bull;</span>
                            <span className="text-white/80 leading-relaxed font-medium group-hover/item:text-white transition-colors">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-foreground/50 uppercase tracking-widest mb-4">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {["Next.js", "Expo", "Supabase", "Gemini AI", "Turborepo", "Resend"].map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-sm bg-white/5 text-white/80 border border-white/10 hover:bg-accent hover:text-background hover:border-accent transition-all px-3 py-1.5 rounded-md font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 flex flex-wrap gap-3">
                      <Button asChild className="h-12 px-6 rounded-full border-white/20 bg-white/5 hover:bg-white/10 text-white transition-all font-semibold backdrop-blur-md gap-2">
                        <a href="https://networkingpilot.ca" target="_blank" rel="noopener noreferrer">
                          Visit Project
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                      <Link to="/networking-pilot">
                        <Button className="h-12 px-6 rounded-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-[0_0_20px_rgba(255,122,0,0.3)] hover:shadow-[0_0_40px_rgba(255,122,0,0.5)] transition-all font-semibold gap-2">
                          Read Case Study
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>

                  {/* Right: Feature Window Mockup */}
                  <div className="lg:col-span-7 space-y-6">
                    <h4 className="text-sm font-bold text-foreground/50 uppercase tracking-widest mb-4">Architecture Decisions</h4>

                    <div className="grid gap-4">
                      {[
                        {
                          icon: Shield,
                          title: "Privacy by Architecture",
                          desc: "Dual-layer regex scrubber strips PII client-side before any data touches the Gemini API. Privacy isn't a disclaimer — it's enforced."
                        },
                        {
                          icon: Cpu,
                          title: "Monorepo from Day One",
                          desc: "Turborepo powers shared types, unified scripts, and zero duplicated logic across web and mobile."
                        },
                        {
                          icon: Shield,
                          title: "Row Level Security",
                          desc: "Supabase RLS policies ensure user A can never access user B's data — not even by accident."
                        }
                      ].map((decision, idx) => {
                        const DecisionIcon = decision.icon;
                        return (
                          <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 relative overflow-hidden group/card hover:border-white/20 transition-all duration-500">
                            <div className="absolute left-0 top-0 w-1 h-full bg-accent opacity-0 group-hover/card:opacity-100 transition-opacity" />
                            <div className="flex items-start gap-4">
                              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover/card:bg-accent/10 group-hover/card:border-accent/30 transition-all duration-500">
                                <DecisionIcon className="w-5 h-5 text-accent" />
                              </div>
                              <div>
                                <h5 className="text-base font-bold text-white mb-1">{decision.title}</h5>
                                <p className="text-sm text-foreground/60 leading-relaxed">{decision.desc}</p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Pull quote */}
                    <div className="mt-6 pl-5 border-l-2 border-accent/50 bg-accent/5 py-4 pr-5 rounded-r-lg">
                      <p className="text-white/90 italic text-lg leading-relaxed">
                        "Most people with this idea have a slide deck. I have a working monorepo."
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>

            {/* See More CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-16 text-center"
            >
              <Link to="/projects">
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 text-white rounded-full transition-all gap-2">
                  See More Projects
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Certifications Layer */}
        <section className="px-4 sm:px-6 mb-32 relative z-20">
          <div className="max-w-7xl mx-auto w-full">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl font-black text-white mb-16 text-center tracking-tight"
            >
              Continuous <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-300">Growth</span>
            </motion.h2>

            <div className="space-y-6">
              {[
                { title: "Microsoft Power Platform (PL-900)", org: "Microsoft", status: "In Progress", icon: Award },
                { title: "CAPM Certification", org: "Project Management Institute", status: "In Progress", icon: Award },
                { title: "Digital Transformation", org: "University of Waterloo", status: "Oct - Dec 2025", icon: BookOpen },
                { title: "Full Stack Web Development", org: "Bangalore Computer Education", status: "2023", icon: Code }
              ].map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 hover:bg-white/10 transition-colors group"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <cert.icon className="w-8 h-8 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">{cert.title}</h3>
                      <p className="text-foreground/60 font-medium">{cert.org}</p>
                    </div>
                  </div>
                  <div className="bg-white/5 px-6 py-3 rounded-full border border-white/10 shrink-0">
                    <span className="text-sm font-bold text-accent tracking-widest uppercase">{cert.status}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <div className="relative z-20">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
