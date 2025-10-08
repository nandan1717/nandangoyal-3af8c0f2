import { NavLink } from "react-router-dom";
import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";

const Footer = () => {
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/skills", label: "Skills" },
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
    <footer className="bg-primary text-primary-foreground border-t border-primary/20 mt-auto">
      <div className="container mx-auto px-4 py-6 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-3">Nandan Goyal</h3>
            <p className="text-primary-foreground/80 text-sm mb-3 leading-relaxed">
              Aspiring Agile Project Manager | BBA Project Management Student | VP, YU Creators Club | Tech-Savvy & AI-Driven | Vibe Coder | Seeking Tech Consulting and Project Management Roles
            </p>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
              <MapPin className="w-4 h-4" />
              <span>Surrey, Canada</span>
            </div>
          </div>

          {/* Quick Links - 2 Rows */}
          <div>
            <h3 className="text-lg font-bold mb-3">Quick Links</h3>
            <nav className="grid grid-cols-2 gap-x-4 gap-y-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-bold mb-3">Connect</h3>
            <div className="flex flex-col gap-2">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                    <span>{link.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-4 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/70">
          <p>&copy; {new Date().getFullYear()} Nandan Goyal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
