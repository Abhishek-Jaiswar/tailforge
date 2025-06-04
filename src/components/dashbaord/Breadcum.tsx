'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import React from 'react';

const Breadcrumb = () => {
  const pathname = usePathname(); // e.g. "/dashboard/settings"
  const segments = pathname.split('/').filter(Boolean); // ["dashboard", "settings"]

  return (
    <div className="text-sm text-neutral-400 flex items-center space-x-2">
      {segments.map((segment, index) => {
        const href = '/' + segments.slice(0, index + 1);
        const label = segment
          .replace(/-/g, ' ')
          .replace(/([A-Z])/g, ' $1')
          .replace(/^./, str => str.toUpperCase());

        return (
          <React.Fragment key={href}>
            
            <Link href={href} className="hover:underline text-neutral-200">
              {label}
            </Link>
            <span>/</span>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
