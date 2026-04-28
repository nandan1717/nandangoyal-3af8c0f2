import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Mail, Phone, Linkedin, MapPin, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
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
        "name": "Contact",
        "item": "https://nandangoyal.me/contact"
      }
    ]
  };

  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: "nandannn.bti@gmail.com",
      href: "mailto:nandannn.bti@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (604) 369 7940",
      href: "tel:+16043697940",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/nandan-goyal",
      href: "https://linkedin.com/in/nandan-goyal-577b47226",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Surrey, BC",
      href: null,
    },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden text-foreground selection:bg-accent selection:text-foreground">
      <SEO 
        title="Contact Nandan Goyal | Tech Consulting & PM Opportunities"
        description="Get in touch with Nandan Goyal for tech consulting and project management opportunities. Available May 2026. Located in Surrey, BC, Canada."
        canonical="https://nandangoyal.me/contact"
        structuredData={[breadcrumbSchema]}
      />
      
      {/* Ambient Background Orbs */}
      <div className="fixed top-[20%] left-[20%] w-[40vw] h-[40vw] bg-accent/20 rounded-full blur-[150px] pointer-events-none mix-blend-screen opacity-40" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-blue-900/30 rounded-full blur-[150px] pointer-events-none mix-blend-screen opacity-30" />

      <Navigation />
      
      <main className="relative z-10 pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center mb-20"
            >
              <h1 className="text-5xl md:text-7xl font-black mb-6 text-white tracking-tight drop-shadow-2xl">
                Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-300">Talk</span>.
              </h1>
              <p className="text-xl md:text-2xl text-foreground/70 font-medium leading-relaxed max-w-2xl mx-auto">
                I'm not hard to find. If you want to talk about projects, ideas, collaboration, 
                or even just life, here's how.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactItems.map((item, index) => {
                const Icon = item.icon;
                const content = (
                  <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="h-full"
                  >
                    <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(255,122,0,0.15)] transition-all duration-500 group relative overflow-hidden flex flex-col items-center text-center h-full">
                      {/* Glowing effect on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:to-transparent transition-all duration-500" />
                      
                      <div className="relative z-10 flex flex-col items-center">
                        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:border-accent transition-all duration-500 shadow-xl">
                          <Icon className="w-8 h-8 text-accent group-hover:text-background transition-colors duration-500" />
                        </div>
                        
                        <div className="text-sm font-bold text-foreground/50 uppercase tracking-widest mb-2">
                          {item.label}
                        </div>
                        <div className="text-xl font-medium text-white group-hover:text-accent transition-colors duration-500 break-all">
                          {item.value}
                        </div>
                        
                        {item.href && (
                          <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-accent flex items-center gap-2 text-sm font-bold">
                            Connect <ArrowUpRight className="w-4 h-4" />
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );

                return item.href ? (
                  <a 
                    key={index} 
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block group/link"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={index}>{content}</div>
                );
              })}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-24 text-center"
            >
              <div className="inline-block p-[2px] rounded-full bg-gradient-to-r from-accent/50 to-orange-300/50">
                <div className="bg-background/80 backdrop-blur-xl rounded-full px-8 py-4">
                  <p className="text-lg md:text-xl text-white font-medium italic">
                    "If you message me, don't just write 'Hi'. Tell me something real."
                  </p>
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

export default Contact;
