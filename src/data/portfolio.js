// Single source of truth for every piece of content on the site.
// Update values here — the components render straight from this file.

export const profile = {
  name: "Mohammad Akeel",
  title: "Data Science Engineer & Full-Stack Web Developer",
  tagline: "Python • React.js • Machine Learning • REST APIs",
  location: "Uttar Pradesh, India",
  email: "akeelkhan3499@gmail.com",
  phone: "+91-7983717510",
  photo: "/Akeel-Portfolio.jpg",
  resume: "/Mohammad-Akeel-Resume.pdf",
  available: "Open to entry-level roles & freelance projects",
  summary:
    "Aspiring Data Science Engineer and Full-Stack Web Developer with a strong academic background in Artificial Intelligence & Machine Learning. I build scalable web applications and AI-driven solutions through hands-on projects — proficient in Python, JavaScript and modern frameworks like React.js, and comfortable integrating frontend with backend systems.",
  // Spoken by the Web Speech API when the visitor presses "Listen to my intro".
  voiceIntro:
    "Hi, I'm Mohammad Akeel — a Data Science Engineer and Full-Stack Web Developer from Uttar Pradesh, India. " +
    "I'm in my final year of a B.Tech in Artificial Intelligence and Machine Learning. " +
    "I work with Python, JavaScript and React to build scalable web applications and AI-driven solutions. " +
    "Recently I built A K Gym, a complete gym management system with role-based authentication, QR code access and payments, " +
    "and Video Snap A I, an artificial intelligence powered video generator. " +
    "I'm certified in data science and Python, and I'm currently open to entry-level roles and freelance projects. " +
    "Scroll down to explore my work, or get in touch — I usually reply within twenty four hours. Thanks for visiting.",
};

export const socials = {
  github: "https://github.com/Akeel3040",
  linkedin: "https://www.linkedin.com/in/m-akeel/",
  email: "mailto:akeelkhan3499@gmail.com",
  gmail:
    "https://mail.google.com/mail/?view=cm&fs=1&to=akeelkhan3499@gmail.com",
  whatsapp: "https://wa.me/917983717510",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: "3+", label: "Featured Projects" },
  { value: "2", label: "Certifications" },
  { value: "5+", label: "Languages" },
  { value: "B.Tech", label: "AI & ML" },
];

export const projects = [
  {
    title: "AK Gym — Gym Management System",
    subtitle: "Full-Stack Web Application",
    description:
      "A modern commercial gym management system with role-based authentication, membership management, attendance tracking, QR code access, staff and visitor management, payment integration and an admin dashboard.",
    highlights: [
      "Role-based authentication for members, staff and admins",
      "QR code check-in with live attendance tracking",
      "Membership plans, payments and invoice records",
    ],
    tags: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
    liveUrl: "https://ak-gym.lovestoblog.com/",
    repoUrl: "https://github.com/Akeel3040/AK-Gym",
    icon: "🏋️",
    accent: "from-cyan-500 to-blue-600",
  },
  {
    title: "AK Gym — Admin Dashboard",
    subtitle: "Administration Module",
    description:
      "The secure admin control panel behind AK Gym. Handles member approvals, staff records, plan configuration, payment reconciliation and attendance reports. Runs locally as part of the AK Gym stack (admin/login.php).",
    highlights: [
      "Protected admin login with session handling",
      "Member, staff and visitor record management",
      "Payment reconciliation and attendance reporting",
    ],
    tags: ["PHP", "MySQL", "Admin Panel", "Sessions"],
    liveUrl: null,
    repoUrl: "https://github.com/Akeel3040/AK-Gym",
    badge: "Local demo",
    icon: "🛡️",
    accent: "from-violet-500 to-fuchsia-600",
  },
  {
    title: "Video Snap AI",
    subtitle: "AI / Data Science Project",
    description:
      "An AI-powered reel and video generator that automates content creation. Applies data preprocessing and model integration to turn prompts and source material into short-form video output.",
    highlights: [
      "AI-based video and reel generation pipeline",
      "Automated content creation workflow",
      "Data preprocessing and model integration",
    ],
    tags: ["Python", "AI", "Machine Learning", "CSS"],
    liveUrl: null,
    repoUrl: "https://github.com/Akeel3040/Video-Snap-AI",
    icon: "🎬",
    accent: "from-amber-500 to-rose-600",
  },
];

export const skills = [
  {
    category: "Languages",
    icon: "💻",
    items: ["Python", "Java", "C++", "C", "JavaScript"],
  },
  {
    category: "Web Technologies",
    icon: "🌐",
    items: ["React.js", "HTML", "CSS", "Tailwind CSS", "REST APIs"],
  },
  {
    category: "Data & AI",
    icon: "🤖",
    items: [
      "Data Science",
      "Machine Learning",
      "Data Structures",
      "Data Preprocessing",
    ],
  },
  {
    category: "Databases",
    icon: "🗄️",
    items: ["MongoDB", "SQL", "MySQL"],
  },
  {
    category: "Tools",
    icon: "🛠️",
    items: ["Git", "GitHub", "VS Code", "Anaconda", "MS Excel"],
  },
];

export const certificates = [
  {
    title: "The Ultimate Job Ready Data Science Course",
    issuer: "CodeWithHarry",
    date: "29 May 2026",
    credentialId: "CWH-THE-ULTIMATE-JOB-READY-DATA-SCIENCE-COURSE-8BMW4RIY",
    file: "/certificates/data-science-certificate.pdf",
    icon: "📊",
    accent: "from-cyan-500 to-teal-600",
    skills: ["Python", "Pandas", "NumPy", "Machine Learning"],
  },
  {
    title: "Complete 2026 Python Bootcamp: Learn Python from Scratch",
    issuer: "CodeWithHarry",
    date: "9 March 2026",
    credentialId: "CWH-COMPLETE-PYTHON-BOOTCAMP-LEARN-PYTHON-FROM-SCRATCH-8BMW4RIY",
    file: "/certificates/python-bootcamp-certificate.pdf",
    icon: "🐍",
    accent: "from-blue-500 to-indigo-600",
    skills: ["Python", "OOP", "Problem Solving"],
  },
];

export const services = [
  {
    title: "AI Chatbots & Automation",
    icon: "🤖",
    desc: "Intelligent chatbots and automation systems that streamline business processes and improve day-to-day efficiency.",
  },
  {
    title: "Web & API Integration",
    icon: "🌐",
    desc: "Full-stack website builds and API connections that tie frontend and backend into one seamless product.",
  },
  {
    title: "Code Review & Optimization",
    icon: "🛠️",
    desc: "Debugging, performance tuning and refactoring for cleaner, faster and more maintainable code.",
  },
  {
    title: "Data Science Solutions",
    icon: "📊",
    desc: "Data preprocessing, analysis and machine learning models that turn raw data into practical decisions.",
  },
];

export const education = [
  {
    degree: "B.Tech in Artificial Intelligence & Machine Learning",
    institute: "Dr. A.P.J. Abdul Kalam Technical University, India",
    detail: "CGPA 6.5 · Final Year",
    icon: "🎓",
  },
  {
    degree: "Class 12 & Class 10",
    institute: "CBSE Board, India",
    detail: "Science stream",
    icon: "🏫",
  },
];
