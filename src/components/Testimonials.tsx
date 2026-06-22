import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  { name: "Sarah Chudary", country: "USA", flag: "🇺🇸", quote: "Aqib did an AMAZING job on our app design. He took the time to understand the concept and ensure alignment — a joy to work with, polite, proactive and fluent in communication. Highly recommend." },
  { name: "Mia Pansky", country: "USA", flag: "🇺🇸", quote: "Another great experience. Delivered a great product and had the patience to go through multiple revisions. Can't even describe how much you are appreciated. Nice job." },
  { name: "Trayen Rumley", country: "USA", flag: "🇺🇸", quote: "I had the pleasure of working with Aqib on a landing page and web app, and the results were phenomenal. Exceptional eye for design, seamless user experience and outstanding communication." },
  { name: "Klaus Kneupner", country: "Denmark", flag: "🇩🇰", quote: "Aqib did surprise me. Even when I told him it would be good, he chose on his behalf to improve further. That commitment to quality will get him far." },
  { name: "Marine Hyjazi", country: "Ivory Coast", flag: "🇨🇮", quote: "Aqib was patient and very involved in our project. He was available and efficient, always taking my feedback as a chance to improve rather than as criticism." },
  { name: "William Patrick", country: "Croatia", flag: "🇭🇷", quote: "It was wonderful working with him; he was great and exceptional. Will work again!" },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-28 md:py-40 relative">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-20"
        >
          <div>
            <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Kind words</span>
            <h2 className="editorial-heading text-5xl md:text-7xl mt-4 text-foreground">
              From the <span className="italic font-light text-gradient-primary">people</span><br />
              I've built with.
            </h2>
          </div>
        </motion.div>

        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[Autoplay({ delay: 4500, stopOnInteraction: false })]}
          className="w-full"
        >
          <CarouselContent className="-ml-6">
            {testimonials.map((t, i) => (
              <CarouselItem key={t.name} className="pl-6 md:basis-1/2 lg:basis-[42%]">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.7 }}
                  className="glass-card rounded-3xl p-8 md:p-10 h-full flex flex-col min-h-[340px] hover:border-primary/30 transition-colors duration-500"
                >
                  <Quote className="w-9 h-9 text-primary/60 mb-6" strokeWidth={1.5} />
                  <blockquote className="flex-1 text-foreground/90 text-lg md:text-xl leading-relaxed font-light">
                    {t.quote}
                  </blockquote>
                  <div className="mt-8 pt-6 border-t border-border/50 flex items-center gap-4">
                    <div className="w-11 h-11 rounded-full bg-primary/15 flex items-center justify-center text-primary font-display font-semibold text-sm">
                      {t.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div>
                      <p className="font-display font-semibold text-foreground text-sm">{t.name}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{t.flag} {t.country}</p>
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-end gap-3 mt-10">
            <CarouselPrevious className="relative static translate-y-0 glass-card hover:border-primary/30 text-foreground border-0" />
            <CarouselNext className="relative static translate-y-0 glass-card hover:border-primary/30 text-foreground border-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
