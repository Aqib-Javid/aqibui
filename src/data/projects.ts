export type Project = {
  slug: string;
  name: string;
  tagline: string;
  role: string;
  year: string;
  platform: string;
  hue: number; // accent hue for the generated artwork
  glyph: string;
  featured?: boolean;
  link: string;
  metrics: { value: string; label: string }[];
  summary: string;
  challenge: string;
  approach: string[];
  outcome: string;
  learned: string;
};

export const projects: Project[] = [
  {
    slug: "nexifyvpn",
    name: "NexifyVPN",
    tagline: "Privacy, minus the jargon",
    role: "Lead product designer",
    year: "2024",
    platform: "Web · iOS · Android",
    hue: 255,
    glyph: "◐",
    featured: true,
    link: "https://nexifyvpn.com/",
    metrics: [
      { value: "+58%", label: "Checkout conversion" },
      { value: "1 tap", label: "To a secure connection" },
    ],
    summary: "A VPN that feels calm instead of technical. One switch, clear status, honest pricing.",
    challenge: "People wanted protection, not a networking lesson. The old flow buried the connect button under server lists and settings.",
    approach: [
      "Reduced the home screen to a single state: protected or not.",
      "Moved server choice behind a smart default, with an escape hatch for power users.",
      "Rewrote pricing into three plain plans with the trade-offs spelled out.",
    ],
    outcome: "Checkout conversion grew 58% and support tickets about connecting dropped sharply.",
    learned: "Trust comes from fewer choices, explained well.",
  },
  {
    slug: "hairstyle-discovery",
    name: "HairstyleDiscovery",
    tagline: "Find the cut before the chair",
    role: "UX designer",
    year: "2024",
    platform: "Web app",
    hue: 20,
    glyph: "✂",
    featured: true,
    link: "https://www.figma.com/design/XaCfE8zMvk0ZhP21eeqeUu/HairstyleDiscovery-Web-App",
    metrics: [
      { value: "3.4×", label: "Session length" },
      { value: "−40%", label: "Time to first save" },
    ],
    summary: "A visual browsing tool that helps people pick a hairstyle with confidence.",
    challenge: "Searching for a haircut meant endless scrolling with no way to compare or remember what you liked.",
    approach: [
      "Built browsing around face shape and hair type instead of keywords.",
      "Added a lightweight board to save and compare looks side by side.",
      "Designed a share card to show your stylist exactly what you want.",
    ],
    outcome: "Sessions grew 3.4× and people saved their first style much sooner.",
    learned: "Inspiration needs a place to land.",
  },
  {
    slug: "sanialarm",
    name: "Sanialarm",
    tagline: "Security that sells itself",
    role: "Web designer",
    year: "2023",
    platform: "Marketing site",
    hue: 0,
    glyph: "◉",
    link: "https://sanialarm.de/",
    metrics: [
      { value: "+86%", label: "Demo requests" },
      { value: "2", label: "Steps to book" },
    ],
    summary: "A clear, confident website for a German security systems company.",
    challenge: "Visitors couldn't tell which system fit their home, so they left before asking.",
    approach: [
      "Grouped products by situation, not by model number.",
      "Put a short booking form on every page.",
      "Used real install photos to build credibility.",
    ],
    outcome: "Demo requests rose 86% within the first quarter.",
    learned: "Clarity is the best sales pitch.",
  },
  {
    slug: "quick-swapper",
    name: "Quick Swapper",
    tagline: "Swap faces, keep the fun",
    role: "Mobile designer",
    year: "2023",
    platform: "Android",
    hue: 170,
    glyph: "⇄",
    link: "https://play.google.com/store/apps/details?id=com.noman.quickSwapper",
    metrics: [
      { value: "4.7★", label: "Play Store rating" },
      { value: "< 10s", label: "From open to share" },
    ],
    summary: "A playful photo app built around speed: open, swap, share.",
    challenge: "Competing apps hid the fun behind ads, menus and slow processing screens.",
    approach: [
      "Opened straight into the camera.",
      "Turned waiting time into a short preview animation.",
      "Made sharing the primary action on every result.",
    ],
    outcome: "The app holds a 4.7 star rating on Google Play.",
    learned: "Delight lives in the first ten seconds.",
  },
  {
    slug: "mate",
    name: "MATE",
    tagline: "Teamwork without the noise",
    role: "Product designer",
    year: "2023",
    platform: "SaaS dashboard",
    hue: 210,
    glyph: "▦",
    link: "#",
    metrics: [
      { value: "−30%", label: "Clicks per task" },
      { value: "1", label: "Shared design system" },
    ],
    summary: "A workspace dashboard that shows teams what matters today.",
    challenge: "Every screen competed for attention, so nothing felt important.",
    approach: [
      "Built a daily focus view as the new home.",
      "Created a compact design system to keep screens consistent.",
      "Cut secondary actions into context menus.",
    ],
    outcome: "Common tasks took about a third fewer clicks.",
    learned: "A system is a promise of consistency.",
  },
  {
    slug: "diet-achiever",
    name: "Diet Achiever",
    tagline: "Small habits, real progress",
    role: "Mobile designer",
    year: "2022",
    platform: "iOS · Android",
    hue: 130,
    glyph: "✿",
    link: "#",
    metrics: [
      { value: "+45%", label: "Week-two retention" },
      { value: "5s", label: "To log a meal" },
    ],
    summary: "A nutrition tracker that celebrates streaks instead of punishing slips.",
    challenge: "Logging food felt like homework, so people quit in the first week.",
    approach: [
      "Made logging a meal a five-second action.",
      "Replaced calorie warnings with gentle weekly trends.",
      "Added streaks and small rewards for consistency.",
    ],
    outcome: "Week-two retention improved by 45%.",
    learned: "Motivation beats precision.",
  },
];

export const getProject = (slug?: string) => projects.find((p) => p.slug === slug);
