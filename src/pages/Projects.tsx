import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Shirt, Briefcase } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Project Management Intern, I Support Your Business",
      description: "Led requirements gathering and delivered features in 10 Agile sprints for www.isupportyouprogram.com, meeting budget and timeline targets. Facilitated Agile ceremonies, sprint planning, and implemented Jira, improving cross-team alignment and visibility across 5 departments. Hired and mentored a new intern for Jira management, ensuring smooth backlog tracking.",
      icon: Briefcase,
      status: "Feb 2025 – Mar 2026 (Remote, Burnaby, Canada)",
      tech: "Agile, Jira, Stakeholder Management",
    },
    {
      title: "Vibe Coding (Freelance)",
      description: "Delivered 3 web projects on schedule by breaking tasks into sprints and coordinating milestones. Improved delivery speed by 70% with AI-assisted prototyping and iterative client feedback. Maintained quality and approvals for diverse projects via detailed prioritization and workflow management.",
      icon: Code,
      status: "Mar 2023 – Present (Hybrid)",
      tech: "HTML, CSS, JavaScript, Python/Flask, AI APIs",
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
