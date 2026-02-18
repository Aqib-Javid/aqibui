import { motion } from "framer-motion";
import { Mail, Download } from "lucide-react";

const socials = [
  {
    name: "Email",
    detail: "contact@aqibjavid.com",
    href: "mailto:contact@aqibjavid.com",
  },
  {
    name: "LinkedIn",
    detail: "in/aqibdesigns",
    href: "https://www.linkedin.com/in/aqibdesigns/",
  },
  {
    name: "Behance",
    detail: "/aqib_designs",
    href: "https://www.behance.net/aqib_designs",
  },
  {
    name: "Dribbble",
    detail: "aqib_design",
    href: "https://dribbble.com/aqib_design",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-primary uppercase tracking-[0.2em] text-xs font-medium mb-3 block">
            CONTACT
          </span>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl">
            You can contact me using the links below or drop me an email.
          </p>
        </motion.div>

        {/* Social Links */}
        <div className="space-y-0">
          {socials.map((social, i) => (
            <motion.a
              key={social.name}
              href={social.href}
              target={social.name !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="group flex items-center justify-between py-5 border-t border-border/50 hover:border-foreground/20 transition-colors duration-300"
            >
              <span className="text-foreground font-medium text-sm">{social.name}</span>
              <span className="text-muted-foreground text-sm group-hover:text-foreground transition-colors duration-300">
                {social.detail}
              </span>
            </motion.a>
          ))}
          
          {/* Resume */}
          <motion.a
            href="https://drive.google.com/file/d/1lqmkKM-55OerkPbyQ6ZvzQcdW0FcKeZq/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.4 }}
            className="group flex items-center justify-between py-5 border-t border-border/50 hover:border-foreground/20 transition-colors duration-300"
          >
            <span className="text-foreground font-medium text-sm flex items-center gap-2">
              <Download className="w-4 h-4" />
              Resume
            </span>
            <span className="text-muted-foreground text-sm group-hover:text-foreground transition-colors duration-300">
              Download PDF
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
