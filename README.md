# MD Akeel — Cinematic Portfolio (Dark Luxury Edition)

A high-performance, dark luxury cinematic portfolio engineered for **MD Akeel**, B.Tech CSE (AI & ML) student at Lloyd Institute of Engineering & Technology, Greater Noida (AKTU), batch 2026–27.

Designed specifically to impress recruiters, senior engineering managers, and clients with an unforgettable first impression.

---

## ✦ Design Aesthetics & Direction

- **Palette**: Near-black void background (`#07090B`), deep charcoal layers (`#0D1117`, `#121720`), cold teal/steel-blue ambient spotlight glow (`#9FC4D0`), and fine champagne-gold hairlines (`#C9A96A`).
- **Typography**: 
  - **Headlines**: *Cormorant Garamond* (Google Fonts editorial serif).
  - **Body / Nav**: *Inter* & *Space Grotesk*.
  - **Code / Metrics**: *JetBrains Mono*.
- **Atmosphere**: Procedural drifting volumetric dust canvas, subtle film grain, soft edge vignette.
- **Motion**: Weighted luxury easing (`cubic-bezier(0.22, 1, 0.36, 1)`) powered by Lenis smooth scrolling.

---

## ✦ Tech Stack

- **Framework**: Vite + React 19 + TypeScript
- **Styling**: Tailwind CSS + Custom Dark Luxury Utilities
- **3D Graphics**: Three.js (Procedural 3D AI Neural Core with node synapses, audio pulsing, and mouse parallax + 360° Drag-to-Rotate device mockup)
- **Smooth Scroll**: Lenis smooth scrolling with anchor link interpolation
- **Voice Intelligence**: Web Speech API with natural voice selection & real-time Web Audio API waveform visualizer
- **Icons**: Lucide Icons + Custom SVG Brand Badges
- **Micro-interactions**: Canvas Confetti celebration, magnetic custom cursor

---

## ✦ Architecture & Sections

1. **Preloader**: Minimal lettermark *MD AKEEL* fading in with fine gold line progress (0 → 100%).
2. **Hero (Genesis)**: 3D AI NEURAL CORE slowly rotating in dark fog, mouse parallax tilt, serif headline: *"Building intelligence, one model at a time."*, CTAs, and animated scroll cue.
3. **About ("Born of Curiosity")**: Ghost-echo quote *"Some things are made to disappear into the dark — except what is built to endure."*, full academic narrative, profile photo card, and verified metrics.
4. **The Stack ("Deconstructed by Design")**: Interactive 6-layer computing stack (Python Core, AI/ML, Data Science, Web, Databases, Toolchain) with live progress bars, notes, and neural core highlight trigger.
5. **360° Interactive Showcase**: Real-time 3D laptop/workstation viewer displaying **AK Gym Management System** & **Video Snap AI** UI. Free drag-to-rotate with inertia, auto-rotate toggle, and case-study links.
6. **The Work (Selected Projects)**: Large cinematic project cards with problem → solution → result breakdowns.
   - **AK Gym Management System**: Featured B.Tech mini project supervised by Dr. Devendra (PHP, MySQL, Razorpay, QR attendance).
   - **Video Snap AI**: Python generative video pipeline.
   - **Clinical Diagnostic Risk Predictor**: 94.2% accuracy Random Forest classifier.
   - **Neural Edge Vision**: Real-time OpenCV / PyTorch stream detector.
   - **GitHub Live API Archive**: Automatically queries `https://api.github.com/users/Akeel3040/repos` with keyword search and language filters.
7. **AI Voice Guide**: Floating luxury audio dock *"Hear My Story"*. Real-time equalizer waveform bars; pulses the 3D Neural Core in sync with voice speech beats. Never autoplays.
8. **Academic & Technical Journey**: Fine gold vertical timeline of B.Tech CSE (AIML) at Lloyd Institute (AKTU) and CodeWithHarry certifications with direct PDF download links.
9. **Contact ("Reserve a Conversation")**: Inquiry form with real-time field validation, email copy button, social links, resume PDF download, and celebration confetti.
10. **Footer**: Real-time Indian Standard Time (IST) clock, system status, and back-to-top button.

---

## ✦ Customization Guide (`src/data.ts`)

