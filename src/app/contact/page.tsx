// src/app/contact/page.tsx
'use client'; // Using client component for potential form interactivity

import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input-landing'; // Corrected import path
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react'; // Added CheckCircle
import { BorderBeam } from '@/components/magicui/border-beam';
import { useState } from 'react';

// export const metadata: Metadata = { // Metadata cannot be exported from client components directly
//   title: 'Contact Us - CareerSuite.ai', // Updated title
//   description: 'Get in touch with the CareerSuite.ai team for support or inquiries.', // Updated description
// };
// We'll need to handle metadata differently for client components if needed, or make this a server component if form is simple.
// For now, title will be handled by a <title> tag or in layout if this was a server component.

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Basic form submission logic (replace with your actual endpoint or service)
    console.log('Form data submitted:', formData);
    // Example:
    // const response = await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData),
    // });
    // if (response.ok) {
    //   setIsSubmitted(true);
    // } else {
    //   // Handle error
    // }
    setIsSubmitted(true); // Simulate successful submission
    setFormData({ name: '', email: '', subject: '', message: ''}); // Reset form
  };

  return (
    <>
      {/* The <head> block was removed from here to fix hydration errors.
          Metadata for this page will be handled by the RootLayout or a specific parent server component.
          If this page needs unique metadata and must remain a client component,
          consider using `next/head` or wrapping it with a server component. */}
      <div className="container mx-auto px-4 py-12 min-h-[calc(100vh-10rem)]">
        <h1 className="text-4xl font-bold text-center text-foreground mb-10">Contact <span className="text-primary">CareerSuite.ai</span></h1>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="relative bg-background shadow-lg rounded-lg p-8 overflow-hidden">
            <BorderBeam size={250} duration={5} delay={1} colorFrom="gold" colorTo="silver" />
            <div className="relative z-10"> {/* Add a wrapper with z-index for content */}
              <h2 className="text-2xl font-semibold text-foreground mb-6">Send us a message</h2>
              {isSubmitted ? (
                <div className="text-center p-6 bg-green-100 text-green-700 rounded-md">
                  <CheckCircle className="h-12 w-12 mx-auto mb-3 text-green-500" />
                  <h3 className="text-xl font-semibold">Thank You!</h3>
                  <p>Your message has been sent successfully. We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">Full Name</label>
                    <Input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="bg-muted/50 border-border" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">Email Address</label>
                    <Input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="bg-muted/50 border-border" />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-muted-foreground mb-1">Subject</label>
                    <Input type="text" name="subject" id="subject" value={formData.subject} onChange={handleChange} required className="bg-muted/50 border-border" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">Message</label>
                    <Textarea name="message" id="message" rows={5} value={formData.message} onChange={handleChange} required className="bg-muted/50 border-border" />
                  </div>
                  <div>
                    <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      Send Message
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-muted/50 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-foreground mb-6">Our Contact Details</h2>
            <div className="space-y-6 text-muted-foreground">
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <a href="mailto:support@careersuite.ai" className="hover:text-primary">support@careersuite.ai</a><br />
                  {/* <a href="mailto:sales@careersuite.ai" className="hover:text-primary">sales@careersuite.ai</a> */}
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Phone</h3>
                  <p><em>(Phone support coming soon)</em></p>
                  {/* <p>(123) 456-7890 (Support)</p> */}
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Office Address</h3>
                  <p>Proudly built by a remote team.</p>
                  {/* <p>123 SaaS Street, Tech City, TX 75001, USA</p> */}
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-foreground mb-3">Business Hours</h3>
              <p className="text-muted-foreground">We primarily offer support via email and aim to respond within 24-48 hours on business days.</p>
              {/* <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM (CST)</p>
              <p className="text-muted-foreground">Saturday - Sunday: Closed</p> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
