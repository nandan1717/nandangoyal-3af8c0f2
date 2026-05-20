import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const NetworkingPilotCaseStudy = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden text-foreground selection:bg-accent selection:text-background">
      <SEO
        title="Networking Pilot | Case Study | Nandan Goyal"
        description="Case study of Networking Pilot - An intelligent, privacy-first career co-pilot that matches professionals with the right events."
        canonical="https://nandangoyal.me/networking-pilot"
      />

      {/* Ambient Background Orbs */}
      <div className="fixed top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-accent/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen opacity-30" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-accent/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen opacity-20" />

      <Navigation />

      <main className="relative z-10 pt-32 pb-20">
        <article className="max-w-3xl mx-auto px-4 sm:px-6">
          
          <Link to="/" className="inline-flex items-center gap-2 text-foreground/60 hover:text-accent transition-colors mb-12 group font-medium">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          {/* Header */}
          <header className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-accent tracking-widest uppercase mb-6">
                Portfolio · Case Study
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 tracking-tight leading-[1.1]">
                Networking<br />Pilot
              </h1>
              <p className="text-xl text-foreground/70 leading-relaxed font-medium">
                An intelligent, privacy-first career co-pilot that matches professionals with the right events — and gives them the words to walk in ready.
              </p>
            </motion.div>

            {/* Meta Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-12 py-8 border-y border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-8"
            >
              <div>
                <h3 className="text-xs font-bold text-foreground/50 uppercase tracking-widest mb-2">Role</h3>
                <p className="text-white/90 font-semibold">Solo Builder — Product, Design & Engineering</p>
              </div>
              <div>
                <h3 className="text-xs font-bold text-foreground/50 uppercase tracking-widest mb-2">Timeline</h3>
                <p className="text-white/90 font-semibold">2025 — Shipped</p>
              </div>
              <div>
                <h3 className="text-xs font-bold text-foreground/50 uppercase tracking-widest mb-2">Stack</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {["Next.js", "Expo", "Supabase", "Gemini AI", "Turborepo", "Resend"].map(tech => (
                    <Badge key={tech} variant="secondary" className="bg-white/5 text-white/80 border-white/10 hover:bg-accent hover:text-background transition-colors">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          </header>

          <div className="space-y-20">
            {/* 01 The Problem */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-xs font-bold text-accent uppercase tracking-[0.2em] mb-4">01 · The Problem</div>
              <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">I kept showing up to the wrong rooms.</h2>
              <div className="space-y-4 text-foreground/70 text-lg leading-relaxed">
                <p>
                  As someone transitioning careers — from customer operations into product and tech — I went to a lot of networking events. 
                  Most of them were a waste of time. Not because the events were bad, but because I had <strong className="text-white font-bold">no way of knowing whether a room was right for me before I walked in.</strong>
                </p>
                <p>
                  And when I did find a promising event, I'd freeze. What do I even say? How do I introduce myself in a way that's 
                  relevant to this specific crowd, this specific theme, these specific people in the room?
                </p>
                
                <blockquote className="my-10 pl-6 border-l-4 border-accent bg-accent/5 py-4 pr-6 rounded-r-lg italic text-xl text-white font-serif shadow-lg">
                  "The problem wasn't access to events. It was knowing which door was mine — and having the right words ready when I opened it."
                </blockquote>

                <p>
                  No tool existed that could look at <em className="text-white/90">my specific background</em> and tell me: this event fits you, here's why, 
                  and here's exactly how to introduce yourself when you get there.
                </p>
                <p className="text-white font-semibold">So I built it.</p>
              </div>
            </motion.section>

            {/* 02 What I Built */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-xs font-bold text-accent uppercase tracking-[0.2em] mb-4">02 · What I Built</div>
              <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">A co-pilot that reads your resume and finds your room.</h2>
              <div className="space-y-4 text-foreground/70 text-lg leading-relaxed mb-10">
                <p>
                  Networking Pilot is a dual-platform application — web and mobile — that analyzes your resume, extracts your real skills 
                  and experience, and matches you to professional events in your area with a tailored alignment score.
                </p>
                <p>
                  More importantly, it generates a <strong className="text-white font-bold">personalized elevator pitch</strong> for each event — not a generic template, 
                  but one calibrated to your background and the event's theme, speakers, and organizers. You can toggle tone between 
                  Professional, Casual, and Bold depending on the room you're walking into.
                </p>
              </div>

              {/* Terminal Window Mockup */}
              <div className="rounded-xl overflow-hidden bg-[#111118] border border-white/10 shadow-2xl">
                <div className="bg-[#16161f] px-4 py-3 border-b border-white/5 flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <span className="ml-2 text-xs font-mono text-foreground/50">Key Features</span>
                </div>
                <div className="p-6 font-mono text-sm leading-loose overflow-x-auto">
                  <div className="flex whitespace-nowrap"><span className="text-blue-400 w-36 shrink-0">resume_match</span> <span className="text-accent">→ AI alignment score per event</span></div>
                  <div className="flex whitespace-nowrap"><span className="text-blue-400 w-36 shrink-0">pitch_generator</span> <span className="text-accent">→ Personalized per event + tone mode</span></div>
                  <div className="flex whitespace-nowrap"><span className="text-blue-400 w-36 shrink-0">key_people</span> <span className="text-accent">→ Speakers, organizers + LinkedIn links</span></div>
                  <div className="flex whitespace-nowrap"><span className="text-blue-400 w-36 shrink-0">pii_scrubber</span> <span className="text-accent">→ Client-side PII removal before AI</span></div>
                  <div className="flex whitespace-nowrap"><span className="text-blue-400 w-36 shrink-0">contact_sync</span> <span className="text-accent">→ See contacts already registered</span></div>
                  <div className="flex whitespace-nowrap"><span className="text-blue-400 w-36 shrink-0">retention_cron</span> <span className="text-accent">→ Nudge + re-engagement</span> <span className="text-foreground/40 ml-2">// Resend API</span></div>
                </div>
              </div>
            </motion.section>

            {/* 03 Key Decisions */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-xs font-bold text-accent uppercase tracking-[0.2em] mb-4">03 · Key Decisions</div>
              <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">Building with cost, trust, and the user in mind.</h2>
              <p className="text-foreground/70 text-lg leading-relaxed mb-8">
                This wasn't just a technical exercise. Every architectural decision came back to one question: <strong className="text-white font-bold">does this make the product more trustworthy, more affordable to run, or more useful to the person using it?</strong>
              </p>

              <div className="grid gap-4">
                {[
                  {
                    title: "Client-side PII scrubbing before any AI call",
                    desc: "Resumes contain deeply personal data. I built a dual-layer regex scrubber that strips names, emails, phone numbers, addresses, and SSNs locally in the browser — before a single character touches the Gemini API. Privacy isn't a disclaimer here. It's enforced by architecture."
                  },
                  {
                    title: "Monorepo structure from day one",
                    desc: "Running web and mobile from a single Turborepo meant shared database types, unified scripts, and no duplicated logic. It was a disciplined call early on that paid off every time I shipped a feature that needed to work on both platforms."
                  },
                  {
                    title: "Row Level Security on every table",
                    desc: "Supabase RLS policies mean user A can never query user B's events, profile, or reactions — not even by accident. Security wasn't bolted on after the fact. It was part of the schema design."
                  },
                  {
                    title: "Community sentiment without social friction",
                    desc: "Rather than building a full social graph, I added lightweight Like/Dislike reactions normalized by event name — giving users crowd signal without requiring follows, connections, or any social overhead."
                  }
                ].map((decision, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-6 relative overflow-hidden group hover:border-white/20 transition-colors">
                    <div className="absolute left-0 top-0 w-1 h-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <h3 className="text-lg font-bold text-white mb-2">{decision.title}</h3>
                    <p className="text-foreground/70">{decision.desc}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* 04 What I Learned */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-xs font-bold text-accent uppercase tracking-[0.2em] mb-4">04 · What I Learned</div>
              <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">I learned I could build more than I thought I could.</h2>
              <p className="text-foreground/70 text-lg leading-relaxed mb-8">
                I came into this project as a Project Manager and Customer Service lead — not a software engineer. Shipping this changed how I see myself professionally.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    num: "01",
                    title: "I think in systems, not just features",
                    desc: "Building the cron pipeline, the RLS policies, the PII scrubber — I wasn't just adding features. I was designing how the whole thing held together under pressure."
                  },
                  {
                    num: "02",
                    title: "Customer-first thinking is a technical skill",
                    desc: "Every privacy decision, every consent modal, every email deduplication check — those came from asking \"what would make a user trust this?\" not \"what's easiest to ship?\""
                  },
                  {
                    num: "03",
                    title: "Cost discipline is product discipline",
                    desc: "Client-side PDF extraction, sanitizing before API calls, normalized event name matching — I learned to architect for cost at scale, not just for demo day."
                  },
                  {
                    num: "04",
                    title: "I know how to take an idea all the way",
                    desc: "From a personal frustration, to a schema, to a shipped dual-platform product with automated email flows. I now know what the full journey from idea to real looks like."
                  }
                ].map((learning, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <div className="font-mono text-xs text-accent mb-3">{learning.num}</div>
                    <h3 className="text-base font-bold text-white mb-2 leading-tight">{learning.title}</h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">{learning.desc}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* 05 Honest Reflection */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-xs font-bold text-accent uppercase tracking-[0.2em] mb-4">05 · Honest Reflection</div>
              <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">What I'd do differently.</h2>
              <div className="space-y-4 text-foreground/70 text-lg leading-relaxed">
                <p>
                  The stack is heavier than an MVP needs. I over-engineered before validating. 
                  If I rebuilt this today, I'd start with a single web app, one AI call, and five real users giving me feedback — 
                  before touching Turborepo or building the mobile client.
                </p>
                <p>
                  But I don't regret the complexity. <strong className="text-white font-bold">You learn the most by shipping something real.</strong> And this is real — database schemas, production RLS, live email infrastructure, and a working mobile app. Not a prototype. Not a Figma file. A product.
                </p>

                <blockquote className="mt-10 pl-6 border-l-4 border-accent bg-accent/5 py-4 pr-6 rounded-r-lg italic text-xl text-white font-serif shadow-lg">
                  "Most people with this idea have a slide deck. I have a working monorepo. That's the gap I'm proud of closing."
                </blockquote>
              </div>
            </motion.section>
          </div>
        </article>
      </main>

      <div className="relative z-20">
        <Footer />
      </div>
    </div>
  );
};

export default NetworkingPilotCaseStudy;
