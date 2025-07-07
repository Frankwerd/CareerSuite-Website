import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - CareerSuite.ai',
  description: 'Understand how CareerSuite.ai handles your data and our commitment to your privacy.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12 min-h-[calc(100vh-10rem)]">
      <h1 className="text-3xl font-bold text-foreground mb-6">Privacy Policy for CareerSuite.ai</h1>
      <div className="prose dark:prose-invert max-w-none">
        {/* For legal documents, it's best to use a static date that you update only when the policy changes. */}
        <p><em>Last Updated: July 7, 2025</em></p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Our Commitment to Your Privacy</h2>
        <p>
          Welcome to CareerSuite.ai ("we," "our," or "us"). CareerSuite.ai is a suite of AI-powered tools designed to assist you in your job application process. This Privacy Policy explains what data our extension processes and why. We are committed to transparency and handling your data with care. This policy applies to the CareerSuite.ai browser extension and its related services. Please read it carefully.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-3">Information We Process</h2>
        <p>
          Our extension uses a combination of on-device storage and external API calls to provide its features. Here is a breakdown of the data we process:
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">A. Core AI Analysis Data (Sent to Google)</h3>
        <p>
          To provide AI-powered features like job description analysis, resume tailoring, cover letter generation, and autofill suggestions, we must send certain data to our AI service provider, Google (via the Gemini API). This data includes:
        </p>
        <ul>
          <li><strong>Job Description Text:</strong> The text content of job postings you choose to analyze.</li>
          <li><strong>Resume Content:</strong> The full text of your resume, either from an uploaded PDF file or from your saved "My Resume Profile."</li>
          <li><strong>User-Provided Prompts:</strong> Any text you enter that is used to generate AI content.</li>
        </ul>
        <p>
          This data is sent securely to Google's servers for the sole purpose of generating the AI response, which is then sent back to you. We do not collect, log, or store your resume, job descriptions, or prompts on our own servers. The use of this data is also subject to <a href="https://developers.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google's API Terms of Service</a> and <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Privacy Policy</a>.
        </p>
        
        <h3 className="text-xl font-semibold mt-4 mb-2">B. Google Account Information (Optional Features)</h3>
        <p>
          Some features, like the "Master Job Manager" (MJM) Sheet integration, are optional and require you to sign in with your Google Account. If you choose to use these features, you will be asked to grant the extension permission to:
        </p>
        <ul>
          <li><strong>View your email address:</strong> To associate your account with your Job Tracker sheet.</li>
          <li><strong>View, edit, create, and delete your Google Sheets files:</strong> To create, manage, and read data from your MJM Sheet.</li>
        </ul>
        <p>
          We only access the specific MJM sheet created by the extension. We do not access, read, or modify any of your other Google Sheets files. The 'delete' permission is included in the scope granted by Google, but our code will not delete any files without your direct action.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">C. Locally Stored Data (On Your Device)</h3>
        <p>
          The following information is stored locally on your computer using browser storage mechanisms:
        </p>
        <ul>
          <li><strong>My Resume Profile:</strong> All data you enter into the "My Resume Profile" page is saved locally in your browser. It is not uploaded to our servers.</li>
          <li><strong>API Key:</strong> Your Google Gemini API key is stored in your browser's sync storage, allowing you to use it across your synced devices.</li>
          <li><strong>Settings and Preferences:</strong> Your choices, such as the selected theme, are stored locally.</li>
          <li><strong>Session Data:</strong> Temporary data for an active tailoring session is stored in your browser's session storage and is cleared when the session ends.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3">How We Use Information</h2>
        <p>We use the data we process for the following purposes:</p>
        <ul>
          <li><strong>To Provide Core Features:</strong> We use your resume and job description data to create API requests to Google's Gemini service to provide analysis, tailoring, and generation features.</li>
          <li><strong>To Enable Optional Features:</strong> We use your Google Account permissions to create and interact with your personal MJM Sheet if you choose to use that feature.</li>
          <li><strong>To Improve the Extension (Anonymous Data):</strong> We may collect anonymous, aggregated usage statistics to understand how users interact with the extension's UI. This data is not tied to your personal information, resume content, or Google account. Examples include which buttons are clicked most often or which features are most used.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Data Security</h2>
        <p>
          We are committed to securing your data. We use secure HTTPS protocols for all API calls. Data stored locally on your machine is protected by your browser's security model. The security of your own computer and Google account is your responsibility.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-3">Third-Party Services</h2>
        <p>
          Our core AI functionality relies on the Google Gemini API. Your use of these features is subject to Google's policies. The MJM Sheet feature uses Google Sheets.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted on our website and in our store listing, and the "Last Updated" date will be revised.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us via the information provided on our website or Chrome Web Store page.
        </p>
      </div>
    </div>
  );
}
