// Single source of truth for portfolio content.
// Edit here to update the site.

export const profile = {
  name: "Krishan Arpidani",
  shortName: "Krishan",
  role: "Reliability & Software Engineer",
  location: "Malaysia",
  email: "alip.kicen@gmail.com",
  phone: "(+60)18 313 4090",
  phoneRaw: "60183134090",
  resume: "/resume.pdf",
  socials: {
    github: "https://github.com/alipkicen",
    linkedin: "https://www.linkedin.com/in/arpidani/",
  },
  // Hero
  tagline:
    "I keep hardware reliable at Micron, and build software, data, and ML tools that make the work sharper.",
  intro:
    "Electrical & Electronics engineer turned builder. I ship internal tools, automate the tedious parts of reliability operations, and study machine learning by putting it into real projects.",
};

export const stats = [
  { value: "2024", label: "Engineering at Micron since" },
  { value: "3+", label: "Shipped side projects" },
  { value: "EEE", label: "Bachelor's, UPM" },
  { value: "FS · Data · ML", label: "Current focus areas" },
];

export const about = {
  description:
    "I'm an Electrical & Electronics engineer working in package reliability operations at Micron. The day job taught me to care about systems that don't fail quietly, so I started building software that removes friction: schedulers, dashboards, and small ML experiments. I learn by shipping, documenting honestly, and iterating in public.",
  facts: [
    { label: "Name", value: "Krishan Arpidani" },
    { label: "Role", value: "Package Reliability Operation Engineer" },
    { label: "Company", value: "Micron Memory Malaysia" },
    { label: "Focus", value: "Full-stack · Data · ML/AI" },
    { label: "Nationality", value: "Malaysian" },
    { label: "Languages", value: "English · Bahasa Malaysia" },
  ],
};

export const experience = [
  {
    company: "Micron Memory Malaysia Sdn. Bhd.",
    companyUrl: "https://my.micron.com/about/company",
    position: "Package Reliability Operation Engineer",
    duration: "Sep 2024 — Present",
    summary:
      "Own reliability operations for memory packaging. Build internal tooling to plan test timelines and reduce manual scheduling work.",
    current: true,
  },
  {
    company: "Sanmina-SCI Systems (M) Sdn. Bhd.",
    companyUrl:
      "https://www.sanmina.com/services-contract-electronics-manufacturing/",
    position: "Process Engineer Intern",
    duration: "Jul 2023 — Oct 2023",
    summary:
      "Supported process engineering on a high-volume electronics manufacturing line during my bachelor's degree.",
    current: false,
  },
  {
    company: "Sanmina-SCI Systems (M) Sdn. Bhd.",
    companyUrl:
      "https://www.sanmina.com/services-contract-electronics-manufacturing/",
    position: "Assistant Engineer Intern",
    duration: "Dec 2019 — Apr 2020",
    summary:
      "First hands-on factory-floor exposure during my diploma, assisting engineers with line and process tasks.",
    current: false,
  },
];

export const education = [
  {
    institute: "Universiti Putra Malaysia",
    instituteUrl:
      "https://eng.upm.edu.my/department/department_of_electrical_and_electronic_engineering/introduction-1886",
    degree: "B.Eng. Electrical & Electronics Engineering",
    duration: "Jun 2020 — Aug 2024",
  },
  {
    institute: "Ungku Omar Polytechnic",
    instituteUrl:
      "https://www.puo.edu.my/webportal/departments/academic-departments/the-department-of-electrical-engineering/",
    degree: "Diploma in Electrical & Electronics Engineering",
    duration: "Jun 2017 — Apr 2020",
  },
];

// level: 0-3  (1 learning, 2 practicing, 3 comfortable)
export const skillGroups = [
  {
    title: "Languages",
    items: [
      { name: "Python", level: 3 },
      { name: "JavaScript", level: 2 },
      { name: "SQL", level: 2 },
    ],
  },
  {
    title: "Web & Frontend",
    items: [
      { name: "React", level: 2 },
      { name: "Next.js", level: 2 },
      { name: "Tailwind CSS", level: 2 },
      { name: "HTML / CSS", level: 2 },
    ],
  },
  {
    title: "Data & ML",
    items: [
      { name: "Pandas", level: 2 },
      { name: "NumPy", level: 2 },
      { name: "scikit-learn", level: 1 },
      { name: "TensorFlow", level: 1 },
    ],
  },
  {
    title: "Tools & Platforms",
    items: [
      { name: "Node.js", level: 2 },
      { name: "Streamlit", level: 2 },
      { name: "Git", level: 2 },
      { name: "Vercel", level: 2 },
    ],
  },
];

export const skillLevelMap = {
  1: { label: "Learning", pct: 40 },
  2: { label: "Practicing", pct: 68 },
  3: { label: "Comfortable", pct: 88 },
};

export const projects = [
  {
    num: "01",
    title: "Reliability Timeline App",
    category: "Internal Tooling",
    description:
      "A Streamlit tool that auto-generates reliability test timelines from a start date and fixed turnaround time per subprocess. Exports schedules and highlights key milestones, replacing hours of manual spreadsheet work.",
    stack: ["Python", "Streamlit", "Pandas"],
    image: "/assets/work/thumb2.png",
    live: "https://mmp-gq-ops-reliability-timeline-app.streamlit.app/",
    github: "https://github.com/alipkicen/reliability-timeline-app",
    featured: true,
  },
  {
    num: "02",
    title: "Stock Price Prediction (LSTM)",
    category: "Machine Learning",
    description:
      "End-to-end Python project forecasting stock closing prices with an LSTM model. Covers preprocessing, train/validation split, scaling, and evaluation with plots. Built to actually understand time-series modeling, not just run a notebook.",
    stack: ["Python", "TensorFlow", "Pandas", "NumPy", "scikit-learn"],
    image: "/assets/work/prediction_plot.png",
    live: "",
    github: "https://github.com/alipkicen/stock-market-prediction-ai",
    featured: true,
  },
  {
    num: "03",
    title: "This Portfolio",
    category: "Web",
    description:
      "A from-scratch personal site built with Next.js, Tailwind, and Framer Motion. Single-page, scroll-driven, and fully responsive, designed to read like an engineer, not a template.",
    stack: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    image: "/assets/work/thumb1.png",
    live: "https://krishan-portfolio-tau.vercel.app",
    github: "https://github.com/alipkicen/my-portfolio",
    featured: false,
  },
];

export const techLinks = {
  "Next.js": "https://nextjs.org/",
  React: "https://react.dev/",
  "Tailwind CSS": "https://tailwindcss.com/",
  "Framer Motion": "https://www.framer.com/motion/",
  Python: "https://www.python.org/",
  Streamlit: "https://streamlit.io/",
  Pandas: "https://pandas.pydata.org/",
  NumPy: "https://numpy.org/",
  TensorFlow: "https://www.tensorflow.org/",
  "scikit-learn": "https://scikit-learn.org/",
  "Node.js": "https://nodejs.org/",
  Git: "https://git-scm.com/",
  Vercel: "https://vercel.com/",
  SQL: "https://www.postgresql.org/",
  "HTML / CSS": "https://developer.mozilla.org/",
};

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Work", href: "#work" },
  { name: "Contact", href: "#contact" },
];
