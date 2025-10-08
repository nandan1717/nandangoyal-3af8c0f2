import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Team Member",
      role: "Creators Club",
      company: "Yorkville University",
      text: "Nandan is a creative leader and reliable teammate who led the Creators Club to launch our university's official student site and increase engagement through multiple events.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground text-center">
            What People Say
          </h1>
          <p className="text-xl text-muted-foreground text-center leading-relaxed max-w-3xl mx-auto mb-16">
            I don't have hundreds of testimonials. But the ones I do have? They matter because they're real.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2 hover:border-accent transition-colors">
                <CardHeader>
                  <Quote className="w-10 h-10 text-accent mb-4" />
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                    <p className="text-sm text-accent font-semibold">
                      {testimonial.company}
                    </p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-base text-foreground/90 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                </CardContent>
              </Card>
            ))}
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
