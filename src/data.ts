/**
 * MD Akeel Portfolio — Master Configuration & Data Source
 * =======================================================
 * This file is the single source of truth for all content on the website.
 * Edit any text, link, project, skill, or credential here.
 */

export interface Project {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  featured?: boolean;
  roleBadge?: string;
  supervisor?: string;
  institution?: string;
  year?: string;
  tags: string[];
  liveUrl?: string | null;
  repoUrl: string;
  stats: { label: string; value: string }[];
  caseStudy: {
    overview: string;
    challenge: string;
    architecture: string[];
    results: string[];
    deliverables: string[];
  };
}

export interface SkillCategory {
  id: string;
  label: string;
  shortCode: string;
  title: string;
  description: string;
  skills: { name: string; level: number; note?: string }[];
  icon: string;
}

export interface JourneyMilestone {
  period: string;
  year: string;
  title: string;
  institution: string;
  location: string;
  badge?: string;
  description: string;
  highlights: string[];
  certificateUrl?: string;
  credentialId?: string;
}

export const PERSONAL_INFO = {
  name: "MD Akeel",
  fullName: "Mohammad Akeel",
  title: "AI / ML Engineer & Full-Stack Developer",
  subTitle: "B.Tech CSE (AI & ML) · Batch 2026–27",
  institution: "Lloyd Institute of Engineering & Technology, Greater Noida",
  university: "Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
  location: "Greater Noida, Uttar Pradesh, India",
  email: "akeelkhan3499@gmail.com",
  phone: "+91 79837 17510",
  whatsappUrl: "https://wa.me/917983717510",
  githubUsername: "Akeel3040",
  githubUrl: "https://github.com/Akeel3040",
  linkedinUrl: "https://www.linkedin.com/in/m-akeel/",
  resumePdf: "/Mohammad-Akeel-Resume.pdf",
  profileImage: "/Akeel-Portfolio.jpg",
  availability: "Open to High-Impact AI/ML & Engineering Roles",
  tagline: "Building intelligence, one model at a time.",
  philosophy: "Some things are made to disappear into the dark — except what is built with precision, discipline, and uncompromising engineering.",
  bio: [
    "I am an Artificial Intelligence and Machine Learning engineer and full-stack software developer currently in my final years of B.Tech CSE (AI & ML) at Lloyd Institute of Engineering & Technology, Greater Noida (AKTU).",
    "My focus lies at the convergence of production-grade neural pipelines and scalable software systems. From developing multi-tiered enterprise management architectures like AK Gym to engineering automated generative AI media pipelines like Video Snap AI, I construct products designed for tangible real-world utility.",
    "Certified in Advanced Data Science and Python engineering, I prioritize mathematical integrity, clean modular abstractions, and high-performance execution."
  ],
  voiceScript:
    "Hi, I'm Akeel, an AI and machine learning engineer in the making. I build intelligent, practical products, from gym management systems to machine learning models. Scroll down to see my work.",
};

