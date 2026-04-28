import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors hover:text-accent ${
      isActive ? "text-accent border-b-2 border-accent" : "text-foreground"
    } pb-1`;

  const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block text-lg font-medium py-3 px-4 rounded-lg transition-colors ${
      isActive
        ? "bg-accent text-accent-foreground"
        : "text-foreground hover:bg-muted"
    }`;

  const navItems = [
    { to: "/", label: "Home", end: true },
    { to: "/about", label: "About" },
    { to: "/achievements", label: "Achievements" },
    { to: "/skills", label: "Skills" },
    { to: "/journey", label: "Journey" },
    { to: "/testimonials", label: "Testimonials" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="bg-background/60 backdrop-blur-2xl border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)] rounded-full px-6 py-3 w-full max-w-5xl">
        <div className="flex items-center justify-between">
          <NavLink
            to="/"
            className="text-lg sm:text-xl font-bold text-foreground hover:text-accent transition-colors"
          >
            Nandan Goyal
          </NavLink>

          {/* Desktop Navigation - visible on laptop and above */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={navLinkClass}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile & Tablet Navigation - hidden on laptop and above */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button className="text-foreground p-2 hover:bg-white/10 rounded-lg transition-colors">
                  {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background border-l border-white/10">
              <SheetHeader>
                <SheetTitle className="text-left text-2xl font-bold text-white">
                  Menu
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-2 mt-8">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.end}
                    className={mobileNavLinkClass}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>
            </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
