'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { AlertTriangle, ExternalLink, Code2 } from 'lucide-react';

interface InactiveProjectModalProps {
  repoUrl?: string;
}

export function InactiveProjectModal({
  repoUrl = 'https://github.com/Frankwerd/CareerSuite-Website',
}: InactiveProjectModalProps) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="gap-3">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-600 dark:bg-amber-950 dark:text-amber-400 sm:mx-0">
            <AlertTriangle className="h-6 w-6" aria-hidden="true" />
          </div>
          <div>
            <DialogTitle className="text-xl font-bold tracking-tight">
              Project No Longer Active
            </DialogTitle>
            <DialogDescription className="mt-2 text-sm text-muted-foreground">
              CareerSuite.ai is no longer being actively maintained or developed.
              The service may be unavailable or have limited functionality.
            </DialogDescription>
          </div>
        </DialogHeader>

        <div className="rounded-md border border-border bg-muted/60 p-3 text-sm text-muted-foreground">
          <p>
            The source code for this project remains open and accessible for learning,
            exploration, or contributions.
          </p>
        </div>

        <DialogFooter className="flex-col gap-2 sm:flex-row sm:justify-end">
          <Button
            type="button"
            variant="outline"
            onClick={() => setIsOpen(false)}
            className="w-full sm:w-auto"
          >
            Dismiss
          </Button>
          <Button
            type="button"
            className="w-full sm:w-auto"
            onClick={() => window.open(repoUrl, '_blank', 'noopener,noreferrer')}
          >
            <Code2 className="mr-2 h-4 w-4" />
            View Source Code
            <ExternalLink className="ml-1.5 h-3.5 w-3.5 opacity-70" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default InactiveProjectModal;