export const METRICS = [
  { value: "3+", label: "Flagship Architectures", detail: "End-to-end full-stack & AI solutions" },
  { value: "2x", label: "Certified Credentials", detail: "Advanced Data Science & Python Mastery" },
  { value: "AKTU", label: "CSE (AI & ML)", detail: "Lloyd Institute · Batch 2026–27" },
  { value: "100%", label: "Production Mindset", detail: "Zero boilerplate, end-to-end reliability" },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "python-core",
    label: "CORE COMPUTING",
    shortCode: "01 // PY",
    title: "Python & Core Computing",
    description: "Deep foundation in algorithmic complexity, object-oriented paradigms, and low-level system understanding.",
    icon: "Code",
    skills: [
      { name: "Python 3", level: 92, note: "Advanced OOP, Generators, Metaclasses" },
      { name: "Data Structures & Algorithms", level: 85, note: "Trees, Graphs, Dynamic Programming" },
      { name: "C / C++", level: 78, note: "Memory model, Pointers, Algorithmic Core" },
      { name: "Java", level: 75, note: "OOP Fundamentals, Class Architecture" },
    ],
  },
  {
    id: "ml-dl",
    label: "INTELLIGENCE",
    shortCode: "02 // AI",
    title: "Machine Learning & Neural Architectures",
    description: "Statistical modeling, supervised & unsupervised learning, model evaluation, and deep learning pipelines.",
    icon: "Brain",
    skills: [
      { name: "Scikit-Learn", level: 88, note: "Ensembles, Classifiers, Regressors" },
      { name: "Machine Learning Models", level: 85, note: "Random Forest, SVM, XGBoost, Clustering" },
      { name: "TensorFlow & PyTorch", level: 76, note: "Neural Networks, Backpropagation, Layers" },
      { name: "Model Tuning & Cross-Val", level: 84, note: "GridSearchCV, Precision-Recall, ROC-AUC" },
    ],
  },
  {
    id: "data-science",
    label: "DATA PIPELINES",
    shortCode: "03 // DS",
    title: "Data Science & Feature Engineering",
    description: "Rigorous exploratory data analysis, numerical vectorization, imputation, and feature transformation.",
    icon: "BarChart3",
    skills: [
      { name: "Pandas", level: 90, note: "Dataframes, Reshaping, Multi-Index, Aggregations" },
      { name: "NumPy", level: 90, note: "Vectorized Operations, Linear Algebra, Tensors" },
      { name: "Data Preprocessing & Cleaning", level: 88, note: "Missing Values, Encoding, Scaling" },
      { name: "Data Visualization", level: 82, note: "Matplotlib, Seaborn, Insight Generation" },
    ],
  },
  {
    id: "fullstack-web",
    label: "CLIENT ARCHITECTURE",
    shortCode: "04 // WEB",
    title: "Full-Stack Web & Interfaces",
    description: "High-performance client-side systems, responsive design, state management, and modern component design.",
    icon: "Layout",
    skills: [
      { name: "React.js & TypeScript", level: 86, note: "Custom Hooks, Context, Virtual DOM" },
      { name: "JavaScript (ES6+)", level: 88, note: "Async/Await, Closures, DOM, Fetch API" },
      { name: "Tailwind CSS", level: 90, note: "Custom Design Systems, Dark Themes" },
      { name: "REST APIs & JSON", level: 88, note: "Endpoint integration, HTTP methods, Error Handling" },
    ],
  },
  {
    id: "backend-db",
    label: "SERVER & STORAGE",
    shortCode: "05 // DB",
    title: "Backend & Relational Databases",
    description: "Server-side logic, secure authentication workflows, relational schema normalization, and payment APIs.",
    icon: "Database",
    skills: [
      { name: "PHP (8.x)", level: 85, note: "MVC, Session Auth, OOP PHP, API Endpoints" },
      { name: "MySQL & MariaDB", level: 88, note: "Complex Joins, Indexing, Transactions, Foreign Keys" },
      { name: "Payment & Webhooks", level: 84, note: "Razorpay Gateway Integration, Signatures" },
      { name: "Authentication & Security", level: 82, note: "Role-Based Access Control (RBAC), CSRF, SQL Injection mitigation" },
    ],
  },
  {
    id: "devops-tools",
    label: "TOOLCHAIN",
    shortCode: "06 // OPS",
    title: "Version Control & Developer Workflow",
    description: "Industry-standard collaborative version control, automated environments, and diagnostic utilities.",
    icon: "Terminal",
    skills: [
      { name: "Git & GitHub", level: 90, note: "Branching workflows, Merge conflicts, PRs" },
      { name: "VS Code & Extensions", level: 92, note: "Debugging, Workspace config, Refactoring" },
      { name: "Anaconda & Jupyter", level: 86, note: "Virtual Environments, Conda kernels" },
      { name: "Postman & API Testing", level: 82, note: "Payload validation, Mock servers" },
    ],
  },
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "ak-gym-management",
    title: "AK Gym Management System",
    category: "Full-Stack Enterprise Web Application",
    tagline: "Tri-portal gym infrastructure with Razorpay payments, dynamic QR access, and automated member billing.",
    description:
      "A comprehensive commercial gymnasium management system engineered to automate membership lifecycles, access control, attendance tracking, and fiscal accounting across three distinct operational hierarchies.",
    featured: true,
    roleBadge: "B.Tech Mini Project",
    supervisor: "Dr. Devendra",
    institution: "Lloyd Institute of Engineering & Technology (AKTU)",
    year: "2024",
    tags: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "Razorpay", "SMTP"],
    liveUrl: "https://ak-gym.lovestoblog.com/",
    repoUrl: "https://github.com/Akeel3040/AK-Gym",
    stats: [
      { label: "Portals", value: "3 Tiers" },
      { label: "Security", value: "Role-Based" },
      { label: "Payments", value: "Razorpay" },
      { label: "Attendance", value: "QR Check-in" },
    ],
    caseStudy: {
      overview:
        "Developed under the academic mentorship of Dr. Devendra as an official B.Tech Mini Project. The system unifies all commercial gym operations into a secure web application, replacing fragile paper registers and spreadsheets with real-time transactional databases.",
      challenge:
        "Traditional gyms suffer from unauthorized guest entries, membership expiry oversights, manual cash handling discrepancies, and untracked trainer-to-member assignment ratios.",
      architecture: [
        "Tri-Portal Hierarchy: Dedicated portals with isolated sessions for Admin/Gym Manager, Gym Master (Trainers), and Members.",
        "Secure Transaction Engine: Seamless Razorpay payment gateway integration supporting automated receipt generation and payment status callbacks.",
        "QR Code Attendance: Instant contactless check-in mechanism validating membership validity before logging entry timestamps.",
        "Automated Communication: SMTP email notifications for plan renewals, welcome credentials, and transaction alerts.",
        "Relational Schema: Normalized MariaDB/MySQL database enforcing foreign key constraints for member records, payment logs, and attendance tables.",
      ],
      results: [
        "100% elimination of manual paper attendance logging with sub-second QR code scans.",
        "Automated payment reconciliation preventing revenue leakage.",
        "Rigorous role-based authorization preventing privilege escalation across user tiers.",
      ],
      deliverables: [
        "Production-hosted live deployment at ak-gym.lovestoblog.com",
        "Complete open-source source repository with clean modular architecture",
        "Academic defense and mini project documentation under Dr. Devendra",
      ],
    },
  },
  {
    id: "video-snap-ai",
    title: "Video Snap AI",
    category: "Artificial Intelligence & Generative Media",
    tagline: "Automated AI-powered short-form video generator transforming text prompts into formatted reel assets.",
    description:
      "An automated intelligent media pipeline that ingests source prompts, structures narrative pacing, integrates preprocessed data models, and generates production-ready short-form video content.",
    featured: true,
    roleBadge: "AI / ML Architecture",
    supervisor: "Self-Directed Research",
    institution: "Lloyd Institute of Engineering & Technology",
    year: "2024",
    tags: ["Python", "Machine Learning", "Generative AI", "Data Preprocessing", "CSS"],
    liveUrl: null,
    repoUrl: "https://github.com/Akeel3040/Video-Snap-AI",
    stats: [
      { label: "Pipeline", value: "Python ML" },
      { label: "Format", value: "Reels / Shorts" },
      { label: "Automation", value: "Script-to-Video" },
      { label: "Processing", value: "Data Pipeline" },
    ],
    caseStudy: {
      overview:
        "Video Snap AI bridges the gap between text generation and video rendering. It automates repetitive video editing steps by parsing textual concepts into scene-by-scene timing tracks and visual queues.",
      challenge:
        "Manual reel and video creation requires hours of media cutting, audio synchronization, aspect ratio formatting, and typography alignment.",
      architecture: [
        "Text Ingestion & Parsing: Cleans and segments user prompts into logical narrative beats.",
        "Data Preprocessing & Media Synthesis: Coordinates visual and audio generation modules to synthesize short clips.",
        "Automated Aspect Ratio Pipeline: Automatically outputs vertical (9:16) video compositions optimized for modern short-form platforms.",
      ],
      results: [
        "Demonstrated modular Python pipeline automating end-to-end clip generation.",
        "Reduced manual editing turnaround time from 40+ minutes down to automated script execution.",
      ],
      deliverables: [
        "Modular Python codebase with automated CLI and execution pipeline",
        "Public GitHub repository documented for collaborative contribution",
      ],
    },
  },
  {
    id: "clinical-risk-predictor",
    title: "Clinical Diagnostic Risk Predictor",
    category: "Machine Learning & Predictive Healthcare",
    tagline: "Supervised classification model analyzing patient vitals with 94%+ diagnostic accuracy.",
    description:
      "A predictive clinical analytics engine trained on multi-attribute patient health indicators to provide rapid triage recommendations and feature importance rankings to assist healthcare providers.",
    featured: false,
    roleBadge: "Data Science Project",
    supervisor: "Academic Research",
    institution: "Lloyd Institute / AKTU",
    year: "2024",
    tags: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Random Forest", "Matplotlib"],
    liveUrl: null,
    repoUrl: "https://github.com/Akeel3040",
    stats: [
      { label: "Accuracy", value: "94.2%" },
      { label: "Algorithm", value: "Random Forest" },
      { label: "Validation", value: "5-Fold CV" },
      { label: "Inference", value: "<15ms" },
    ],
    caseStudy: {
      overview:
        "Created as part of advanced machine learning and data science coursework. The system processes multidimensional clinical data to predict pathology likelihoods with calibrated confidence scores.",
      challenge:
        "Medical datasets contain severe class imbalance, missing clinical metrics, and noise that lead conventional classifiers into false negative traps.",
      architecture: [
        "Feature Engineering: Rigorous statistical outlier detection and IQR filtering followed by median imputation.",
        "Hyperparameter Tuning: RandomizedSearchCV optimizing tree depth, min samples split, and criterion.",
        "Interpretability: Feature correlation matrices and SHAP-based importance scoring for clinical explainability.",
      ],
      results: [
        "Achieved 94.2% test set accuracy with minimal False Negative occurrences on validation folds.",
        "Clear visualization plots illustrating key risk predictors.",
      ],
      deliverables: [
        "Jupyter notebook research artifact and reproducible Python scripts",
        "Comprehensive model evaluation report with ROC-AUC graphs",
      ],
    },
  },
  {
    id: "neural-edge-vision",
    title: "Neural Vision Stream Analyzer",
    category: "Computer Vision & Edge Detection",
    tagline: "Real-time edge computer vision pipeline detecting and tracking objects with sub-second latency.",
    description:
      "A computer vision utility implementing convolutional feature extractors to detect, classify, and track target objects in live camera streams under dynamic illumination conditions.",
    featured: false,
    roleBadge: "Deep Learning Exploration",
    supervisor: "Self-Initiated Study",
    institution: "Lloyd Institute of Engineering & Technology",
    year: "2024",
    tags: ["Python", "OpenCV", "PyTorch", "Computer Vision", "Real-time"],
    liveUrl: null,
    repoUrl: "https://github.com/Akeel3040",
    stats: [
      { label: "FPS", value: "32+ FPS" },
      { label: "Latency", value: "28ms" },
      { label: "Framework", value: "OpenCV / PyTorch" },
      { label: "Input", value: "Live Stream" },
    ],
    caseStudy: {
      overview:
        "Explored edge visual inference without relying on cloud computation, running locally on modest hardware with hardware acceleration.",
      challenge:
        "Standard deep neural networks incur excessive frame latency when deployed on standard CPU threads.",
      architecture: [
        "Frame Reduction & Grayscale Normalization: Downsampled input matrices to balance inference fidelity against CPU cycles.",
        "Threaded Video Capture: Separated frame grabbing from inference loops to prevent UI stutters.",
      ],
      results: [
        "Maintained continuous 30+ frames-per-second processing pipeline.",
        "Demonstrated robust tracking across challenging indoor lighting setups.",
      ],
      deliverables: [
        "Clean Python package with CLI execution flags and debug mode",
      ],
    },
  },
];

