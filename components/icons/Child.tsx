import React from 'react';

export const Child = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="10" r="3" />
    <path d="M12 13c-2.76 0-5 2.24-5 5h10c0-2.76-2.24-5-5-5z" />
  </svg>
);