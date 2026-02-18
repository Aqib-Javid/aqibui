import { motion } from "framer-motion";
import { Mail, Linkedin, Download, Globe } from "lucide-react";

const socials = [
  {
    name: "Email",
    detail: "contact@aqibjavid.com",
    href: "mailto:contact@aqibjavid.com",
    icon: Mail,
  },
  {
    name: "LinkedIn",
    detail: "in/aqibdesigns",
    href: "https://www.linkedin.com/in/aqibdesigns/",
    icon: Linkedin,
  },
  {
    name: "Behance",
    detail: "/aqib_designs",
    href: "https://www.behance.net/aqib_designs",
    icon: Globe,
  },
  {
    name: "Dribbble",
    detail: "aqib_design",
    href: "https://dribbble.com/aqib_design",
    icon: Globe,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <span className="text-primary uppercase tracking-[0.3em] text-xs font-medium mb-3 block">
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group flex items-center justify-between py-5 border-t border-border/50 hover:border-foreground/20 transition-colors duration-300"
            >
              <span className="text-foreground font-medium text-sm flex items-center gap-2.5">
                <social.icon className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
                {social.name}
              </span>
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="group flex items-center justify-between py-5 border-t border-border/50 hover:border-foreground/20 transition-colors duration-300"
          >
            <span className="text-foreground font-medium text-sm flex items-center gap-2.5">
              <Download className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
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
