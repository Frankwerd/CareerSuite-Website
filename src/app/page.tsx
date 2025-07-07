'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, DownloadCloud, Zap, ShieldCheck, Edit3, Target } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link'; // <<--- 1. IMPORT LINK COMPONENT
import { MagicCard } from '@/components/magicui/magic-card';
import ConnectingLinesAnimation from '@/components/magicui/ConnectingLinesAnimation';
import useScrollFadeIn from '@/hooks/useScrollFadeIn';
import { cn } from '@/lib/utils';

const HeroSection = () => {
  const [ref, isVisible] = useScrollFadeIn<HTMLElement>();
  return (
    <section
      ref={ref}
      className={cn("relative py-20 md:py-32 bg-background text-foreground overflow-hidden scroll-fade-in", { 'is-visible': isVisible })}
    >
      <div
        id="hero-animation-container"
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <ConnectingLinesAnimation />
      </div>
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="mb-12">
          <Image
            id="hero-banner-image"
            src="/banner_light.png"
            alt="CareerSuite.ai Banner - Enhance Your Resume with AI"
            width={1000}
            height={300}
            className="mx-auto rounded-lg shadow-xl max-w-4xl w-full h-auto"
            priority
          />
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Launch Your Career with an <br className="hidden md:inline" /><span className="text-primary">AI-Powered Resume</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Instantly analyze your resume against any job description. Get expert feedback to beat the ATS,
          land more interviews, and secure your dream job. <br />
          <strong className="text-foreground">Free, transparent data use, and no account needed.</strong>
        </p>
        <div className="space-x-4">
          <Button
            size="lg"
            variant="download"
            onClick={() => window.location.href = '/download'}
          >
            Analyze Your Resume FREE <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          {/* === CHANGED BLOCK START === */}
          <Link href="/how-it-works"> {/* 2. WRAP BUTTON WITH LINK */}
            <Button
              size="lg"
              variant="outline"
              applyShinyEffect // 3. RE-ENABLE SHINY EFFECT
              className="border-accent text-accent hover:bg-accent/10"
              // 4. REMOVED the old onClick for scrolling
            >
              Learn How It Works
            </Button>
          </Link>
          {/* === CHANGED BLOCK END === */}

        </div>
      </div>
    </section>
  );
};

const FeaturesSection = () => {
  const [ref, isVisible] = useScrollFadeIn<HTMLElement>();
  return (
    <section
      id="features"
      ref={ref}
      className={cn("py-16 md:py-24 bg-muted/50 scroll-fade-in", { 'is-visible': isVisible })}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">How <span className="text-primary">CareerSuite.ai</span> Empowers You</h2>
          <p className="text-muted-foreground mt-2 max-w-xl mx-auto">Our AI-powered tool gives you the edge you need in your job search, focusing on what truly matters.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <MagicCard className="cursor-pointer">
            <Target className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Targeted Resume Analysis</h3>
            <p className="text-muted-foreground text-sm">Compare your resume against specific job descriptions to identify key areas for improvement and ATS alignment.</p>
          </MagicCard>
          <MagicCard className="cursor-pointer">
            <Edit3 className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Actionable Feedback</h3>
            <p className="text-muted-foreground text-sm">Receive clear, expert-level suggestions on how to enhance your resume's content, keywords, and structure.</p>
          </MagicCard>
          <MagicCard className="cursor-pointer">
            <ShieldCheck className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Transparent Data Handling</h3>
            <p className="text-muted-foreground text-sm">Your resume and job description text are sent to Google's Gemini API for analysis. You own your inputs and the AI's outputs. Settings are stored locally. See our <Link href="/privacy" className="underline">Privacy Policy</Link> for details.</p>
          </MagicCard>
          <MagicCard className="cursor-pointer">
            <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Instant & Frictionless</h3>
            <p className="text-muted-foreground text-sm">Get immediate insights without the need to create an account or go through lengthy sign-up processes.</p>
          </MagicCard>
        </div>
      </div>
    </section>
  );
};

