import type { FC } from 'react';
import Link from 'next/link';
import { Code, Github, Linkedin, Mail } from 'lucide-react';

export const Footer: FC = () => {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 py-6 px-4">
        <div className="flex items-center gap-2 font-bold text-lg">
          <Code className="h-6 w-6 text-primary" />
          <span>Profolio</span>
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} John Doe. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
          </Link>
          <Link href="mailto:john.doe@email.com" aria-label="Email">
            <Mail className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
          </Link>
        </div>
      </div>
    </footer>
  );
};
