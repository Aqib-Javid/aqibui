import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "HairCut Recommendation",
    category: "SAAS & STARTUP",
    country: "Taiwan",
    description: "An AI-powered hair styling recommendation app that helps users find the perfect haircut based on their face shape and preferences.",
    image: "https://framerusercontent.com/images/BMw5YPVWUO3k9pECf8lPzg9N52k.png?width=1280&height=960",
    href: "https://www.figma.com/design/XaCfE8zMvk0ZhP21eeqeUu/HairstyleDiscovery-Web-App?m=auto&t=hLvRRi5Y9U0pEulv-6",
  },
  {
    title: "Maktab",
    category: "SCHOOL MANAGEMENT",
    country: "Pakistan",
    description: "Comprehensive school management platform for educational institutions.",
    image: "https://framerusercontent.com/images/lS2JBP2RGiWlbMACBoqI59mvtI.png?width=1280&height=960",
    href: "https://usemaktab.com/",
  },
  {
    title: "Sanialarm Landing Page",
    category: "EDUCATION STARTUP",
    country: "Croatia",
    description: "Modern landing page design for an innovative education startup.",
    image: "https://framerusercontent.com/images/21jfi5u7uXEbUBB1f47nLWK6h0.png?width=1280&height=960",
    href: "https://sanialarm.de/",
  },
  {
    title: "Quick Swapper",
    category: "BUY & SELL",
    country: "Pakistan",
    description: "Mobile app for seamless buying and selling through swapping.",
    image: "https://framerusercontent.com/images/E1vS8YOLzfCf7rCXY6fY1Pi6W5o.png?width=1280&height=960",
    href: "https://play.google.com/store/apps/details?id=com.noman.quickSwapper&hl=en",
  },
  {
    title: "Rapidos Booking App",
    category: "TRAVEL",
    country: "USA",
    description: "Intuitive travel booking application for seamless trip planning.",
    image: "https://framerusercontent.com/images/WXsO0e0BXvxxhfhB9DIh9UiZAc.png?width=1280&height=960",
    href: "https://www.figma.com/design/9Z6Kx843G4aB1n26bd6e9h/Rapidos-Booking-App--Copy-?node-id=0-1&t=VGp1HCTF9N37wJbz-1",
  },
  {
    title: "MATE Social App",
    category: "SOCIAL",
    country: "USA",
    description: "Modern social networking app with engaging UX/UI design.",
    image: "https://framerusercontent.com/images/17qHrfHBEMeGT3yf5rr2Dys07I.png?width=1280&height=960",
    href: "https://www.figma.com/design/X0BK7oC8jvwulXot7gAdSc/Social-App-UX-UI-design?node-id=112803-2014&t=5ncT8RwO5bvb6Uaj-1",
  },
  {
    title: "Diet Achiever",
    category: "HEALTH & FITNESS",
    country: "USA",
    description: "Health and fitness platform for personalized diet tracking.",
    image: "https://framerusercontent.com/images/CmD8B011kEkOSFTzmAuDJkEGmfA.png?width=1280&height=960",
    href: "https://dietachiever.com/",
  },
  {
    title: "Donna 24/7 AI Receptionist",
    category: "AI RECEPTIONIST",
    country: "Canada",
    description: "AI-powered virtual receptionist for 24/7 customer service.",
    image: "https://framerusercontent.com/images/KX5sHXOoo12HjwkGFDsPXUoekIQ.png?width=1280&height=960",
    href: "https://donnaio.ai/",
  },
];

const Work = () => {
  return (
    <section id="work" className="py-24 relative">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="text-primary uppercase tracking-[0.2em] text-xs font-medium mb-3 block">
            WORK
          </span>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl">
            Below are some select projects, case studies and live links are available.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10 mt-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
