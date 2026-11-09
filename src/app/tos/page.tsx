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
        {/* The JS will automatically fill in the current date */}
        <p><em>Last Updated: {new Date().toLocaleDateString()}</em></p>

        <div className="my-6 rounded-lg border border-amber-500/40 bg-amber-500/10 p-4 not-prose">
          <h2 className="text-lg font-bold text-amber-600 dark:text-amber-400 mb-2">
            Important Notice: Project Discontinuation & Sunset
          </h2>
          <p className="text-sm text-foreground mb-3">
            CareerSuite.ai is officially discontinued and is no longer available as an active service. Development and active maintenance have ended, and we do not plan on moving forward with this project. Any remaining source code and materials are provided strictly on an "AS-IS" archival basis without warranty or ongoing service level agreements.
          </p>
          {/* MAINTAINER NOTE: GitHub Repository Section */}
          <div className="pt-2 border-t border-amber-500/20 text-sm">
            <span className="font-semibold text-foreground">Project Source Code: </span>
            <a
              href="https://github.com/Frankwerd/CareerSuite-Website"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline font-medium hover:text-primary/80"
            >
              https://github.com/Frankwerd/CareerSuite-Website
            </a>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-6 mb-3">1. Agreement to Terms</h2>
        <p>
          By accessing or using the CareerSuite.ai browser extension (the "Service"), you agree to be bound by these Terms of Service ("Terms").
          If you disagree with any part of the terms, then you may not access the Service.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">2. Description of Service & Discontinuation</h2>
        <p>
          CareerSuite.ai was designed as a software tool that provides an interface to third-party Artificial Intelligence services (specifically, Google's Gemini API) to analyze job descriptions and user-provided resume data. <strong>Please be advised that the Service has been discontinued and is no longer actively maintained or supported.</strong>
        </p>
        <p>
          The core AI processing of your resume and job description content requires that this data be sent to Google's servers to generate a response. We do not store this content on our own servers. For more details, please see our <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
        </p>
        <p>
          Optional features, such as the "Master Job Manager," may require you to authenticate with your Google Account to interact with your Google Sheets data. Use of these features is subject to your granting of the necessary permissions.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">3. Changes to Terms or Services</h2>
        <p>
          We may modify the Terms at any time, in our sole discretion. If we do so, we’ll let you know
          by posting the modified Terms on this page or through other communications. It’s important that you review the Terms whenever we modify them. If you continue
          to use the Service after we have posted modified Terms, you are indicating to us that you agree to be
          bound by the modified Terms. We may also change or discontinue all or any part of the Service, at any time and without notice, at our sole discretion.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">4. Who May Use the Service</h2>
        <p>
          You may use the Service only if you are 18 years or older, capable of forming a binding
          contract with CareerSuite.ai, and are not barred from using the Service under applicable law.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">5. Responsible Use of Services</h2>
        <p>
          You agree not to misuse the Service or help anyone else to do so. You agree not to use the Service in any manner that:
        </p>
        <ul>
          <li>Is illegal, or promotes illegal activity.</li>
          <li>Is harmful, fraudulent, deceptive, threatening, harassing, defamatory, or obscene.</li>
          <li>Attempts to reverse engineer, decompile, disable, or otherwise interfere with the Service.</li>
          <li>Uses any automated means (e.g., bots, scrapers) to access the Service for any purpose without our express written permission.</li>
        </ul>
        <p>
          You are solely responsible for the content you input into the Service (e.g., your resume data). You represent and warrant that you have all necessary rights to use the content you provide.
        </p>
        <p>
          You acknowledge that the feedback and generated content provided by the AI is for informational purposes only, may contain errors, and does not guarantee job placement or interview success. You are responsible for the final review, accuracy, and use of your application materials.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">6. User Content and Intellectual Property</h2>
        {/* This section is now a bulleted list for better readability */}
        <ul>
            <li>
                <strong>Your Content:</strong> You retain all ownership rights to the content you provide to the Service, including your resume and job description data ("Input Content").
            </li>
            <li>
                <strong>Our Service:</strong> We and our licensors exclusively own all right, title, and interest in and to the Service, including all associated intellectual property rights. You may not use our name, logo (including the "Pencil Rocket"), or other proprietary information without our express written consent.
            </li>
            <li>
                <strong>License to Process Your Content:</strong> By using the Service, you grant us (and our third-party AI provider, Google) a limited, non-exclusive, worldwide, royalty-free license to use, process, and transmit your Input Content for the sole purpose of providing the Service's features to you. This license is necessary for the AI to analyze your data and generate tailored outputs.
            </li>
            <li>
                <strong>Ownership of AI Output:</strong> You own the rights to the specific tailored resume, cover letter, or other text generated for you by the Service ("Output Content"). You are free to use this Output Content for your personal and professional purposes.
            </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3">7. Third-Party Services</h2>
        <p>
          The Service's core AI functionality is dependent on the Google Gemini API. Your use of the Service constitutes your agreement to be bound by Google's applicable terms, which may include the <a href="https://developers.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google APIs Terms of Service</a> and <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google's Privacy Policy</a>. Features requiring Google Sign-In are also subject to the terms of your Google Account.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">8. Termination & Sunset of Service</h2>
        <p>
          We have discontinued active operation and support of the Service. We reserve the right to completely sunset, take offline, or terminate any remaining functionality, assets, or web properties at any time without further notice.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">9. Disclaimers</h2>
        <p>
          THE SERVICE IS PROVIDED "AS IS," WITHOUT WARRANTY OF ANY KIND. WITHOUT LIMITING THE FOREGOING,
          WE EXPLICITLY DISCLAIM ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, QUIET
          ENJOYMENT OR NON-INFRINGEMENT, AND ANY WARRANTIES ARISING OUT OF COURSE OF DEALING OR USAGE OF TRADE.
          WE MAKE NO WARRANTY THAT THE SERVICE WILL MEET YOUR REQUIREMENTS OR BE AVAILABLE ON AN UNINTERRUPTED, SECURE, OR ERROR-FREE BASIS.
          WE MAKE NO WARRANTY REGARDING THE QUALITY, ACCURACY, TIMELINESS, TRUTHFULNESS, COMPLETENESS OR RELIABILITY OF ANY INFORMATION OR ADVICE OBTAINED THROUGH THE SERVICE.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">10. Limitation of Liability</h2>
        <p>
          NEITHER CAREERSUITE.AI NOR ANY OTHER PARTY INVOLVED IN CREATING, PRODUCING, OR DELIVERING THE SERVICE WILL BE
          LIABLE FOR ANY INCIDENTAL, SPECIAL, EXEMPLARY OR CONSEQUENTIAL DAMAGES, INCLUDING LOST PROFITS, LOSS OF DATA
          OR GOODWILL, SERVICE INTERRUPTION, COMPUTER DAMAGE OR SYSTEM FAILURE OR THE COST OF SUBSTITUTE SERVICES
          ARISING OUT OF OR IN CONNECTION WITH THESE TERMS OR FROM THE USE OF OR INABILITY TO USE THE SERVICE, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), PRODUCT LIABILITY OR ANY OTHER LEGAL THEORY.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">11. Governing Law</h2>
        <p>
          These Terms and any action related thereto will be governed by the laws of New Jersey, USA without regard to its conflict of laws provisions.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">12. Contact Information</h2>
        <p>
          If you have any questions about these Terms, please contact us via the information on our <a href="/contact" className="text-primary hover:underline">Contact Page</a>.
        </p>
      </div>
    </div>
  );
}
