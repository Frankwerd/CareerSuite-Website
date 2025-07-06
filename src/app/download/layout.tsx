import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Download CareerSuite.ai - Free AI Resume Analyzer',
  description: 'Download the CareerSuite.ai browser extension for free. Get instant AI-powered feedback to tailor your resume and beat ATS. Private and no account needed.',
};

export default function DownloadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
