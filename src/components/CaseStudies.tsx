import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Phone, Tablet, Dashboard, PhoneUI, DashUI } from "./DeviceMockup";

type Study = {
  industry: string;
  name: string;
  tag: string;
  desc: string;
  outcome: string;
  metrics: { label: string; value: string }[];
  accent: string;
};

const studies: Study[] = [
  {
    industry: "Fintech · iOS",
    name: "Drift Banking",
    tag: "Mobile Banking",
    desc: "A challenger bank reimagined around weekly budgeting rituals and proactive financial coaching for Gen-Z professionals.",
    outcome: "Re-architected onboarding and core money flows in 14 weeks — shipped to 180k users in the first quarter.",
    metrics: [
      { label: "Conversion", value: "+62%" },
      { label: "Retention D30", value: "+44%" },
      { label: "NPS", value: "71" },
    ],
    accent: "from-violet-500/30 to-fuchsia-500/10",
  },
  {
    industry: "SaaS · Web",
    name: "Northgrid Analytics",
    tag: "B2B Dashboard",
    desc: "Enterprise data platform redesigned around progressive disclosure — letting analysts move from overview to query in two clicks.",
    outcome: "Replaced 3 legacy tools, unifying reporting for 40+ enterprise teams with a single design system.",
    metrics: [
      { label: "Activation", value: "+118%" },
      { label: "Time-to-insight", value: "-71%" },
      { label: "Revenue", value: "+3.2x" },
    ],
    accent: "from-sky-500/30 to-cyan-500/10",
  },
  {
    industry: "Health · Mobile",
    name: "Lumen Care",
    tag: "Patient Companion",
    desc: "Calm, accessibility-first care companion for chronic-condition patients — integrating prescription, vitals, and clinician chat.",
    outcome: "Launched across 7 hospital networks; lifted adherence to medication regimens by nearly half.",
    metrics: [
      { label: "Adherence", value: "+47%" },
      { label: "Engagement", value: "5.2x" },
      { label: "Support tickets", value: "-58%" },
    ],
    accent: "from-emerald-500/30 to-teal-500/10",
  },
  {
    industry: "Mobility · Multi-platform",
    name: "Orbit Mobility",
    tag: "Ride & Delivery",
    desc: "Unified rider, driver and ops experience for a multi-modal mobility network across four metro regions.",
    outcome: "Single design system serving 3 apps, 1 ops console, and a partner portal — shipped in 9 months.",
    metrics: [
      { label: "Ride completion", value: "+33%" },
      { label: "Driver onboarding", value: "-2.4d" },
      { label: "GMV", value: "+89%" },
    ],
    accent: "from-amber-500/30 to-rose-500/10",
  },
];

const Visual = ({ idx, study }: { idx: number; study: Study }) => (
  <div className={`relative w-full aspect-[4/3] rounded-[32px] bg-gradient-to-br ${study.accent} border border-white/10 overflow-hidden flex items-center justify-center p-10`}>
    <div aria-hidden className="absolute inset-0 opacity-[0.04]"
      style={{ backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
    {idx === 0 && (
      <>
        <div className="absolute left-10 bottom-0 translate-y-12"><Phone><PhoneUI /></Phone></div>
        <div className="absolute right-8 top-8 w-[260px]"><Dashboard><DashUI /></Dashboard></div>
      </>
    )}
    {idx === 1 && (
      <>
        <div className="w-[80%]"><Dashboard><DashUI /></Dashboard></div>
        <div className="absolute -bottom-8 right-6"><Phone><PhoneUI /></Phone></div>
      </>
    )}
    {idx === 2 && (
      <>
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-8"><Phone><PhoneUI /></Phone></div>
        <div className="absolute left-6 top-10"><Tablet><DashUI /></Tablet></div>
      </>
    )}
    {idx === 3 && (
      <>
        <div className="absolute right-10 top-10 w-[55%]"><Dashboard><DashUI /></Dashboard></div>
        <div className="absolute left-6 bottom-0 translate-y-10"><Phone><PhoneUI /></Phone></div>
        <div className="absolute left-1/2 top-6"><Tablet><DashUI /></Tablet></div>
      </>
    )}
  </div>
);

const Content = ({ study }: { study: Study }) => (
  <div>
    <div className="flex items-center gap-3 mb-5">
      <span className="mono text-[11px] uppercase tracking-[0.22em] text-primary">{study.industry}</span>
    </div>
    <h3 className="editorial-heading text-foreground text-5xl md:text-6xl mb-5">{study.name}</h3>
    <p className="text-muted-foreground text-lg leading-relaxed mb-6 max-w-xl">{study.desc}</p>
    <p className="text-foreground/90 text-base leading-relaxed mb-8 max-w-xl border-l-2 border-primary/60 pl-4">
      {study.outcome}
    </p>
    <div className="grid grid-cols-3 gap-4 mb-8 max-w-md">
      {study.metrics.map((m) => (
        <div key={m.label} className="rounded-2xl bg-card/60 border border-border p-4">
          <div className="editorial-heading text-2xl md:text-3xl text-foreground">{m.value}</div>
          <div className="mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1">{m.label}</div>
        </div>
      ))}
    </div>
    <a href="#contact" className="group inline-flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors">
      View case study <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
    </a>
  </div>
);

const CaseStudies = () => (
  <section id="work" className="py-28 md:py-40 relative">
    <div className="max-w-[1280px] mx-auto px-6 md:px-10">
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20 md:mb-28">
        <div>
          <span className="mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">Selected work</span>
          <h2 className="editorial-heading text-foreground text-5xl md:text-7xl mt-4">
            Products we've <span className="italic text-gradient-primary">shipped</span>
          </h2>
        </div>
        <p className="text-muted-foreground max-w-sm text-[15px] leading-relaxed">
          A handful of partnerships across fintech, health, SaaS and mobility — each a story of craft, velocity and measurable lift.
        </p>
      </motion.div>

      <div className="space-y-32 md:space-y-40">
        {studies.map((s, i) => {
          const layout = i % 4;
          if (layout === 0) {
            return (
              <motion.div key={s.name} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <Content study={s} />
                <Visual idx={i} study={s} />
              </motion.div>
            );
          }
          if (layout === 1) {
            return (
              <motion.div key={s.name} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <Visual idx={i} study={s} />
                <Content study={s} />
              </motion.div>
            );
          }
          if (layout === 2) {
            return (
              <motion.div key={s.name} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center text-center">
                <div className="max-w-2xl mb-12 flex flex-col items-center"><Content study={s} /></div>
                <div className="w-full max-w-3xl"><Visual idx={i} study={s} /></div>
              </motion.div>
            );
          }
          return (
            <motion.div key={s.name} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
              <div className="mb-10"><Content study={s} /></div>
              <Visual idx={i} study={s} />
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default CaseStudies;
