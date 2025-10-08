import Navigation from "@/components/Navigation";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
            Who I Am
          </h1>
          <p className="text-xl text-muted-foreground mb-12">(in my own words)</p>

          <div className="space-y-8 text-lg leading-relaxed">
            <p className="text-foreground text-2xl font-medium">
              Hey, I'm Nandan.
            </p>

            <p className="text-foreground">
              I'm 21 years old and currently living in Surrey, BC. Right now, I'm pursuing my BBA 
              in Project Management at Yorkville University, set to graduate in March 2026.
            </p>
            
            <div className="bg-accent/5 p-6 rounded-lg border-l-4 border-accent mb-6">
              <p className="text-foreground font-semibold mb-2">Education</p>
              <p className="text-foreground text-lg">
                <span className="font-semibold">Bachelor of Business Administration (Project Management)</span><br/>
                Yorkville University, Canada<br/>
                Expected Graduation: March 2026
              </p>
              <p className="text-sm text-muted-foreground mt-3">
                Relevant Courses: Intro to Project Management, Teams and Leadership, Project Planning, 
                Execution/Control/Closure, Advanced PM, Business/Sustainability, Managerial Accounting, Business Strategy
              </p>
            </div>

            <p className="text-foreground">
              But if I had to describe myself beyond the labels? I'd say I'm someone who's always 
              hungry. Hungry to learn, to create, to test myself, and to leave something behind 
              that actually matters.
            </p>

            <div className="bg-muted/30 p-8 rounded-lg my-8">
              <p className="text-foreground font-semibold text-xl mb-6">Here's a little more about me:</p>

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
                  I'm also the <span className="font-semibold">Vice President of the Yorkville University 
                  Creators Club</span>, where I organize events in music, photography, and web development, 
                  and connect with people who are as curious about creating as I am.
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
      </main>
    </div>
  );
};

export default About;
