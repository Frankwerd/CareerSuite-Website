// src/app/tos/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - YourSaaS',
  description: 'Terms of Service for YourSaaS.',
};

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-12 min-h-[calc(100vh-10rem)]"> {/* Adjust min-h as needed */}
      <h1 className="text-3xl font-bold text-foreground mb-6">Terms of Service</h1>
      <div className="prose dark:prose-invert max-w-none">
        <p><em>Last Updated: {new Date().toLocaleDateString()}</em></p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">1. Agreement to Terms</h2>
        <p>
          By accessing or using our Services, you agree to be bound by these Terms of Service ("Terms").
          If you do not agree to these Terms, do not use the Services.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">2. Changes to Terms or Services</h2>
        <p>
          We may modify the Terms at any time, in our sole discretion. If we do so, we’ll let you know
          either by posting the modified Terms on the Site or through other communications. It’s important
          that you review the Terms whenever we modify them because if you continue to use the Services
          after we have posted modified Terms on the Site, you are indicating to us that you agree to be
          bound by the modified Terms.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">3. Who May Use the Services</h2>
        <p>
          You may use the Services only if you are 18 years or older and capable of forming a binding
          contract with YourSaaS and are not barred from using the Services under applicable law.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">4. Account Registration</h2>
        <p>
          If you want to use certain features of the Services you’ll have to create an account (“Account”).
          It’s important that you provide us with accurate, complete and up-to-date information for your
          Account and you agree to update such information, as needed, to keep it accurate, complete and
          up-to-date.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">5. Use of Services</h2>
        <p>
          You agree not to use the Services in any manner that:
        </p>
        <ul>
          <li>Is illegal, or promotes illegal activity.</li>
          <li>Is harmful, fraudulent, deceptive, threatening, harassing, defamatory, obscene, or otherwise objectionable.</li>
          <li>Violates the security of any computer network, or cracks any passwords or security encryption codes.</li>
          <li>Runs Maillist, Listserv, any form of auto-responder or "spam" on the Services.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3">6. Termination</h2>
        <p>
          We may terminate or suspend your access to and use of the Services, at our sole discretion,
          at any time and without notice to you, for any reason or no reason, including but not limited
          to your breach of these Terms.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">7. Disclaimers</h2>
        <p>
          The Services are provided "AS IS," without warranty of any kind. Without limiting the foregoing,
          WE EXPLICITLY DISCLAIM ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, QUIET
          ENJOYMENT OR NON-INFRINGEMENT, AND ANY WARRANTIES ARISING OUT OF COURSE OF DEALING OR USAGE OF TRADE.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">8. Limitation of Liability</h2>
        <p>
          NEITHER YourSaaS NOR ANY OTHER PARTY INVOLVED IN CREATING, PRODUCING, OR DELIVERING THE SERVICES WILL BE
          LIABLE FOR ANY INCIDENTAL, SPECIAL, EXEMPLARY OR CONSEQUENTIAL DAMAGES, INCLUDING LOST PROFITS, LOSS OF DATA
          OR GOODWILL, SERVICE INTERRUPTION, COMPUTER DAMAGE OR SYSTEM FAILURE OR THE COST OF SUBSTITUTE SERVICES
          ARISING OUT OF OR IN CONNECTION WITH THESE TERMS OR FROM THE USE OF OR INABILITY TO USE THE SERVICES.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">9. Governing Law</h2>
        <p>
          These Terms and any action related thereto will be governed by the laws of [Your Jurisdiction] without regard to its conflict of laws provisions.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">10. Contact Information</h2>
        <p>
          If you have any questions about these Terms, please contact us at: [Your Contact Email or Link to Contact Page].
        </p>
      </div>
    </div>
  );
}
