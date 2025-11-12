import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";

const Contact = () => {
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
        "name": "Contact",
        "item": "https://nandangoyal.me/contact"
      }
    ]
  };

  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: "nandannn.bti@gmail.com",
      href: "mailto:nandannn.bti@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (604) 369 7940",
      href: "tel:+16043697940",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/nandan-goyal-577b47226",
      href: "https://linkedin.com/in/nandan-goyal-577b47226",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Surrey, BC",
      href: null,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Contact Nandan Goyal | Tech Consulting & PM Opportunities"
        description="Get in touch with Nandan Goyal for tech consulting and project management opportunities. Available May 2026. Located in Surrey, BC, Canada."
        canonical="https://nandangoyal.me/contact"
        structuredData={[breadcrumbSchema]}
      />
      <Navigation />
      
      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground text-center">
            Let's Talk
          </h1>
          <p className="text-xl text-muted-foreground text-center leading-relaxed max-w-2xl mx-auto mb-16">
            I'm not hard to find. If you want to talk about projects, ideas, collaboration, 
            or even just life, here's how:
          </p>

          <div className="space-y-8">
            {contactItems.map((item, index) => {
              const Icon = item.icon;
              const content = (
                <div className="flex items-center gap-6 p-6 border-2 border-border rounded-lg hover:border-accent transition-colors group">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors">
                    <Icon className="w-7 h-7 text-accent group-hover:text-accent-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-muted-foreground font-semibold mb-1">
                      {item.label}
                    </div>
                    <div className="text-lg text-foreground group-hover:text-accent transition-colors">
                      {item.value}
                    </div>
                  </div>
                </div>
              );

              return item.href ? (
                <a 
                  key={index} 
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block"
                >
                  {content}
                </a>
              ) : (
                <div key={index}>{content}</div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg text-muted-foreground italic">
              If you message me, don't just write "Hi." Tell me something real.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
