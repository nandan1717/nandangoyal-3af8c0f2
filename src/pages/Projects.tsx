import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code, Briefcase, ExternalLink } from "lucide-react";
import isybEcosystem from "@/assets/isyb-ecosystem.png";
import isybEvents from "@/assets/isyb-events.png";
import isybPortfolio from "@/assets/isyb-portfolio.png";

const Projects = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://nandangoyal.me"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Projects",
        "item": "https://nandangoyal.me/projects"
      }
    ]
  };

  const projects = [
    {
      title: "Project Management Intern, I Support Your Business",
      highlights: [
        "Led requirements gathering and delivered features in 10 Agile sprints",
        "Facilitated Agile ceremonies and sprint planning",
        "Implemented Jira, improving cross-team alignment across 5 departments",
        "Hired and mentored new intern for Jira management",
        "Met all budget and timeline targets"
      ],
      icon: Briefcase,
      status: "Feb 2025 – Mar 2026 (Remote, Burnaby, Canada)",
      techStack: ["Agile", "Scrum", "Jira", "React", "TypeScript", "Supabase", "Tailwind CSS", "Figma"],
      link: "https://www.isupportyouprogram.com",
      screenshots: [isybEcosystem, isybEvents, isybPortfolio],
    },
    {
      title: "Vibe Coding (Freelance)",
      highlights: [
        "Delivered 3 web projects on schedule by breaking tasks into sprints",
        "Improved delivery speed by 70% with AI-assisted prototyping",
        "Maintained quality through iterative client feedback",
        "Implemented detailed prioritization and workflow management"
      ],
      icon: Code,
      status: "Mar 2023 – Present (Hybrid)",
      techStack: ["React", "TypeScript", "Supabase", "Lovable AI", "shadcn/ui", "Tailwind CSS", "Python", "Flask"],
      links: [
        { url: "https://nandangoyal.me", label: "Portfolio Website" },
        { url: "https://yucreatorsclub.ca", label: "YU Creators Club" },
        { url: "https://www.isupportyouprogram.com", label: "I Support Your Business" },
        { url: "https://www.mngarg.com", label: "MN Garg Trading Co." }
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Projects & Portfolio | Nandan Goyal | ISYB, YU Creators Club"
        description="Explore projects by Nandan Goyal: PM Intern at I Support Your Business, freelance web development, and leadership at YU Creators Club. Built with React, TypeScript, and Agile methodology."
        canonical="https://nandangoyal.me/projects"
        structuredData={[breadcrumbSchema]}
      />
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

          <div className="space-y-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <Card 
                  key={index} 
                  className="border-2 hover:border-accent transition-all hover:shadow-lg group overflow-hidden"
                >
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                      <Icon className="w-8 h-8 text-accent group-hover:text-accent-foreground" />
                    </div>
                    <CardTitle className="text-2xl group-hover:text-accent transition-colors mb-2">
                      {project.title}
                    </CardTitle>
                    <div className="text-xs text-accent font-semibold uppercase tracking-wide">
                      {project.status}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="text-accent font-bold mt-1">•</span>
                            <span className="text-foreground/80 leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {(project.link || project.links) && (
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">View Project:</h4>
                        <div className="flex flex-wrap gap-3">
                          {project.link && (
                            <Button 
                              asChild 
                              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                            >
                              <a href={project.link} target="_blank" rel="noopener noreferrer" className="gap-2">
                                Visit Website
                                <ExternalLink className="w-4 h-4" />
                              </a>
                            </Button>
                          )}
                          {project.links?.map((link, linkIdx) => (
                            <Button 
                              key={linkIdx}
                              asChild 
                              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                            >
                              <a href={link.url} target="_blank" rel="noopener noreferrer" className="gap-2">
                                {link.label}
                                <ExternalLink className="w-4 h-4" />
                              </a>
                            </Button>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {project.screenshots && project.screenshots.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Project Screenshots:</h4>
                        <div className="grid md:grid-cols-3 gap-4">
                          {project.screenshots.map((screenshot, idx) => (
                            <div 
                              key={idx} 
                              className="rounded-lg overflow-hidden border-2 border-border hover:border-accent transition-colors"
                            >
                              <img 
                                src={screenshot} 
                                alt={`${project.title} screenshot ${idx + 1}`}
                                loading="lazy"
                                width="400"
                                height="300"
                                className="w-full h-48 object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <div className="pt-4 border-t border-border">
                      <h4 className="font-semibold text-foreground mb-3">Technology Stack:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, techIdx) => (
                          <Badge 
                            key={techIdx} 
                            variant="secondary"
                            className="bg-accent/10 text-accent border border-accent/20 hover:bg-accent hover:text-accent-foreground transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
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
      <Footer />
    </div>
  );
};

export default Projects;
