// src/app/download/page.tsx
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { DownloadCloud, ChromeIcon, CheckCircle } from 'lucide-react'; // Assuming you might want a Chrome icon

export const metadata: Metadata = {
  title: 'Download YourSaaS Extension - YourSaaS',
  description: 'Download the YourSaaS browser extension and supercharge your productivity.',
};

export default function DownloadPage() {
  // Replace with your actual extension link
  const extensionLink = "https_chrome_google_com/webstore/category/extensions"; // Placeholder

  return (
    <div className="container mx-auto px-4 py-12 text-center min-h-[calc(100vh-10rem)]">
      <DownloadCloud className="h-24 w-24 text-primary mx-auto mb-6" />
      <h1 className="text-4xl font-bold text-foreground mb-4">Get YourSaaS Now!</h1>
      <p className="text-xl text-muted-foreground mb-8 max-w-lg mx-auto">
        Click the button below to download the YourSaaS browser extension and start revolutionizing your workflow today.
      </p>

      <Button
        size="lg"
        className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6"
        onClick={() => window.open(extensionLink, '_blank')}
      >
        <ChromeIcon className="mr-3 h-6 w-6" /> {/* Example Icon */}
        Download for Chrome
      </Button>

      <div className="mt-12 text-left max-w-md mx-auto space-y-4">
        <h2 className="text-2xl font-semibold text-foreground mb-4 text-center">With YourSaaS, you can:</h2>
        <ul className="space-y-2">
          <li className="flex items-start">
            <CheckCircle className="h-6 w-6 text-green-500 mr-2 mt-1 flex-shrink-0" />
            <span>Seamlessly integrate with your favorite tools and websites.</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="h-6 w-6 text-green-500 mr-2 mt-1 flex-shrink-0" />
            <span>Automate repetitive tasks and save valuable time.</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="h-6 w-6 text-green-500 mr-2 mt-1 flex-shrink-0" />
            <span>Access powerful features directly within your browser.</span>
          </li>
        </ul>
      </div>

      <p className="mt-10 text-sm text-muted-foreground">
        Currently available for Google Chrome. More browsers coming soon!
      </p>
      <p className="text-sm text-muted-foreground mt-2">
        Having trouble? <a href="/contact" className="text-primary hover:underline">Contact Support</a>
      </p>
    </div>
  );
}
