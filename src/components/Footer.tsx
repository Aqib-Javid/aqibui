import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-10 relative">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border/40"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            © {currentYear} — Aqib Javid
          </p>
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Designed & crafted with intent
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
