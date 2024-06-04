import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { CSSTransition } from 'react-transition-group';

export default function Header() {
    const [headerClass, setHeaderClass] = useState('v1'); // Default class
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.pageYOffset;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolledPercentage = (currentScrollY / height) * 100;

            // Update the header class based on scroll percentage
            if (scrolledPercentage > 2) {
                setHeaderClass('v3-desktop'); // Change header to pop-up when scrolled beyond orginal
            } else {
                setHeaderClass('v1');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <>
            <header id="mobile-header" className={`top-0 left-0 w-full z-[2] flex flex-col justify-center items-center min-h-[44px] bg-[#030508] text-[#ffffff] border-b-0 py-[1rem] sm:hidden ${headerClass}`}>
                <div className="flex w-full flex-row justify-between px-[2rem]">
                    <a href="https://google.com/" target="_blank">
                        <img src="https://place-hold.it/75x75/ff0f" alt="company logo" className="max-w-[2.25rem] mt-[.5rem] pb-[.5rem] rounded-full" />
                    </a>
                    <button onClick={toggleMenu} className="dropdown-button scale-[1.5]">
                        <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                    </button>
                </div>
                <CSSTransition
                    in={isOpen}
                    timeout={300}
                    classNames="menu-animation"
                    unmountOnExit
                >
                    <div className="links flex flex-col justify-center items-center gap-[2rem] pt-[.5rem]">
                        <button
                            className="option uppercase"
                            onClick={() => {
                                const overviewElement = document.getElementById("overview");
                                if (overviewElement) {
                                    const scrollOffset = 78; // Fix for the header overlapping the section (no impact on desktop)
                                    const elementPosition = overviewElement.getBoundingClientRect().top + window.pageYOffset;
                                    const offsetPosition = elementPosition - scrollOffset;

                                    window.scrollTo({
                                        top: offsetPosition,
                                        behavior: "smooth"
                                    });
                                }
                                closeMenu();
                            }}
                        >
                            Overview
                        </button>
                        <button
                            className="option uppercase"
                            onClick={() => {
                                document.getElementById("order")?.scrollIntoView({
                                    behavior: "smooth",
                                    block: "center"
                                });
                                closeMenu();
                            }}
                        >
                            Buy
                        </button>
                        <button
                            className="option uppercase"
                            onClick={() => {
                                const featuresElement = document.getElementById("features");
                                if (featuresElement) {
                                    const scrollOffset = 40; // Fix for the header overlapping the section (no impact on desktop)
                                    const elementPosition = featuresElement.getBoundingClientRect().top + window.pageYOffset;
                                    const offsetPosition = elementPosition - scrollOffset;

                                    window.scrollTo({
                                        top: offsetPosition,
                                        behavior: "smooth"
                                    });
                                }
                                closeMenu();
                            }}
                        >
                            Example models
                        </button>
                    </div>
                </CSSTransition>
            </header>
            <header id="desktop-header" className={`top-0 left-0 w-full z-[2] hidden sm:flex flex-col justify-center items-center min-h-[44px] bg-[#030508] text-[#ffffff] border-b-0 py-[1rem] ${headerClass}`}>
                <div className="flex flex-row items-center gap-[4rem] py-[1rem]">
                    <a href="https://google.com/" target="_blank">
                        <img src="https://place-hold.it/75x75/ff0f" alt="company logo" className="max-w-[2.25rem] rounded-full" />
                    </a>
                    <button
                        className="option uppercase"
                        onClick={() => {
                            document.getElementById("overview")?.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                            });
                        }}
                    >
                        Overview
                    </button>
                    <button
                        className="option uppercase"
                        onClick={() => {
                            document.getElementById("order")?.scrollIntoView({
                                behavior: "smooth",
                                block: "center"
                            });
                        }}
                    >
                        Buy
                    </button>
                    <button
                        className="option uppercase"
                        onClick={() => {
                            document.getElementById("features")?.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                            });
                        }}
                    >
                        Example models
                    </button>
                </div>
            </header>
        </>
    );
}
