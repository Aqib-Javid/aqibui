import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Work", id: "work" },
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
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
        <div className={`flex items-center justify-between transition-all duration-500 ${scrolled ? "glass-nav rounded-full px-5 py-2.5" : "px-0 py-0"}`}>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 group"
          >
            <span className="w-2 h-2 rounded-full bg-primary group-hover:scale-125 transition-transform" />
            <span className="font-display font-semibold text-foreground text-sm tracking-tight">Aqib Javid</span>
          </button>

          <ul className="hidden md:flex items-center gap-9">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="link-underline text-[13px] uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <a
            href="mailto:contact@aqibjavid.com"
            className="hidden md:inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.18em] text-foreground hover:text-primary transition-colors"
          >
            <span className="relative flex w-2 h-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            Available
          </a>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden glass-nav rounded-2xl mt-3 px-6 py-5"
            >
              <ul className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="text-base font-display text-foreground"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
