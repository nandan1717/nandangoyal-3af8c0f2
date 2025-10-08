import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import gokuHappy from "@/assets/goku-happy.png";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-24 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center min-h-[80vh]">
            <div className="text-center md:text-left space-y-6 order-2 md:order-1">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                I'm Nandan. A 21-year-old figuring it out, hungry to grow, and building my own path.
              </h1>

              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                I'm not here to show you a perfect version of myself. I'm here to show you the real one — 
                the student, the dreamer, the late-night overthinker, the one who's hungry to build 
                something bigger than himself.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 md:justify-start justify-center pt-4">
                <Link to="/about">
                  <Button size="lg" className="text-base px-6 py-5 bg-accent hover:bg-accent/90 text-accent-foreground">
                    Get to Know Me
                  </Button>
                </Link>
                <Link to="/projects">
                  <Button size="lg" variant="outline" className="text-base px-6 py-5 border-2 hover:bg-muted">
                    See What I'm Building
                  </Button>
                </Link>
              </div>

              <div className="pt-4 text-sm text-muted-foreground italic">
                Not perfect, not finished, just real.
              </div>
            </div>

            <div className="order-1 md:order-2 flex flex-col justify-center items-center gap-4">
              <img 
                src={gokuHappy} 
                alt="Happy Goku character representing energy and determination" 
                className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain hover:scale-105 transition-transform duration-300"
              />
              <p className="text-sm md:text-base text-muted-foreground italic text-center max-w-md px-4">
                I use Goku here because I'm driven by the same spirit of growth, resilience, and always pushing my own limits—just like him
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 border-t border-border bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4 text-center text-sm text-muted-foreground">
          © 2025 Nandan Goyal | Hungry, not greedy.
        </div>
      </footer>
    </div>
  );
};

export default Home;
