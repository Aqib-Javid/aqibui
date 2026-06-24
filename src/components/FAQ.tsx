import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
  { q: "How do engagements typically start?", a: "We begin with a paid 2-week discovery sprint. You walk away with a problem frame, opportunity map and a recommendation — whether we continue together or not." },
  { q: "What is the typical project length?", a: "Most engagements run 8 to 16 weeks. We also offer ongoing design partnerships billed monthly for teams that need continuous design capacity." },
  { q: "Do you work with engineering teams?", a: "Yes — closely. We design with implementation in mind, attend standups when useful, and partner directly with your engineers through ship." },
  { q: "What's the investment range?", a: "Project engagements typically start at $40k. Retainers start at $18k per month. We're happy to share specifics on a call once we understand scope." },
  { q: "Where is the team based?", a: "We're a distributed team across Europe and North America, with overlapping hours that cover most global time zones." },
  { q: "Do you take equity?", a: "Selectively. For early-stage founders we believe in, we can structure a portion of fees as equity. Ask us about it." },
];

const Item = ({ q, a, open, onClick }: { q: string; a: string; open: boolean; onClick: () => void }) => (
  <div className="border-b border-border">
    <button onClick={onClick} className="w-full flex items-center justify-between gap-6 py-7 text-left group">
      <span className="editorial-heading text-foreground text-2xl md:text-3xl group-hover:text-gradient-primary transition-all">{q}</span>
      <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.3 }}
        className="shrink-0 w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground">
        <Plus className="w-4 h-4" />
      </motion.span>
    </button>
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden">
          <p className="pb-7 pr-16 text-muted-foreground text-base leading-relaxed">{a}</p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-28 md:py-40 relative">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid lg:grid-cols-[1fr_1.4fr] gap-16">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }}>
          <span className="mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">FAQ</span>
          <h2 className="editorial-heading text-foreground text-5xl md:text-6xl mt-4 leading-[0.95]">
            Questions,<br /><span className="italic text-gradient-primary">answered.</span>
          </h2>
          <p className="text-muted-foreground mt-6 max-w-sm leading-relaxed">
            Don't see what you're looking for? Drop us a note — we usually reply within a working day.
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, delay: 0.1 }}>
          {faqs.map((f, i) => (
            <Item key={f.q} q={f.q} a={f.a} open={open === i} onClick={() => setOpen(open === i ? null : i)} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
