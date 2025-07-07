import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
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

  icons: {
    // Using fab_logo_neutral.png as a placeholder.
    // For best results, create dedicated favicon files (e.g., 16x16, 32x32 favicon.ico, apple-touch-icon.png, svg maskable icon etc.)
    // and update these paths accordingly.
    icon: [
      { url: "/fab_logo_neutral.png", sizes: "any", type: "image/png" },
      // You might want to add more specific sizes if you have them:
      // { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      // { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/fab_logo_neutral.png", // Fallback, ideally an .ico or .svg
    apple: "/fab_logo_neutral.png", // For apple-touch-icon, ideally a 180x180 png
    // other: [ // For more advanced scenarios like Android Chrome icons, manifest.json, etc.
    //   { rel: 'android-chrome-192x192', url: '/android-chrome-192x192.png' },
    //   { rel: 'android-chrome-512x512', url: '/android-chrome-512x512.png' },
    // ],
  },
  // Added viewport settings here, removed manual <head> tag below
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* The manual <head> tag was removed. Viewport and other metadata are handled by the 'metadata' export. */}
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
          <AnimatedGridPattern
            numSquares={50} // Increased for full page coverage
            maxOpacity={0.1} // Reduced opacity for subtlety
            duration={1.5} // Faster animation
            repeatDelay={0.25} // Faster repeat
            className={cn(
              "[mask-image:radial-gradient(ellipse_at_center,white_10%,transparent_70%)]", // Adjusted mask
              "inset-0 h-full w-full skew-y-0", // Simpler positioning for full page
              "z-[-1]", // Ensure it's in the background
            )}
          />
          <div className="relative z-0 flex flex-col min-h-screen"> {/* Added relative z-0 here */}
            <Navbar />
            <main className="flex-grow">
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
