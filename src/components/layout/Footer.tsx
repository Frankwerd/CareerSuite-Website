// src/components/layout/Footer.tsx
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-muted text-muted-foreground border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-2">YourSaaS</h3>
            <p className="text-sm">
              Making your life easier, one click at a time.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-2">Quick Links</h4>
            <ul className="space-y-1 text-sm">
              <li><Link href="/#features" className="hover:text-primary">Features</Link></li>
              <li><Link href="/#pricing" className="hover:text-primary">Pricing</Link></li>
              <li><Link href="/download" className="hover:text-primary">Download</Link></li>
              <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-2">Legal</h4>
            <ul className="space-y-1 text-sm">
              <li><Link href="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="/tos" className="hover:text-primary">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} YourSaaS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
