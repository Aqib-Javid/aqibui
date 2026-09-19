import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WorkShowcase from "@/components/WorkShowcase";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    <Header />
    <main>
      <Hero />
      <WorkShowcase />
      <About />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default Index;
