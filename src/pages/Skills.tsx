import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Briefcase, Code, Brain, Users } from "lucide-react";

const Skills = () => {
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
        "name": "Skills",
        "item": "https://nandangoyal.me/skills"
      }
    ]
  };

  const skillCategories = [
    {
      title: "Project Management",
      icon: Briefcase,
      skills: [
        "Agile methodology, sprint planning",
        "Risk and timeline management",
      ],
    },
    {
      title: "Leadership",
      icon: Users,
      skills: [
        "Team onboarding and delegation",
        "Cross-functional coordination",
        "Stakeholder communication",
      ],
    },
    {
      title: "Technical",
      icon: Code,
      skills: [
        "Jira, Microsoft Office 360, Docs, Sheets, PowerPoint",
        "HTML/CSS/JavaScript, Python/Flask",
        "API integration, AI-assisted prototyping",
      ],
    },
    {
      title: "Analysis & Customer Service",
      icon: Brain,
      skills: [
        "Rapid prototyping, iterative development",
        "Actionable recommendations",
        "Empathy, conflict resolution, survey design",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Technical Skills & Expertise | Nandan Goyal | PM & Tech Consulting"
        description="Skills and certifications: Agile/Scrum, Jira, React/TypeScript, Python/Flask, Microsoft Power Platform (PL-900), CAPM certification. Project management and full-stack development expertise."
        canonical="https://nandangoyal.me/skills"
        structuredData={[breadcrumbSchema]}
      />
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
            <h2 className="text-2xl font-bold text-foreground mb-4">Certifications</h2>
            <div className="space-y-2 text-lg text-foreground leading-relaxed">
              <p><span className="font-semibold">Microsoft Power Platform Fundamentals (PL-900)</span> – In Progress</p>
              <p><span className="font-semibold">Certified Associate in Project Management (CAPM), PMI</span> – In Progress</p>
              <p><span className="font-semibold">Digital Transformation, University of Waterloo</span> – In Progress</p>
              <p><span className="font-semibold">Full Stack Web Development, Bangalore Computer Education</span> (2023)</p>
              <p><span className="font-semibold">C and C++ Programming, Bangalore Computer Education</span> (2023)</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Skills;
