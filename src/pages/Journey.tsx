import Navigation from "@/components/Navigation";
import { Banknote, Code, Briefcase, GraduationCap, Users, Heart, Shirt, TrendingUp } from "lucide-react";

const Journey = () => {
  const milestones = [
    {
      date: "March 2023",
      title: "Started at Walmart & Discovered Web Development",
      description: "Began working as a cashier at Walmart, learning customer service excellence. Also discovered web development and started my coding journey.",
      icon: Code,
    },
    {
      date: "March 2023",
      title: "Floater Volunteer - FIRST Robotics Canada",
      description: "Provided logistics and support for competitions with 50–100 participants, swiftly adapting to team needs across multiple teams.",
      icon: Heart,
    },
    {
      date: "2023",
      title: "Completed Full Stack Web Development Certification",
      description: "Earned Full Stack Web Development certification from Bangalore Computer Education, along with C and C++ Programming certification.",
      icon: GraduationCap,
    },
    {
      date: "March 2023 - Present",
      title: "Started Vibe Coding (Freelance)",
      description: "Launched freelance web development practice, delivering 3+ commercial projects using AI-assisted development and Agile methodology.",
      icon: Briefcase,
    },
    {
      date: "2024",
      title: "Enrolled in BBA Project Management at Yorkville University",
      description: "Started pursuing BBA in Project Management, diving deep into project planning, execution, monitoring, and leadership.",
      icon: GraduationCap,
    },
    {
      date: "October 2024",
      title: "Event Volunteer - Pumpkins After Dark",
      description: "Supported logistics and crowd flow for 60,000 attendees at Canada's largest Halloween event (Tourism Burnaby), reducing wait times and improving guest experience.",
      icon: Heart,
    },
    {
      date: "February 2025 - Present",
      title: "Project Management Intern at I Support Your Business",
      description: "Leading end-to-end platform development (www.isupportyouprogram.com), implementing Jira for the organization, and managing Agile sprints across 5 departments.",
      icon: Briefcase,
    },
    {
      date: "May 2025 - Present",
      title: "Vice President - Yorkville University Creators Club",
      description: "Co-founded the club, launched the official website, built a team of 8, and organized campus events for 150+ students. Earned university recognition for club impact.",
      icon: Users,
    },
    {
      date: "2025",
      title: "Pursuing Multiple Certifications",
      description: "Working towards CAPM, Power Platform Fundamentals (PL-900), and Digital Transformation certification from University of Waterloo.",
      icon: GraduationCap,
    },
    {
      date: "Expected March 2026",
      title: "BBA Graduation",
      description: "Set to graduate with BBA in Project Management from Yorkville University, ready to contribute to Technology Consulting roles.",
      icon: TrendingUp,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            My Path So Far
          </h1>
          <p className="text-xl text-muted-foreground mb-16">
            Still young. Still figuring it out. But every step is part of the story.
          </p>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

            {/* Milestones */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => {
                const Icon = milestone.icon;
                return (
                  <div key={index} className="relative flex gap-6 group">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-accent flex items-center justify-center text-accent-foreground z-10 transition-transform group-hover:scale-110">
                      <Icon className="w-7 h-7" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-8">
                      <div className="text-sm text-accent font-semibold mb-1">
                        {milestone.date}
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Journey;
