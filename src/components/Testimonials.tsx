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
    quote: "I had the pleasure of working with Aqib on a landing page and web app, and the results were phenomenal. Their exceptional eye for design, seamless user experience, and outstanding communication made the project a success. Delivered on time, the final product exceeded my expectations and garnered numerous compliments. Highly recommended!",
    rating: 5,
  },
  {
    name: "Klaus Kneupner",
    country: "Denmark",
    flag: "🇩🇰",
    quote: "Aqib did surprise me. Even when I told him that it would be good, he choose on his behalf to improve further. That commitment to quality will get him far and will ensure that his future customers will come again. Just like I will do. In addition, he isn't pushy etc. No, he is nice to work with.",
    rating: 5,
  },
  {
    name: "Marine Hyjazi",
    country: "Ivory Coast",
    flag: "🇨🇮",
    quote: "Aqib was patient and very involved in our project. He was available and efficient, always taking my feedback as a chance to improve rather than as criticism. He took initiatives and we collaborated on developing certain ideas together, which was a pleasant surprise in this experience. Aqib opened my eyes to some basic UX design principles, so I would definitely recommend him and work with him again in the future.",
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
    <section className="py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-primary uppercase tracking-widest text-sm font-medium mb-4 block">
            CLIENT FEEDBACK
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground">
            Testimonials
          </h2>
        </motion.div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={testimonial.name} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group relative h-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative p-6 md:p-8 bg-card border border-border rounded-2xl h-full flex flex-col">
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-primary text-primary"
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="flex-1 text-foreground/80 text-sm md:text-base leading-relaxed mb-6">
                      "{testimonial.quote}"
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-primary font-semibold text-sm">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">
                          {testimonial.name}
                        </p>
                        <p className="text-xs text-muted-foreground flex items-center gap-1">
                          {testimonial.flag} {testimonial.country}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-8">
            <CarouselPrevious className="relative static translate-y-0 bg-card border-border hover:bg-primary hover:text-primary-foreground" />
            <CarouselNext className="relative static translate-y-0 bg-card border-border hover:bg-primary hover:text-primary-foreground" />
          </div>
        </Carousel>

        {/* Decorative elements */}
        <motion.div
          className="absolute -bottom-20 -right-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </section>
  );
};

export default Testimonials;
