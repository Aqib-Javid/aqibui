import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const Header = () => {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.25 });

  return (
    <>
      <motion.div
        className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-primary"
        style={{ scaleX: progress }}
      />
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 px-5 py-5 md:px-10"
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between border-b border-border/60 pb-4 backdrop-blur-md">
          <a href="#top" className="group flex items-center gap-3" aria-label="Back to top">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-xs font-bold text-background transition-transform duration-300 group-hover:rotate-12">
              AJ
            </span>
            <span className="text-sm font-semibold uppercase text-foreground">Aqib Javid</span>
          </a>

          <nav className="flex items-center gap-5 md:gap-9" aria-label="Primary navigation">
            <a href="#work" className="link-underline hidden text-xs font-semibold uppercase text-muted-foreground transition-colors hover:text-foreground sm:block">Work</a>
            <a href="#about" className="link-underline hidden text-xs font-semibold uppercase text-muted-foreground transition-colors hover:text-foreground sm:block">About</a>
            <a href="#contact" className="group inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-xs font-semibold uppercase text-background transition-transform duration-300 hover:-translate-y-0.5">
              Let's talk
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-45" />
            </a>
          </nav>
        </div>
      </motion.header>
    </>
  );
};

export default Header;