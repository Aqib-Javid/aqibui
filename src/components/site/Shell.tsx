import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { Moon, Sun, Volume2, VolumeX } from "lucide-react";
import { ReactNode } from "react";
import { Project } from "@/data/projects";
import avatar from "@/assets/aqib-avatar.png";

export const EMAIL = "aqib.uidesign@gmail.com";

export const fade = (i = 0) => ({
  initial: { opacity: 0, y: 12, filter: "blur(4px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] as const },
});

export const Label = ({ children }: { children: ReactNode }) => (
  <p className="mb-5 text-sm text-muted-foreground">{children}</p>
);

/** Generated artwork instead of project covers. */
export const Artwork = ({ project, size = "sm" }: { project: Project; size?: "sm" | "lg" }) => (
  <span
    className={`relative flex shrink-0 items-center justify-center overflow-hidden rounded-xl ${size === "lg" ? "h-56 w-full md:h-72" : "h-11 w-11"}`}
    style={{ background: `linear-gradient(140deg, hsl(${project.hue} 80% 92%), hsl(${project.hue} 70% 80%))` }}
  >
    <motion.span
      className={`${size === "lg" ? "text-7xl md:text-8xl" : "text-lg"}`}
      style={{ color: `hsl(${project.hue} 60% 35%)` }}
      animate={size === "lg" ? { rotate: [0, 8, 0], y: [0, -6, 0] } : undefined}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      {project.glyph}
    </motion.span>
  </span>
);

export const ProjectRow = ({ project, i }: { project: Project; i: number }) => (
  <motion.div {...fade(i)}>
    <Link
      to={`/work/${project.slug}`}
      className="group -mx-3 flex items-center gap-4 rounded-2xl px-3 py-3 transition-colors hover:bg-secondary"
    >
      <span className="transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
        <Artwork project={project} />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-medium text-foreground">{project.name}</span>
        <span className="block truncate text-sm text-muted-foreground">{project.tagline}</span>
      </span>
      <span className="text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">→</span>
    </Link>
  </motion.div>
);

// ---------- Click sound: a soft synthesized tick on interactive taps ----------
export const SOUND_KEY = "aj-sound";
export const isSoundOn = () => localStorage.getItem(SOUND_KEY) !== "off";

let audioCtx: AudioContext | null = null;
const playClick = () => {
  try {
    audioCtx = audioCtx ?? new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
    if (audioCtx.state === "suspended") void audioCtx.resume();
    const t = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(2400, t);
    osc.frequency.exponentialRampToValueAtTime(650, t + 0.05);
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.exponentialRampToValueAtTime(0.07, t + 0.004);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.07);
    osc.connect(gain).connect(audioCtx.destination);
    osc.start(t);
    osc.stop(t + 0.08);
  } catch {
    /* audio unavailable — stay silent */
  }
};

// ---------- Theme toggle ----------
const ToggleButton = ({ onClick, label, children }: { onClick: () => void; label: string; children: ReactNode }) => (
  <motion.button
    type="button"
    onClick={onClick}
    whileTap={{ scale: 0.85, rotate: -12 }}
    whileHover={{ scale: 1.08 }}
    transition={{ type: "spring", stiffness: 400, damping: 18 }}
    aria-label={label}
    className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
  >
    {children}
  </motion.button>
);

const Shell = ({ children }: { children: ReactNode }) => {
  const [soundOn, setSoundOn] = useState(isSoundOn);
  const [dark, setDark] = useState(() => document.documentElement.classList.contains("dark"));

  // Soft tick whenever any link or button is tapped.
  useEffect(() => {
    const handler = (e: PointerEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest('a, button, [role="button"]') && isSoundOn()) playClick();
    };
    document.addEventListener("pointerdown", handler);
    return () => document.removeEventListener("pointerdown", handler);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("aj-theme", next ? "dark" : "light");
  };

  const toggleSound = () => {
    const next = !soundOn;
    setSoundOn(next);
    localStorage.setItem(SOUND_KEY, next ? "on" : "off");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="mx-auto flex max-w-[720px] items-center justify-between px-4 pt-10 sm:px-5">
        <Link to="/" className="font-medium">Aqib Javid</Link>
        <div className="flex items-center gap-4">
          <nav className="flex gap-4 text-sm text-muted-foreground sm:gap-5">
            {[["/", "Home"], ["/work", "Work"]].map(([to, l]) => (
              <NavLink key={to} to={to} end className={({ isActive }) => `link-underline transition-colors hover:text-foreground ${isActive ? "text-foreground" : ""}`}>{l}</NavLink>
            ))}
            <a href={`mailto:${EMAIL}`} className="link-underline transition-colors hover:text-foreground">Email</a>
          </nav>
          <div className="flex items-center gap-0.5">
            <ToggleButton onClick={toggleTheme} label={dark ? "Switch to light mode" : "Switch to dark mode"}>
              <motion.span key={dark ? "moon" : "sun"} initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} className="flex">
                {dark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
              </motion.span>
            </ToggleButton>
            <ToggleButton onClick={toggleSound} label={soundOn ? "Mute click sound" : "Unmute click sound"}>
              {soundOn ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
            </ToggleButton>
          </div>
        </div>
      </header>
      <main className="relative z-10 mx-auto max-w-[720px] px-4 pb-16 pt-20 sm:px-5">{children}</main>
      <footer className="relative z-10 mx-auto flex max-w-[720px] items-center justify-between gap-4 border-t border-border px-4 py-8 text-sm text-muted-foreground sm:px-5">
        <span className="flex items-center gap-3">
          <img src={avatar} alt="" className="h-8 w-8 rounded-full object-cover" />
          <span>Aqib Javid © {new Date().getFullYear()} · Copyright</span>
        </span>
        <span>Working worldwide</span>
      </footer>
    </div>
  );
};

export default Shell;
