import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const featured = {
  name: "Elena Marchetti",
  role: "VP Product, Northgrid",
  quote:
    "Northwave didn't just redesign our product — they reframed how we think about it. In four months we shipped a system our team is genuinely proud of, and our customers can feel the difference.",
};

const testimonials = [
  { name: "Daniel Okafor", role: "CEO, Drift", quote: "Sharpest design partner we've worked with. They moved faster than our internal team and raised the bar for everyone." },
  { name: "Sara Hoffmann", role: "Head of Design, Lumen", quote: "Calm, considered, and ridiculously thorough. The system they built is still scaling cleanly two years later." },
  { name: "Marcus Lee", role: "Founder, Orbit", quote: "We came in needing screens. We left with a product strategy and a roadmap. Worth every penny." },
  { name: "Priya Raghavan", role: "CPO, Halcyon", quote: "Their motion craft alone is a competitive advantage. Our retention numbers moved within weeks of launch." },
  { name: "Tomás Reyes", role: "VP Eng, Kairos", quote: "Rare studio that thinks about engineering tradeoffs while sketching. Handoff was the smoothest we've ever had." },
  { name: "Ava Bennett", role: "Director, Vantage", quote: "They asked the hard questions early and saved us a quarter of wasted build. Could not recommend more." },
];

const Initials = ({ name }: { name: string }) => (
  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary/40 to-primary/10 border border-primary/20 flex items-center justify-center font-display text-sm text-foreground">
    {name.split(" ").map((n) => n[0]).join("")}
  </div>
);

const Testimonials = () => (
  <section id="testimonials" className="py-28 md:py-40 relative">
    <div className="max-w-[1280px] mx-auto px-6 md:px-10">
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }}
        className="max-w-2xl mb-16">
        <span className="mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">Kind words</span>
        <h2 className="editorial-heading text-foreground text-5xl md:text-7xl mt-4">
          What partners <span className="italic text-gradient-primary">say</span>
        </h2>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8 }}
        className="relative rounded-[40px] glass-card p-10 md:p-16 mb-10 overflow-hidden">
        <div aria-hidden className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full blur-[100px] opacity-40"
          style={{ background: "radial-gradient(circle, hsl(255 92% 60%/0.6), transparent 70%)" }} />
        <Quote className="w-12 h-12 text-primary/60 mb-8" strokeWidth={1.2} />
        <blockquote className="editorial-heading text-foreground text-3xl md:text-5xl leading-[1.15] max-w-4xl">
          "{featured.quote}"
        </blockquote>
        <div className="mt-10 flex items-center gap-4">
          <Initials name={featured.name} />
          <div>
            <p className="font-display text-lg text-foreground">{featured.name}</p>
            <p className="text-sm text-muted-foreground">{featured.role}</p>
          </div>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {testimonials.map((t, i) => (
          <motion.div key={t.name}
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: (i % 3) * 0.08 }}
            whileHover={{ y: -6, rotate: -0.4, scale: 1.01 }}
            className="rounded-3xl bg-card/60 border border-border p-7 hover:border-primary/30 hover:shadow-[0_20px_60px_-20px_hsl(255_92%_60%/0.25)] transition-all duration-500"
          >
            <Quote className="w-6 h-6 text-primary/50 mb-4" strokeWidth={1.5} />
            <p className="text-foreground/90 text-[15px] leading-relaxed mb-6">"{t.quote}"</p>
            <div className="flex items-center gap-3 pt-5 border-t border-border/50">
              <Initials name={t.name} />
              <div>
                <p className="font-display text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
