import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const EMAIL = "aqib.uidesign@gmail.com";

const Contact = () => (
  <section id="contact" className="relative overflow-hidden px-5 py-28 md:px-10 md:py-40">
    <motion.div aria-hidden className="absolute -right-[5vw] top-0 text-[38vw] font-black leading-none text-primary/10" animate={{ rotate: [0, -6, 0], scale: [1, 1.04, 1] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}>✦</motion.div>
    <div className="relative mx-auto max-w-[1440px]">
      <p className="mb-6 text-xs font-semibold uppercase text-primary">Have a project in mind?</p>
      <motion.h2 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-[clamp(4rem,12vw,10rem)] font-black uppercase leading-[0.82] text-foreground">Let's<br />talk.</motion.h2>
      <div className="mt-12 flex flex-col items-start justify-between gap-8 border-t border-border pt-8 md:flex-row md:items-center">
        <a href={`mailto:${EMAIL}`} className="link-underline text-xl font-medium text-foreground sm:text-3xl md:text-4xl">{EMAIL}</a>
        <a href={`mailto:${EMAIL}`} className="group inline-flex items-center gap-3 rounded-full bg-primary px-6 py-4 text-sm font-semibold uppercase text-primary-foreground transition-transform duration-300 hover:-translate-y-1">
          Start a project <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
        </a>
      </div>
    </div>
  </section>
);

export default Contact;