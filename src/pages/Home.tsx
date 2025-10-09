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
              Vibe Coder
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

          {/* Stats Counter Section - Single Card */}
          <div className="bg-card p-8 sm:p-10 rounded-lg border-2 border-border shadow-lg mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">Impact at a Glance</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">10+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Agile Sprints Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">5</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Cross-Functional Teams</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">70%</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Faster with AI Integration</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">150+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Students Led at YU Club</div>
              </div>
              <div className="text-center col-span-2 md:col-span-1">
                <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">5000+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">5-Star Customer Ratings</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
