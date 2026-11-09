// src/app/download/page.tsx
'use client'; // Add this directive

import { Button } from '@/components/ui/button';
import { DownloadCloud, CheckCircle, ShieldCheck, AlertTriangle, Github, ExternalLink } from 'lucide-react';

export default function DownloadPage() {
  // IMPORTANT: Replace with your actual GitHub code link
  const githubLink = "https://github.com/Frankwerd/CareerSuite-Website";

  return (
    <div className="container mx-auto px-4 py-12 text-center min-h-[calc(100vh-10rem)]">
      {/* Notice Banner */}
      <div className="mb-8 max-w-2xl mx-auto rounded-lg border border-amber-500/40 bg-amber-500/10 p-4 text-left">
        <div className="flex items-start gap-3">
          <AlertTriangle className="h-6 w-6 text-amber-500 shrink-0 mt-0.5" />
          <div>
            <h2 className="font-semibold text-foreground text-base">Project Discontinued</h2>
            <p className="text-sm text-muted-foreground mt-1">
              CareerSuite.ai is no longer available and is no longer being actively maintained or developed.
            </p>
            {/* MAINTAINER NOTE: Section to link GitHub code */}
            <div className="mt-3">
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
              >
                <Github className="h-4 w-4" />
                Access Source Code on GitHub
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <DownloadCloud className="h-24 w-24 text-muted-foreground/60 mx-auto mb-6" />
      <h1 className="text-4xl font-bold text-foreground mb-4">CareerSuite.ai <span className="text-xl text-muted-foreground">(Archived)</span></h1>
      <p className="text-xl text-muted-foreground mb-8 max-w-lg mx-auto">
        This project is no longer available. You can view or fork the source code repository on GitHub.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        {/* MAINTAINER NOTE: GitHub Repository Button */}
        <Button
          size="lg"
          variant="outline"
          className="text-lg px-8 py-6 gap-2"
          onClick={() => window.open(githubLink, '_blank')}
        >
          <Github className="h-5 w-5" />
          View GitHub Repository
        </Button>
      </div>

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
