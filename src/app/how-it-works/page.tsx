"use client";

import React from 'react';
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button";

// Helper component for SVG icons
const Icon = ({ path, className }: { path: string, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className || 'w-6 h-6'}>
    <path fillRule="evenodd" d={path} clipRule="evenodd" />
  </svg>
);

const HowItWorksPage = () => {
  return (
    <div className="container mx-auto px-4 py-12"> {/* Removed relative positioning */}
      <div className="relative overflow-hidden"> {/* Added overflow-hidden */}
        <AnimatedGridPattern
            numSquares={85}
            maxOpacity={0.02}
            duration={1.5}
            repeatDelay={0.25}
            className={cn(
              "[mask-image:radial-gradient(ellipse_at_center,white_10%,transparent_70%)]",
              "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
              "z-[-1]",
            )}
          />
          <AnimatedGridPattern
            numSquares={85}
            maxOpacity={0.02}
            duration={1.5}
            repeatDelay={0.25}
            className={cn(
              "[mask-image:radial-gradient(ellipse_at_center,white_10%,transparent_70%)]",
              "inset-x-0 inset-y-[70%] h-[200%] skew-y-[-12deg]",
              "z-[-1]",
            )}
          />
        {/* Header Section */}
        <header className="text-center py-12 md:py-16">
          <div className="inline-block mb-6">
            <Image
              src="/fab_logo_neutral.png"
              alt="CareerSuite.ai Logo"
              width={64} 
              height={64}
              className="h-16 w-16"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Supercharge Your Job Application Workflow</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            From analyzing a job post to submitting a perfectly tailored application in minutes.
            CareerSuite.AI is your personal career co-pilot.
          </p>
          <div className="inline-block">
            <Link href="/download">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground transition-transform duration-200 ease-in-out hover:-translate-y-0.5">
                Download for Chrome (Free)
              </Button>
            </Link>
            <p className="text-xs text-muted-foreground mt-2">Version {process.env.NEXT_PUBLIC_APP_VERSION || '0.11.1'}</p>
          </div>
        </header>

        {/* Workflow Diagram Section */}
        <section className="text-center py-12 md:py-16 my-8 md:my-12 bg-card text-card-foreground rounded-lg shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">The 4-Step Workflow to Your Next Job</h2>
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-4 md:gap-2 flex-nowrap overflow-x-auto md:overflow-x-visible pb-4">
            <div className="flex flex-col items-center p-4 max-w-[220px] shrink-0">
              <div className="bg-accent text-accent-foreground w-16 h-16 rounded-full flex items-center justify-center mb-4"><Icon path="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" className="w-8 h-8" /></div>
              <h3 className="text-lg font-semibold text-foreground mb-2">1. Build Your Profile</h3>
              <p className="text-sm text-muted-foreground">Create your Master Resume Profile by uploading a PDF or filling it out manually.</p>
            </div>
            <div className="text-4xl text-accent font-bold hidden md:flex items-center pt-6">→</div>
            <div className="flex flex-col items-center p-4 max-w-[220px] shrink-0">
              <div className="bg-accent text-accent-foreground w-16 h-16 rounded-full flex items-center justify-center mb-4"><Icon path="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.773 4.773zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" className="w-8 h-8" /></div>
              <h3 className="text-lg font-semibold text-foreground mb-2">2. Analyze Any Job</h3>
              <p className="text-sm text-muted-foreground">On any job board, open the panel and instantly get an AI-powered analysis.</p>
            </div>
            <div className="text-4xl text-accent font-bold hidden md:flex items-center pt-6">→</div>
            <div className="flex flex-col items-center p-4 max-w-[220px] shrink-0">
              <div className="bg-accent text-accent-foreground w-16 h-16 rounded-full flex items-center justify-center mb-4"><Icon path="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM18 13.5a3.375 3.375 0 00-3.375 3.375V18a3.375 3.375 0 003.375 3.375h1.5a1.125 1.125 0 011.125 1.125v1.5a3.375 3.375 0 003.375-3.375V18a3.375 3.375 0 00-3.375-3.375h-1.5z" className="w-8 h-8" /></div>
              <h3 className="text-lg font-semibold text-foreground mb-2">3. Tailor with AI</h3>
              <p className="text-sm text-muted-foreground">Our AI compares your profile to the job, suggesting optimized bullet points and skills.</p>
            </div>
            <div className="text-4xl text-accent font-bold hidden md:flex items-center pt-6">→</div>
            <div className="flex flex-col items-center p-4 max-w-[220px] shrink-0">
              <div className="bg-accent text-accent-foreground w-16 h-16 rounded-full flex items-center justify-center mb-4"><Icon path="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" className="w-8 h-8" /></div>
              <h3 className="text-lg font-semibold text-foreground mb-2">4. Autofill & Apply</h3>
              <p className="text-sm text-muted-foreground">Use your newly tailored content to intelligently fill out application forms in seconds.</p>
            </div>
          </div>
        </section>

        {/* Feature Deep Dive Section */}
        <section className="py-12 md:py-16 space-y-24">
            {/* Feature 1 */}
            {/* CHANGED: Replaced `items-center` with `md:items-start` for top alignment on desktop */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
                <div className="md:w-1/2 text-center md:text-left">
                    <h3 className="text-3xl font-semibold text-foreground mb-4">The Foundation: Your Master Resume Profile</h3>
                    <p className="text-muted-foreground mb-4">Your journey begins at your personal career headquarters. The Master Resume Profile is a comprehensive, structured database of your entire professional history.</p>
                    <ul className="list-none space-y-2 text-muted-foreground text-left inline-block">
                        <li className="flex items-start"><span className="text-primary font-bold mr-2 mt-1">✔</span><span>AI-Powered Start: Upload your existing resume PDF, and our Gemini-powered engine will parse and populate the fields for you.</span></li>
                        <li className="flex items-start"><span className="text-primary font-bold mr-2 mt-1">✔</span><span>Total Control: Manually add, edit, and organize every detail—from work experience bullets to optional demographic information.</span></li>
                        <li className="flex items-start"><span className="text-primary font-bold mr-2 mt-1">✔</span><span>Stored Securely: All your profile data is stored locally in your browser's storage, never on our servers. You are in complete control.</span></li>
                    </ul>
                </div>
                <div className="md:w-1/2">
                    <div className="bg-muted border border-border rounded-lg shadow-lg w-full max-w-md mx-auto">
                        <div className="bg-border p-2 px-3 font-semibold text-foreground">My Resume Profile</div>
                        <div className="p-4 space-y-3 text-sm">
                            <div className="space-y-1"><label className="block font-medium text-foreground">First Name</label><div className="bg-background border border-border p-2 rounded w-full text-foreground">Jane</div></div>
                            <div className="space-y-1"><label className="block font-medium text-foreground">Last Name</label><div className="bg-background border border-border p-2 rounded w-full text-foreground">Doe</div></div>
                            <div className="space-y-1"><label className="block font-medium text-foreground">Professional Summary</label><div className="bg-background border border-border p-2 rounded w-full h-20 text-foreground">Results-driven Senior...</div></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Feature 2 (Reversed Layout) */}
            {/* CHANGED: Replaced `items-center` with `md:items-start` for top alignment on desktop */}
            <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-8 md:gap-12">
                <div className="md:w-1/2 text-center md:text-left">
                    <h3 className="text-3xl font-semibold text-foreground mb-4">The Magic Wand: AI-Powered Tailoring</h3>
                    <p className="text-muted-foreground mb-4">Stop sending generic resumes. Our tailoring engine is the core of CareerSuite.AI, designed to make your application stand out for each specific role.</p>
                    <ul className="list-none space-y-2 text-muted-foreground text-left inline-block">
                        <li className="flex items-start"><span className="text-primary font-bold mr-2 mt-1">✔</span><span>Context is King: The AI doesn't just look for keywords; it understands the context of the job description and your experience.</span></li>
                        <li className="flex items-start"><span className="text-primary font-bold mr-2 mt-1">✔</span><span>Actionable Suggestions: See a side-by-side comparison of your original resume bullets and AI-optimized versions that highlight results.</span></li>
                        <li className="flex items-start"><span className="text-primary font-bold mr-2 mt-1">✔</span><span>ATS Score: Get an instant relevance score to understand how well your tailored resume aligns with the job before you even apply.</span></li>
                    </ul>
                </div>
                <div className="md:w-1/2">
                    <div className="bg-muted border border-border rounded-lg shadow-lg w-full max-w-md mx-auto transform transition-transform duration-300 hover:scale-105">
                        <div className="bg-border p-2 px-3 font-semibold text-foreground">Resume Tailoring</div>
                        <div className="p-4 space-y-3 text-sm">
                            <h4 className="font-semibold text-foreground">Experience: Senior Developer</h4>
                            <div className="border border-border rounded bg-card p-2 space-y-1 text-left">
                                <div><strong>Original:</strong><p className="text-muted-foreground">- Wrote code for the new user dashboard.</p></div>
                                <div className="bg-primary/5 border-t border-border p-2 rounded mt-1">
                                  <strong className="text-primary">Suggestion (92%):</strong>
                                  <p className="text-primary">- Architected and launched a new user analytics dashboard using React and TypeScript, resulting in a 15% increase in user engagement.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Feature 3 */}
            {/* CHANGED: Replaced `items-center` with `md:items-start` for top alignment on desktop */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
                <div className="md:w-1/2 text-center md:text-left">
                    <h3 className="text-3xl font-semibold text-foreground mb-4">The Time Saver: Intelligent Autofill</h3>
                    <p className="text-muted-foreground mb-4">Reclaim hours of tedious data entry. Our autofill engine is smarter than a simple password manager, built specifically for the complexities of job applications.</p>
                    <ul className="list-none space-y-2 text-muted-foreground text-left inline-block">
                        <li className="flex items-start"><span className="text-primary font-bold mr-2 mt-1">✔</span><span>Programmatic First Pass: The engine first identifies and fills standard, easily-mappable fields (like name, email, phone).</span></li>
                        <li className="flex items-start"><span className="text-primary font-bold mr-2 mt-1">✔</span><span>AI for Ambiguity: For complex, non-standard fields, the AI analyzes the form's HTML and your profile to make intelligent choices.</span></li>
                        <li className="flex items-start"><span className="text-primary font-bold mr-2 mt-1">✔</span><span>Tailored or Master: Choose to autofill with your freshly tailored content for maximum impact, or use your Master Profile for general applications.</span></li>
                    </ul>
                </div>
                <div className="md:w-1/2">
                     <div className="bg-muted border border-border rounded-lg shadow-lg w-full max-w-md mx-auto">
                        <div className="bg-border p-2 px-3 font-semibold text-foreground">Application Form</div>
                        <div className="p-4 space-y-3 text-sm">
                            <div className="space-y-1"><label className="block font-medium text-foreground">Full Name</label><div className="bg-background border-2 border-accent shadow-sm p-2 rounded w-full text-foreground animate-pulse">Jane Doe</div></div>
                            <div className="space-y-1"><label className="block font-medium text-foreground">Professional Summary</label><div className="bg-background border-2 border-accent shadow-sm p-2 rounded w-full h-20 text-foreground animate-pulse">Architected and launched...</div></div>
                            <div className="space-y-1"><label className="block font-medium text-foreground">Years of React Experience?</label><div className="bg-background border-2 border-accent shadow-sm p-2 rounded w-full text-foreground animate-pulse">5</div></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </div> {/* Close the new relative wrapper */}

        {/* Footer CTA Section */}
        <footer className="text-center py-12 md:py-16 mt-8 md:mt-12 border-t border-border">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to Land Your Dream Job?</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-8">
            Install CareerSuite.AI and transform your job application process today.
          </p>
          <div className="inline-block">
            <Link href="/download" legacyBehavior>
              <a className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-6 py-3 text-lg font-bold text-primary-foreground shadow-lg transition-transform duration-200 ease-in-out hover:-translate-y-0.5 hover:bg-primary/90 no-underline">
                Get CareerSuite.AI Now
              </a>
            </Link>
          </div>
        </footer>
    </div>
  );
};

export default HowItWorksPage;
