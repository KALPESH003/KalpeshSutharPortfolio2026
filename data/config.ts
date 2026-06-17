export const personalInfo = {
  name: "Kalpesh K. Suthar",
  title: "Full-Stack Developer",
  education: "MSc IT",
  location: "Vadodara, Gujarat, India",
  email: "kalpeshsuthar.work247@gmail.com",
  heroHeadline: "I build full-stack systems that merge rigorous backend logic with seamless user experiences.",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/kalpesh-k-suthar-943921368/",
    github: "https://github.com/KALPESH003",
    leetcode: "https://leetcode.com/u/kalpeshksuthar003/"
  }
};

export const experienceData = [
  {
    title: "Python Developer Intern",
    subtitle: "Heliconia Solutions",
    date: "Nov 2025 — Present",
    description: "Developing and optimizing backend systems using Python. Focused on delivering scalable solutions and contributing to core architectural decisions.",
  },
  {
    title: "Web Developer",
    subtitle: "Taruna Interiors",
    date: "Nov 2025 — Feb 2026",
    description: "Built a professional, multi-page website from the ground up for the interior design firm. Handled everything from frontend architecture to Netlify deployment, MongoDB database integration, and Resend email configurations.",
  },
];

export const techStack = [
  "Python", "Java", "React", "Next.js", "MongoDB", "MySQL", "TypeScript", "Node.js", "Tailwind CSS", "Git", "Docker", "AWS", "Netlify", "Vercel", "Three.js", "Framer", "Figma", "Linux"
];

export const libraryData = [
  {
    id: 1,
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    genre: "Software Architecture",
    coverImage: "/assets/images/books/ddia.jpg",
    overlayImage: "/assets/images/books/overlays/Texture=Plain, Cover-type=Journal.png",
    introText:
      "The definitive guide to the architecture, patterns, and principles behind modern full-stack systems and scalable distributed databases.",
    themeClass: "bg-[#e01736]",
    textColor: "#f3e1c3",
  },
  {
    id: 2,
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    genre: "Psychology",
    coverImage: "/assets/images/books/thinkingfastnslow.jpg",
    overlayImage: "/assets/images/books/overlays/Texture=Plain, Cover-type=Journal.png",
    introText:
      "A masterpiece of social psychology that explores the two systems of thinking that drive our decisions and behaviors.",
    themeClass: "bg-gradient-to-tr from-[#dcd9ce] via-[#FBF9F3] to-[#e5e2d6]",
    textColor: "#ffffff",
  },
  {
    id: 3,
    title: "Refactoring: Improving the Design of Existing Code",
    author: "Martin Fowler",
    genre: "Software Engineering",
    coverImage: "/assets/images/books/refactoring.jpg",
    overlayImage: "/assets/images/books/overlays/Texture=Plain, Cover-type=Journal.png",
    introText:
      "A comprehensive guide to refactoring techniques that improve the design of existing code without changing its external behavior.",
    themeClass: "bg-gradient-to-br from-[#1a1a1a] via-[#333c3c] to-[#222222]",
    textColor: "#1c1814",
  },
  {
    id: 4,
    title: "Clean Architecture",
    author: "Robert C. Martin",
    genre: "Architecture",
    coverImage: "/assets/images/books/cleanarch.jpg",
    overlayImage: "/assets/images/books/overlays/Texture=Plain, Cover-type=Journal.png",
    introText:
      "Essential rules for core software engineering paradigms. Organizing components, cleanly managing dependency models, and establishing strict robust boundary planes.",
    themeClass: "bg-[#2C4069]",
    textColor: "#e1ecf7",
  },
];

