import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const budgets = ["< $5k", "$5–15k", "$15–30k", "$30k+"];

const Contact = () => {
  const [budget, setBudget] = useState("$15–30k");
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks — I'll reply within a working day.");
    (e.target as HTMLFormElement).reset();
  };
  return (
    <section id="contact" className="py-28 md:py-40 relative overflow-hidden">
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full opacity-20 blur-[150px] pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(255 92% 65% / 0.5), transparent 70%)" }} />
      <div className="relative max-w-[1280px] mx-auto px-6 md:px-10 grid lg:grid-cols-[1fr_1.1fr] gap-16">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}>
          <span className="mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">Start a project</span>
          <h2 className="editorial-heading text-foreground text-5xl md:text-7xl mt-4 leading-[0.95]">
            Let's build<br /><span className="italic text-gradient-primary">something</span><br />exceptional.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mt-8 max-w-md">
            Tell me about your product, your team, and where you want to be in 90 days. I'll come back within a working day.
          </p>
          <div className="mt-12 space-y-5">
            <a href="mailto:hello@aqibjavid.com" className="flex items-center gap-4 group">
              <span className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground group-hover:border-primary group-hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
              </span>
              <span className="font-display text-xl text-foreground group-hover:text-gradient-primary transition-all">hello@aqibjavid.com</span>
            </a>
            <div className="flex items-center gap-4">
              <span className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground">
                <MapPin className="w-4 h-4" />
              </span>
              <span className="font-display text-xl text-foreground">Working globally · Remote</span>
            </div>
          </div>
        </motion.div>

        <motion.form onSubmit={onSubmit}
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, delay: 0.1 }}
          className="rounded-[32px] glass-card p-8 md:p-10 space-y-6">
          <div className="grid md:grid-cols-2 gap-5">
            <Field label="Name" name="name" placeholder="Your full name" required />
            <Field label="Email" name="email" type="email" placeholder="you@company.com" required />
          </div>
          <Field label="Company" name="company" placeholder="Company / team" />
          <div>
            <label className="mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Budget</label>
            <div className="mt-3 flex flex-wrap gap-2">
              {budgets.map((b) => (
                <button type="button" key={b} onClick={() => setBudget(b)}
                  className={`px-4 py-2 rounded-full border text-sm transition-all ${budget === b ? "bg-primary text-primary-foreground border-primary" : "border-border text-foreground/70 hover:border-primary/40"}`}>
                  {b}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Message</label>
            <textarea name="message" rows={5} required
              placeholder="Tell me a bit about the project, timeline, and what success looks like."
              className="mt-3 w-full rounded-2xl bg-background/60 border border-border focus:border-primary/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors" />
          </div>
          <button type="submit"
            className="group w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:scale-[1.02] hover:shadow-[var(--shadow-elegant)] transition-all duration-500">
            Start Your Project
            <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
          </button>
        </motion.form>
      </div>
    </section>
  );
};

const Field = ({ label, name, type = "text", placeholder, required }: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) => (
  <div>
    <label className="mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{label}</label>
    <input type={type} name={name} placeholder={placeholder} required={required}
      className="mt-3 w-full rounded-full bg-background/60 border border-border focus:border-primary/60 px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors" />
  </div>
);

export default Contact;
