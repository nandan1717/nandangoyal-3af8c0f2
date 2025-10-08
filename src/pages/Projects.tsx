import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Shirt, Briefcase } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "I Support Your Business Platform",
      description: "Led end-to-end development of www.isupportyouprogram.com, managing 10+ Agile sprints, gathering requirements from executives, and delivering features on budget and timeline.",
      icon: Code,
      status: "Feb 2025 - Present",
      tech: "Agile, Jira, Stakeholder Management",
    },
    {
      title: "Yorkville University Creators Club Website",
      description: "Launched the official website for the Creators Club, introducing marketing workflows and training guidelines. Built as part of VP responsibilities.",
      icon: Code,
      status: "May 2025",
      tech: "Web Development, Marketing Workflows",
    },
    {
      title: "Vibe Coding Projects",
      description: "Delivered 3+ commercial and hobby web projects using AI-assisted prototyping, reducing delivery time by ~70%. Projects include Creators Club site, I Support You platform, and custom client solutions.",
      icon: Code,
      status: "March 2023 - Present",
      tech: "HTML, CSS, JavaScript, Python/Flask, AI APIs",
    },
    {
      title: "Olympic Stadium Project (Class Simulation)",
      description: "Designed a hypothetical $1M Olympic Stadium project managed through ClickUp, developing project scope statement, WBS, and supporting documentation.",
      icon: Briefcase,
      status: "Academic Project",
      tech: "ClickUp, Project Planning, WBS",
    },
    {
      title: "GEAR (Fashion-Tech Brand)",
      description: "Developing a fashion-forward brand focused on sculptural sneakers and cooling apparel. In early development phase with sketches and 3D mockups.",
      icon: Shirt,
      status: "In Development",
      tech: "Brand Development, Product Design",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            What I'm Building <span className="text-muted-foreground">(and Breaking)</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-16">
            I'm not the type who only shows finished things. Here's some of what I've been 
            playing with, testing, or starting:
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <Card 
                  key={index} 
                  className="border-2 hover:border-accent transition-all hover:shadow-lg group"
                >
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                      <Icon className="w-8 h-8 text-accent group-hover:text-accent-foreground" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-accent transition-colors">
                      {project.title}
                    </CardTitle>
                    <div className="text-xs text-accent font-semibold uppercase tracking-wide">
                      {project.status}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-foreground/80 leading-relaxed mb-3">
                      {project.description}
                    </CardDescription>
                    <div className="text-sm text-muted-foreground italic">
                      {project.tech}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg text-muted-foreground italic">
              Everything here is a work in progress. And I'm okay with that.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;
