import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import gokuHappy from "@/assets/goku-happy.png";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 sm:px-6 pt-20 sm:pt-24 pb-0">
        <div className="max-w-7xl mx-auto">
          {/* Professional Banner */}
          <div className="mb-8 sm:mb-12 text-center">
            <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-xs sm:text-sm font-semibold border border-accent/20">
              Open to Tech Consulting & Project Management Opportunities | Available May 2026
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
              <div className="bg-accent/10 px-4 py-3 rounded-lg border border-accent/20 text-center">
                <p className="font-semibold text-accent text-sm">Microsoft Power Platform (PL-900)</p>
                <p className="text-xs text-accent/70">In Progress</p>
              </div>
              <div className="bg-accent/10 px-4 py-3 rounded-lg border border-accent/20 text-center">
                <p className="font-semibold text-accent text-sm">CAPM</p>
                <p className="text-xs text-accent/70">PMI - In Progress</p>
              </div>
              <div className="bg-accent/10 px-4 py-3 rounded-lg border border-accent/20 text-center">
                <p className="font-semibold text-accent text-sm">Digital Transformation</p>
                <p className="text-xs text-accent/70">University of Waterloo (Oct-Dec 2025)</p>
              </div>
              <div className="bg-accent/10 px-4 py-3 rounded-lg border border-accent/20 text-center">
                <p className="font-semibold text-accent text-sm">Full Stack Web Development</p>
                <p className="text-xs text-accent/70">Bangalore Computer Education (2023)</p>
              </div>
              <div className="bg-accent/10 px-4 py-3 rounded-lg border border-accent/20 text-center">
                <p className="font-semibold text-accent text-sm">C and C++ Programming</p>
                <p className="text-xs text-accent/70">Bangalore Computer Education (2023)</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Testimonials Section */}
      <section className="pt-8 pb-12 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-foreground">
            What People Say
          </h2>
          
          <div className="overflow-x-auto pb-4">
            <div className="flex gap-6 min-w-max px-2">
              {/* Ismaeil Fazel Testimonial */}
              <div className="bg-card p-5 sm:p-6 rounded-lg border shadow-sm w-[350px] sm:w-[450px] flex-shrink-0">
                <div className="mb-4">
                  <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                
                <p className="text-sm sm:text-base text-foreground leading-relaxed mb-3">
                  I had the pleasure of teaching Nandan Goyal in my course HUMN422 – Topics in Technology and Society at Yorkville University during Summer of 2025, and I can attest to his professionalism, curiosity, and strong communication skills. From day one, he stood out in class. His presentations were not only well-prepared and clear but also engaging and confident—he has a real knack for making material accessible and interesting.
                </p>
                
                <p className="text-sm sm:text-base text-foreground leading-relaxed mb-3">
                  What also impressed me was how naturally Nandan worked with his peers. It is a rarity in my experience of having taught for over a decade to see a student combine such strong academic performance with genuine openness to diverse perspectives. He collaborated seamlessly with classmates from diverse cultural and professional backgrounds, and his positive attitude and adaptability made him a real asset in our team-oriented learning environment.
                </p>
                
                <p className="text-sm sm:text-base text-foreground leading-relaxed mb-4">
                  I have no doubt that Nandan will bring the same enthusiasm, thoughtfulness, and strong communication skills to his future roles. I can easily see him thriving in project management or leadership positions, where his ability to connect with people and keep teams moving forward will serve him well.
                </p>
                
                <div className="border-t pt-4">
                  <p className="font-semibold text-foreground text-sm sm:text-base">Ismaeil Fazel, PhD</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Professor, Liberal Arts</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Yorkville University, BC Campus</p>
                </div>
              </div>

              {/* MN Garg Trading Testimonial */}
              <div className="bg-card p-5 sm:p-6 rounded-lg border shadow-sm w-[350px] sm:w-[450px] flex-shrink-0">
                <div className="mb-4">
                  <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                
                <p className="text-sm sm:text-base text-foreground leading-relaxed mb-3">
                  I recently had the pleasure of working with Nandan Goyal on the creation of the MN Garg Trading Company's website, <a href="https://www.mngarg.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">www.mngarg.com</a>, and I have nothing but positive things to say about the experience.
                </p>
                
                <p className="text-sm sm:text-base text-foreground leading-relaxed mb-3">
                  Nandan Goyal's expertise in website design and development was evident throughout the entire process. He was extremely professional, detail-oriented, and easy to work with. He took the time to understand our business needs and goals and incorporated them into the website design seamlessly.
                </p>
                
                <p className="text-sm sm:text-base text-foreground leading-relaxed mb-3">
                  Thanks to Nandan Goyal's hard work and dedication, the website for MN Garg Trading Company is now a beautiful and user-friendly online platform for our customers to browse our products. His attention to details and responsiveness to our needs were exceptional.
                </p>
                
                <p className="text-sm sm:text-base text-foreground leading-relaxed mb-4">
                  Overall, I highly recommend Nandan Goyal to anyone in need of website design and development services. His skills, professionalism, and commitment to excellence are unmatched.
                </p>
                
                <div className="border-t pt-4">
                  <p className="font-semibold text-foreground text-sm sm:text-base">M. N. GARG TRADING CO.</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Wholesale Suppliers of Nut-Bolts, Nails & Hardware Items</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Bathinda, Punjab</p>
                </div>
              </div>

              {/* Kaustav Ghosh Testimonial */}
              <div className="bg-card p-5 sm:p-6 rounded-lg border shadow-sm w-[350px] sm:w-[450px] flex-shrink-0">
                <div className="mb-4">
                  <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                
                <p className="text-sm sm:text-base text-foreground leading-relaxed mb-3">
                  Nandan - thank you so much for the collaborative approach you showcased towards any TECH or IT related tasks we gave you at I Support Your Business. Your understanding and skills are really worth any organisation who will be hosting you in the future.
                </p>
                
                <p className="text-sm sm:text-base text-foreground leading-relaxed mb-3">
                  Thanks for shaping our backend systems at #ISupportYourBusiness. We look forward to your continued partnership with us.
                </p>
                
                <p className="text-sm sm:text-base text-foreground leading-relaxed mb-4">
                  Wishing you all the best for all your future endeavours! Good Luck! Cheers!!!
                </p>
                
                <div className="border-t pt-4">
                  <p className="font-semibold text-foreground text-sm sm:text-base">Kaustav Ghosh</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">COACH | Counselor | Business Consultant | Storytelling Evangelist</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Founder - I Support Your Business (ISYB)</p>
                </div>
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
