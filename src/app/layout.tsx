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
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "YourSaaS - Revolutionizing Your Workflow", // Updated title
  description: "YourSaaS is the ultimate solution for X, Y, and Z. Sign up today for a free trial!", // Updated description
  keywords: [
    "SaaS",
    "Productivity",
    "Workflow",
    "Automation",
    // Add relevant keywords for your SaaS product
  ],
  authors: [
    {
      name: "YourSaaS Team", // Updated author
      url: "https://your-saas-website.com", // Link to your website
    },
  ],
  creator: "YourSaaS Team", // Updated creator
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-saas-website.com", // Your website URL
    title: "YourSaaS - Revolutionizing Your Workflow", // Updated OG title
    description: "YourSaaS is the ultimate solution for X, Y, and Z. Sign up today!", // Updated OG description
    siteName: "YourSaaS", // Updated OG site name
    // Add an openGraph image later, e.g., images: [{ url: '/og-image.png' }],
  },
  icons: { // Update icons to your brand's favicon
    icon: [
      {
        url: "/favicon.ico", // Example, replace with your favicon
        sizes: "any",
      }
    ],
    shortcut: "/favicon.ico", // Example
    apple: "/apple-touch-icon.png", // Example
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
          "min-h-screen bg-background font-sans antialiased",
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