import { motion } from "framer-motion";
import { Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  { name: "Chirag Kashyap", role: "Product Lead", quote: "Aqib delivered scalable designs across our web and mobile app, and our team tested them for increased user engagement. The lift was immediate, and the process was a joy." },
  { name: "Shruthi Shukla", role: "Founder, Sanialarm", quote: "We approached Aqib because he is one of the sharpest product designers we have worked with. Easily 10 out of 10." },
  { name: "Daniel Rehman", role: "CTO, NexifyVPN", quote: "Sharpest design partner I have collaborated with. He moved faster than our internal team and raised the bar for everyone." },
  { name: "Sara Hoffmann", role: "PM, Quick Swapper", quote: "Calm, considered and ridiculously thorough. The system Aqib delivered is still scaling cleanly two years later." },
  { name: "Marcus Lee", role: "Founder, MATE", quote: "We came in needing screens. We left with a product strategy and a roadmap. Worth every penny." },
  { name: "Priya Raghavan", role: "Head of Growth", quote: "His motion craft alone is a competitive advantage. Our retention numbers moved within weeks of launch." },
  { name: "Tomás Reyes", role: "Engineering Lead", quote: "Rare designer who thinks about engineering tradeoffs while sketching. Handoff was the smoothest I've ever had." },
];

const Initials = ({ name }: { name: string }) => (
  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary/40 to-primary/10 border border-primary/20 flex items-center justify-center font-display text-sm text-foreground">
    {name.split(" ").map((n) => n[0]).join("")}
  </div>
);

const Testimonials = () => {
  const [page, setPage] = useState(0);
  const perPage = 3;
  const totalPages = Math.ceil(testimonials.length / perPage);
  const next = () => setPage((p) => (p + 1) % totalPages);
  const prev = () => setPage((p) => (p - 1 + totalPages) % totalPages);
  const visible = testimonials.slice(page * perPage, page * perPage + perPage);

  return (
    <section id="testimonials" className="py-20 md:py-24 relative">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <span className="mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">Kind words</span>
            <h2 className="editorial-heading text-foreground text-5xl md:text-7xl mt-4">
              What partners <span className="italic text-gradient-primary">say</span>
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={prev} aria-label="Previous" className="w-11 h-11 rounded-full border border-border bg-card/60 hover:border-primary/50 flex items-center justify-center transition-colors">
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button onClick={next} aria-label="Next" className="w-11 h-11 rounded-full border border-border bg-card/60 hover:border-primary/50 flex items-center justify-center transition-colors">
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {visible.map((t, i) => (
            <motion.div key={`${page}-${t.name}`}
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="rounded-3xl bg-card/60 border border-border p-7 hover:border-primary/30 hover:shadow-[0_20px_60px_-20px_hsl(255_92%_60%/0.2)] transition-all duration-500 flex flex-col"
            >
              <Quote className="w-6 h-6 text-primary/50 mb-4" strokeWidth={1.5} />
              <p className="text-foreground/90 text-[15px] leading-relaxed mb-6 flex-1">"{t.quote}"</p>
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

        <div className="flex items-center justify-center gap-2 mt-10">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button key={i} onClick={() => setPage(i)} aria-label={`Page ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${i === page ? "w-8 bg-primary" : "w-3 bg-border"}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