export const projects = [
  {
    id: "01",
    sysId: "[PLT-001]",
    freq: "21.0 kHz",
    title: "Taruna Interiors",
    year: "2025",
    subtitle: "The first Advanced Portfolio for Interior Designers",
    description: "Architected and deployed a complete professional web presence for an interior design firm. Handled end-to-end development from schema design to live deployment, integrating secure lead generation and optimized asset delivery.",
    tech: ['Next.js', 'React', 'MongoDB', 'Resend API', 'Netlify'],
    link: "tarunainteriors.netlify.app",
    themeColor: "#D9C3AB",
    imageSrc: "/assets/images/projects/p1.png",
    wavePath: "M 0 10 Q 12.5 0 25 10 T 50 10 T 75 10 T 100 10 T 125 10 T 150 10 T 175 10 T 200 10 T 225 10 T 250 10 T 275 10 T 300 10 T 325 10 T 350 10 T 375 10 T 400 10"
  },
  {
    id: "02",
    // sysId: "[AGT-001]",
    sysId: "[PRJ-002]",
    freq: "8.4 kHz",
    title: "PouchPal",
    year: "2025",
    subtitle: "Your personal expense tracker with advancedpayment integrations",
    description: "Modern UI/UX concept for an advanced expense tracker that helps users manage their finances effortlessly. It includes features such as smart expense tracking, budgeting, analytics, and advanced payment integration, with a focus on a seamless and intuitive user experience.",
    tech: ["Figma", "Canva", "Notion", "FigJam"],
    link: "https://www.figma.com/design/EQUuR9VYNyTUWO5urxdfmG/PouchPal-Web-Design?node-id=0-1&p=f",    
    themeColor: "#10b981", 
    imageSrc: "/assets/images/projects/p2.png",
    wavePath: "M 0 16 V 4 H 12.5 V 16 H 25 V 4 H 37.5 V 16 H 50 V 4 H 62.5 V 16 H 75 V 4 H 87.5 V 16 H 100 V 4 H 112.5 V 16 H 125 V 4 H 137.5 V 16 H 150 V 4 H 162.5 V 16 H 175 V 4 H 187.5 V 16 H 200 V 4 H 212.5 V 16 H 225 V 4 H 237.5 V 16 H 250 V 4 H 262.5 V 16 H 275 V 4 H 287.5 V 16 H 300 V 4 H 312.5 V 16 H 325 V 4 H 337.5 V 16 H 350 V 4 H 362.5 V 16 H 375 V 4 H 387.5 V 16 H 400 V 16"
  },
  {
    id: "03",
    // sysId: "[RAG-001]",
    sysId: "[PRJ-003]",
    freq: "12.7 kHz",
    title: "LibraFlow",
    year: "2025",
    subtitle: "LibraFlow: The AI-Powered Library Management System",
    description: "A Go CLI that turns your documents into a searchable AI, entirely on your machine. No cloud. No API keys. No one else reading your data.",
    tech: ["React.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "Framer Motion", "Tailwind CSS"],
    link: "https://github.com/KALPESH003/LibraFLow---Advance-Library-Management-System",
    themeColor: "#3b82f6",
    imageSrc: "/assets/images/projects/p3.png",
    wavePath: "M 0 16 L 25 4 V 16 L 50 4 V 16 L 75 4 V 16 L 100 4 V 16 L 125 4 V 16 L 150 4 V 16 L 175 4 V 16 L 200 4 V 16 L 225 4 V 16 L 250 4 V 16 L 275 4 V 16 L 300 4 V 16 L 325 4 V 16 L 350 4 V 16 L 375 4 V 16 L 400 4 V 16"
  },
  {
    id: "04",
    // sysId: "[MEM-001]",
    sysId: "[PRJ-004]",
    freq: "5.1 kHz",
    title: "CertiGen",
    year: "2025",
    subtitle: "Enterprise Certificate Automation Platform",
    description: "A full-stack certificate generation and verification platform designed for educational institutions, events, and organizations. Features dynamic certificate creation, PDF export, QR-code based verification, secure credential management, and automated bulk certificate issuance.",
    tech: ["Node.js", "Express.js", "MongoDB", "Puppeteer", "JavaScript", "QR Code API"],
    link: "https://github.com/KALPESH003/CertiGen",
    themeColor: "#a855f7",
    imageSrc: "/assets/images/projects/p4.png",
    wavePath: "M 0 10 H 15 L 20 4 L 25 16 L 30 10 H 65 L 70 4 L 75 16 L 80 10 H 115 L 120 4 L 125 16 L 130 10 H 165 L 170 4 L 175 16 L 180 10 H 215 L 220 4 L 225 16 L 230 10 H 265 L 270 4 L 275 16 L 280 10 H 315 L 320 4 L 325 16 L 330 10 H 365 L 370 4 L 375 16 L 380 10 H 400"
  },
  {
    id: "05",
    // sysId: "[RAG-002]",
    sysId: "[PRJ-005]",
    freq: "2.3 kHz",
    title: "PassSentinel",
    year: "2025",
    subtitle: "Advanced Password Security Tool",
    description: "A browser-based cybersecurity utility that evaluates password strength using entropy analysis, pattern detection, and security heuristics. Provides real-time feedback, secure password generation, breach-resistant recommendations, and cryptographic hashing through the Web Crypto.",
    tech: [ "TypeScript", "React", "Web Crypto API", "Tailwind CSS", "Vite", "JavaScript"],
    link: "https://github.com/KALPESH003/PassSentinel",
    themeColor: "#F16001",
    imageSrc: "/assets/images/projects/p5.png",
    wavePath: "M 0 10 L 12.5 4 L 25 10 L 37.5 16 L 50 10 L 62.5 4 L 75 10 L 87.5 16 L 100 10 L 112.5 4 L 125 10 L 137.5 16 L 150 10 L 162.5 4 L 175 10 L 187.5 16 L 200 10 L 212.5 4 L 225 10 L 237.5 16 L 250 10 L 262.5 4 L 275 10 L 287.5 16 L 300 10 L 312.5 4 L 325 10 L 337.5 16 L 350 10 L 362.5 4 L 375 10 L 387.5 16 L 400 10"
  }
];
