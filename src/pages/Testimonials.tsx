import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground text-center">
            What People Say
          </h1>
          <p className="text-xl text-muted-foreground text-center leading-relaxed max-w-3xl mx-auto mb-16">
            I don't have hundreds of testimonials. But the ones I do have? They matter because they're real.
          </p>

          <div className="bg-card p-8 rounded-lg border-2 border-border shadow-sm">
            <div className="mb-6">
              <Quote className="w-12 h-12 text-accent mb-4" />
            </div>
            
            <p className="text-lg text-foreground leading-relaxed mb-6">
              I had the pleasure of teaching Nandan Goyal in my course HUMN422 – Topics in Technology and Society at Yorkville University during Summer of 2025, and I can attest to his professionalism, curiosity, and strong communication skills. From day one, he stood out in class. His presentations were not only well-prepared and clear but also engaging and confident—he has a real knack for making material accessible and interesting.
            </p>
            
            <p className="text-lg text-foreground leading-relaxed mb-6">
              What also impressed me was how naturally Nandan worked with his peers. It is a rarity in my experience of having taught for over a decade to see a student combine such strong academic performance with genuine openness to diverse perspectives. He collaborated seamlessly with classmates from diverse cultural and professional backgrounds, and his positive attitude and adaptability made him a real asset in our team-oriented learning environment.
            </p>
            
            <p className="text-lg text-foreground leading-relaxed mb-6">
              I have no doubt that Nandan will bring the same enthusiasm, thoughtfulness, and strong communication skills to his future roles. I can easily see him thriving in project management or leadership positions, where his ability to connect with people and keep teams moving forward will serve him well.
            </p>
            
            <div className="border-t pt-6 mt-8">
              <p className="font-semibold text-foreground text-xl">Ismaeil Fazel, PhD</p>
              <p className="text-muted-foreground">Professor, Liberal Arts</p>
              <p className="text-muted-foreground">Yorkville University, BC Campus</p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg text-muted-foreground italic">
              These aren't just words on a page. These are reflections of real work, real growth, and real impact.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Testimonials;
