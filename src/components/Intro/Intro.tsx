import { useState, useEffect } from 'react';

export default function Intro() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Only show Intro once per cache
        if (!localStorage.getItem('introShown')) {
            setIsVisible(true);

            const timer = setTimeout(() => {
                setIsVisible(false);
                localStorage.setItem('introShown', 'true');
            }, 4000);

            return () => clearTimeout(timer);
        }
    }, []);

    useEffect(() => {
        let scrollTimer = undefined;

        if (isVisible) {
            document.body.style.overflow = 'hidden';
            scrollTimer = setTimeout(() => {
                window.scrollTo(0, 0);
            }, 1000);
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => clearTimeout(scrollTimer);
    }, [isVisible]);

    return (
        isVisible && (
            <div className="intro-container fixed top-0 left-0 w-screen min-h-screen z-[3] overflow-hidden">
                <div className='intro relative flex justify-center items-center w-full min-h-full'>
                    <div className="introP1 flex justify-end items-center bg-[#000000] w-full min-h-screen overflow-hidden">
                        <img src="https://place-hold.it/250x250/ff0f" alt="company logo" className="relative max-w-[30dvw] md:max-w-[10dvw] left-[30%] md:left-[10%]" draggable="false" style={{ objectFit: 'contain' }} />
                    </div>
                    <div className="introP2 flex justify-start items-center bg-[#000000] w-full min-h-screen overflow-hidden">
                        <img src="https://place-hold.it/250x250/ff0f" alt="company logo" className="relative max-w-[30dvw] md:max-w-[10dvw] left-[-30%] md:left-[-10%]" draggable="false" style={{ objectFit: 'contain' }} />
                    </div>
                </div>
            </div>
        )
    );
}