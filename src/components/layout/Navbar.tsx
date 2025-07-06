// src/components/layout/Navbar.tsx
import Link from 'next/link';
import Image from 'next/image'; // Import the Next.js Image component

const Navbar = () => {
  return (
    <nav className="bg-background border-b border-border shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center"> {/* Adjusted for image logo */}
          <Image
            src="/fab_logo_neutral.png" // Path to your logo in the public folder
            alt="CareerSuite.ai Logo"
            width={150} // Adjust width as needed, e.g., original width of your logo
            height={40} // Adjust height as needed, e.g., h-10 for Tailwind (40px)
            className="h-10 w-auto" // Tailwind class for height, width auto to maintain aspect ratio
            priority // Prioritize loading for LCP
          />
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
          {/* Login and Sign Up links removed as requested */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
