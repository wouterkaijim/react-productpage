import { useCallback, useEffect, useRef } from 'react';

export const useBrightnessAdjustment = () => {
    const elements = useRef<(HTMLElement | null)[]>([]);

    const setRef = useCallback((node: HTMLElement | null) => {
        if (node) {
            elements.current.push(node);
            return () => {
                elements.current = elements.current.filter(el => el !== node);
            };
        }
    }, []);

    useEffect(() => {
        const mobileBreakpoint = 768; // Define mobile breakpoint
        const isMobile = window.innerWidth <= mobileBreakpoint;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    const scaleRatio = entry.intersectionRatio;
                    const scale = Math.max(0.8, 1 + (0.2 - scaleRatio * 0.2)); // Smoother scaling effect
                    if (entry.target instanceof HTMLElement) {
                        entry.target.style.transition = 'transform 0.3s ease-out, filter 0.3s ease-out'; // Smooth transitions
                        entry.target.style.transform = `scale(${scale})`;
                    }
                });
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: buildThresholdList(100) // More thresholds for smoother transitions
            }
        );

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
    }, []);

    return setRef;
};

// Helper function to create an array of thresholds
function buildThresholdList(numSteps = 100) {
    const thresholds = [];
    for (let i = 1.0; i <= numSteps; i++) {
        const ratio = i / numSteps;
        thresholds.push(ratio);
    }
    thresholds.push(0);
    return thresholds;
}

export default useBrightnessAdjustment;
