# Franc Sant Alcaide — Developer Portfolio (2026)

A minimalist, technical, and professional developer portfolio designed for **Franc Sant Alcaide**, 4th Year BSIT student at Quezon City University specializing in **UI/UX Design**, **Frontend Development**, and **Foundational IT Support**.

Inspired by the design aesthetics and technical presentation of [Ali Hamza's Portfolio](https://alihamza-fawn.vercel.app/), customized with Franc's authentic identity, CV history, and real-world project case studies.

---

## 🎨 Visual Design Direction & Palette

- **Primary Background:** Deep Void Charcoal (`#08090C`)
- **Secondary Background:** Technical Slate Charcoal (`#0E1015`)
- **Card Surfaces:** Dark Charcoal with subtle elevation (`#12141B`, hover: `#171922`)
- **Primary Text:** Crisp Off-White (`#F4F4F6`)
- **Secondary Text:** Muted Slate Gray (`#9CA3AF`)
- **Muted Text / Counters:** Neutral Gray (`#6B7280`)
- **Accent Color:** Restrained Emerald Green (`#10B981`, hover: `#059669`)
- **Borders:** Thin, low-contrast dark borders (`#1E212A`, elevated: `#292D3A`)
- **Typography:** [Inter](https://fonts.google.com/specimen/Inter) for clean, readable headings & body, paired with [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) for tags, metrics, and developer HUD elements.

---

## 📂 Project Architecture

```text
PORTFOLIO/
├── index.html                        # Main semantic HTML5 portfolio document
├── README.md                         # Project documentation and customization guide
├── css/
│   └── style.css                     # Dark charcoal design tokens, layout grid & responsive rules
├── js/
│   └── main.js                       # Sticky header, section tracking, modals, honest email client dispatcher, live clock
└── assets/
    ├── favicon.svg                   # Minimalist dark monogram favicon (FSA + emerald dot)
    └── images/
        ├── project-sheessentials.svg # Dark theme UI/UX Mockup: SheEssentials HR Payroll Management System
        ├── project-merchmart.svg     # Dark theme UI/UX Mockup: QCU MerchMart E-Commerce System
        └── project-iconify.svg       # Dark theme Visual Assets Mockup: TikTok Live Stream Graphics
```

---

## ⚡ Core Sections & Highlights

1. **Navigation Bar:**
   - Wordmark: `Franc Sant Alcaide · Developer Portfolio`
   - Navigation links: `Home`, `Services`, `About`, `Skills`, `Projects`, `Experience`, `Contact`.
   - Subtle active state indicator on scroll.
   - Responsive mobile drawer menu.

2. **Hero Section:**
   - Background watermark: `2026`.
   - Intro label: `DEVELOPER PORTFOLIO · 2026`.
   - Heading: `Hi, I'm Franc Sant Alcaide.`
   - Supporting headline: `Developer focused on building thoughtful, functional, and user-friendly digital experiences.`
   - Supporting copy: `I'm continuously developing my skills in web development, exploring new technologies, and building projects that turn ideas into practical solutions.`
   - CTAs: `View My Projects`, `Get In Touch`, and `Download Resume`.
   - Status Indicator: `Available for OJT & Junior Opportunities` with glowing emerald dot.
   - Developer HUD Card: Live tech feed ticker, `dev.environment` status, monogram stage, and key stats (`4th Year`, `3 Real Projects`, `4 Seminars`, `100% OJT Ready`).

3. **What I Work On (Services & Focus):**
   - `01`: `UI/UX & Wireframing` (Figma user flows, interactive prototypes, design systems)
   - `02`: `Responsive UI Implementation` (Semantic HTML, modern CSS, mobile-first design)
   - `03`: `Graphic Design & Digital Assets` (TikTok Live broadcast overlays, promotional assets)
   - `04`: `IT Support & System Setup` (Diagnostics, hardware maintenance, software configuration)

4. **About Me:**
   - Two-column layout with authentic personal introduction, development interests, methodical problem-solving philosophy, and Quezon City University higher education background.
   - Core competencies sidebar highlighting practical strengths.

5. **Technical Skills:**
   - Clean, text-based categories without arbitrary percentages or progress bars:
     - Frontend Development
     - UI/UX Designing
     - Graphic Designing
     - IT Support & Workflow

6. **Featured Projects:**
   - **SheEssentials HR Payroll Management System (2026)** — Enterprise SaaS UI/UX Case Study.
   - **QCU MerchMart — E-Commerce System for QCU Co-Op (2024)** — University Co-Op E-commerce platform.
   - **TikTok Live Stream Visual Identity & Overlays — Iconify (2024)** — Livestream broadcast branding & overlays.
   - Includes interactive quick-view case study modals with deep dive objectives and tech stacks.

7. **Experience & Education:**
   - Work history at Iconify (Contractual, 2024) and Inspiro Relia, Inc. (Seasonal, 2022-2023).
   - Higher Education at Quezon City University (4th Year BSIT).
   - Certified Trainings & Seminars (Cyberspace Ethics, Ignite Summit, CCNA Technical Seminar, Cybersecurity).

8. **Contact & Footer:**
   - Direct Email (`francalcaide1@gmail.com`) with instant clipboard copy.
   - Direct Phone (`(+63) 970-389-1041`) with one-tap call.
   - Live Philippine Time (`UTC+8`) clock indicator.
   - Transparent client-side contact dispatcher that formats and opens native email clients directly without pretending an unconfigured backend sent an email.

---

---

## 🌐 Vercel.app Live Production Links

All portfolio assets and case studies are mapped to clean `.vercel.app` domains:

| Component | Production URL | Description |
| :--- | :--- | :--- |
| **Portfolio Website** | [`https://franc-alcaide.vercel.app`](https://franc-alcaide.vercel.app) | Main developer portfolio website |
| **Project 01 (SheEssentials)** | [`https://she-essentials.vercel.app`](https://she-essentials.vercel.app) | Enterprise HR Payroll System |
| **Project 02 (QCU MerchMart)** | [`https://qcu-merchmart.vercel.app`](https://qcu-merchmart.vercel.app) | University E-Commerce Platform |
| **Project 03 (Iconify Stream)** | [`https://iconify-stream.vercel.app`](https://iconify-stream.vercel.app) | TikTok Live Stream Overlays & Assets |

---

## 🚀 How to View Locally & Deploy to Vercel

### 1. View Locally
Simply double-click [index.html](file:///c:/Users/ACER/Documents/PORTFOLIO/index.html) in your file explorer or open it in any browser:
```text
file:///c:/Users/ACER/Documents/PORTFOLIO/index.html
```
No build tools, compilation, or npm packages are required.

### 2. Deploy to Vercel (Get Your Live `.vercel.app` Domain)

#### Option A: Via GitHub (Recommended)
1. Initialize git and push this folder to your GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: redesign developer portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your `portfolio` repository.
4. Leave the Framework Preset as **Other** (Root directory `./`).
5. Click **Deploy**. Vercel will immediately assign your live domain:
   ```text
   https://franc-alcaide.vercel.app (or your custom project name)
   ```

#### Option B: Via Vercel CLI (Instant from Terminal)
1. Run:
   ```bash
   npx vercel
   ```
2. Follow the 3 short prompts and your site will be live instantly with a `.vercel.app` link.
