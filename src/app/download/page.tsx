// src/app/download/page.tsx
'use client'; // Add this directive
        
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { DownloadCloud, ChromeIcon, CheckCircle, ShieldCheck } from 'lucide-react'; // Added ShieldCheck for privacy

export const metadata: Metadata = {
  title: 'Download CareerSuite.ai - Free AI Resume Analyzer',
  description: 'Download the CareerSuite.ai browser extension for free. Get instant AI-powered feedback to tailor your resume and beat ATS. Private and no account needed.',
};

export default function DownloadPage() {
  // IMPORTANT: Replace with your actual Chrome Web Store extension link
  const extensionLink = "https://chrome.google.com/webstore/your-extension-id"; // Placeholder - UPDATE THIS

  return (
    <div className="container mx-auto px-4 py-12 text-center min-h-[calc(100vh-10rem)]">
      <DownloadCloud className="h-24 w-24 text-primary mx-auto mb-6" />
      <h1 className="text-4xl font-bold text-foreground mb-4">Download CareerSuite.ai <span className="text-xl text-primary">FREE</span></h1>
      <p className="text-xl text-muted-foreground mb-8 max-w-lg mx-auto">
        Get the CareerSuite.ai Chrome extension to analyze your resume against job descriptions instantly and privately.
      </p>

      <Button
        size="lg"
        className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6"
        onClick={() => window.open(extensionLink, '_blank')}
        disabled={extensionLink === "https://chrome.google.com/webstore/your-extension-id"} // Disable if link is placeholder
      >
        <ChromeIcon className="mr-3 h-6 w-6" />
        Add to Chrome for FREE
      </Button>
      {extensionLink === "https://chrome.google.com/webstore/your-extension-id" && (
        <p className="text-sm text-red-500 mt-2">(Download link coming soon!)</p>
      )}

      <div className="mt-12 text-left max-w-lg mx-auto space-y-6">
        <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">Why CareerSuite.ai?</h2>
        <ul className="space-y-3">
          <li className="flex items-start">
            <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
            <span><strong>Tailor Your Resume:</strong> Get AI-powered suggestions to match your resume to any job description.</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
            <span><strong>Beat the ATS:</strong> Understand how Applicant Tracking Systems see your resume and optimize accordingly.</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
            <span><strong>Instant Feedback:</strong> No waiting. Get actionable insights immediately.</span>
          </li>
          <li className="flex items-start">
            <ShieldCheck className="h-6 w-6 text-blue-500 mr-3 mt-1 flex-shrink-0" />
            <span><strong>Completely Private:</strong> All analysis happens in your browser. Your resume and data are never uploaded or stored.</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
            <span><strong>100% Free:</strong> No subscriptions, no hidden costs. Just help for your job search.</span>
          </li>
        </ul>
      </div>

      <p className="mt-10 text-sm text-muted-foreground">
        Currently available for Google Chrome. More browsers coming soon!
      </p>
      <p className="text-sm text-muted-foreground mt-2">
        Having trouble? <a href="/contact" className="text-primary hover:underline">Contact Support</a>
      </p>
    </div>
  );
}
