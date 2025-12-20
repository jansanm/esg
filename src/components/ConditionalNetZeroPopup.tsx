'use client';

import { usePathname } from 'next/navigation';
import NetZeroPopup from './NetZeroPopup';

const ConditionalNetZeroPopup = () => {
  const pathname = usePathname();
  
  // Don't show on homepage (both / and /homepage routes)
  if (pathname === '/' || pathname === '/homepage') {
    return null;
  }
  
  return <NetZeroPopup />;
};

export default ConditionalNetZeroPopup;
