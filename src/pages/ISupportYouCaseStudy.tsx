import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import isybEcosystem from "@/assets/isyb-ecosystem.png";
import isybEvents from "@/assets/isyb-events.png";
import isybPortfolio from "@/assets/isyb-portfolio.png";

const ISupportYouCaseStudy = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden text-foreground selection:bg-accent selection:text-background">
      <SEO
        title="ISupportYou | Case Study | Nandan Goyal"
        description="Case study of ISupportYou — a full client website delivery translating a complex 7-pillar service ecosystem into a clean, working digital product."
        canonical="https://nandangoyal.me/isupportyou"
      />

      {/* Ambient Background Orbs */}
      <div className="fixed top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-accent/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen opacity-30" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-accent/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen opacity-20" />

      <Navigation />

      <main className="relative z-10 pt-32 pb-20">
        <article className="max-w-3xl mx-auto px-4 sm:px-6">

          <Link to="/projects" className="inline-flex items-center gap-2 text-foreground/60 hover:text-accent transition-colors mb-12 group font-medium">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>

          {/* Header */}
          <header className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-accent tracking-widest uppercase">
                  Portfolio · Client Work
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full text-xs font-bold text-green-400 tracking-widest uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Live in Production
                </div>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 tracking-tight leading-[1.1]">
                ISupport<span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-300">You</span>
              </h1>
              <p className="text-xl text-foreground/70 leading-relaxed font-medium">
                A full client website delivery for a global support program — translating a complex 7-pillar service ecosystem into a clean, working digital product.
              </p>

              <div className="mt-6">
                <Button asChild className="h-11 px-5 rounded-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold gap-2 shadow-[0_0_20px_rgba(255,122,0,0.3)]">
                  <a href="https://www.isupportyouprogram.com" target="_blank" rel="noopener noreferrer">
                    isupportyouprogram.com
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* Meta Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-12 py-8 border-y border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6"
            >
              {[
                { label: "Type", value: "Client Delivery" },
                { label: "Role", value: "Solo Developer" },
                { label: "Stack", value: "HTML · CSS · JS · Bootstrap 5" },
                { label: "Status", value: "Shipped & Live" },
              ].map((item) => (
                <div key={item.label}>
                  <h3 className="text-xs font-bold text-foreground/50 uppercase tracking-widest mb-2">{item.label}</h3>
                  <p className="text-white/90 font-semibold text-sm">{item.value}</p>
                </div>
              ))}
            </motion.div>
          </header>

          <div className="space-y-20">

            {/* 01 Client Context */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-xs font-bold text-accent uppercase tracking-[0.2em] mb-4">01 · Client Context</div>
              <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">A real business with a complex story to tell.</h2>
              <div className="space-y-4 text-foreground/70 text-lg leading-relaxed">
                <p>
                  ISupportYou (ISYB) is a global support program that connects individuals and businesses to a wide ecosystem of services — coaching, event networking, an LMS, book publishing, AI tools, and partner integrations. <strong className="text-white font-bold">The challenge wasn't building a website. It was making something this multifaceted feel coherent and navigable to a first-time visitor.</strong>
                </p>
                <p>
                  This was client work. That means real stakeholder communication, real scope decisions, and a real deadline with a real person depending on the outcome.
                </p>
              </div>

              <blockquote className="mt-10 pl-6 border-l-4 border-accent bg-accent/5 py-5 pr-6 rounded-r-lg italic text-xl text-white font-serif shadow-lg">
                "The hardest part of client work isn't the code. It's understanding what the client actually needs versus what they say they want — and building the thing that serves both."
              </blockquote>
            </motion.section>

            {/* 02 What I Delivered */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-xs font-bold text-accent uppercase tracking-[0.2em] mb-4">02 · What I Delivered</div>
              <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">Four interconnected pages. One coherent product.</h2>
              <p className="text-foreground/70 text-lg leading-relaxed mb-8">
                The project covered a full multi-page website with distinct functional requirements on each page — not just a template swap.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {[
                  { emoji: "🏠", title: "Main Homepage", desc: "Mission, services overview, portfolio highlights, client testimonials, and contact — with scroll animations and an automated testimonials slider." },
                  { emoji: "🌐", title: "7-Pillar Ecosystem Page", desc: "A dedicated page mapping ISYB's full service network — in-house tools, LMS, coaching, events, and AI integrations — into a digestible layout." },
                  { emoji: "🗂️", title: "Interactive Portfolio", desc: "Category filtering, live text search, and per-project image carousels. Built to let the client showcase work without needing a CMS." },
                  { emoji: "📅", title: "Live Events Page", desc: "Dynamic event fetching from the Proximy API with search, sorting, and filtering — real data, not hardcoded content." },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-white/20 transition-colors group relative overflow-hidden">
                    <div className="absolute left-0 top-0 w-1 h-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="text-2xl mb-3">{item.emoji}</div>
                    <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-foreground/60 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Gallery */}
              <h3 className="text-sm font-bold text-foreground/50 uppercase tracking-widest mb-6">Gallery</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[isybEcosystem, isybEvents, isybPortfolio].map((img, idx) => (
                  <div
                    key={idx}
                    className={`rounded-2xl overflow-hidden border border-white/10 group/img relative ${idx === 0 ? "sm:col-span-2" : ""}`}
                  >
                    <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover/img:opacity-100 transition-opacity duration-500 mix-blend-screen z-10" />
                    <img
                      src={img}
                      alt={`ISupportYou screenshot ${idx + 1}`}
                      loading="lazy"
                      className="w-full h-full min-h-[200px] object-cover object-top group-hover/img:scale-105 transition-transform duration-700"
                    />
                  </div>
                ))}
              </div>
            </motion.section>

            {/* 03 Interesting Problem */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-xs font-bold text-accent uppercase tracking-[0.2em] mb-4">03 · Interesting Problem</div>
              <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">Pulling live data without a backend.</h2>
              <p className="text-foreground/70 text-lg leading-relaxed mb-8">
                The events page needed to feel dynamic — searchable, sortable, and always current — without the complexity or cost of a full backend. The solution was integrating the Proximy API directly in the frontend, with JavaScript handling all filtering, sorting, and display logic client-side.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-orange-500/5 border border-orange-500/20 rounded-xl p-6">
                  <div className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-3">The Constraint</div>
                  <p className="text-foreground/70 text-sm leading-relaxed">Client needed live event data without a server, a database, or an ongoing infrastructure cost. Pure frontend delivery.</p>
                </div>
                <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-6">
                  <div className="text-xs font-bold text-green-400 uppercase tracking-widest mb-3">The Decision</div>
                  <p className="text-foreground/70 text-sm leading-relaxed">Proximy API integration with client-side JS for search, sort, and filter — keeping the stack simple while delivering a dynamic experience.</p>
                </div>
              </div>

              <p className="text-foreground/70 text-lg leading-relaxed">
                This kind of constraint is where real product thinking happens. <strong className="text-white font-bold">The best solution isn't always the most technically impressive one — it's the one that solves the problem within the actual boundaries of the project.</strong>
              </p>
            </motion.section>

            {/* 04 What I Learned */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-xs font-bold text-accent uppercase tracking-[0.2em] mb-4">04 · What I Learned</div>
              <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">Client work teaches you things personal projects never do.</h2>

              <div className="grid gap-4">
                {[
                  {
                    num: "01",
                    title: "Translating a business into a user experience",
                    desc: "ISYB's 7-pillar model is complex internally. My job was to make it instantly clear to someone who knew nothing about the program. That gap — between how a business sees itself and how a new visitor sees it — is a product problem, not a design problem."
                  },
                  {
                    num: "02",
                    title: "Scope discipline is a professional skill",
                    desc: "Client projects don't have unlimited time or budget. I learned to make fast, confident decisions about what to build natively versus what to integrate — and how to communicate those trade-offs clearly."
                  },
                  {
                    num: "03",
                    title: "Delivery is the only metric that matters",
                    desc: "A client doesn't care about your architecture choices. They care that the website is live, works on mobile, and represents their brand well. Shipping clean, maintainable work on time is the whole job."
                  },
                  {
                    num: "04",
                    title: "Responsiveness is non-negotiable",
                    desc: "Real users come from everywhere. Building and testing across mobile, tablet, and desktop — not as an afterthought but as part of the build — is the baseline for professional frontend work."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 items-start bg-white/5 border border-white/10 rounded-xl p-6 hover:border-white/20 transition-colors">
                    <div className="font-mono text-sm text-accent shrink-0 pt-0.5">{item.num}</div>
                    <div>
                      <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-sm text-foreground/60 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* 05 Why This Matters */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-xs font-bold text-accent uppercase tracking-[0.2em] mb-4">05 · Why This Matters in My Portfolio</div>
              <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">This is proof I can deliver for someone else.</h2>
              <div className="space-y-4 text-foreground/70 text-lg leading-relaxed">
                <p>
                  Personal projects show what you're capable of. Client projects show something different — <strong className="text-white font-bold">that you can listen, understand a brief, manage expectations, and ship something a real business is willing to put their name on.</strong>
                </p>
                <p>
                  ISupportYou is live. It has real visitors. A real client uses it to represent their business to a global audience. That's a different standard than a side project, and it's one I'm proud to have met.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <Button asChild className="h-12 px-6 rounded-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-[0_0_20px_rgba(255,122,0,0.3)] hover:shadow-[0_0_40px_rgba(255,122,0,0.5)] transition-all font-semibold gap-2">
                  <a href="https://www.isupportyouprogram.com" target="_blank" rel="noopener noreferrer">
                    Visit Live Site
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" className="h-12 px-6 rounded-full border-white/20 bg-white/5 hover:bg-white/10 text-white transition-all font-semibold backdrop-blur-md gap-2">
                  <Link to="/projects">
                    ← All Projects
                  </Link>
                </Button>
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

export default ISupportYouCaseStudy;
