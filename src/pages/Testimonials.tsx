import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

const Testimonials = () => {
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
        "name": "Testimonials",
        "item": "https://nandangoyal.me/testimonials"
      }
    ]
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "ReviewList",
    "itemReviewed": {
      "@type": "Person",
      "name": "Nandan Goyal"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Ismaeil Fazel, PhD",
          "jobTitle": "Professor, Liberal Arts at Yorkville University"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "I had the pleasure of teaching Nandan Goyal in my course HUMN422 at Yorkville University. He stood out for his professionalism, curiosity, and strong communication skills."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Organization",
          "name": "M. N. GARG TRADING CO."
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "Nandan Goyal's expertise in website design and development was evident throughout the entire process. He was extremely professional, detail-oriented, and easy to work with."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Kaustav Ghosh",
          "jobTitle": "Founder - I Support Your Business"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "Thank you for the collaborative approach you showcased towards any TECH or IT related tasks. Your understanding and skills are really worth any organisation."
      }
    ]
  };

  const testimonials = [
    {
      name: "Kaustav Ghosh",
      role: "Founder - I Support Your Business (ISYB)",
      subtitle: "COACH | Counselor | Business Consultant | Storytelling Evangelist",
      content: [
        "Nandan - thank you so much for the collaborative approach you showcased towards any TECH or IT related tasks we gave you at I Support Your Business. Your understanding and skills are really worth any organisation who will be hosting you in the future.",
        "Thanks for shaping our backend systems at #ISupportYourBusiness. We look forward to your continued partnership with us.",
        "Wishing you all the best for all your future endeavours! Good Luck! Cheers!!!"
      ]
    },
    {
      name: "M. N. GARG TRADING CO.",
      role: "Wholesale Suppliers of Nut-Bolts, Nails & Hardware Items",
      subtitle: "Bathinda, Punjab",
      content: [
        "I recently had the pleasure of working with Nandan Goyal on the creation of the MN Garg Trading Company's website, www.mngarg.com, and I have nothing but positive things to say about the experience.",
        "Nandan Goyal's expertise in website design and development was evident throughout the entire process. He was extremely professional, detail-oriented, and easy to work with. He took the time to understand our business needs and goals and incorporated them into the website design seamlessly.",
        "Thanks to Nandan Goyal's hard work and dedication, the website for MN Garg Trading Company is now a beautiful and user-friendly online platform for our customers to browse our products. His attention to details and responsiveness to our needs were exceptional.",
        "Overall, I highly recommend Nandan Goyal to anyone in need of website design and development services. His skills, professionalism, and commitment to excellence are unmatched."
      ]
    },
    {
      name: "Ismaeil Fazel, PhD",
      role: "Professor, Liberal Arts",
      subtitle: "Yorkville University, BC Campus",
      content: [
        "I had the pleasure of teaching Nandan Goyal in my course HUMN422 – Topics in Technology and Society at Yorkville University during Summer of 2025, and I can attest to his professionalism, curiosity, and strong communication skills. From day one, he stood out in class. His presentations were not only well-prepared and clear but also engaging and confident—he has a real knack for making material accessible and interesting.",
        "What also impressed me was how naturally Nandan worked with his peers. It is a rarity in my experience of having taught for over a decade to see a student combine such strong academic performance with genuine openness to diverse perspectives. He collaborated seamlessly with classmates from diverse cultural and professional backgrounds, and his positive attitude and adaptability made him a real asset in our team-oriented learning environment.",
        "I have no doubt that Nandan will bring the same enthusiasm, thoughtfulness, and strong communication skills to his future roles. I can easily see him thriving in project management or leadership positions, where his ability to connect with people and keep teams moving forward will serve him well."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden text-foreground selection:bg-accent selection:text-foreground">
      <SEO 
        title="Testimonials & Reviews | Nandan Goyal"
        description="What clients and colleagues say about Nandan Goyal. Real testimonials from professors at Yorkville University, business clients, and ISYB founder about project management and web development work."
        canonical="https://nandangoyal.me/testimonials"
        structuredData={[breadcrumbSchema, reviewSchema]}
      />
      
      {/* Ambient Background Orbs */}
      <div className="fixed top-[-10%] left-[10%] w-[40vw] h-[40vw] bg-accent/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen opacity-50" />
      <div className="fixed bottom-[10%] right-[-10%] w-[50vw] h-[50vw] bg-blue-900/20 rounded-full blur-[150px] pointer-events-none mix-blend-screen opacity-40" />

      <Navigation />
      
      <main className="relative z-10 pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center mb-24"
            >
              <h1 className="text-5xl md:text-7xl font-black mb-6 text-white tracking-tight drop-shadow-2xl">
                What They <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-300">Say</span>.
              </h1>
              <p className="text-xl md:text-2xl text-foreground/70 font-medium leading-relaxed max-w-3xl mx-auto">
                I don't have hundreds of testimonials. But the ones I do have? They matter because they're real.
              </p>
            </motion.div>

            <div className="space-y-12">
              {testimonials.map((testimonial, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-8 sm:p-12 rounded-3xl shadow-2xl relative overflow-hidden">
                    {/* Decorative quote icon */}
                    <div className="absolute -top-6 -right-6 opacity-10">
                      <Quote className="w-48 h-48 text-accent" />
                    </div>
                    
                    <div className="relative z-10">
                      <div className="mb-8">
                        <Quote className="w-10 h-10 text-accent" />
                      </div>
                      
                      <div className="space-y-6 mb-10">
                        {testimonial.content.map((paragraph, pIdx) => (
                          <p key={pIdx} className="text-lg md:text-xl text-white/90 leading-relaxed font-medium">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                      
                      <div className="border-t border-white/10 pt-6 flex flex-col">
                        <span className="text-xl font-bold text-white mb-1 tracking-tight">{testimonial.name}</span>
                        <span className="text-accent font-semibold">{testimonial.role}</span>
                        <span className="text-sm text-foreground/50">{testimonial.subtitle}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-24 text-center"
            >
              <p className="text-xl text-foreground/50 font-medium italic">
                These aren't just words on a page. These are reflections of real work, real growth, and real impact.
              </p>
            </motion.div>

          </div>
        </div>
      </main>
      
      <div className="relative z-20">
        <Footer />
      </div>
    </div>
  );
};

export default Testimonials;
