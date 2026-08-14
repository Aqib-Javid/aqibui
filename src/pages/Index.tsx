import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import WorkShowcase from "@/components/WorkShowcase";
import Services from "@/components/Services";
import About from "@/components/About";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    <Header />
    <main>
      <Hero />
      <ClientLogos />
      <WorkShowcase />
      <Services />
      <About />
      <Process />
      <Testimonials />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default Index;
