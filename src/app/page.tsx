// src/app/page.tsx
'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart, CheckCircle, DownloadCloud, Zap } from 'lucide-react';
// import Image from 'next/image'; // Uncomment if you add a hero image or in sections below

const HeroSection = () => (
  <section className="py-20 md:py-32 bg-background text-foreground">
    <div className="container mx-auto px-4 text-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
        The Future of <span className="text-primary">YourSaaS</span> Is Here
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
        Streamline your workflow, boost productivity, and achieve more with our innovative SaaS solution. Get started today and experience the difference.
      </p>
      <div className="space-x-4">
        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
          Get Started Free <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
        <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
          Learn More
        </Button>
      </div>
      {/* Optional: Placeholder for a product image or illustration below CTA */}
      {/* <div className="mt-12">
        <Image src="/path-to-your-product-showcase.png" alt="Product Showcase" width={800} height={500} className="mx-auto rounded-lg shadow-xl"/>
      </div> */}
    </div>
  </section>
);

const FeaturesSection = () => (
  <section id="features" className="py-16 md:py-24 bg-muted/50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Why Choose <span className="text-primary">YourSaaS</span>?</h2>
        <p className="text-muted-foreground mt-2 max-w-xl mx-auto">Discover the powerful features that make our platform the best choice for your needs.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-background p-6 rounded-lg shadow-md text-center">
          <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-foreground mb-2">Lightning Fast</h3>
          <p className="text-muted-foreground text-sm">Experience unparalleled speed and efficiency with our optimized platform.</p>
        </div>
        <div className="bg-background p-6 rounded-lg shadow-md text-center">
          <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-foreground mb-2">Easy to Use</h3>
          <p className="text-muted-foreground text-sm">Intuitive design and simple navigation make it easy for anyone to get started.</p>
        </div>
        <div className="bg-background p-6 rounded-lg shadow-md text-center">
          <BarChart className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-foreground mb-2">Powerful Analytics</h3>
          <p className="text-muted-foreground text-sm">Gain valuable insights with our comprehensive analytics and reporting tools.</p>
        </div>
      </div>
    </div>
  </section>
);

const PricingSection = () => (
  <section id="pricing" className="py-16 md:py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Flexible <span className="text-primary">Pricing</span> Plans</h2>
        <p className="text-muted-foreground mt-2 max-w-xl mx-auto">Choose the plan that’s right for you. No hidden fees, cancel anytime.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 items-stretch">
        {/* Basic Plan */}
        <div className="border border-border rounded-lg p-8 flex flex-col">
          <h3 className="text-2xl font-semibold text-foreground mb-1">Basic</h3>
          <p className="text-muted-foreground mb-4">For individuals & small teams</p>
          <p className="text-4xl font-bold text-foreground mb-1">$10<span className="text-sm font-normal text-muted-foreground">/mo</span></p>
          <ul className="space-y-2 text-muted-foreground my-6 text-sm flex-grow">
            <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Feature A</li>
            <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Feature B</li>
            <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> 5 GB Storage</li>
          </ul>
          <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">Choose Plan</Button>
        </div>
        {/* Pro Plan (Most Popular) */}
        <div className="border-2 border-primary rounded-lg p-8 relative flex flex-col shadow-xl">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-3 py-1 text-xs font-semibold rounded-full">MOST POPULAR</div>
          <h3 className="text-2xl font-semibold text-foreground mb-1">Pro</h3>
          <p className="text-muted-foreground mb-4">For growing businesses</p>
          <p className="text-4xl font-bold text-foreground mb-1">$25<span className="text-sm font-normal text-muted-foreground">/mo</span></p>
          <ul className="space-y-2 text-muted-foreground my-6 text-sm flex-grow">
            <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> All Basic Features</li>
            <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Feature C & D</li>
            <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> 20 GB Storage</li>
            <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Priority Support</li>
          </ul>
          <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Choose Plan</Button>
        </div>
        {/* Enterprise Plan */}
        <div className="border border-border rounded-lg p-8 flex flex-col">
          <h3 className="text-2xl font-semibold text-foreground mb-1">Enterprise</h3>
          <p className="text-muted-foreground mb-4">For large organizations</p>
          <p className="text-4xl font-bold text-foreground mb-1">$50<span className="text-sm font-normal text-muted-foreground">/mo</span></p>
          <ul className="space-y-2 text-muted-foreground my-6 text-sm flex-grow">
            <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> All Pro Features</li>
            <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Feature E, F, G</li>
            <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> 100 GB Storage</li>
            <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Dedicated Support</li>
          </ul>
          <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">Choose Plan</Button>
        </div>
      </div>
    </div>
  </section>
);

const TestimonialsSection = () => (
  <section id="reviews" className="py-16 md:py-24 bg-muted/50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Loved by <span className="text-primary">Teams</span> Worldwide</h2>
        <p className="text-muted-foreground mt-2 max-w-xl mx-auto">Hear what our amazing customers have to say about YourSaaS.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Testimonial 1 */}
        <div className="bg-background p-6 rounded-lg shadow-md">
          <p className="text-muted-foreground mb-4">"YourSaaS has completely transformed how we manage our projects. It's intuitive, powerful, and the support is top-notch!"</p>
          <div className="flex items-center">
            {/* <Image src="/path-to-avatar1.jpg" alt="User Avatar" width={40} height={40} className="rounded-full mr-3" /> */}
            <div>
              <p className="font-semibold text-foreground">Jane Doe</p>
              <p className="text-xs text-muted-foreground">CEO, Innovatech</p>
            </div>
          </div>
        </div>
        {/* Testimonial 2 */}
        <div className="bg-background p-6 rounded-lg shadow-md">
          <p className="text-muted-foreground mb-4">"The efficiency gains we've seen since adopting YourSaaS are incredible. Highly recommended for any team looking to optimize."</p>
          <div className="flex items-center">
            {/* <Image src="/path-to-avatar2.jpg" alt="User Avatar" width={40} height={40} className="rounded-full mr-3" /> */}
            <div>
              <p className="font-semibold text-foreground">John Smith</p>
              <p className="text-xs text-muted-foreground">Project Manager, Solutions Co.</p>
            </div>
          </div>
        </div>
        {/* Testimonial 3 */}
        <div className="bg-background p-6 rounded-lg shadow-md">
          <p className="text-muted-foreground mb-4">"A fantastic product with an even better team behind it. YourSaaS is a game-changer for our industry."</p>
          <div className="flex items-center">
            {/* <Image src="/path-to-avatar3.jpg" alt="User Avatar" width={40} height={40} className="rounded-full mr-3" /> */}
            <div>
              <p className="font-semibold text-foreground">Alice Brown</p>
              <p className="text-xs text-muted-foreground">Lead Developer, TechForward</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const CallToActionSection = () => (
  <section className="py-20 md:py-32 bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Business?</h2>
      <p className="text-lg md:text-xl opacity-90 mb-10 max-w-xl mx-auto">
        Join thousands of satisfied customers and take your productivity to the next level with YourSaaS.
      </p>
      <Button size="lg" variant="outline" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-primary-foreground hover:border-primary-foreground/90">
        Sign Up For Free
        <DownloadCloud className="ml-2 h-5 w-5" />
      </Button>
    </div>
  </section>
);


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
