import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import aqibAvatar from "@/assets/aqib-avatar.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const navItems = ["About", "Experience", "Work", "Contact"];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/50"
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <motion.a
          href="#"
          className="flex items-center gap-3"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <img 
            src={aqibAvatar} 
            alt="Aqib Javid" 
            className="w-10 h-10 rounded-full object-cover border-2 border-accent"
          />
          <div className="hidden sm:flex flex-col">
            <span className="font-display text-lg font-semibold leading-tight">Aqib Javid</span>
            <span className="text-xs text-accent font-medium">Senior UX Designer</span>
          </div>
        </motion.a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item, i) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.4 }}
            >
              <button
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
              </button>
            </motion.li>
          ))}
        </ul>

        {/* Actions - Always visible */}
        <div className="flex items-center gap-2 md:gap-4">
          <a
            href="mailto:contact@aqibjavid.com"
            className="flex items-center gap-2 px-3 py-2 md:px-5 md:py-2.5 bg-accent text-accent-foreground rounded-full text-xs md:text-sm font-medium hover:bg-accent/90 transition-all duration-300"
          >
            Hire Me
          </a>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-background border-b border-border/50 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-6">
              {/* Mobile Nav Items */}
              <ul className="flex flex-col gap-4">
                {navItems.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.3 }}
                  >
                    <button
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
                    >
                      {item}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;