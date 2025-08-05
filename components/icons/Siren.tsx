import React from 'react';

export const Siren = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M6.26 3.16 5 6.13l4 6.94 1 1.72 1-1.72 4-6.94-1.26-2.97A2.5 2.5 0 0 0 12 2a2.5 2.5 0 0 0-5.74 1.16z"/>
        <path d="M9 13H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4"/>
        <path d="M9 13a3 3 0 0 1 6 0"/>
    </svg>
);