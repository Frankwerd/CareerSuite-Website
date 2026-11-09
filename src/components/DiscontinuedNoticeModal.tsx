'use client';

import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Github, ExternalLink } from 'lucide-react';

// NOTE FOR MAINTAINER:
// Update this URL with your project's GitHub repository link:
const GITHUB_REPO_URL = 'https://github.com/Frankwerd/CareerSuite-Website';

export default function DiscontinuedNoticeModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show modal automatically on page load
    setIsOpen(true);
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-600 dark:bg-amber-950/50 dark:text-amber-400">
              <AlertTriangle className="h-6 w-6" />
            </div>
            <div>
              <DialogTitle className="text-xl font-bold">
                Project No Longer Available
              </DialogTitle>
            </div>
          </div>
          <DialogDescription className="pt-3 text-base text-muted-foreground leading-relaxed">
            CareerSuite.ai has been officially discontinued and is no longer available. Active development, maintenance, and support have ceased as we will not be moving forward with this project.
          </DialogDescription>
        </DialogHeader>

        {/* SECTION: GITHUB CODE LINK */}
        {/* You can customize the GitHub URL and description below */}
        <div className="my-2 rounded-lg border border-border bg-muted/50 p-4">
          <div className="flex items-start gap-3">
            <Github className="h-5 w-5 mt-0.5 text-foreground shrink-0" />
            <div className="space-y-1">
              <p className="text-sm font-medium text-foreground">
                Open Source & Code Repository
              </p>
              <p className="text-xs text-muted-foreground">
                The project source code is available on GitHub for reference and archival purposes.
              </p>
              <div className="pt-2">
                <a
                  href={GITHUB_REPO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                >
                  View Code on GitHub
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <DialogFooter className="sm:justify-end gap-2">
          <Button
            type="button"
            variant="default"
            onClick={() => setIsOpen(false)}
          >
            I Understand
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
