// src/app/about/page.tsx
import type { Metadata } from 'next';
import Image from 'next/image'; // Optional: if you want to include images

export const metadata: Metadata = {
  title: 'About Us - YourSaaS',
  description: 'Learn more about the team and mission behind YourSaaS.',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 min-h-[calc(100vh-10rem)]">
      <h1 className="text-4xl font-bold text-center text-foreground mb-10">About <span className="text-primary">YourSaaS</span></h1>

      <div className="bg-background shadow-lg rounded-lg p-8 md:p-12 mb-12">
        <h2 className="text-3xl font-semibold text-foreground mb-6 text-center">Our Mission</h2>
        <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
          At YourSaaS, our mission is to empower individuals and teams to achieve more by providing intuitive,
          powerful, and seamlessly integrated software solutions. We believe that technology should simplify
          complexities and unlock human potential. We are dedicated to building tools that not only enhance
          productivity but also bring joy and efficiency to everyday tasks.
        </p>
      </div>

      {/* Optional: Team Section Example - Uncomment and modify if needed
      <div className="my-12">
        <h2 className="text-3xl font-bold text-center text-foreground mb-10">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "Alice Wonderland", role: "CEO & Founder", img: "/path-to-alice.jpg" },
            { name: "Bob The Builder", role: "Lead Developer", img: "/path-to-bob.jpg" },
            { name: "Charlie Brown", role: "Head of Product", img: "/path-to-charlie.jpg" },
          ].map((member) => (
            <div key={member.name} className="bg-card p-6 rounded-lg shadow-md text-center">
              <Image src={member.img} alt={member.name} width={120} height={120} className="rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-card-foreground">{member.name}</h3>
              <p className="text-primary">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
      */}

      <div className="bg-muted/50 rounded-lg p-8 md:p-12">
        <h2 className="text-3xl font-semibold text-foreground mb-6 text-center">Our Story</h2>
        <div className="prose dark:prose-invert max-w-3xl mx-auto text-muted-foreground">
          <p>
            YourSaaS was founded in [Year] by a group of passionate innovators who saw a gap in the market for
            [describe the problem your SaaS solves]. Frustrated by [the common pain points], we set out to create
            a solution that was not only effective but also a pleasure to use.
          </p>
          <p>
            Since our humble beginnings, we've grown [mention any milestones, e.g., 'into a dedicated team of X people']
            and have helped thousands of users worldwide to [mention key benefits, e.g., 'streamline their workflows and
            boost their productivity']. We are constantly listening to our users and evolving our product to meet
            their ever-changing needs.
          </p>
          <p>
            Our commitment to innovation, user-centric design, and exceptional customer support is at the heart
            of everything we do. We're excited about the future and the new ways we can help you succeed.
          </p>
        </div>
      </div>

      <div className="text-center mt-12">
          <a href="/contact" className="text-primary hover:underline text-lg">
            Want to learn more or have questions? Contact Us!
          </a>
      </div>
    </div>
  );
}
