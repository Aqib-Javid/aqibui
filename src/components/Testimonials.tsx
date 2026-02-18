import { motion } from "framer-motion";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Sarah Chudary",
    country: "USA",
    flag: "🇺🇸",
    quote: "Aqib Javid did an AMAZING job on our app design! He took the time to understand the concept, ensuring alignment. He was a joy to work with - polite, proactive, and fluent in communication. Highly recommend! 👏",
    rating: 5,
  },
  {
    name: "Mia Pansky",
    country: "USA",
    flag: "🇺🇸",
    quote: "Another great experience. Delivered a great product.. and had the patience to go through multiple revisions. Can't even describe how much you are appreciated. Nice job!!",
    rating: 5,
  },
  {
    name: "Trayen Rumley",
    country: "USA",
    flag: "🇺🇸",
    quote: "I had the pleasure of working with Aqib on a landing page and web app, and the results were phenomenal. Their exceptional eye for design, seamless user experience, and outstanding communication made the project a success.",
    rating: 5,
  },
  {
    name: "Klaus Kneupner",
    country: "Denmark",
    flag: "🇩🇰",
    quote: "Aqib did surprise me. Even when I told him that it would be good, he choose on his behalf to improve further. That commitment to quality will get him far and will ensure that his future customers will come again.",
    rating: 5,
  },
  {
    name: "Marine Hyjazi",
    country: "Ivory Coast",
    flag: "🇨🇮",
    quote: "Aqib was patient and very involved in our project. He was available and efficient, always taking my feedback as a chance to improve rather than as criticism. He took initiatives and we collaborated on developing certain ideas together.",
    rating: 5,
  },
  {
    name: "William Patrick",
    country: "Croatia",
    flag: "🇭🇷",
    quote: "It was wonderful working with him; he was great and exceptional. Will work again!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 relative">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-primary uppercase tracking-[0.2em] text-xs font-medium mb-3 block">
            TESTIMONIALS
          </span>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl">
            What clients say about working with me.
          </p>
        </motion.div>

        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={testimonial.name} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  className="h-full"
                >
                  <div className="p-6 md:p-8 border border-border/50 rounded-2xl h-full flex flex-col bg-card/50">
                    {/* Stars */}
                    <div className="flex gap-0.5 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="flex-1 text-foreground/70 text-sm leading-relaxed mb-6">
                      "{testimonial.quote}"
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center gap-3 pt-4 border-t border-border/30">
                      <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                        <span className="text-foreground/70 font-medium text-xs">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-foreground text-sm">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.flag} {testimonial.country}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-8">
            <CarouselPrevious className="relative static translate-y-0 bg-card border-border/50 hover:bg-accent hover:text-accent-foreground" />
            <CarouselNext className="relative static translate-y-0 bg-card border-border/50 hover:bg-accent hover:text-accent-foreground" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