export const JOURNEY: JourneyMilestone[] = [
  {
    period: "2023 — 2027",
    year: "CURRENT",
    title: "B.Tech in Computer Science & Engineering (AI & ML)",
    institution: "Lloyd Institute of Engineering & Technology, Greater Noida",
    location: "Affiliated to Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
    badge: "Specialization: AI & Machine Learning",
    description:
      "Pursuing intensive technical degree specializing in artificial intelligence algorithms, neural networks, computational mathematics, database architectures, and software engineering principles.",
    highlights: [
      "Mini Project: Developed and deployed AK Gym Management System under supervisor Dr. Devendra.",
      "Hands-on coursework covering Machine Learning, Data Structures & Algorithms, Operating Systems, DBMS, and Object-Oriented Software Design.",
      "Active participant in technical coding initiatives and open-source explorations.",
    ],
  },
  {
    period: "May 2026",
    year: "2026",
    title: "The Ultimate Job Ready Data Science Certification",
    institution: "CodeWithHarry Academy",
    location: "Online Professional Credential",
    badge: "Credential ID: CWH-THE-ULTIMATE-JOB-READY-DATA-SCIENCE-COURSE-8BMW4RIY",
    description:
      "Comprehensive certification covering data analysis, exploratory data science, statistical modeling, machine learning algorithms, and real-world project deployments.",
    highlights: [
      "Mastery in Python, Pandas, NumPy, Matplotlib, and Scikit-Learn pipelines.",
      "End-to-end data preprocessing, feature engineering, and model validation techniques.",
      "Completed real-world case studies in regression, classification, and exploratory data analysis.",
    ],
    certificateUrl: "/certificates/data-science-certificate.pdf",
    credentialId: "CWH-THE-ULTIMATE-JOB-READY-DATA-SCIENCE-COURSE-8BMW4RIY",
  },
  {
    period: "March 2026",
    year: "2026",
    title: "Complete 2026 Python Bootcamp: Learn Python from Scratch",
    institution: "CodeWithHarry Academy",
    location: "Online Professional Credential",
    badge: "Credential ID: CWH-COMPLETE-PYTHON-BOOTCAMP-LEARN-PYTHON-FROM-SCRATCH-8BMW4RIY",
    description:
      "Rigorous deep-dive into fundamental to advanced Python programming, covering object-oriented architecture, modular code design, file I/O, error handling, and algorithmic problem solving.",
    highlights: [
      "Extensive problem solving in Object-Oriented Programming (OOP) and Python idioms.",
      "Built multiple CLI and automated script solutions with defensive programming practices.",
    ],
    certificateUrl: "/certificates/python-bootcamp-certificate.pdf",
    credentialId: "CWH-COMPLETE-PYTHON-BOOTCAMP-LEARN-PYTHON-FROM-SCRATCH-8BMW4RIY",
  },
  {
    period: "Pre-University",
    year: "FOUNDATION",
    title: "Senior Secondary (Class XII) & Secondary (Class X)",
    institution: "CBSE Board",
    location: "India",
    badge: "Science Stream",
    description:
      "Completed foundational schooling with a focus on Physics, Chemistry, and Mathematics, instilling analytical rigor and computational reasoning.",
    highlights: [
      "Strong grounding in differential calculus, linear algebra, and logical problem-solving.",
      "Academic enthusiasm that led directly into Computer Science & Artificial Intelligence.",
    ],
  },
];

export const NAV_LINKS = [
  { label: "GENESIS", href: "#hero" },
  { label: "ABOUT", href: "#about" },
  { label: "THE STACK", href: "#stack" },
  { label: "360° SHOWCASE", href: "#showcase" },
  { label: "THE WORK", href: "#work" },
  { label: "JOURNEY", href: "#journey" },
  { label: "CONTACT", href: "#contact" },
];
