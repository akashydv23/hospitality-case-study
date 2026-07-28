import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import JharokhaFrame from './JharokhaFrame';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface FloatingCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function FloatingCard({ children, className, ...props }: FloatingCardProps) {
  return (
    <div
      className={cn(
        "relative bg-heritage-ivory-card border border-heritage-sandstone shadow-2xl p-8 rounded-sm overflow-hidden",
        "text-heritage-charcoal flex flex-col",
        className
      )}
      {...props}
    >
      <JharokhaFrame />
      <div className="relative z-10 w-full h-full flex flex-col">
        {children}
      </div>
    </div>
  );
}