const PricingSection = () => {
  const [ref, isVisible] = useScrollFadeIn<HTMLElement>();
  return (
    <section
      id="pricing"
      ref={ref}
      className={cn("py-16 md:py-24 bg-background scroll-fade-in", { 'is-visible': isVisible })}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            It's <span className="text-primary">Completely FREE!</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-lg">
            That's right! Get full access to all the amazing features of CareerSuite.ai without any cost.
            We believe in providing value and making our tools accessible to everyone.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="border-2 border-primary rounded-lg p-8 md:p-12 flex flex-col items-center shadow-xl max-w-md text-center">
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">CareerSuite.ai - Free Forever</h3>
            <p className="text-5xl md:text-6xl font-bold text-primary mb-6">FREE</p>
            <p className="text-muted-foreground mb-6 text-md">
              No credit card required. No hidden fees. Just expert resume feedback.
            </p>
            <ul className="space-y-3 text-muted-foreground my-6 text-md text-left list-none">
              <li className="flex items-center"><CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" /> AI-Powered Resume vs. Job Description Analysis</li>
              <li className="flex items-center"><CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" /> Actionable Improvement Suggestions</li>
              <li className="flex items-center"><CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" /> Advanced AI Analysis with Data Transparency (via Google Cloud)</li>
              <li className="flex items-center"><CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" /> No Account or Sign-Up Needed</li>
            </ul>
            <Button
              size="lg"
              variant="download"
              className="w-full mt-4 text-lg py-3 px-6"
              onClick={() => {
                const downloadPage = document.getElementById('download-page-link');
                if (downloadPage) {
                  window.location.href = '/download';
                } else {
                  window.location.href = '/download'; // Fallback
                }
              }}
            >
              Get CareerSuite.ai FREE <DownloadCloud className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
        <p className="text-center mt-10 text-muted-foreground">
          Ready to get started? It only takes a few seconds to download and install.
        </p>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const [ref, isVisible] = useScrollFadeIn<HTMLElement>();
  return (
    <section
      id="reviews"
      ref={ref}
      className={cn("py-16 md:py-24 bg-muted/50 scroll-fade-in", { 'is-visible': isVisible })}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Job Seekers <span className="text-primary">Love</span> CareerSuite.ai</h2>
          <p className="text-muted-foreground mt-2 max-w-xl mx-auto">Hear what tech-savvy job seekers like "Jessica" are saying about CareerSuite.ai.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-background p-6 rounded-lg shadow-md flex flex-col">
            <p className="text-muted-foreground mb-4 flex-grow">"CareerSuite.ai was a game-changer! I finally understood why my applications weren't getting noticed. The AI feedback helped me tailor my resume perfectly, and I started getting calls almost immediately. Plus, the transparency about data processing and owning my results is a huge relief."</p>
            <div className="flex items-center mt-auto">
              <div>
                <p className="font-semibold text-foreground">Jessica R.</p>
                <p className="text-xs text-muted-foreground">Marketing Specialist</p>
              </div>
            </div>
          </div>
          <div className="bg-background p-6 rounded-lg shadow-md flex flex-col">
            <p className="text-muted-foreground mb-4 flex-grow">"I was skeptical about AI resume tools, but CareerSuite.ai is different. It's instant, free, and I don't need an account. The suggestions were spot-on for beating the ATS. Highly recommend it to anyone feeling stuck in their job search!"</p>
            <div className="flex items-center mt-auto">
              <div>
                <p className="font-semibold text-foreground">David L.</p>
                <p className="text-xs text-muted-foreground">Software Engineer</p>
              </div>
            </div>
          </div>
          <div className="bg-background p-6 rounded-lg shadow-md flex flex-col">
            <p className="text-muted-foreground mb-4 flex-grow">"As someone switching careers, tailoring my resume felt overwhelming. CareerSuite.ai made it so much easier by showing me exactly what to focus on for each job. And it's FREE! This tool gave me the confidence boost I needed."</p>
            <div className="flex items-center mt-auto">
              <div>
                <p className="font-semibold text-foreground">Sarah K.</p>
                <p className="text-xs text-muted-foreground">Aspiring Product Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CallToActionSection = () => {
  const [ref, isVisible] = useScrollFadeIn<HTMLElement>();
  return (
    <section
      ref={ref}
      className={cn("py-20 md:py-32 bg-primary text-primary-foreground scroll-fade-in", { 'is-visible': isVisible })}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Launch Your Career?</h2>
        <p className="text-lg md:text-xl opacity-90 mb-10 max-w-xl mx-auto">
          Stop guessing and start getting interviews. CareerSuite.ai gives you the AI-powered edge, for free and with transparent data processing.
        </p>
        <Button
          size="lg"
          variant="download"
          className="text-lg py-3 px-6"
          onClick={() => window.location.href = '/download'}
        >
          Download CareerSuite.ai FREE
          <DownloadCloud className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};


export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <TestimonialsSection />
      <CallToActionSection />
    </>
  );
}
