import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navItems = [
  { label: "Services", id: "services" },
  { label: "Work", id: "work" },
  { label: "About", id: "about" },
  { label: "Process", id: "process" },
  { label: "Testimonials", id: "testimonials" },
  { label: "Contact", id: "contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 80);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-6"}`}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className={`flex items-center justify-between transition-all duration-500 ${scrolled ? "glass-nav rounded-full px-5 py-2.5" : "glass-nav rounded-full px-5 py-2.5"}`}>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-2.5 group">
            <span className="w-7 h-7 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center font-display text-background text-sm group-hover:scale-110 transition-transform">A</span>
            <span className="font-display text-foreground text-lg tracking-tight">Aqib Javid</span>
          </button>

          <ul className="hidden md:flex items-center gap-9 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => (
              <li key={item.id}>
                <button onClick={() => scrollToSection(item.id)} className="link-underline text-[13px] tracking-tight text-muted-foreground hover:text-foreground transition-colors duration-300">
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <button onClick={() => scrollToSection("contact")} className="hidden md:inline-flex items-center gap-2 text-[13px] font-medium pl-4 pr-1.5 py-1.5 rounded-full bg-foreground text-background hover:scale-[1.03] transition-transform">
            Contact me
            <span className="inline-flex w-7 h-7 rounded-full bg-primary text-primary-foreground items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </button>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-foreground" aria-label="Toggle menu">
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }} className="md:hidden glass-nav rounded-2xl mt-3 px-6 py-5">
              <ul className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button onClick={() => scrollToSection(item.id)} className="text-base font-display text-foreground">{item.label}</button>
                  </li>
                ))}
                <li>
                  <button onClick={() => scrollToSection("contact")} className="mt-2 inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full bg-primary text-primary-foreground">
                    Contact me <ArrowUpRight className="w-4 h-4" />
                  </button>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
