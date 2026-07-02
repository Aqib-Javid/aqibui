import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Process from "@/components/Process";
import LogosShowcase from "@/components/LogosShowcase";

import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Header />
    <main>
      <Hero />
      <TrustedBy />
      <Services />
      <CaseStudies />
      <About />
      <Process />
      <LogosShowcase />
      <Testimonials />
      
      <Contact />
    </main>
    <Footer />
  </div>
);

export default Index;
