import { motion } from "framer-motion";
import { Mail, Download } from "lucide-react";

const BehanceIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
  </svg>
);

const DribbbleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0zm8.166 5.834a10.218 10.218 0 012.048 5.97c-.3-.063-3.293-.668-6.308-.29-.064-.159-.13-.316-.2-.476-.196-.453-.402-.904-.62-1.344 3.326-1.358 4.836-3.302 5.08-3.86zM12 1.783a10.195 10.195 0 016.855 2.634c-.204.5-1.574 2.336-4.775 3.554C12.293 4.95 10.356 3.07 10.098 2.84a10.293 10.293 0 011.902-.057zM8.146 3.374c.243.215 2.143 2.108 3.966 5.05-4.998 1.33-9.41 1.31-9.897 1.3A10.244 10.244 0 018.146 3.374zM1.783 12.012v-.327c.474.011 5.624.074 10.93-1.517.305.594.593 1.198.862 1.802-.114.033-.23.066-.343.1-5.585 1.802-8.557 6.724-8.818 7.166a10.194 10.194 0 01-2.631-7.224zm3.896 8.338c.17-.31 2.397-4.674 8.416-6.827.024-.008.047-.015.071-.024a36.545 36.545 0 012.217 7.87 10.211 10.211 0 01-10.704-1.019zm12.488-.478a35.704 35.704 0 00-2.042-7.388c2.813-.45 5.279.287 5.588.384a10.227 10.227 0 01-3.546 7.004z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const socials = [
  {
    name: "Email",
    detail: "contact@aqibjavid.com",
    href: "mailto:contact@aqibjavid.com",
    icon: () => <Mail className="w-4 h-4" />,
  },
  {
    name: "LinkedIn",
    detail: "in/aqibdesigns",
    href: "https://www.linkedin.com/in/aqibdesigns/",
    icon: LinkedInIcon,
  },
  {
    name: "Behance",
    detail: "/aqib_designs",
    href: "https://www.behance.net/aqib_designs",
    icon: BehanceIcon,
  },
  {
    name: "Dribbble",
    detail: "aqib_design",
    href: "https://dribbble.com/aqib_design",
    icon: DribbbleIcon,
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

        <div className="space-y-0">
          {socials.map((social, i) => {
            const IconComponent = social.icon;
            return (
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
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    <IconComponent />
                  </span>
                  {social.name}
                </span>
                <span className="text-muted-foreground text-sm group-hover:text-foreground transition-colors duration-300">
                  {social.detail}
                </span>
              </motion.a>
            );
          })}
          
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
