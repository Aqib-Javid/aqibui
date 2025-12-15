import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  "Figma", "UI Design", "UX Research", "Design Systems",
  "Prototyping", "User Testing", "Mobile Design", "Web Design"
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative border border-border">
              <img 
                src="/images/profile-photo.jpg" 
                alt="Aqib Javid - Product Designer"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -right-4 -bottom-4 bg-accent text-accent-foreground px-6 py-3 rounded-2xl font-semibold shadow-lg"
            >
              5+ Years Experience
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-accent uppercase tracking-widest text-sm font-semibold mb-4 block">
              About Me
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              Crafting user-centered 
              <span className="text-muted-foreground font-normal"> digital solutions</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I'm a product designer with 5+ years of experience creating user-centered digital solutions. My passion lies in solving complex design problems and building scalable design systems that empower teams.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I believe great design starts with understanding user needs and solving real problems. Whether it's designing intuitive mobile app interfaces, building comprehensive design systems, or optimizing user flows, I focus on creating experiences that are both beautiful and functional.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-12">
              With expertise in end-to-end design—from research to execution—I bridge business goals with seamless interactions, ensuring every pixel serves a purpose.
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.05, duration: 0.4 }}
                  className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;