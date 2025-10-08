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
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-6">
          {/* Brand & Description */}
          <div className="max-w-md">
            <h3 className="text-xl font-bold mb-2">Nandan Goyal</h3>
            <p className="text-primary-foreground/70 text-xs leading-relaxed">
              Aspiring Agile PM | BBA Student | VP, YU Creators Club
            </p>
            <div className="flex items-center gap-2 text-xs text-primary-foreground/70 mt-2">
              <MapPin className="w-3 h-3" />
              <span>Surrey, Canada</span>
            </div>
          </div>

          {/* Navigation Links - Horizontal on Desktop */}
          <nav className="flex flex-wrap gap-4 text-sm">
            {navLinks.slice(0, 4).map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className="text-primary-foreground/80 hover:text-accent transition-colors"
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Social Links - Horizontal Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                  aria-label={link.label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-4 border-t border-primary-foreground/20 text-center text-xs text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Nandan Goyal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
