"use client"; // Required for styled-jsx and client-side interactivity

import React from 'react';
import Link from 'next/link';

// Helper component for SVG icons.
const Icon = ({ path, className }: { path: string, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className || 'w-6 h-6'}>
    <path fillRule="evenodd" d={path} clipRule="evenodd" />
  </svg>
);


// --- TSX Component for the "How It Works" Page ---

// CHANGED: Removed the named `export` and changed to a standard function declaration.
// The default export at the bottom will handle the Next.js page requirement.
function HowItWorksPage() {
  return (
    <div className="container mx-auto px-4 py-12">
        <header className="hero-section text-center py-12 md:py-16">
          <div className="logo-container inline-block mb-6">
            <svg width="64" height="64" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M379.33,132.67a10.64,10.64,0,0,0-10.66,0L288,158.55V106.67a10.67,10.67,0,0,0-21.34,0v51.88L186,184.43a10.66,10.66,0,0,0-10.66,18.47l77.42,44.7,4,2.33,36.52,21.08,42.74,24.67a10.66,10.66,0,0,0,14.63-8.45V141.12A10.66,10.66,0,0,0,379.33,132.67Z" fill="#F26419"/>
              <path d="M336.8,202.93,256,155.8,175.2,202.93a10.67,10.67,0,0,0-5.33,9.24V347.16a10.67,10.67,0,0,0,5.33,9.24L256,403.52l80.8-47.12a10.67,10.67,0,0,0,5.33-9.24V212.17A10.67,10.67,0,0,0,336.8,202.93ZM256,245.33a32,32,0,1,1,32-32A32,32,0,0,1,256,245.33Z" fill="#33658A"/>
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Supercharge Your Job Application Workflow</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            From analyzing a job post to submitting a perfectly tailored application in minutes.
            CareerSuite.AI is your personal career co-pilot.
          </p>
          <div className="cta-container inline-block">
            <button className="cta-button bg-primary hover:bg-primary/90 text-primary-foreground">
              <Icon path="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" className="w-6 h-6 mr-2" />
              Download for Chrome (Free)
            </button>
            {/* CHANGED: Using NEXT_PUBLIC_ prefix for client-side environment variable */}
            <p className="version-info text-xs text-muted-foreground mt-2">Version {process.env.NEXT_PUBLIC_APP_VERSION || '0.11.1'}</p>
          </div>
        </header>

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

        <section className="feature-deep-dive py-12 md:py-16">
            <div className="feature">
                <div className="feature-text">
                    <h3 className="text-3xl font-semibold text-foreground mb-4">The Foundation: Your Master Resume Profile</h3>
                    <p>Your journey begins at your personal career headquarters. The Master Resume Profile is a comprehensive, structured database of your entire professional history.</p>
                    <ul>
                        <li><strong>AI-Powered Start:</strong> Upload your existing resume PDF, and our Gemini-powered engine will parse and populate the fields for you.</li>
                        <li><strong>Total Control:</strong> Manually add, edit, and organize every detail—from work experience bullets to optional demographic information for faster applications.</li>
                        <li><strong>Stored Securely:</strong> All your profile data is stored locally in your browser's storage, never on our servers. You are in complete control.</li>
                    </ul>
                </div>
                <div className="feature-visual">
                    {/* CHANGED: Added `shadow-lg` class directly here */}
                    <div className="mockup-window shadow-lg">
                        <div className="mockup-header">My Resume Profile</div>
                        <div className="mockup-content">
                            <div className="form-group"><label>First Name</label><div className="input-mock">Jane</div></div>
                            <div className="form-group"><label>Last Name</label><div className="input-mock">Doe</div></div>
                            <div className="form-group"><label>Professional Summary</label><div className="textarea-mock">Results-driven Senior...</div></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="feature reverse">
                <div className="feature-text">
                    <h3 className="text-3xl font-semibold text-foreground mb-4">The Magic Wand: AI-Powered Tailoring</h3>
                    <p>Stop sending generic resumes. Our tailoring engine is the core of CareerSuite.AI, designed to make your application stand out for each specific role.</p>
                    <ul>
                        <li><strong>Context is King:</strong> The AI doesn't just look for keywords; it understands the context of the job description and your experience.</li>
                        <li><strong>Actionable Suggestions:</strong> See a side-by-side comparison of your original resume bullets and AI-optimized versions that highlight quantifiable results and relevant skills.</li>
                        <li><strong>ATS Score:</strong> Get an instant relevance score to understand how well your tailored resume aligns with the job before you even apply.</li>
                    </ul>
                </div>
                <div className="feature-visual">
                    {/* CHANGED: Added `shadow-lg` class directly here */}
                    <div className="mockup-window panel-mockup shadow-lg">
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

            <div className="feature">
                <div className="feature-text">
                    <h3 className="text-3xl font-semibold text-foreground mb-4">The Time Saver: Intelligent Autofill</h3>
                    <p>Reclaim hours of tedious data entry. Our autofill engine is smarter than a simple password manager, built specifically for the complexities of job applications.</p>
                    <ul>
                        <li><strong>Programmatic First Pass:</strong> The engine first identifies and fills standard, easily-mappable fields (like name, email, phone).</li>
                        <li><strong>AI for Ambiguity:</strong> For complex, non-standard fields (like custom radio buttons or open-ended questions), the AI analyzes the form's HTML and your profile to make intelligent choices.</li>
                        <li><strong>Tailored or Master:</strong> Choose to autofill with your freshly tailored content for maximum impact, or use your Master Profile for quick, general applications.</li>
                    </ul>
                </div>
                <div className="feature-visual">
                    {/* CHANGED: Added `shadow-lg` class directly here */}
                    <div className="mockup-window shadow-lg">
                        <div className="mockup-header">Application Form</div>
                        <div className="mockup-content autofill-mock">
                            <div className="form-group"><label>Full Name</label><div className="input-mock filled">Jane Doe</div></div>
                            <div className="form-group"><label>Professional Summary</label><div className="textarea-mock filled">Architected and launched...</div></div>
                            <div className="form-group"><label>Years of React Experience?</label><div className="input-mock filled">5</div></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <footer className="text-center py-12 md:py-16 mt-8 md:mt-12 border-t border-border">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to Land Your Dream Job?</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-8">
            Install CareerSuite.AI and transform your job application process today.
          </p>
          <div className="inline-block">
            <Link href="/download" legacyBehavior passHref>
              <a className="cta-button bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-6 rounded-lg shadow-lg inline-flex items-center transition-transform duration-200 ease-in-out hover:-translate-y-0.5">
                <Icon path="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" className="w-6 h-6 mr-2" />
                Get CareerSuite.AI Now
              </a>
            </Link>
          </div>
        </footer>

        <style jsx>{`
          /* Comments explaining removed global styles are good, leaving them. */

          .cta-button {
            border: none;
            cursor: pointer;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
          }

          .w-6 { width: 1.5rem; }
          .h-6 { height: 1.5rem; }
          .mr-2 { margin-right: 0.5rem; }

          .workflow-steps {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 20px;
            flex-wrap: wrap;
          }

          .step {
            flex: 1;
            max-width: 220px;
            padding: 20px;
          }
          .step p {
            color: hsl(var(--muted-foreground));
          }

          .step-icon {
            background-color: hsl(var(--accent));
            color: hsl(var(--accent-foreground));
            width: 64px;
            height: 64px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 20px auto;
          }
          .step-icon svg { width: 32px; height: 32px; }
          .step h3 {
            font-size: 1.2rem;
            margin-bottom: 10px;
            color: hsl(var(--foreground));
          }

          .arrow {
            font-size: 2.5rem;
            color: hsl(var(--accent));
            font-weight: bold;
          }

          @media (max-width: 900px) {
              .workflow-steps { flex-direction: column; }
              .arrow { transform: rotate(90deg); margin: 0; }
          }

          .feature {
              display: flex;
              gap: 40px;
              align-items: center;
              margin-bottom: 80px;
          }
          .feature.reverse { flex-direction: row-reverse; }
          .feature-text { flex: 1; }
          .feature-text p {
            margin-bottom: 1rem;
            color: hsl(var(--muted-foreground));
          }
          .feature-text ul {
            list-style: none;
            padding-left: 0;
            color: hsl(var(--muted-foreground));
          }
          .feature-text li {
              position: relative;
              padding-left: 30px;
              margin-bottom: 10px;
          }
          .feature-text li::before {
              content: '✔';
              position: absolute;
              left: 0;
              color: hsl(var(--primary));
              font-weight: bold;
          }
          .feature-visual {
              flex: 1;
              display: flex;
              align-items: center;
              justify-content: center;
          }
          @media (max-width: 768px) {
              .feature, .feature.reverse {
                  flex-direction: column;
                  text-align: center;
              }
              .feature-text ul {
                  text-align: left;
                  display: inline-block;
              }
          }

          .mockup-window {
              background-color: hsl(var(--muted));
              border: 1px solid hsl(var(--border));
              border-radius: 0.5rem;
              /* CHANGED: Removed the invalid box-shadow rule. This is now handled by the `shadow-lg` class in the JSX. */
              width: 100%;
              max-width: 450px;
          }
          .mockup-header {
              background-color: hsl(var(--border));
              padding: 0.5rem 0.75rem;
              font-weight: bold;
              border-bottom: 1px solid hsl(var(--border));
              color: hsl(var(--foreground));
          }
          .mockup-content {
              padding: 1.25rem;
              min-height: 200px;
              color: hsl(var(--foreground));
          }
          .form-group { margin-bottom: 0.9375rem; text-align: left; }
          .form-group label { display: block; font-weight: 600; font-size: 0.9rem; margin-bottom: 0.3125rem; color: hsl(var(--foreground)); }
          .input-mock, .textarea-mock {
              background-color: hsl(var(--background));
              border: 1px solid hsl(var(--border));
              padding: 0.625rem;
              border-radius: 0.375rem;
              width: 100%;
              box-sizing: border-box;
              color: hsl(var(--foreground));
          }
          .textarea-mock { min-height: 80px; }
          .panel-mockup {
            transform: perspective(1000px) rotateY(-10deg) rotateX(5deg);
            transition: transform 0.3s ease;
          }
          .panel-mockup:hover { transform: perspective(1000px) rotateY(0) rotateX(0); }
          .comparison-mock {
              text-align: left;
              border: 1px solid hsl(var(--border));
              border-radius: 0.375rem;
              background: hsl(var(--card));
          }
          .original-mock, .suggestion-mock { padding: 0.625rem; }
          .suggestion-mock {
            background-color: hsl(var(--primary) / 0.05);
            border-top: 1px solid hsl(var(--border));
            color: hsl(var(--primary-foreground));
          }
          .suggestion-mock p, .suggestion-mock strong {
              color: hsl(var(--primary));
          }
          .autofill-mock .filled {
              border: 2px solid hsl(var(--accent));
              box-shadow: 0 0 5px hsl(var(--accent) / 0.5);
              animation: pulse 1.5s infinite;
          }
          @keyframes pulse {
              0% { opacity: 1; }
              50% { opacity: 0.7; }
              100% { opacity: 1; }
          }
        `}</style>
    </div>
  );
}

// It's good practice to export the component as default for Next.js pages
export default HowItWorksPage;
