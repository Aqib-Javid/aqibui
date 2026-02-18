import { motion } from "framer-motion";
import aqibAvatar from "@/assets/aqib-avatar.png";

const Hero = () => {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center pt-20 pb-12">
      <div className="max-w-[1200px] mx-auto px-6 w-full">
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-6"
        >
          <div className="relative inline-block">
            <img
              src={aqibAvatar}
              alt="Aqib Javid"
              className="w-16 h-16 rounded-full object-cover"
            />
            {/* Online indicator */}
            <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-accent rounded-full border-2 border-background" />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-2"
        >
          Aqib Javid
        </motion.h1>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-muted-foreground text-base md:text-lg font-medium mb-8"
        >
          Product Designer, UX Specialist & Design Systems Expert
        </motion.p>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">
            Hey, I'm Aqib. A Senior Product Designer with 5+ years of experience creating user-centered 
            digital solutions. Currently Sr Product Designer at{" "}
            <span className="text-foreground font-medium">Algorithm</span>, with expertise in 
            mobile apps, web platforms, and design systems.
          </p>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            I specialize in solving complex design problems and building scalable design systems 
            that empower teams. From research to execution, I bridge business goals with seamless interactions.
          </p>
        </motion.div>

        {/* Copy email hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 flex items-center gap-2 text-muted-foreground/60 text-sm"
        >
          <span>Press</span>
          <kbd className="px-2 py-0.5 bg-secondary rounded text-xs font-mono text-muted-foreground border border-border">c</kbd>
          <span>to copy my email</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
