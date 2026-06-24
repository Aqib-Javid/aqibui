import { motion } from "framer-motion";
import type { ReactNode } from "react";

export const Phone = ({ children, className = "", float = true }: { children?: ReactNode; className?: string; float?: boolean }) => (
  <div className={`${className} ${float ? "animate-float-slow" : ""}`}>
    <div className="relative w-[220px] h-[450px] rounded-[36px] bg-neutral-900 border border-white/10 p-[6px] shadow-[0_30px_80px_-20px_rgba(120,80,255,0.45)]">
      <div className="w-full h-full rounded-[30px] overflow-hidden bg-gradient-to-br from-neutral-800 to-neutral-950 relative">
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 rounded-full bg-black/80 z-10" />
        {children}
      </div>
    </div>
  </div>
);

export const Tablet = ({ children, className = "", float = true }: { children?: ReactNode; className?: string; float?: boolean }) => (
  <div className={`${className} ${float ? "animate-float-slower" : ""}`}>
    <div className="relative w-[340px] h-[420px] rounded-[28px] bg-neutral-900 border border-white/10 p-[8px] shadow-[0_40px_90px_-20px_rgba(120,80,255,0.4)]">
      <div className="w-full h-full rounded-[20px] overflow-hidden bg-gradient-to-br from-neutral-800 to-neutral-950">
        {children}
      </div>
    </div>
  </div>
);

export const Dashboard = ({ children, className = "", float = true }: { children?: ReactNode; className?: string; float?: boolean }) => (
  <div className={`${className} ${float ? "animate-float-slower" : ""}`}>
    <div className="relative w-full rounded-2xl bg-neutral-900 border border-white/10 shadow-[0_40px_100px_-30px_rgba(120,80,255,0.5)] overflow-hidden">
      <div className="h-7 bg-neutral-950/80 border-b border-white/5 flex items-center gap-1.5 px-3">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
      </div>
      <div className="p-5 bg-gradient-to-br from-neutral-900 to-neutral-950">{children}</div>
    </div>
  </div>
);

export const DashUI = () => (
  <div className="space-y-3">
    <div className="flex items-center justify-between">
      <div className="h-3 w-24 rounded-full bg-white/15" />
      <div className="flex gap-1.5">
        <div className="h-6 w-12 rounded-md bg-primary/40" />
        <div className="h-6 w-6 rounded-md bg-white/10" />
      </div>
    </div>
    <div className="grid grid-cols-3 gap-2">
      {[1, 2, 3].map((i) => (
        <div key={i} className="rounded-lg bg-white/[0.04] border border-white/5 p-3">
          <div className="h-2 w-10 rounded bg-white/10 mb-2" />
          <div className="h-5 w-16 rounded bg-white/20 mb-2" />
          <div className="h-1.5 w-full rounded bg-gradient-to-r from-primary to-primary/30" />
        </div>
      ))}
    </div>
    <div className="rounded-lg bg-white/[0.03] border border-white/5 p-3 h-24 relative overflow-hidden">
      <svg viewBox="0 0 200 80" className="w-full h-full">
        <defs>
          <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="hsl(255 92% 76%)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="hsl(255 92% 76%)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0,60 C30,40 50,55 80,30 C110,10 140,50 170,25 L200,20 L200,80 L0,80 Z" fill="url(#g1)" />
        <path d="M0,60 C30,40 50,55 80,30 C110,10 140,50 170,25 L200,20" stroke="hsl(255 92% 76%)" strokeWidth="1.5" fill="none" />
      </svg>
    </div>
  </div>
);

export const PhoneUI = ({ accent = "primary" }: { accent?: string }) => (
  <div className="p-4 pt-10 space-y-3">
    <div className="h-3 w-20 rounded bg-white/15" />
    <div className="h-5 w-32 rounded bg-white/25" />
    <div className={`rounded-xl bg-${accent}/20 border border-${accent}/30 p-3 mt-4`}>
      <div className="h-2 w-12 rounded bg-white/20 mb-2" />
      <div className="h-3 w-20 rounded bg-white/40" />
    </div>
    {[1, 2, 3].map((i) => (
      <div key={i} className="rounded-lg bg-white/5 border border-white/5 p-2.5 flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-primary/30" />
        <div className="flex-1 space-y-1">
          <div className="h-2 w-16 rounded bg-white/20" />
          <div className="h-2 w-24 rounded bg-white/10" />
        </div>
      </div>
    ))}
    <motion.div
      className="absolute bottom-4 left-4 right-4 rounded-full bg-primary h-10 flex items-center justify-center"
      animate={{ scale: [1, 1.04, 1] }}
      transition={{ duration: 2.4, repeat: Infinity }}
    >
      <div className="h-2 w-12 rounded bg-white/80" />
    </motion.div>
  </div>
);
