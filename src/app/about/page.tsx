// src/app/about/page.tsx
import type { Metadata } from 'next';
import Image from 'next/image'; // Optional: if you want to include images

export const metadata: Metadata = {
  title: 'About CareerSuite.ai - Our Mission & Story',
  description: 'Learn about CareerSuite.ai: our mission to help job seekers with a free, private, AI-powered resume analyzer, and the story behind our innovative tool.',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 min-h-[calc(100vh-10rem)]">
      <h1 className="text-4xl font-bold text-center text-foreground mb-10">About <span className="text-primary">CareerSuite.ai</span></h1>

      <div className="bg-background shadow-lg rounded-lg p-8 md:p-12 mb-12">
        <h2 className="text-3xl font-semibold text-foreground mb-6 text-center">Our Mission</h2>
        <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
          At CareerSuite.ai, our mission is to empower job seekers by providing instant, expert-level feedback
          on how to tailor their resume for any job—for free, and with complete privacy. We believe that everyone
          deserves a fair chance to land their dream job, and that technology can bridge the gap between talent and opportunity.
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
            CareerSuite.ai was born from a simple observation: job searching is incredibly tough, and many talented individuals
            get overlooked because their resumes aren't perfectly tailored to automated screening systems (ATS) and specific job roles.
            We saw job seekers sending applications into a "black hole," unsure why they weren't getting responses.
          </p>
          <p>
            Frustrated by the lack of accessible, private, and instant feedback tools, we decided to build CareerSuite.ai.
            Our goal was to create a "pencil rocket" for careers – a tool that combines the meticulous craft of resume writing
            with the ambitious launch towards success. We focused on a privacy-first approach, ensuring all analysis happens
            directly in the user's browser, because your career data is yours alone.
          </p>
          <p>
            Today, CareerSuite.ai offers a completely free way for anyone to get AI-powered insights, helping them write more impactful
            resumes and feel more confident and in control of their job search. We're committed to continuously improving our AI and
            supporting job seekers in launching their careers.
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
