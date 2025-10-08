import Navigation from "@/components/Navigation";
import { Briefcase, Code, Brain, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Project Management & Leadership",
      icon: Briefcase,
      skills: [
        "Agile methodology, sprint planning, and task prioritization",
        "Stakeholder communication and expectation management",
        "Team coordination, mentoring, and onboarding",
        "Timeline management and milestone tracking",
      ],
    },
    {
      title: "Technical & Tools",
      icon: Code,
      skills: [
        "Microsoft Office 365 (Docs, Sheets, PowerPoints, etc.)",
        "Jira - Project management and tracking",
        "ClickUp - Project planning and execution",
        "HTML, CSS, JavaScript - Web development",
        "Python/Flask - Backend development",
        "AI-assisted development and API integration",
      ],
    },
    {
      title: "Analytical & Problem-Solving",
      icon: Brain,
      skills: [
        "Rapid prototyping and iterative development",
        "Data-driven actionable recommendations",
        "Customer needs assessment and process optimization",
        "Risk management and decision-making under constraints",
      ],
    },
    {
      title: "Communication & Interpersonal",
      icon: Users,
      skills: [
        "Customer service excellence, empathy, and conflict resolution",
        "Cross-functional team collaboration",
        "Training and mentoring team members",
        "Stakeholder engagement and relationship building",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
            Skills & Expertise
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            A mix of technical abilities, leadership skills, and people-first thinking
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div 
                  key={index}
                  className="bg-muted/30 p-8 rounded-lg border-2 border-border hover:border-accent transition-all group"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors">
                      <Icon className="w-7 h-7 text-accent group-hover:text-accent-foreground" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                      {category.title}
                    </h2>
                  </div>
                  
                  <ul className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <li 
                        key={skillIndex}
                        className="text-foreground leading-relaxed pl-6 border-l-2 border-accent/30 hover:border-accent transition-colors"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="mt-16 bg-accent/5 p-8 rounded-lg border-l-4 border-accent">
            <h2 className="text-2xl font-bold text-foreground mb-4">Continuous Learning</h2>
            <p className="text-lg text-foreground leading-relaxed">
              Currently pursuing <span className="font-semibold">CAPM certification</span>, <span className="font-semibold">Power Platform Fundamentals (PL-900)</span>, 
              and <span className="font-semibold">Digital Transformation</span> from University of Waterloo. 
              Expected graduation from BBA Project Management program in <span className="font-semibold">March 2026</span>.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Skills;
