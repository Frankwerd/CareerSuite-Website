import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/layout/Navbar"; // Added Navbar import
import Footer from "@/components/layout/Footer"; // Added Footer import
import "./globals.css";

// Load Inter font for non-Apple devices
// TODO: BRANDING - Implement Montserrat for headings and Nunito for body text as per brand guide.
// This would involve:
// 1. Importing Montserrat and Nunito from 'next/font/google'.
//    e.g.:
//    const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat', weight: '700' });
//    const nunito = Nunito({ subsets: ['latin'], variable: '--font-nunito', weight: ['400', '700'] });
// 2. Adding their variables to the body className: `montserrat.variable, nunito.variable`.
// 3. Updating tailwind.config.js (if used for fonts) or globals.css to apply these fonts.
//    - `font-sans` in Tailwind should default to `var(--font-nunito)`.
//    - Headings (h1-h6) should use `var(--font-montserrat)`.
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter", // Current setup uses Inter.
});

// Updated metadata for CareerSuite.ai
export const metadata: Metadata = {
  title: "CareerSuite.ai - AI-Powered Resume Analyzer for Job Seekers",
  description: "Get instant, expert feedback on your resume against any job description. CareerSuite.ai helps you beat ATS and land more interviews—for free, with complete privacy. No account needed.",
  keywords: [
    "AI resume analyzer",
    "resume checker",
    "ATS resume",
    "job description matching",
    "resume feedback",
    "free resume tool",
    "career tools",
    "job seeker",
    "resume optimization",
    "privacy-first resume tool",
    "CareerSuite.ai"
  ],
  authors: [
    {
      name: "CareerSuite.ai Team",
      url: "https://careersuite.ai", // Replace with actual domain when available
    },
  ],
  creator: "CareerSuite.ai Team",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://careersuite.ai", // Replace with actual domain
    title: "CareerSuite.ai - AI-Powered Resume Analyzer",
    description: "Instantly analyze your resume against job descriptions, get actionable feedback, and improve your chances of landing an interview. Free & private.",
    siteName: "CareerSuite.ai",
    // Consider adding a specific Open Graph image for CareerSuite.ai (e.g., featuring the "Pencil Rocket")
    // images: [{ url: '/og-careersuite.png' }],
  },
  icons: { // Reminder: Replace these with actual CareerSuite.ai favicons
    icon: [
      {
        url: "/pencil-rocket-favicon.png", // Example: replace with actual favicon
        sizes: "any", // Or specify sizes like "32x32"
      }
    ],
    shortcut: "/pencil-rocket-favicon.svg", // Example
    apple: "/apple-touch-icon-pencil-rocket.png", // Example
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        {/* Favicon link from metadata.icons should be sufficient, explicit link below can be removed if not needed */}
        {/* <link rel="icon" href="/favicon.ico" sizes="any" /> */}
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased", // `font-sans` currently defaults to Inter via `inter.variable`
          // TODO: BRANDING - Add nunito.variable here if Nunito is loaded for body text.
          // e.g., className={cn("... font-body", montserrat.variable, nunito.variable)}
          inter.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false} // Explicitly disabling system theme preference as per original
        >
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow"> {/* Removed flex-col and min-h-screen from main, as body and outer div handle it */}
              {children}
            </main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}