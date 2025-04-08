import React from 'react';
import ScrollToTop from './ScrollToTop';

export default function ContentArea({ children }) {
  return (
    <div className="min-h-[600px]">
        {children}
        <ScrollToTop />
    </div>
  );
}