'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        // Immediately redirect to contact page
        router.push('/contact');
    }, [router]);

    // Show nothing while redirecting
    return null;
};

export default NotFound;