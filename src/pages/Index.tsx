import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import WhyRomania from "@/components/WhyRomania";
import Programs from "@/components/Programs";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <WhyRomania />
      <Programs />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <CTA />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
