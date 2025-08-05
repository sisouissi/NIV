

import React from 'react';

export const Lungs = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M10 12H5c-.6 0-1 .4-1 1v6c0 .6.4 1 1 1h3.5" />
        <path d="M14 12h5c.6 0 1 .4 1 1v6c0 .6-.4 1-1 1h-3.5" />
        <path d="M10 12V5c0-1.7-1.3-3-3-3S4 3.3 4 5v7" />
        <path d="M14 12V5c0-1.7 1.3-3 3-3s3 1.3 3 5v7" />
        <path d="m12 12 2 3 2-3" />
        <path d="m10 15-2-3" />
        <path d="M12 12v9" />
    </svg>
);