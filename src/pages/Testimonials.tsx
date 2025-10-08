import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Senior Product Manager",
      company: "TechCorp",
      text: "Working with Nandan was an absolute pleasure. His dedication to understanding the problem and delivering thoughtful solutions is rare for someone his age. He brings fresh perspectives and isn't afraid to challenge assumptions.",
    },
    {
      name: "Dr. James Chen",
      role: "Professor of Computer Science",
      company: "University of British Columbia",
      text: "Nandan stands out not just for his technical skills, but for his genuine curiosity and hunger to learn. He approaches every challenge with the mindset of growth, not just completion.",
    },
    {
      name: "Priya Sharma",
      role: "Startup Founder",
      company: "GreenPath Solutions",
      text: "Nandan's passion for sustainability isn't just talk—it's evident in how he thinks about every project. He's the kind of person who asks 'how can we make this better for everyone?' rather than just 'how do we finish this?'",
    },
    {
      name: "Michael Torres",
      role: "Team Lead",
      company: "Digital Innovations",
      text: "What impressed me most about Nandan is his honesty. He's not trying to be perfect—he's trying to be real. That authenticity, combined with his work ethic, makes him someone you want on your team.",
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
    </div>
  );
};

export default Testimonials;
