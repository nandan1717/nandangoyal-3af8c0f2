import Navigation from "@/components/Navigation";

const Achievements = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
            Achievements
          </h1>
          <p className="text-xl text-muted-foreground mb-12">Key milestones and certifications that shaped my journey</p>

          <div className="space-y-6">
            {/* Professional Experience Achievements */}
            <div className="bg-muted/30 p-8 rounded-lg border-l-4 border-accent">
              <h3 className="text-2xl font-semibold text-foreground mb-3">Project Management Intern - I Support Your Business</h3>
              <p className="text-muted-foreground mb-3">February 2025 - Present (Remote, Burnaby)</p>
              <ul className="space-y-2 text-foreground leading-relaxed list-disc list-inside">
                <li>Led end-to-end development of client platform (www.isupportyouprogram.com) through 10+ Agile sprints</li>
                <li>Implemented Jira as organization's first PM tool, increasing cross-team alignment across 5 departments</li>
                <li>Hired and mentored intern to manage Jira operations while focusing on IT project execution</li>
              </ul>
            </div>

            <div className="bg-muted/30 p-8 rounded-lg border-l-4 border-accent">
              <h3 className="text-2xl font-semibold text-foreground mb-3">Vice President - Yorkville University Creators Club</h3>
              <p className="text-muted-foreground mb-3">May 2025 - Present</p>
              <ul className="space-y-2 text-foreground leading-relaxed list-disc list-inside">
                <li>Co-founded the club with the President and launched the official website</li>
                <li>Built and led a team of 8 across music, photography, outreach, and events</li>
                <li>Increased student engagement and earned recognition from university leadership</li>
              </ul>
            </div>

            <div className="bg-muted/30 p-8 rounded-lg border-l-4 border-accent">
              <h3 className="text-2xl font-semibold text-foreground mb-3">Vibe Coding (Freelance Web Development)</h3>
              <p className="text-muted-foreground mb-3">March 2023 - Present</p>
              <ul className="space-y-2 text-foreground leading-relaxed list-disc list-inside">
                <li>Delivered 3+ commercial web projects on schedule by planning end-to-end workflows</li>
                <li>Improved project delivery efficiency by ~70% using AI-assisted prototyping</li>
                <li>Maintained consistent quality across diverse projects with reproducible workflows</li>
              </ul>
            </div>

            <div className="bg-muted/30 p-8 rounded-lg border-l-4 border-accent">
              <h3 className="text-2xl font-semibold text-foreground mb-3">Customer Service Excellence - Walmart</h3>
              <p className="text-muted-foreground mb-3">March 2023 - Present</p>
              <ul className="space-y-2 text-foreground leading-relaxed list-disc list-inside">
                <li>Achieved 5000+ 5-star ratings from customers over 2+ years</li>
                <li>Trained and mentored 5+ new team members on customer service techniques</li>
                <li>Consistently received positive recognition from managers for outstanding service</li>
              </ul>
            </div>

            {/* Academic Achievements */}
            <div className="bg-muted/30 p-8 rounded-lg border-l-4 border-accent">
              <h3 className="text-2xl font-semibold text-foreground mb-3">Academic Project - Olympic Stadium Simulation</h3>
              <p className="text-muted-foreground mb-3">Yorkville University</p>
              <p className="text-foreground leading-relaxed">
                Designed a hypothetical $1M Olympic Stadium project managed through ClickUp. Developed comprehensive project scope statement, Work Breakdown Structure (WBS), and supporting documentation to simulate real-world planning and execution.
              </p>
            </div>

            <div className="bg-muted/30 p-8 rounded-lg border-l-4 border-accent">
              <h3 className="text-2xl font-semibold text-foreground mb-3">Harvard Business School PM Simulation</h3>
              <p className="text-muted-foreground mb-3">Completed by Robert D. Austin</p>
              <p className="text-foreground leading-relaxed">
                Completed Project Management Simulation: Scope, Resources, Schedule V3. Managed trade-offs in scope, scheduling, and resource allocation under real-world constraints, strengthening decision-making and risk management skills.
              </p>
            </div>

            {/* Certifications */}
            <div className="mt-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Certifications</h2>
              
              <div className="space-y-4">
                <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Power Platform Fundamentals (PL-900)</h3>
                  <p className="text-muted-foreground">Microsoft Certified - In Progress</p>
                </div>

                <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Certified Associate in Project Management (CAPM)</h3>
                  <p className="text-muted-foreground">Project Management Institute - In Progress</p>
                </div>

                <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Digital Transformation</h3>
                  <p className="text-muted-foreground">University of Waterloo - In Progress</p>
                </div>

                <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Full Stack Web Development</h3>
                  <p className="text-muted-foreground">Bangalore Computer Education - 2023</p>
                </div>

                <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent">
                  <h3 className="text-xl font-semibold text-foreground mb-2">C and C++ Programming</h3>
                  <p className="text-muted-foreground">Bangalore Computer Education - 2023</p>
                </div>
              </div>
            </div>

            {/* Volunteer Work */}
            <div className="mt-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Volunteer Work</h2>
              
              <div className="space-y-4">
                <div className="bg-muted/30 p-6 rounded-lg border-l-4 border-accent">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Event Volunteer - Pumpkins After Dark</h3>
                  <p className="text-muted-foreground mb-3">Tourism Burnaby, October 2024</p>
                  <p className="text-foreground">Supported logistics and crowd flow at Canada's award-winning Halloween event with 60,000+ attendees, reducing wait times and ensuring smooth guest experiences.</p>
                </div>

                <div className="bg-muted/30 p-6 rounded-lg border-l-4 border-accent">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Floater Volunteer - FIRST Robotics Canada</h3>
                  <p className="text-muted-foreground mb-3">March 2023</p>
                  <p className="text-foreground">Supported logistics and participant needs across multiple teams during events of 50-100 attendees. Adapted quickly to shifting tasks, helping ensure smooth competition flow.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Achievements;
