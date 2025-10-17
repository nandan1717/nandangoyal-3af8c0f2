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

          {/* Certifications */}
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 text-center">Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-5xl mx-auto">
              <div className="bg-accent/5 px-4 py-3 rounded-lg border border-accent/20 text-center">
                <p className="font-semibold text-foreground text-sm">Microsoft Power Platform (PL-900)</p>
                <p className="text-xs text-muted-foreground">In Progress</p>
              </div>
              <div className="bg-accent/5 px-4 py-3 rounded-lg border border-accent/20 text-center">
                <p className="font-semibold text-foreground text-sm">CAPM</p>
                <p className="text-xs text-muted-foreground">PMI - In Progress</p>
              </div>
              <div className="bg-accent/5 px-4 py-3 rounded-lg border border-accent/20 text-center">
                <p className="font-semibold text-foreground text-sm">Digital Transformation</p>
                <p className="text-xs text-muted-foreground">UWaterloo (Oct-Dec 2025)</p>
              </div>
              <div className="bg-accent/5 px-4 py-3 rounded-lg border border-accent/20 text-center">
                <p className="font-semibold text-foreground text-sm">Full Stack Web Development</p>
                <p className="text-xs text-muted-foreground">Bangalore CE (2023)</p>
              </div>
              <div className="bg-accent/5 px-4 py-3 rounded-lg border border-accent/20 text-center">
                <p className="font-semibold text-foreground text-sm">C and C++ Programming</p>
                <p className="text-xs text-muted-foreground">Bangalore CE (2023)</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Testimonials Section */}
      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-foreground">
            What People Say
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-card p-6 sm:p-8 rounded-lg border shadow-sm">
              <div className="mb-6">
                <svg className="w-10 h-10 sm:w-12 sm:h-12 text-accent mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              
              <p className="text-sm sm:text-base md:text-lg text-foreground leading-relaxed mb-4 sm:mb-6">
                I had the pleasure of teaching Nandan Goyal in my course HUMN422 – Topics in Technology and Society at Yorkville University during Summer of 2025, and I can attest to his professionalism, curiosity, and strong communication skills. From day one, he stood out in class. His presentations were not only well-prepared and clear but also engaging and confident—he has a real knack for making material accessible and interesting.
              </p>
              
              <p className="text-sm sm:text-base md:text-lg text-foreground leading-relaxed mb-4 sm:mb-6">
                What also impressed me was how naturally Nandan worked with his peers. It is a rarity in my experience of having taught for over a decade to see a student combine such strong academic performance with genuine openness to diverse perspectives. He collaborated seamlessly with classmates from diverse cultural and professional backgrounds, and his positive attitude and adaptability made him a real asset in our team-oriented learning environment.
              </p>
              
              <p className="text-sm sm:text-base md:text-lg text-foreground leading-relaxed mb-4 sm:mb-6">
                I have no doubt that Nandan will bring the same enthusiasm, thoughtfulness, and strong communication skills to his future roles. I can easily see him thriving in project management or leadership positions, where his ability to connect with people and keep teams moving forward will serve him well.
              </p>
              
              <div className="border-t pt-4 sm:pt-6">
                <p className="font-semibold text-foreground text-base sm:text-lg">Ismaeil Fazel, PhD</p>
                <p className="text-sm sm:text-base text-muted-foreground">Professor, Liberal Arts</p>
                <p className="text-sm sm:text-base text-muted-foreground">Yorkville University, BC Campus</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
