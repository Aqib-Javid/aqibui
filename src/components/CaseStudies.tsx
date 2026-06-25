import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Phone, Tablet, Dashboard, PhoneUI, DashUI } from "./DeviceMockup";

type Study = {
  industry: string;
  name: string;
  desc: string;
  outcome: string;
  metrics: { label: string; value: string }[];
  accent: string;
  href: string;
};

const studies: Study[] = [
  {
    industry: "Web App · 2024",
    name: "NexifyVPN",
    desc: "A privacy-first VPN web experience reimagined around clarity, trust and a frictionless upgrade path for global users.",
    outcome: "Re-architected the marketing site and dashboard — lifting trial-to-paid conversion and reducing churn on the first billing cycle.",
    metrics: [
      { label: "Conversion", value: "+58%" },
      { label: "Trial start", value: "+72%" },
      { label: "Churn D30", value: "-31%" },
    ],
    accent: "from-violet-400/30 to-fuchsia-300/10",
    href: "https://nexifyvpn.com/",
  },
  {
    industry: "UX Design · 2024",
    name: "HairstyleDiscovery",
    desc: "A discovery-led web app helping users explore hairstyles via guided filters, mood-based browsing, and stylist recommendations.",
    outcome: "Redesigned the discovery flow around mood and intent — turning a flat catalogue into a personalized journey.",
    metrics: [
      { label: "Sessions", value: "3.4x" },
      { label: "Time on site", value: "+118%" },
      { label: "Saves / user", value: "+62%" },
    ],
    accent: "from-rose-300/30 to-amber-200/10",
    href: "https://www.figma.com/design/XaCfE8zMvk0ZhP21eeqeUu/HairstyleDiscovery-Web-App",
  },
  {
    industry: "Web Design · 2023",
    name: "Sanialarm",
    desc: "A B2B safety platform website redesigned for clarity, trust and lead generation across multiple regulated markets in DACH.",
    outcome: "Replaced a fragmented multi-product site with one calm, conversion-focused experience.",
    metrics: [
      { label: "Demo requests", value: "+86%" },
      { label: "Bounce rate", value: "-44%" },
      { label: "Pages / visit", value: "+2.1x" },
    ],
    accent: "from-sky-300/30 to-cyan-200/10",
    href: "https://sanialarm.de/",
  },
  {
    industry: "Mobile App · 2023",
    name: "Quick Swapper",
    desc: "An Android utility app for fast file & contact swapping — designed around speed, glanceability and zero-friction pairing.",
    outcome: "Designed the full mobile experience and visual identity, then shipped to the Play Store with sub-second onboarding.",
    metrics: [
      { label: "Activation", value: "+74%" },
      { label: "Day-1 retention", value: "+39%" },
      { label: "Rating", value: "4.7★" },
    ],
    accent: "from-emerald-300/30 to-teal-200/10",
    href: "https://play.google.com/store/apps/details?id=com.noman.quickSwapper",
  },
];

const Visual = ({ idx, study }: { idx: number; study: Study }) => (
  <div className={`relative w-full aspect-[4/3] rounded-[32px] bg-gradient-to-br ${study.accent} border border-border overflow-hidden flex items-center justify-center p-10`}>
    <div aria-hidden className="absolute inset-0 opacity-[0.05]"
      style={{ backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
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
      </>
    )}
  </div>
);

const Content = ({ study }: { study: Study }) => (
  <div>
    <span className="mono text-[11px] uppercase tracking-[0.22em] text-primary">{study.industry}</span>
    <h3 className="editorial-heading text-foreground text-5xl md:text-6xl mt-4 mb-5">{study.name}</h3>
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
    <a href={study.href} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors">
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
            Products I've <span className="italic text-gradient-primary">shipped</span>
          </h2>
        </div>
        <p className="text-muted-foreground max-w-sm text-[15px] leading-relaxed">
          A handful of partnerships across SaaS, mobile and consumer web — each one a story of craft, velocity and measurable lift.
        </p>
      </motion.div>

      <div className="space-y-32 md:space-y-40">
        {studies.map((s, i) => {
          const flip = i % 2 === 1;
          return (
            <motion.div key={s.name} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {flip ? <><Visual idx={i} study={s} /><Content study={s} /></> : <><Content study={s} /><Visual idx={i} study={s} /></>}
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default CaseStudies;
