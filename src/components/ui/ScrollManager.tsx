"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollManager() {
    const pathname = usePathname();

    useEffect(() => {
        // 1. Disable browser's default scroll restoration immediately
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }

        // 2. Force scroll to top
        // We use a small timeout to ensure this runs after the browser attempts to restore scroll
        const handleScrollTop = () => {
            window.scrollTo(0, 0);
        };

        handleScrollTop();

        // Backup: try again slightly later to override any race conditions
        const timer = setTimeout(handleScrollTop, 10);

        return () => clearTimeout(timer);
    }, [pathname]);

    return null;
}
