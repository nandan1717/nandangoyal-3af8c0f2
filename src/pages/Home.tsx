import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import gokuHappy from "@/assets/goku-happy.png";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 sm:px-6 pt-20 sm:pt-24 pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Professional Banner */}
          <div className="mb-8 sm:mb-12 text-center">
            <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-xs sm:text-sm font-semibold border border-accent/20">
              Open to Tech Consulting & Project Management Opportunities | Available May 2025
            </div>
          </div>

          {/* Hero Section - Professional First */}
          <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-foreground">
              Delivering Agile Solutions & Leading Cross-Functional Teams
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              BBA Project Management Student | VP, YU Creators Club | PM Intern at ISYB | 
              Full-Stack Developer (React, TypeScript, Supabase)
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-4">
              <Link to="/projects" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto text-sm sm:text-base px-8 py-5 bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg">
                  View My Work
                </Button>
              </Link>
              <Link to="/about" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-sm sm:text-base px-8 py-5 border-2 hover:bg-muted">
                  My Leadership Story
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats Counter Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-20">
            <div className="bg-card p-6 rounded-lg border border-border shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">10+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Agile Sprints Delivered</div>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">5</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Cross-Functional Teams</div>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">70%</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Faster with AI Integration</div>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">150+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Students Led at YU Club</div>
            </div>
          </div>

          {/* Personal Story Section - Second Fold */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center py-12 sm:py-16">
            <div className="text-center md:text-left space-y-4 sm:space-y-6 order-2 md:order-1">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                Beyond the Resume
              </h2>

              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                I'm not here to show you a perfect version of myself. I'm here to show you the real one — 
                the student, the dreamer, the late-night overthinker, the one who's hungry to build 
                something bigger than himself.
              </p>

              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                I'm Nandan — a 21-year-old figuring it out, hungry to grow, and building my own path 
                through agile leadership, technical innovation, and relentless curiosity.
              </p>

              <div className="pt-2 sm:pt-4 text-xs sm:text-sm text-muted-foreground italic">
                Not perfect, not finished, just real.
              </div>
            </div>

            <div className="order-1 md:order-2 flex flex-col justify-center items-center gap-3 sm:gap-4">
              <img 
                src={gokuHappy} 
                alt="Happy Goku character representing energy and determination" 
                className="w-full max-w-[280px] sm:max-w-sm md:max-w-md h-auto object-contain hover:scale-105 transition-transform duration-300"
              />
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground italic text-center max-w-md px-4">
                I use Goku here because I'm driven by the same spirit of growth, resilience, and always pushing my own limits—just like him
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
