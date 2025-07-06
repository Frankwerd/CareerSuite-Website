// src/app/contact/page.tsx
'use client'; // Using client component for potential form interactivity

import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'; // Assuming you have an Input component
import { Textarea } from '@/components/ui/textarea'; // Assuming you have a Textarea component
import { Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

// export const metadata: Metadata = { // Metadata cannot be exported from client components directly
//   title: 'Contact Us - YourSaaS',
//   description: 'Get in touch with the YourSaaS team.',
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
      {/* Fallback title for client component */}
      <head>
        <title>Contact Us - YourSaaS</title>
        <meta name="description" content="Get in touch with the YourSaaS team." />
      </head>
      <div className="container mx-auto px-4 py-12 min-h-[calc(100vh-10rem)]">
        <h1 className="text-4xl font-bold text-center text-foreground mb-10">Contact <span className="text-primary">Us</span></h1>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-background shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-foreground mb-6">Send us a message</h2>
            {isSubmitted ? (
              <div className="text-center p-6 bg-green-100 text-green-700 rounded-md">
                <CheckCircle className="h-12 w-12 mx-auto mb-3 text-green-500" /> {/* You'll need to import CheckCircle from lucide-react if you use this part */}
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

          {/* Contact Information */}
          <div className="bg-muted/50 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-foreground mb-6">Our Contact Details</h2>
            <div className="space-y-6 text-muted-foreground">
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <a href="mailto:support@yoursaas.com" className="hover:text-primary">support@yoursaas.com</a><br />
                  <a href="mailto:sales@yoursaas.com" className="hover:text-primary">sales@yoursaas.com</a>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Phone</h3>
                  <p>(123) 456-7890 (Support)</p>
                  <p>(123) 456-7891 (Sales)</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Office Address</h3>
                  <p>123 SaaS Street, Tech City, TX 75001, USA</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-foreground mb-3">Business Hours</h3>
              <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM (CST)</p>
              <p className="text-muted-foreground">Saturday - Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
