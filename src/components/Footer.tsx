import { NavLink } from "react-router-dom";
import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";

const Footer = () => {
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/journey", label: "Journey" },
    { path: "/achievements", label: "Achievements" },
    { path: "/projects", label: "Projects" },
    { path: "/testimonials", label: "Testimonials" },
    { path: "/contact", label: "Contact" },
  ];

  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      href: "mailto:nandannn.bti@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      href: "tel:+16043697940",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/nandan-goyal-577b47226",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/nandan1717",
    },
  ];

  return (
    <footer className="relative bg-white/5 backdrop-blur-3xl border-t border-white/10 mt-32 overflow-hidden text-white">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-accent/10 blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Brand & Bio */}
          <div className="lg:col-span-5 space-y-8">
            <NavLink to="/" className="inline-block">
              <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tighter hover:text-accent transition-colors">
                Nandan<span className="text-accent">Goyal</span>.
              </h2>
            </NavLink>
            <p className="text-lg text-foreground/70 font-medium leading-relaxed max-w-md">
              Aspiring Agile Project Manager & Vibe Coder. Merging strategic vision with technical execution to build high-impact platforms.
            </p>
            <div className="flex items-center gap-2 text-foreground/80 font-medium bg-white/5 w-fit px-4 py-2 rounded-full border border-white/10">
              <MapPin className="w-5 h-5 text-accent" />
              <span>Surrey, Canada</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-4">
            <h3 className="text-sm font-bold text-foreground/50 uppercase tracking-widest mb-6">Navigation</h3>
            <div className="grid grid-cols-2 gap-4">
              {navLinks.map((link) => (
                <NavLink 
                  key={link.path} 
                  to={link.path}
                  className="text-white hover:text-accent font-medium transition-colors"
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Social Connect */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold text-foreground/50 uppercase tracking-widest mb-6">Connect</h3>
            <div className="flex flex-col gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a 
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-white hover:text-accent transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent/20 group-hover:border-accent/40 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-medium">{social.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-foreground/50 text-sm font-medium">
            &copy; {new Date().getFullYear()} Nandan Goyal. All rights reserved.
          </p>
          <div className="text-foreground/50 text-sm font-medium">
            Designed & Built with <span className="text-accent">♥</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
