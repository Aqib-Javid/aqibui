import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Download } from "lucide-react";

const socials = [
  { 
    name: "LinkedIn", 
    href: "https://www.linkedin.com/in/aqibdesigns/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    )
  },
  { 
    name: "Dribbble", 
    href: "https://dribbble.com/aqib_design",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"/>
      </svg>
    )
  },
  { 
    name: "Behance", 
    href: "https://www.behance.net/aqib_designs",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.67.767-.61.165-1.252.254-1.91.254H0V4.51h6.938v-.007zM6.545 9.64c.55 0 .993-.14 1.34-.42.35-.28.52-.7.52-1.27 0-.32-.06-.58-.174-.79-.115-.21-.276-.37-.483-.49-.21-.12-.47-.2-.757-.23-.29-.04-.6-.06-.92-.06H2.97v3.28h3.575v-.02zm.18 5.73c.36 0 .69-.03 1.01-.09.32-.06.6-.17.84-.31.24-.15.43-.36.575-.64.14-.28.21-.64.21-1.08 0-.85-.24-1.46-.72-1.84-.48-.38-1.1-.56-1.86-.56H2.97v4.53h3.755v-.01zM15.09 14.41c.43.47 1.06.7 1.87.7.6 0 1.11-.15 1.54-.45.43-.3.69-.62.78-.96h2.59c-.41 1.32-1.04 2.26-1.91 2.82-.87.56-1.92.85-3.16.85-.86 0-1.63-.13-2.32-.4-.69-.27-1.28-.66-1.76-1.17-.48-.51-.85-1.13-1.1-1.85-.26-.72-.38-1.52-.38-2.41 0-.86.13-1.65.4-2.36.27-.72.65-1.33 1.15-1.85.5-.52 1.09-.92 1.78-1.21.69-.29 1.45-.43 2.29-.43.93 0 1.75.18 2.46.54.71.36 1.29.85 1.74 1.48.45.63.78 1.37.99 2.22.21.85.27 1.76.18 2.74h-7.7c.04.94.37 1.68.79 2.14v-.02zM18.25 9.16c-.36-.39-.92-.59-1.66-.59-.49 0-.9.08-1.21.24-.31.16-.55.36-.73.6-.18.24-.3.5-.36.78-.06.28-.1.53-.12.76h5.04c-.12-.82-.44-1.41-.96-1.79zM14.65 5.21h5.35v1.5h-5.35v-1.5z"/>
      </svg>
    )
  },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-primary uppercase tracking-widest text-sm font-medium mb-4 block">
              GET IN TOUCH
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-8">
              Let's Create Something Amazing Together
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
              Have a project in mind? I'd love to hear about it. Let's discuss how 
              we can bring your vision to life.
            </p>
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-16"
          >
            <motion.a
              href="mailto:contact@aqibjavid.com"
              className="inline-flex items-center gap-4 px-10 py-5 bg-accent text-accent-foreground rounded-full text-lg font-medium hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail className="w-5 h-5" />
              contact@aqibjavid.com
            </motion.a>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex items-center justify-center gap-2 text-muted-foreground mb-16"
          >
            <MapPin className="w-4 h-4" />
            <span>Available for remote work worldwide</span>
          </motion.div>

          {/* Social Links & Resume */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {socials.map((social, i) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                className="group flex items-center gap-3 px-5 py-3 border border-border rounded-full hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-300"
              >
                {social.icon}
                {social.name}
              </motion.a>
            ))}
            
            {/* Resume Download Button */}
            <motion.a
              href="https://drive.google.com/file/d/1lqmkKM-55OerkPbyQ6ZvzQcdW0FcKeZq/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.4 }}
              className="group flex items-center gap-3 px-5 py-3 bg-foreground text-background rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-300"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;