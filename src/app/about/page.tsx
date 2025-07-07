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
        <h2 className="text-3xl font-semibold text-foreground mb-8 text-center">Our Story</h2>
        <div className="max-w-3xl mx-auto text-muted-foreground space-y-6">
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-3">The Problem We Couldn't Ignore</h3>
            <p className="text-lg leading-relaxed mb-4">
              Job searching is broken. We saw brilliant, qualified people sending dozens of applications into the void, left wondering why they never heard back. The reality is that today, your resume's first reader is often a machine—an Applicant Tracking System (ATS) programmed to filter, not to find talent. This "black hole" was failing job seekers everywhere.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-3">The Spark of an Idea</h3>
            <p className="text-lg leading-relaxed mb-4">
              Frustrated by the lack of tools that were instant, intelligent, and—most importantly—private, we decided to build the solution ourselves. We envisioned a tool that could give anyone the feedback of a seasoned recruiter, instantly. We called it the "pencil rocket" concept: combining the meticulous craft (the pencil) of resume writing with the ambitious launch (the rocket) toward a better career.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-3">Our Guiding Principles</h3>
            <p className="text-lg leading-relaxed mb-4">
              From day one, we've been guided by three core beliefs:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 pl-4">
              <li className="text-lg leading-relaxed">
                <span className="font-semibold">Empowerment Through Technology.</span> We use AI not to replace human skill, but to enhance it. Our tool is designed to give you the confidence and control to navigate your job search effectively.
              </li>
              <li className="text-lg leading-relaxed">
                <span className="font-semibold">Accessibility for All.</span> Expert career advice shouldn't be locked behind a paywall. We are committed to keeping our core tool free forever to level the playing field for every job seeker.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-3">Our Commitment to You</h3>
            <p className="text-lg leading-relaxed">
              Today, CareerSuite.ai is more than just software. It's a commitment to helping you put your best foot forward. We are constantly improving our AI to provide the most relevant insights, so you can spend less time guessing and more time preparing for the interviews you deserve.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              We're here to help you launch.
            </p>
          </div>
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
