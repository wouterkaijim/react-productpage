import { useEffect, useRef, useCallback } from 'react';

const useAutoRefs = () => {
    const elements = useRef<(HTMLElement | null)[]>([]);

    const setRef = useCallback((node: HTMLElement | null) => {
        if (node != null) {
            elements.current.push(node);
        }
    }, []);

    useEffect(() => {
        const mobileBreakpoint = 768; // Define mobile breakpoint
        const isMobile = window.innerWidth <= mobileBreakpoint;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const isMobile = window.innerWidth <= mobileBreakpoint;
                if (entry.isIntersecting) {
                    entry.target.classList.remove('hideBep');
                    entry.target.classList.add('bep');
                } else {
                    // Only add hideBep animation to the Hero button
                    if (entry.target.classList.contains('button-fade') && !isMobile) {
                        entry.target.classList.remove('bep');
                        entry.target.classList.add('hideBep');
                    }
                }
            });
        }, { rootMargin: '-200px 0px -50px 0px', threshold: 0.5 });

        if (!isMobile) {
            elements.current.forEach(element => {
                if (element) observer.observe(element);
            });
        }

        return () => {
            elements.current.forEach(element => {
                if (element) observer.unobserve(element);
            });
            observer.disconnect();
        };
    }, [setRef]);

    return setRef;
};

export default useAutoRefs;
