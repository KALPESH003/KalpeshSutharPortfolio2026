import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
// import GridRuler from "@/components/ui/GridRuler";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import LiveClock from "@/components/ui/LiveClock";
import SmoothScroll from "@/components/SmoothScroll"; 
import CinematicSidebar from "@/components/ui/Sidebar";
// --- Fonts ---
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const sidebarInter = Inter({
  subsets: ["latin"],
  variable: "--font-sidebar",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-primary",
  display: "swap",
});

// --- 1. Comprehensive SEO Metadata ---
export const metadata: Metadata = {
   metadataBase: new URL("https://kalpeshksuthar.vercel.app"),
  title: "Kalpesh K. Suthar | Full-Stack Developer",
  description: "Portfolio of Kalpesh K. Suthar, a Full-Stack Developer based in Vadodara, Gujarat. Exploring modern web engineering and cinematic UI experiences.",
  keywords: [
    "Kalpesh K. Suthar",
    "Kalpesh Suthar",
    "Kalpesh",
    "Kalpesh Developer",
    "UI/UX designer",
    "UI/UX developer portfolio",
    "UI/UX Designer Portfolio",
    "Portfolio of Kalpesh K. Suthar",
    "portfolio",
    "Full-Stack Developer Vadodara",
    "React Developer",
    "Next.js Engineer",
    "Frontend Developer",
    "Full-Stack Developer"
  ],
  authors: [{ name: "Kalpesh K. Suthar", url: "https://kalpeshksuthar.vercel.app" }], // Replace with your actual domain
  creator: "Kalpesh K. Suthar",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://kalpeshksuthar.vercel.app", // Replace with your actual domain
    title: "Kalpesh K. Suthar | Full-Stack Developer",
    description: "Explore the interactive portfolio and engineering projects of Kalpesh K. Suthar.",
    siteName: "Kalpesh K. Suthar Portfolio",
    images: [
      {
        url: "/og-image.png", // Ensure you have this 1200x630 image in your /public folder
        width: 1200,
        height: 630,
        alt: "Kalpesh K. Suthar - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kalpesh K. Suthar | Full-Stack Developer",
    description: "Explore the interactive portfolio and engineering projects of Kalpesh K. Suthar.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// --- 2. JSON-LD Structured Data (Entity Graph) ---
// This explicitly connects your name to your external profiles for Google.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kalpesh K. Suthar",
  alternateName: "Kalpesh Suthar",
  url: "https://kalpeshksuthar.vercel.app", // Replace with your actual domain
  jobTitle: "Full-Stack Developer",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Vadodara",
    addressRegion: "Gujarat",
    addressCountry: "IN"
  },
  sameAs: [
    "https://github.com/KALPESH003",   
    "https://linkedin.com/in/kalpesh-k-suthar-943921368/",   
    "https://leetcode.com/u/kalpeshksuthar003/"
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "The Maharaja Sayajirao University of Baroda (MSUB)"                  // MUST UPDATE THIS (for MSc IT)
  },
  knowsAbout: ["Full-Stack Development", "React", "Next.js", "TypeScript", "Node.js", "MSc IT"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
return (
<html
  lang="en"
  className="scroll-smooth"
  suppressHydrationWarning
>
  <body
    className={`${inter.variable} ${sidebarInter.variable} ${jetbrainsMono.variable} font-sans bg-black text-white antialiased`}
    suppressHydrationWarning
  >
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />

    <SmoothScroll />

    <main className="relative z-0 w-full md:pl-[84px] lg:pl-[100px] transition-all duration-300">
      {children}
    </main>

    <CinematicSidebar />
    <ScrollIndicator />
    <LiveClock />

  </body>
</html>
);
}
