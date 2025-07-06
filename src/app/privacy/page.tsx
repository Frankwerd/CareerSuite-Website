// src/app/privacy/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - CareerSuite.ai',
  description: 'Understand how CareerSuite.ai handles your data. Our commitment to your privacy as a free, AI-powered resume analyzer.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12 min-h-[calc(100vh-10rem)]"> {/* Adjust min-h as needed */}
      <h1 className="text-3xl font-bold text-foreground mb-6">Privacy Policy for CareerSuite.ai</h1>
      <div className="prose dark:prose-invert max-w-none">
        <p><em>Last Updated: {new Date().toLocaleDateString()}</em></p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">1. Our Commitment to Your Privacy</h2>
        <p>
          Welcome to CareerSuite.ai ("we," "our," or "us"). CareerSuite.ai is a free, AI-powered tool that analyzes a user's resume against a specific job description and provides actionable feedback for improvement.
          A core principle of our service is being **Privacy-First & Requiring No Account.**
        </p>
        <p>
          This Privacy Policy explains our position on data. Given our architecture, it's quite simple:
          <strong>we do not collect, store, or upload your personal data, resumes, or job descriptions.</strong>
        </p>
        <p>Please read this privacy policy carefully.</p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">2. Information We Do Not Collect</h2>
        <p>
          Since all processing happens in your browser via local storage, CareerSuite.ai **DOES NOT** collect, transmit, or store on its servers any of the following:
        </p>
        <ul>
          <li>Your resume content (text, formatting, or the file itself).</li>
          <li>Job description content you paste or use.</li>
          <li>Personal information such as your name, email address, or any other contact details (as no account is needed).</li>
          <li>IP addresses or specific device information linked to your usage of the core analysis feature.</li>
        </ul>
        <p>
          The analysis and feedback generation occur entirely on your local machine. Your data never leaves your computer to be processed by our servers for the core resume analysis function.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">3. Information We May Collect (Non-Personal & Optional)</h2>
        <p>
          For the purpose of improving our website and general user experience, we may collect anonymous, aggregated usage statistics through standard web analytics tools (like Vercel Analytics, which is mentioned in the project's `layout.tsx`). This may include:
        </p>
        <ul>
          <li>Page views (e.g., which pages like "About Us" or "Download" are visited).</li>
          <li>General interaction events (e.g., clicks on non-data-submitting buttons, like a "Learn More" button).</li>
          <li>Browser type and version, operating system, and screen resolution for ensuring compatibility.</li>
        </ul>
        <p>This data is anonymized and cannot be used to identify you or link back to any specific resume or job description you analyze. This data helps us understand how users interact with the informational parts of our website so we can improve them.</p>
        <p>If you voluntarily contact us via email (e.g., for support), we will naturally have your email address and any information you provide in that communication. This is standard for any email correspondence.</p>


        <h2 className="text-2xl font-semibold mt-6 mb-3">4. How We Use Information (The Limited Data We Have)</h2>
        <p>
          The limited anonymous data we collect is used to:
        </p>
        <ul>
          <li>Understand how our website is used and improve its performance and content.</li>
          <li>Troubleshoot and improve website functionality.</li>
        </ul>
        <p>Information from direct contact (e.g., support emails) is used solely to communicate with you and address your queries.</p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">5. Data Security (For Data Handled by You)</h2>
        <p>
        While we don't store your resume or job description data, it's important to note that the data processing occurs in your browser. The security of your local machine and browser environment is your responsibility. Ensure your system is secure to protect any data you work with locally.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">6. Third-Party Links & Services</h2>
        <p>
          Our website may contain links to other websites (e.g., a link to the Chrome Web Store for downloading the extension). This Privacy Policy applies only to CareerSuite.ai. We are not responsible for the privacy practices of other sites.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">7. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time to reflect any changes in our practices or for other operational, legal, or regulatory reasons. Any changes will be posted on this page.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">8. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us via the information provided on our <a href="/contact" className="text-primary hover:underline">Contact Page</a>.
        </p>
      </div>
    </div>
  );
}
