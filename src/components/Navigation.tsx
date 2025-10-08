import { NavLink } from "react-router-dom";

const Navigation = () => {
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors hover:text-accent ${
      isActive ? "text-accent border-b-2 border-accent" : "text-foreground"
    } pb-1`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="text-xl font-bold text-foreground">
            Nandan Goyal
          </NavLink>
          
          <div className="hidden md:flex items-center gap-8">
            <NavLink to="/" end className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
            <NavLink to="/achievements" className={navLinkClass}>
              Achievements
            </NavLink>
            <NavLink to="/skills" className={navLinkClass}>
              Skills
            </NavLink>
            <NavLink to="/journey" className={navLinkClass}>
              Journey
            </NavLink>
            <NavLink to="/testimonials" className={navLinkClass}>
              Testimonials
            </NavLink>
            <NavLink to="/projects" className={navLinkClass}>
              Projects
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </div>

          {/* Mobile menu button - simplified for now */}
          <button className="md:hidden text-foreground">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
