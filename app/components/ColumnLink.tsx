"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface ColumnLinkProps {
  href: string;
  title: string;
  subtitle: string;
  children: ReactNode;
  className?: string;
  delay?: string;
}

const ColumnLink = ({ 
  href, 
  title, 
  subtitle, 
  children, 
  className = "", 
  delay = "0s" 
}: ColumnLinkProps) => {

  return (
    <Link
      href={href}
      className={`group flex flex-1 flex-col items-center justify-center px-6 py-12 transition-all duration-500 hover:bg-secondary/60 lg:px-10 lg:py-0 ${className}`}
    >
      <div 
        className="flex flex-col items-center gap-6 text-center animate-fade-in-up" 
        style={{ 
          animationDelay: delay,
          animationFillMode: "forwards" 
        }}
      >
        {children}
        <div className="space-y-2">
          <h2 className="font-display text-2xl font-semibold tracking-[0.15em] uppercase text-foreground transition-colors duration-300 group-hover:text-accent lg:text-3xl">
            {title}
          </h2>
          <p className="font-body text-sm italic tracking-wide text-muted-foreground lg:text-base">
            {subtitle}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ColumnLink;