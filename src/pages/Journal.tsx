import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Journal = () => {
  const posts = [
    {
      title: "Why I Whisper to Myself at Night",
      teaser: "I feel most like myself when I'm home alone, speaking out loud to an imaginary audience. It's where I test ideas about space, reality, and people. It's weird — but it's me.",
      slug: "whisper-to-myself",
    },
    {
      title: "What Mikasa Taught Me About Love",
      teaser: "Attack on Titan isn't just anime to me — Mikasa's loyalty and quiet strength made me wonder about love, sacrifice, and whether someone in my future will ever feel like they're competing with the ghost of someone I once loved.",
      slug: "mikasa-love",
    },
    {
      title: "Being Hungry vs. Being Greedy",
      teaser: "Greed is selfish. Hunger is fuel. My life, my brand, and my future are built on hunger, not greed.",
      slug: "hungry-vs-greedy",
    },
    {
      title: "Why I'll Always Choose Sustainability",
      teaser: "The world doesn't need another brand that burns resources. I want to build something that feeds people, reuses waste, and changes how we think about business.",
      slug: "choose-sustainability",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Nandan at Midnight
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-16">
            This is where I drop my real thoughts. Not polished articles, not motivational fluff. 
            Just the things I think about late at night when I whisper to myself like the world's listening.
          </p>

          <div className="grid gap-8">
            {posts.map((post, index) => (
              <Card key={index} className="border-2 hover:border-accent transition-colors cursor-pointer group">
                <CardHeader>
                  <CardTitle className="text-2xl group-hover:text-accent transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-foreground/80 mb-4 leading-relaxed">
                    {post.teaser}
                  </CardDescription>
                  <Link 
                    to={`/journal/${post.slug}`} 
                    className="text-accent font-semibold hover:underline inline-flex items-center gap-2"
                  >
                    Read More
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Journal;
