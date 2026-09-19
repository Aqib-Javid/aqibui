import { motion } from "framer-motion";
import avatar from "@/assets/aqib-avatar.png";

const About = () => (
  <section id="about" className="bg-foreground px-5 py-24 text-background md:px-10 md:py-32">
    <div className="mx-auto grid max-w-[1440px] gap-14 md:grid-cols-12 md:items-end">
      <motion.div initial={{ clipPath: "inset(100% 0 0 0)" }} whileInView={{ clipPath: "inset(0% 0 0 0)" }} viewport={{ once: true }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} className="aspect-[4/5] overflow-hidden bg-muted md:col-span-4">
        <img src={avatar} alt="Aqib Javid, product designer" loading="lazy" className="h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0" />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="md:col-span-7 md:col-start-6">
        <p className="mb-5 text-xs font-semibold uppercase text-primary">About / Expertise</p>
        <h2 className="text-5xl font-black uppercase leading-[0.9] md:text-7xl">Design that<br /><span className="text-primary">scales.</span></h2>
        <p className="mt-8 max-w-2xl text-xl leading-relaxed text-background/65 md:text-2xl">I’m a multi-disciplinary Product Designer with a strong foundation in UX and design systems. I embed deeply, ship quickly, and leave teams with products they can keep evolving.</p>
        <div className="mt-12 grid grid-cols-2 gap-px border-y border-background/20 py-7 sm:grid-cols-4">
          {[['100+', 'Projects'], ['4+', 'Years'], ['80+', 'Clients'], ['12', 'Countries']].map(([value, label]) => <div key={label}><strong className="block text-3xl font-black md:text-4xl">{value}</strong><span className="mt-1 block text-xs uppercase text-background/50">{label}</span></div>)}
        </div>
        <p className="mt-8 text-sm leading-relaxed text-background/55">Product Design · UX Research · Design Systems · Mobile Apps · SaaS &amp; Dashboards</p>
      </motion.div>
    </div>
  </section>
);

export default About;