Everything on this site is driven by a single source of truth: [`src/data.ts`](file:///Users/mohammadakeel/akeel-portfolio/src/data.ts).

### 1. Update Personal & Social Links
Open `src/data.ts` and modify the `PERSONAL_INFO` object:
```ts
export const PERSONAL_INFO = {
  name: "MD Akeel",
  fullName: "Mohammad Akeel",
  email: "akeelkhan3499@gmail.com",
  phone: "+91 79837 17510",
  whatsappUrl: "https://wa.me/917983717510",
  githubUsername: "Akeel3040", // Set your GitHub username here to auto-fetch your public repos
  githubUrl: "https://github.com/Akeel3040",
  linkedinUrl: "https://www.linkedin.com/in/m-akeel/",
  resumePdf: "/Mohammad-Akeel-Resume.pdf", // Place your updated PDF in the /public folder
  profileImage: "/Akeel-Portfolio.jpg",   // Place your updated photo in the /public folder
  ...
};
```

### 2. Update Voice Intro Script
Edit `PERSONAL_INFO.voiceScript` in `src/data.ts`:
```ts
voiceScript:
  "Hi, I'm Akeel, an AI and machine learning engineer in the making. I build intelligent, practical products, from gym management systems to machine learning models. Scroll down to see my work."
```

### 3. Add or Modify Projects
Add or edit objects in `FEATURED_PROJECTS` array in `src/data.ts`. Each project includes:
- `title`, `tagline`, `description`
- `roleBadge` (e.g. `"B.Tech Mini Project"`)
- `supervisor` (e.g. `"Dr. Devendra"`)
- `tags` (e.g. `["PHP", "MySQL", "Razorpay"]`)
- `liveUrl`, `repoUrl`
- `caseStudy`: structured `challenge`, `architecture`, `results`, and `deliverables`.

### 4. Updating Certificates & Journey
Edit the `JOURNEY` array in `src/data.ts` to add new courses, CGPA updates, or certifications. Certificate PDFs should be placed in `public/certificates/`.

---

## ✦ Development & Deployment

### Local Development
```bash
# Install dependencies
npm install

# Start local dev server
npm run dev
```

### Production Build
```bash
# Build optimized bundle
npm run build

# Preview build locally
npm run preview
```

### Deploy to Vercel
1. Push your repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Framework Preset: **Vite**.
4. Build Command: `npm run build`.
5. Output Directory: `dist`.
6. Click **Deploy**.

### Deploy to Netlify
1. Go to [netlify.com](https://netlify.com) and link your GitHub repository.
2. Build command: `npm run build`.
3. Publish directory: `dist`.
4. Click **Deploy Site**.

### Deploy to GitHub Pages
```bash
npm run deploy
```

---

## ✦ File Structure

```
akeel-portfolio/
├── public/
│   ├── Akeel-Portfolio.jpg             # Profile photograph
│   ├── Mohammad-Akeel-Resume.pdf       # Curriculum Vitae
│   └── certificates/                   # PDF credentials
│       ├── data-science-certificate.pdf
│       └── python-bootcamp-certificate.pdf
├── src/
│   ├── components/
│   │   ├── AboutSection.tsx            # Origin narrative & profile card
│   │   ├── BackgroundFog.tsx           # Ambient drifting dust & fog canvas
│   │   ├── CaseStudyModal.tsx          # Full-screen architectural deep-dive
│   │   ├── ContactSection.tsx          # Validated inquiry form & socials
│   │   ├── CustomCursor.tsx            # Magnetic champagne cursor
│   │   ├── Footer.tsx                  # Real-time IST clock & credits
│   │   ├── GitHubArchive.tsx           # Auto-fetching GitHub REST API grid
│   │   ├── Hero.tsx                    # Full-screen editorial hero
│   │   ├── Icons.tsx                   # Precision brand SVG components
│   │   ├── JourneySection.tsx          # Minimal vertical timeline & certificates
│   │   ├── Navbar.tsx                  # Minimal sticky header & mobile drawer
│   │   ├── NeuralCore3D.tsx            # Three.js 3D AI Neural Core
│   │   ├── Preloader.tsx               # Minimal lettermark loading sequence
│   │   ├── ScrollProgress.tsx          # Hairline top progress & side ruler
│   │   ├── SelectedProjects.tsx        # Flagship cinematic project cards
│   │   ├── Showcase360.tsx             # 360° interactive 3D device viewer
│   │   ├── SkillsDeconstructed.tsx     # 6-layer stack inspector & meters
│   │   └── VoiceGuide.tsx              # AI Voice guide & audio visualizer
│   ├── hooks/
│   │   ├── useLenis.ts                 # Smooth scroll controller
│   │   └── useVoiceSynthesizer.ts      # Web Speech + Web Audio synthesizer
│   ├── data.ts                         # Master single source of truth
│   ├── types.ts                        # TypeScript interfaces
│   ├── App.tsx                         # Master page composition
│   ├── main.tsx                        # Entrypoint
│   └── index.css                       # Dark luxury styling & fonts
├── index.html                          # Meta tags, SEO & fonts
├── tailwind.config.js                  # Color palette & typographic scale
├── vite.config.js                      # Chunking optimization & build setup
└── package.json
```

---

*Designed & Engineered with precision for MD Akeel · 2026*
