// src/app/privacy/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - YourSaaS',
  description: 'Privacy Policy for YourSaaS.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12 min-h-[calc(100vh-10rem)]"> {/* Adjust min-h as needed */}
      <h1 className="text-3xl font-bold text-foreground mb-6">Privacy Policy</h1>
      <div className="prose dark:prose-invert max-w-none">
        <p><em>Last Updated: {new Date().toLocaleDateString()}</em></p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">1. Introduction</h2>
        <p>
          Welcome to YourSaaS ("we," "our," or "us"). We are committed to protecting your privacy.
          This Privacy Policy explains how we collect, use, disclose, and safeguard your information
          when you use our software and services (collectively, "Services").
        </p>
        <p>Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the services.</p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">2. Information We Collect</h2>
        <p>
          We may collect personal information that you voluntarily provide to us when you register for an account,
          use our Services, or contact us. This information may include:
        </p>
        <ul>
          <li>Your name</li>
          <li>Email address</li>
          <li>Payment information (processed by third-party payment processors)</li>
          <li>Usage data related to your interaction with our Services</li>
          <li>Device information (e.g., IP address, browser type)</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3">3. How We Use Your Information</h2>
        <p>
          We use the information we collect in various ways, including to:
        </p>
        <ul>
          <li>Provide, operate, and maintain our Services</li>
          <li>Improve, personalize, and expand our Services</li>
          <li>Understand and analyze how you use our Services</li>
          <li>Develop new products, services, features, and functionality</li>
          <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the Service, and for marketing and promotional purposes</li>
          <li>Process your transactions</li>
          <li>Find and prevent fraud</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3">4. Sharing Your Information</h2>
        <p>
          We do not sell your personal information. We may share information with third-party vendors and service providers that perform services for us or on our behalf, such as payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">5. Data Security</h2>
        <p>
        We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">6. Your Data Protection Rights</h2>
        <p>
          Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, or delete your data. Please contact us to exercise these rights.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">7. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">8. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at: [Your Contact Email or Link to Contact Page]
        </p>
      </div>
    </div>
  );
}
