import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import SuccessStories from "@/components/SuccessStories";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Process from "@/components/Process";
import LogosShowcase from "@/components/LogosShowcase";
import Insights from "@/components/Insights";
import FAQ from "@/components/FAQ";
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
      <SuccessStories />
      <Testimonials />
      <About />
      <Process />
      <LogosShowcase />
      <Insights />
      <FAQ />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default Index;
