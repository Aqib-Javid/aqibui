import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const interval = 20; // Update every 20ms
    const increment = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 300);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-8"
      >
        <span className="font-display text-2xl font-semibold text-foreground">
          Aqib Javid
        </span>
        
        <div className="w-64 md:w-80">
          <div className="flex justify-between mb-2">
            <span className="text-xs text-muted-foreground uppercase tracking-widest">
              Loading
            </span>
            <span className="text-xs text-accent font-mono">
              {Math.round(progress)}%
            </span>
          </div>
          
          <div className="h-[2px] bg-border/50 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-accent"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
