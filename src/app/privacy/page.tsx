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
        
        <p><em>Last Updated: July 7, 2025</em></p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Our Commitment to Your Privacy & Data Sovereignty</h2>
        <p>
          Welcome to CareerSuite.ai ("we," "our," or "us"). We provide a suite of AI-powered tools to assist you in your job application process by leveraging AI. This Privacy Policy is a comprehensive document explaining exactly what data our browser extension and its optional backend Google Apps Script processes, why we process it, and how you remain in full control.
        </p>
        <p>
          Our core principle is <strong>Data Sovereignty</strong>: you own and control your data. Our extension is designed as a tool that operates within your own environment (your browser and your Google Account). We do not operate central servers to store your Personal Identifiable Information (PII), resume content, or job application data. Please read this policy carefully to understand our practices.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-3">1. Data Processing for Core Extension Features (In-Browser)</h2>

        <h3 className="text-xl font-semibold mt-4 mb-2">A. Data Stored Locally on Your Device (Your Browser Storage)</h3>
        <p>
          The following information is stored exclusively on your computer using secure browser storage mechanisms. We never see, collect, or upload this data.
        </p>
        <ul>
          <li><strong>My Resume Profile:</strong> All data you enter into the "My Resume Profile" page—including your name, contact information, work experience, skills, education, projects, and any demographic information you provide for autofill purposes—is saved only in your browser's local storage. This allows you to have a persistent profile without needing to re-enter it.</li>
          <li><strong>Google Gemini API Key:</strong> To power the AI features, you provide your own personal Gemini API key. This key is stored in your browser's sync storage, which allows it to be available across your synced devices (if you have browser sync enabled). It is never transmitted to us.</li>
          <li><strong>User Settings and Preferences:</strong> Your choices, such as the selected theme, are stored locally to personalize your experience.</li>
          <li><strong>Session Data:</strong> Temporary data for an active resume tailoring session (e.g., your choices for AI-suggested bullets) is stored in your browser's session storage. This data is automatically cleared when you close the browser tab or end the session.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 mb-2">B. Data Transmitted for AI Analysis & Generation (Directly to Google)</h3>
        <p>
          To provide AI-powered features, the extension must send certain content directly to Google's Generative Language API. <strong>This data is sent from your browser to Google's servers and is never routed through or stored on our servers.</strong>
        </p>
        <p>This transmitted data includes:</p>
        <ul>
          <li><strong>Job Description Text:</strong> When you click "Analyze Job Posting," the text content of the active job description page is sent to the Gemini API for analysis.</li>
          <li><strong>Resume Content:</strong> For resume tailoring, sections of your "My Resume Profile" are sent to the Gemini API, along with the job description, to generate tailored suggestions.</li>
          <li><strong>Autofill & Form Data:</strong> To enable the autofill feature, a simplified, text-only representation of the HTML form fields (including their labels and names) from an application page is sent to the Gemini API to intelligently map your profile data to the correct fields. This can include text already present on the page you are viewing.</li>
          <li><strong>Cover Letter Inputs:</strong> To generate a cover letter draft, a curated set of data—including the job description analysis and your accepted tailored resume points—is sent as a prompt to the Gemini API.</li>
        </ul>
        <p>
          The processing of this data is subject to Google's API <a href="https://developers.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Terms of Service</a> and <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Privacy Policy</a>. We recommend you review their policies to understand how they handle data.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-3">2. Data Processing for Optional Backend Features (Your Google Account)</h2>
        <p>
          Our most powerful automation features, such as the <strong>Job Tracker</strong>, are optional and require you to explicitly grant permissions for our Google Apps Script to run within your own Google Account.
        </p>
        
        <h3 className="text-xl font-semibold mt-4 mb-2">C. Required Google Account Permissions & Data Handling</h3>
        <p>When you choose to set up the Job Tracker, you authorize our open-source Apps Script to perform the following actions <strong>on your behalf, within your account:</strong></p>
        <ul>
            <li><strong>View your email address (`userinfo.email`):</strong> This permission is used solely to identify you during the initial setup process and to display your email within the extension's UI to confirm you are logged in.</li>
            <li><strong>Create and Manage Its Own File (`drive.file` scope):</strong> Our script will create a new, dedicated Google Sheet named "CareerSuite.ai Data" in your Google Drive. The `drive.file` permission is a highly secure, restricted scope that <strong>only allows our script to access this single file that it creates.</strong> The script <strong>cannot</strong> and <strong>will not</strong> view, edit, access, or delete any of your other pre-existing spreadsheets or files in your Google Drive.</li>
            <li><strong>Read and Modify Specific Emails (`gmail.modify` scope):</strong> This is our most sensitive permission, and it is essential for the <em>automation</em> of the job tracker. Its use is strictly limited:
                <ol className="list-decimal pl-6 mt-2">
                    <li><strong>Label Creation:</strong> The script creates a set of dedicated labels within your Gmail account (e.g., `CareerSuite.AI/To Process`). This gives you full visibility into which emails are being targeted.</li>
                    <li><strong>Targeted Reading:</strong> Our script <strong>only reads emails that have been categorized under these specific labels</strong> by a Gmail filter that is also created during setup. It does not scan your general inbox or any other folders.</li>
                    <li><strong>Sending for Analysis:</strong> Snippets from these specific emails are sent to the Google Gemini API to extract application details.</li>
                    <li><strong>Label Modification (The Reason for `modify`):</strong> After an email has been successfully processed, the script <strong>modifies its labels</strong> (e.g., removes `.../To Process` and adds `.../Processed`). This is critical to prevent the same email from being processed endlessly every time the automation runs. <strong>This is why a `readonly` permission is insufficient.</strong></li>
                </ol>
            </li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 mb-2">D. UserProperties Storage (Within Your Google Account)</h3>
        <p>
          The Apps Script stores your Gemini API key (passed securely from the extension) and internal configuration details (like the IDs of the Gmail labels it created) in your personal `UserProperties` store. This is a private storage space tied to the script running within your Google Account, which we do not have access to.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">3. Data We Do NOT Collect</h2>
        <p>To be perfectly clear, CareerSuite.ai and its developers <strong>never</strong> collect, see, store, or have access to:</p>
        <ul>
          <li>Your Google Account password.</li>
          <li>Your Gemini API key.</li>
          <li>The content of your resume or job descriptions.</li>
          <li>The content of your emails.</li>
          <li>Any data within your Job Tracker Google Sheet.</li>
          <li>Your browsing history.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3">4. Third-Party Services</h2>
        <p>
          Our service functions as a powerful interface to third-party services that you control:
        </p>
        <ul>
            <li><strong>Google Gemini API:</strong> For all AI features.</li>
            <li><strong>Google Drive & Google Sheets:</strong> For the optional Job Tracker.</li>
            <li><strong>Gmail:</strong> For the optional Job Tracker automation.</li>
        </ul>
        <p>
            Your use of these services through our extension is also governed by their respective privacy policies and terms of service.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-3">5. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time to reflect changes in our services or for other operational, legal, or regulatory reasons. We will post any changes on this page and in our store listing, and we will update the "Last Updated" date at the top of this policy. We encourage you to review it periodically.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">6. Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy or our data practices, please contact us via the support links provided on the official CareerSuite.ai Chrome Web Store page.
        </p>
      </div>
    </div>
  );
}
