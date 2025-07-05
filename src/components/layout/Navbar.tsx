// src/components/layout/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-background border-b border-border shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          YourSaaS
        </Link>
        <div className="space-x-4 flex items-center">
          <Link href="/#features" className="text-foreground hover:text-primary transition-colors">
            Features
          </Link>
          <Link href="/#pricing" className="text-foreground hover:text-primary transition-colors">
            Pricing
          </Link>
          <Link href="/#reviews" className="text-foreground hover:text-primary transition-colors">
            Reviews
          </Link>
          <Link href="/about" className="text-foreground hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
            Contact
          </Link>
          <Link href="/download" className="text-foreground hover:text-primary transition-colors">
            Download
          </Link>
          <Link href="/login" className="text-foreground hover:text-primary transition-colors">
            Login
          </Link>
          <Link href="/signup" className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md text-sm font-medium transition-colors">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
