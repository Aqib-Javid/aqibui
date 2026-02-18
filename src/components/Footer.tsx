import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border/30"
        >
          <p className="text-muted-foreground/50 text-xs tracking-wide">
            © {currentYear} Aqib Javid
          </p>
          <p className="text-muted-foreground/50 text-xs tracking-wide">
            Designed with passion
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
