import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Work from "./pages/Work";
import CaseStudy from "./pages/CaseStudy";
import { motion, MotionConfig } from "framer-motion";

const queryClient = new QueryClient();

const ClickRippleFeedback = () => {
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);

  useEffect(() => {
    let nextId = 0;
    const handlePointerDown = (event: PointerEvent) => {
      if (event.button !== 0 || !(event.target instanceof Element)) return;
      if (!event.target.closest("a, button, [role='button']")) return;

      const ripple = { id: ++nextId, x: event.clientX, y: event.clientY };
      setRipples((current) => [...current, ripple]);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  return (
    <>
      {ripples.map((ripple) => (
        <motion.span
          key={ripple.id}
          aria-hidden="true"
          className="pointer-events-none fixed left-0 top-0 z-[100] h-9 w-9 rounded-full border border-primary/70 bg-primary/10"
          initial={{ opacity: 0, scale: 0.35, x: ripple.x - 18, y: ripple.y - 18 }}
          animate={{
            x: ripple.x - 18,
            y: ripple.y - 18,
            opacity: [0, 0.65, 0],
            scale: [0.35, 1.15, 1.9],
          }}
          transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
          onAnimationComplete={() => setRipples((current) => current.filter((item) => item.id !== ripple.id))}
        />
      ))}
    </>
  );
};

const App = () => (
  <MotionConfig reducedMotion="user">
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ClickRippleFeedback />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:slug" element={<CaseStudy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </MotionConfig>
);

export default App;
