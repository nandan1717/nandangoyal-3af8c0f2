import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Nandan Goyal
          </h1>
          <p className="text-xl text-accent font-semibold mb-12">
            BBA Project Management Student | Agile PM Intern | Tech Leader
          </p>

          {/* Professional Overview Section */}
          <div className="space-y-8 text-lg leading-relaxed mb-16">
            <div className="bg-card p-8 rounded-lg border-2 border-border shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-6">Professional Summary</h2>
              <p className="text-foreground mb-4">
                I'm a 21-year-old BBA Project Management student at Yorkville University (graduating March 2026), 
                currently serving as a Project Management Intern at I Support Your Business and Vice President 
                of the Yorkville University Creators Club.
              </p>
              <p className="text-foreground">
                With hands-on experience in Agile methodologies, cross-functional team leadership, and full-stack 
                development, I bridge the gap between technical execution and strategic project management.
              </p>
            </div>

            {/* Education */}
            <div className="bg-accent/5 p-6 rounded-lg border-l-4 border-accent">
              <h3 className="text-xl font-bold text-foreground mb-4">Education</h3>
              <p className="text-foreground text-lg mb-2">
                <span className="font-semibold">Bachelor of Business Administration (Project Management)</span><br/>
                Yorkville University, Canada<br/>
                Expected Graduation: March 2026
              </p>
              <p className="text-sm text-muted-foreground mt-3">
                <span className="font-semibold">Relevant Coursework:</span> Intro to Project Management, 
                Teams and Leadership, Project Planning, Execution/Control/Closure, Advanced PM, 
                Business/Sustainability, Managerial Accounting, Business Strategy
              </p>
            </div>

            {/* Professional Experience */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Professional Experience</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-accent pl-6">
                  <h3 className="text-xl font-semibold text-foreground">Project Management Intern</h3>
                  <p className="text-accent font-medium mb-2">I Support Your Business | Feb 2025 – Mar 2026</p>
                  <ul className="space-y-2 text-foreground/80">
                    <li>• Leading 10+ Agile sprints with cross-functional teams across 5 departments</li>
                    <li>• Implementing Jira for improved project tracking and team alignment</li>
                    <li>• Facilitating sprint planning, retrospectives, and stakeholder communication</li>
                  </ul>
                </div>

                <div className="border-l-4 border-accent pl-6">
                  <h3 className="text-xl font-semibold text-foreground">Vice President</h3>
                  <p className="text-accent font-medium mb-2">Yorkville University Creators Club | Present</p>
                  <ul className="space-y-2 text-foreground/80">
                    <li>• Leading 150+ students across music, photography, and web development initiatives</li>
                    <li>• Organizing and executing campus events with cross-functional teams</li>
                    <li>• Building community engagement and member retention strategies</li>
                  </ul>
                </div>

                <div className="border-l-4 border-accent pl-6">
                  <h3 className="text-xl font-semibold text-foreground">Freelance Developer</h3>
                  <p className="text-accent font-medium mb-2">Vibe Coding | Mar 2023 – Present</p>
                  <ul className="space-y-2 text-foreground/80">
                    <li>• Delivered 3 web projects using React, TypeScript, and Supabase</li>
                    <li>• Improved delivery speed by 70% with AI-assisted prototyping</li>
                    <li>• Managing client relationships and iterative feedback cycles</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Beyond the Resume Section */}
          <div className="pt-12 border-t-2 border-border">
            <h2 className="text-3xl font-bold text-foreground mb-8">Beyond the Resume</h2>
            
            <div className="space-y-8 text-lg leading-relaxed">
              <p className="text-foreground text-xl">
                But if I had to describe myself beyond the labels? I'd say I'm someone who's always 
                hungry. Hungry to learn, to create, to test myself, and to leave something behind 
                that actually matters.
              </p>

              <div className="bg-muted/30 p-8 rounded-lg">
                <p className="text-foreground font-semibold text-xl mb-6">Here's the real me:</p>

                <ul className="space-y-6 text-foreground">
                  <li className="pl-6 border-l-2 border-accent">
                    I work part-time at <span className="font-semibold">Walmart as a cashier</span> — 
                    it taught me more about patience, people, and handling pressure than any textbook could.
                  </li>
                  <li className="pl-6 border-l-2 border-accent">
                    In 2023, I picked up <span className="font-semibold">web development</span>. I don't 
                    code like a Silicon Valley engineer — I build because I enjoy creating things that work, 
                    mixing tools like AI and my own skills.
                  </li>
                  <li className="pl-6 border-l-2 border-accent">
                    I've volunteered at community events like <span className="font-semibold">Pumpkin After 
                    Dark in Burnaby</span>, because giving back feels right.
                  </li>
                  <li className="pl-6 border-l-2 border-accent">
                    My dream? To build an <span className="font-semibold">empire in India centered around 
                    sustainability and agro-waste innovation</span>. And right now, I'm also working on 
                    <span className="font-semibold"> GEAR</span>, my own fashion-forward, sculptural sneaker 
                    and cooling apparel brand.
                  </li>
                </ul>
              </div>

              <p className="text-foreground">
                I'm not perfect. I don't have it all figured out. But I'm moving — step by step, 
                brick by brick.
              </p>

              <blockquote className="border-l-4 border-accent bg-accent/5 pl-8 pr-6 py-6 my-12 italic text-2xl text-foreground">
                "I don't want to be perfect. I just want to be real, keep learning, and leave 
                something behind that matters."
              </blockquote>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
