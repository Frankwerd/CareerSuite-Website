// src/app/download/page.tsx
'use client'; // Add this directive

import { Button } from '@/components/ui/button';
import { DownloadCloud, ChromeIcon, CheckCircle, ShieldCheck } from 'lucide-react'; // Added ShieldCheck for privacy

export default function DownloadPage() {
  // IMPORTANT: Replace with your actual Chrome Web Store extension link
  const extensionLink = "https://chrome.google.com/webstore/your-extension-id"; // Placeholder - UPDATE THIS

  return (
    <div className="container mx-auto px-4 py-12 text-center min-h-[calc(100vh-10rem)]">
      <DownloadCloud className="h-24 w-24 text-primary mx-auto mb-6" />
      <h1 className="text-4xl font-bold text-foreground mb-4">Download CareerSuite.ai <span className="text-xl text-primary">FREE</span></h1>
      <p className="text-xl text-muted-foreground mb-8 max-w-lg mx-auto">
        Get the CareerSuite.ai Chrome extension to analyze your resume against job descriptions instantly, with transparent data handling.
      </p>

      <Button
        size="lg"
        variant="download" // Apply download variant
        className="text-lg px-8 py-6" // Removed redundant bg/text/hover classes
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
             <span><strong>Transparent Data Use:</strong> Core analysis of your resume and job description is performed by sending text to Google's Gemini API. You own your input and the AI's output. Settings are local. See our <a href="/privacy" className="underline text-primary">Privacy Policy</a>.</span>
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
