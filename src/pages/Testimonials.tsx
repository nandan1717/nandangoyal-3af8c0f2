import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Quote } from "lucide-react";

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

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Testimonials & Reviews | Nandan Goyal"
        description="What clients and colleagues say about Nandan Goyal. Real testimonials from professors at Yorkville University, business clients, and ISYB founder about project management and web development work."
        canonical="https://nandangoyal.me/testimonials"
        structuredData={[breadcrumbSchema, reviewSchema]}
      />
      <Navigation />
      
      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground text-center">
            What People Say
          </h1>
          <p className="text-xl text-muted-foreground text-center leading-relaxed max-w-3xl mx-auto mb-16">
            I don't have hundreds of testimonials. But the ones I do have? They matter because they're real.
          </p>

          <div className="space-y-8">
            <div className="bg-card p-5 sm:p-6 rounded-lg border shadow-sm">
              <div className="mb-4">
                <Quote className="w-8 h-8 text-accent" />
              </div>
              
              <p className="text-sm sm:text-base text-foreground leading-relaxed mb-4">
                Nandan - thank you so much for the collaborative approach you showcased towards any TECH or IT related tasks we gave you at I Support Your Business. Your understanding and skills are really worth any organisation who will be hosting you in the future.
              </p>
              
              <p className="text-sm sm:text-base text-foreground leading-relaxed mb-4">
                Thanks for shaping our backend systems at #ISupportYourBusiness. We look forward to your continued partnership with us.
              </p>
              
              <p className="text-sm sm:text-base text-foreground leading-relaxed mb-4">
                Wishing you all the best for all your future endeavours! Good Luck! Cheers!!!
              </p>
              
              <div className="border-t pt-4">
                <p className="font-semibold text-foreground text-sm sm:text-base">Kaustav Ghosh</p>
                <p className="text-xs sm:text-sm text-muted-foreground">COACH | Counselor | Business Consultant | Storytelling Evangelist</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Founder - I Support Your Business (ISYB)</p>
              </div>
            </div>

            <div className="bg-card p-5 sm:p-6 rounded-lg border shadow-sm">
              <div className="mb-4">
                <Quote className="w-8 h-8 text-accent" />
              </div>
              
                <p className="text-sm sm:text-base text-foreground leading-relaxed mb-3">
                  I recently had the pleasure of working with Nandan Goyal on the creation of the MN Garg Trading Company's website, <a href="https://www.mngarg.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">www.mngarg.com</a>, and I have nothing but positive things to say about the experience.
                </p>
              
              <p className="text-sm sm:text-base text-foreground leading-relaxed mb-3">
                Nandan Goyal's expertise in website design and development was evident throughout the entire process. He was extremely professional, detail-oriented, and easy to work with. He took the time to understand our business needs and goals and incorporated them into the website design seamlessly.
              </p>
              
              <p className="text-sm sm:text-base text-foreground leading-relaxed mb-3">
                Thanks to Nandan Goyal's hard work and dedication, the website for MN Garg Trading Company is now a beautiful and user-friendly online platform for our customers to browse our products. His attention to details and responsiveness to our needs were exceptional.
              </p>
              
              <p className="text-sm sm:text-base text-foreground leading-relaxed mb-4">
                Overall, I highly recommend Nandan Goyal to anyone in need of website design and development services. His skills, professionalism, and commitment to excellence are unmatched.
              </p>
              
              <div className="border-t pt-4">
                <p className="font-semibold text-foreground text-sm sm:text-base">M. N. GARG TRADING CO.</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Wholesale Suppliers of Nut-Bolts, Nails & Hardware Items</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Bathinda, Punjab</p>
              </div>
            </div>

            <div className="bg-card p-5 sm:p-6 rounded-lg border shadow-sm">
              <div className="mb-4">
                <Quote className="w-8 h-8 text-accent" />
              </div>
              
              <p className="text-sm sm:text-base text-foreground leading-relaxed mb-3">
                I had the pleasure of teaching Nandan Goyal in my course HUMN422 – Topics in Technology and Society at Yorkville University during Summer of 2025, and I can attest to his professionalism, curiosity, and strong communication skills. From day one, he stood out in class. His presentations were not only well-prepared and clear but also engaging and confident—he has a real knack for making material accessible and interesting.
              </p>
              
              <p className="text-sm sm:text-base text-foreground leading-relaxed mb-3">
                What also impressed me was how naturally Nandan worked with his peers. It is a rarity in my experience of having taught for over a decade to see a student combine such strong academic performance with genuine openness to diverse perspectives. He collaborated seamlessly with classmates from diverse cultural and professional backgrounds, and his positive attitude and adaptability made him a real asset in our team-oriented learning environment.
              </p>
              
              <p className="text-sm sm:text-base text-foreground leading-relaxed mb-4">
                I have no doubt that Nandan will bring the same enthusiasm, thoughtfulness, and strong communication skills to his future roles. I can easily see him thriving in project management or leadership positions, where his ability to connect with people and keep teams moving forward will serve him well.
              </p>
              
              <div className="border-t pt-4">
                <p className="font-semibold text-foreground text-sm sm:text-base">Ismaeil Fazel, PhD</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Professor, Liberal Arts</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Yorkville University, BC Campus</p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg text-muted-foreground italic">
              These aren't just words on a page. These are reflections of real work, real growth, and real impact.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Testimonials;
