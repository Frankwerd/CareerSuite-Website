// src/app/tos/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - CareerSuite.ai',
  description: 'Read the Terms of Service for using CareerSuite.ai, a free, AI-powered, privacy-first resume analyzer.',
};

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-12 min-h-[calc(100vh-10rem)]"> {/* Adjust min-h as needed */}
      <h1 className="text-3xl font-bold text-foreground mb-6">Terms of Service for CareerSuite.ai</h1>
      <div className="prose dark:prose-invert max-w-none">
        <p><em>Last Updated: {new Date().toLocaleDateString()}</em></p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">1. Agreement to Terms</h2>
        <p>
          By accessing or using CareerSuite.ai (the "Service"), a free, AI-powered tool that analyzes a user's resume against a specific job description, you agree to be bound by these Terms of Service ("Terms").
          If you do not agree to these Terms, do not use the Service.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">2. Description of Service & Privacy</h2>
        <p>
          CareerSuite.ai provides actionable feedback for resume improvement. A core feature is its privacy-first design:
          all processing happens in your browser via local storage. No user data (resumes, personal info) is uploaded or stored on our servers.
          No account is needed to use the core functionality. Our <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a> provides further details.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">3. Changes to Terms or Services</h2>
        <p>
          We may modify the Terms at any time, in our sole discretion. If we do so, we’ll let you know
          by posting the modified Terms on this page. It’s important that you review the Terms whenever we modify them because if you continue
          to use the Service after we have posted modified Terms, you are indicating to us that you agree to be
          bound by the modified Terms. We may also change or discontinue all or any part of the Service, at any time and without notice, at our sole discretion.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">4. Who May Use the Service</h2>
        <p>
          You may use the Service only if you are 18 years or older and capable of forming a binding
          contract with CareerSuite.ai and are not barred from using the Service under applicable law.
        </p>

        {/* Section 4 on Account Registration is removed as it's not applicable */}

        <h2 className="text-2xl font-semibold mt-6 mb-3">5. Responsible Use of Services</h2>
        <p>
          You agree not to use the Services in any manner that:
        </p>
        <ul>
          <li>Is illegal, or promotes illegal activity.</li>
          <li>Is harmful, fraudulent, deceptive, threatening, harassing, defamatory, obscene, or otherwise objectionable to us.</li>
          <li>Attempts to reverse engineer, decompile, disable, or otherwise interfere with the Service.</li>
          <li>Uses any automated means (e.g., bots, scrapers) to access the Service for any purpose without our express written permission.</li>
        </ul>
        <p>You acknowledge that the feedback provided by the AI is for informational purposes only and does not guarantee job placement or interview success. You are responsible for the final content and accuracy of your resume.</p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">6. Intellectual Property</h2>
        <p>
          We own all right, title, and interest in and to the Service, including all associated intellectual property rights.
          You may not use our name, logo (including the "Pencil Rocket"), or other proprietary information without our express written consent.
          The content you analyze (your resume and job descriptions) remains your own; we claim no ownership over it as it is processed locally in your browser.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">7. Termination</h2>
        <p>
          We may terminate or suspend your access to the Service, at our sole discretion,
          at any time and without notice to you, if you violate these Terms.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">8. Disclaimers</h2>
        <p>
          THE SERVICE IS PROVIDED "AS IS," WITHOUT WARRANTY OF ANY KIND. WITHOUT LIMITING THE FOREGOING,
          WE EXPLICITLY DISCLAIM ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, QUIET
          ENJOYMENT OR NON-INFRINGEMENT, AND ANY WARRANTIES ARISING OUT OF COURSE OF DEALING OR USAGE OF TRADE.
          WE MAKE NO WARRANTY THAT THE SERVICE WILL MEET YOUR REQUIREMENTS OR BE AVAILABLE ON AN UNINTERRUPTED, SECURE, OR ERROR-FREE BASIS.
          WE MAKE NO WARRANTY REGARDING THE QUALITY, ACCURACY, TIMELINESS, TRUTHFULNESS, COMPLETENESS OR RELIABILITY OF ANY INFORMATION OR ADVICE OBTAINED THROUGH THE SERVICE.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">9. Limitation of Liability</h2>
        <p>
          NEITHER CAREERSUITE.AI NOR ANY OTHER PARTY INVOLVED IN CREATING, PRODUCING, OR DELIVERING THE SERVICE WILL BE
          LIABLE FOR ANY INCIDENTAL, SPECIAL, EXEMPLARY OR CONSEQUENTIAL DAMAGES, INCLUDING LOST PROFITS, LOSS OF DATA
          OR GOODWILL, SERVICE INTERRUPTION, COMPUTER DAMAGE OR SYSTEM FAILURE OR THE COST OF SUBSTITUTE SERVICES
          ARISING OUT OF OR IN CONNECTION WITH THESE TERMS OR FROM THE USE OF OR INABILITY TO USE THE SERVICE, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), PRODUCT LIABILITY OR ANY OTHER LEGAL THEORY.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">10. Governing Law</h2>
        <p>
          These Terms and any action related thereto will be governed by the laws of [Specify Your Jurisdiction, e.g., the State of California] without regard to its conflict of laws provisions.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">11. Contact Information</h2>
        <p>
          If you have any questions about these Terms, please contact us via the information on our <a href="/contact" className="text-primary hover:underline">Contact Page</a>.
        </p>
      </div>
    </div>
  );
}
