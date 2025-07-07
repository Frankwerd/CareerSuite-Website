"use client"; // Required for styled-jsx and client-side interactivity

import React from 'react';

// Helper component for SVG icons. In a real app, you might use a library like 'react-icons'.
const Icon = ({ path, className }: { path: string, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className || 'w-6 h-6'}>
    <path fillRule="evenodd" d={path} clipRule="evenodd" />
  </svg>
);

import Link from 'next/link'; // Added for navigation

// --- TSX Component for the "How It Works" Page ---

export const HowItWorksPage = () => {
  // Apply a container similar to about/page.tsx for consistent padding and max-width
  // The min-h-screen or similar height adjustments will be handled by the RootLayout's main tag.
  return (
    <div className="container mx-auto px-4 py-12"> {/* Added container from about page */}
      {/* Removed the outer <div className="how-it-works-container"> as container mx-auto handles this */}
        <header className="hero-section text-center py-12 md:py-16"> {/* Simplified padding, text-center from Tailwind */}
          <div className="logo-container inline-block mb-6"> {/* Adjusted logo margin and display */}
            {/* A simple representation of your logo - Consider making this a reusable component if used elsewhere */}
            <svg width="64" height="64" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M379.33,132.67a10.64,10.64,0,0,0-10.66,0L288,158.55V106.67a10.67,10.67,0,0,0-21.34,0v51.88L186,184.43a10.66,10.66,0,0,0-10.66,18.47l77.42,44.7,4,2.33,36.52,21.08,42.74,24.67a10.66,10.66,0,0,0,14.63-8.45V141.12A10.66,10.66,0,0,0,379.33,132.67Z" fill="#F26419"/>
              <path d="M336.8,202.93,256,155.8,175.2,202.93a10.67,10.67,0,0,0-5.33,9.24V347.16a10.67,10.67,0,0,0,5.33,9.24L256,403.52l80.8-47.12a10.67,10.67,0,0,0,5.33-9.24V212.17A10.67,10.67,0,0,0,336.8,202.93ZM256,245.33a32,32,0,1,1,32-32A32,32,0,0,1,256,245.33Z" fill="#33658A"/>
            </svg>
          </div>
          {/* Using Tailwind classes for typography, consistent with site theme */}
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Supercharge Your Job Application Workflow</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            From analyzing a job post to submitting a perfectly tailored application in minutes.
            CareerSuite.AI is your personal career co-pilot.
          </p>
          {/* This Download button can be replaced with the standard site Button component if available and desired */}
          {/* For now, keeping custom styling but ensuring it uses theme variables if possible */}
          <div className="cta-container inline-block"> {/* Ensure cta-container is styled or use Tailwind for layout */}
            <button className="cta-button bg-primary hover:bg-primary/90 text-primary-foreground"> {/* Assuming cta-button provides base styling, added theme colors */}
              <Icon path="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" className="w-6 h-6 mr-2" />
              Download for Chrome (Free)
            </button>
            {/* version-info can be styled with Tailwind: e.g., text-xs text-muted-foreground mt-2 */}
            <p className="version-info text-xs text-muted-foreground mt-2">Version {process.env.APP_VERSION || '0.11.1'}</p>
          </div>
        </header>

        {/* Adapted to use Tailwind for background, padding, margin, rounded corners */}
        <section className="workflow-diagram-section text-center py-12 md:py-16 my-8 md:my-12 bg-card text-card-foreground rounded-lg shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10">The 4-Step Workflow to Your Next Job</h2>
          <div className="workflow-steps">
            <div className="step">
              <div className="step-icon">
                <Icon path="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </div>
              <h3>1. Build Your Profile</h3>
              <p>Create your Master Resume Profile by uploading a PDF or filling it out manually. This becomes your single source of truth.</p>
            </div>
            <div className="arrow">→</div>
            <div className="step">
              <div className="step-icon">
                <Icon path="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.773 4.773zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </div>
              <h3>2. Analyze Any Job</h3>
              <p>On any job board, open the CareerSuite panel and instantly get an AI-powered analysis, extracting key skills and qualifications.</p>
            </div>
            <div className="arrow">→</div>
            <div className="step">
              <div className="step-icon">
                <Icon path="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM18 13.5a3.375 3.375 0 00-3.375 3.375V18a3.375 3.375 0 003.375 3.375h1.5a1.125 1.125 0 011.125 1.125v1.5a3.375 3.375 0 003.375-3.375V18a3.375 3.375 0 00-3.375-3.375h-1.5z" />
              </div>
              <h3>3. Tailor with AI</h3>
              <p>Our AI compares your profile to the job, suggesting optimized bullet points and skills to beat the ATS and impress recruiters.</p>
            </div>
            <div className="arrow">→</div>
            <div className="step">
              <div className="step-icon">
                <Icon path="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
              </div>
              <h3>4. Autofill & Apply</h3>
              <p>Use your newly tailored content to intelligently fill out the entire application form in seconds. No more copy-pasting.</p>
            </div>
          </div>
        </section>

        {/* Adapted to use Tailwind for padding */}
        <section className="feature-deep-dive py-12 md:py-16">
            <div className="feature"> {/* Feature class styling will be maintained from styled-jsx for now */}
                <div className="feature-text">
                    <h3 className="text-3xl font-semibold text-foreground mb-4">The Foundation: Your Master Resume Profile</h3> {/* Tailwind typography */}
                    <p>
                        Your journey begins at your personal career headquarters. The Master Resume Profile is a comprehensive, structured database of your entire professional history.
                    </p>
                    <ul>
                        <li><strong>AI-Powered Start:</strong> Upload your existing resume PDF, and our Gemini-powered engine will parse and populate the fields for you.</li>
                        <li><strong>Total Control:</strong> Manually add, edit, and organize every detail—from work experience bullets to optional demographic information for faster applications.</li>
                        <li><strong>Stored Securely:</strong> All your profile data is stored locally in your browser's storage, never on our servers. You are in complete control.</li>
                    </ul>
                </div>
                <div className="feature-visual">
                    {/* Simplified mockup of the resume profile page */}
                    <div className="mockup-window">
                        <div className="mockup-header">My Resume Profile</div>
                        <div className="mockup-content">
                            <div className="form-group">
                                <label>First Name</label>
                                <div className="input-mock">Jane</div>
                            </div>
                            <div className="form-group">
                                <label>Last Name</label>
                                <div className="input-mock">Doe</div>
                            </div>
                            <div className="form-group">
                                <label>Professional Summary</label>
                                <div className="textarea-mock">Results-driven Senior...</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="feature reverse"> {/* Feature class styling will be maintained from styled-jsx for now */}
                <div className="feature-text">
                    <h3 className="text-3xl font-semibold text-foreground mb-4">The Magic Wand: AI-Powered Tailoring</h3> {/* Tailwind typography */}
                    <p>
                        Stop sending generic resumes. Our tailoring engine is the core of CareerSuite.AI, designed to make your application stand out for each specific role.
                    </p>
                    <ul>
                        <li><strong>Context is King:</strong> The AI doesn't just look for keywords; it understands the context of the job description and your experience.</li>
                        <li><strong>Actionable Suggestions:</strong> See a side-by-side comparison of your original resume bullets and AI-optimized versions that highlight quantifiable results and relevant skills.</li>
                        <li><strong>ATS Score:</strong> Get an instant relevance score to understand how well your tailored resume aligns with the job before you even apply.</li>
                    </ul>
                </div>
                <div className="feature-visual">
                     {/* Simplified mockup of the tailoring UI */}
                    <div className="mockup-window panel-mockup">
                        <div className="mockup-header">Resume Tailoring</div>
                        <div className="mockup-content">
                            <h4>Experience: Senior Developer</h4>
                            <div className="comparison-mock">
                                <div className="original-mock"><strong>Original:</strong><p>- Wrote code for the new user dashboard.</p></div>
                                <div className="suggestion-mock"><strong>Suggestion (92%):</strong><p>- Architected and launched a new user analytics dashboard using React and TypeScript, resulting in a 15% increase in user engagement.</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="feature"> {/* Feature class styling will be maintained from styled-jsx for now */}
                <div className="feature-text">
                    <h3 className="text-3xl font-semibold text-foreground mb-4">The Time Saver: Intelligent Autofill</h3> {/* Tailwind typography */}
                    <p>
                        Reclaim hours of tedious data entry. Our autofill engine is smarter than a simple password manager, built specifically for the complexities of job applications.
                    </p>
                    <ul>
                        <li><strong>Programmatic First Pass:</strong> The engine first identifies and fills standard, easily-mappable fields (like name, email, phone).</li>
                        <li><strong>AI for Ambiguity:</strong> For complex, non-standard fields (like custom radio buttons or open-ended questions), the AI analyzes the form's HTML and your profile to make intelligent choices.</li>
                        <li><strong>Tailored or Master:</strong> Choose to autofill with your freshly tailored content for maximum impact, or use your Master Profile for quick, general applications.</li>
                    </ul>
                </div>
                <div className="feature-visual">
                     {/* Simplified mockup of the autofill process */}
                    <div className="mockup-window">
                        <div className="mockup-header">Application Form</div>
                        <div className="mockup-content autofill-mock">
                            <div className="form-group">
                                <label>Full Name</label>
                                <div className="input-mock filled">Jane Doe</div>
                            </div>
                            <div className="form-group">
                                <label>Professional Summary</label>
                                <div className="textarea-mock filled">Architected and launched...</div>
                            </div>
                            <div className="form-group">
                                <label>Years of React Experience?</label>
                                <div className="input-mock filled">5</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

        {/* Footer section adapted to use Tailwind classes, similar to header */}
        <footer className="text-center py-12 md:py-16 mt-8 md:mt-12 border-t border-border"> {/* Removed hero-section class, added Tailwind classes */}
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to Land Your Dream Job?</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-8">
            Install CareerSuite.AI and transform your job application process today.
          </p>
          <div className="inline-block"> {/* Replaced cta-container with inline-block */}
            {/* Using Link component for navigation, styled as a button */}
            <Link href="/download" legacyBehavior passHref>
              {/* Applied Tailwind classes for button styling directly, cta-button class can be simplified or removed if all styling is covered */}
              <a className="cta-button bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-6 rounded-lg shadow-lg inline-flex items-center transition-transform duration-200 ease-in-out hover:-translate-y-0.5">
                <Icon path="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" className="w-6 h-6 mr-2" />
                Get CareerSuite.AI Now
              </a>
            </Link>
          </div>
        </footer>
  
    </div> {/* Closes the main container div */}
  );
};

// It's good practice to export the component as default for Next.js pages
export default HowItWorksPage;
