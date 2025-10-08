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
            {/* Key Achievements */}
            <div className="bg-muted/30 p-8 rounded-lg border-l-4 border-accent">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Key Achievements</h3>
              <ul className="space-y-3 text-foreground leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">•</span>
                  <span>Led end-to-end development and launched a client platform for I Support Your Business, delivering 10 Agile sprints on time and within budget.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">•</span>
                  <span>Implemented Jira for project management, enabling real-time tracking across 5 departments.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">•</span>
                  <span>Organized campus events for 150+ students as Vice-President, Creators Club, Yorkville University.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">•</span>
                  <span>Received over 5,000 five-star ratings at Walmart for customer service excellence.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">•</span>
                  <span>Improved project delivery efficiency by 70% using AI-assisted prototyping (Vibe Coding).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">•</span>
                  <span>Trained and onboarded 5+ new team members at Walmart, ensuring consistent service standards.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">•</span>
                  <span>Supported logistics for Canada's largest Halloween event (Pumpkins After Dark) with 60,000 guests.</span>
                </li>
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
                  <h3 className="text-xl font-semibold text-foreground mb-2">Microsoft Power Platform Fundamentals (PL-900)</h3>
                  <p className="text-muted-foreground">In Progress</p>
                </div>

                <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Certified Associate in Project Management (CAPM)</h3>
                  <p className="text-muted-foreground">PMI - In Progress</p>
                </div>

                <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Digital Transformation</h3>
                  <p className="text-muted-foreground">University of Waterloo - In Progress</p>
                </div>

                <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Full Stack Web Development</h3>
                  <p className="text-muted-foreground">Bangalore Computer Education (2023)</p>
                </div>

                <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent">
                  <h3 className="text-xl font-semibold text-foreground mb-2">C and C++ Programming</h3>
                  <p className="text-muted-foreground">Bangalore Computer Education (2023)</p>
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
