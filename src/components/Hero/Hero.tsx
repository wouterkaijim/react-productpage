import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import useAutoRefs from '../../hooks/useAutoRefs';

export default function Hero() {
    const updateVideoSource = () => window.innerWidth <= 1024 ? "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" : "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4";
    const [videoSource, setVideoSource] = useState(updateVideoSource());
    const [, setShowDiv] = useState(true);
    const setRef = useAutoRefs();

    useEffect(() => {
        const handleResize = () => {
            setVideoSource(updateVideoSource());
        };

        // Check window resize
        window.addEventListener('resize', handleResize);

        const timeout = setTimeout(() => {
            setShowDiv(true);
        }, 3500);

        return () => {
            clearTimeout(timeout);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="hero">
            <div className="relative flex justify-center items-center h-dvh w-dvw overflow-hidden">
                <div className="h-full">
                    <video playsInline muted autoPlay key={videoSource} id="hero-video" className="w-[100vw] h-[100%] object-cover lg:object-cover">
                        <source src={videoSource} type="video/mp4" />
                        Your browser does not support HTML5 video.
                    </video>
                </div>
                <div
                    ref={setRef}
                    className="absolute bottom-[2rem] flex flex-col items-center justify-center text-center text-[white] gap-3 button-fade">
                    <button
                        className="flex flex-row gap-[1rem] justify-center items-center bg-[none!important] rounded-full w-[4rem] h-[4rem] py-3 px-3.5 sm:hidden"
                        onClick={() => {
                            const overviewElement = document.getElementById("overview");
                            if (overviewElement) {
                                const scrollOffset = 78;
                                const elementPosition = overviewElement.getBoundingClientRect().top + window.pageYOffset;
                                const offsetPosition = elementPosition - scrollOffset;

                                window.scrollTo({
                                    top: offsetPosition,
                                    behavior: "smooth"
                                });
                            }
                        }}
                    >
                        <FontAwesomeIcon icon={faChevronDown} className="text-[#9B1915] font-bold text-[3rem]"></FontAwesomeIcon>
                    </button>
                    <button
                        className="flex flex-row gap-[1rem] justify-center items-center bg-[none!important] rounded-full min-w-[auto] w-[5rem] h-[5rem] p-0 hidden sm:block"
                        onClick={() => {
                            document.getElementById("overview")?.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                            });
                        }}
                    >
                        <FontAwesomeIcon icon={faChevronDown} className="text-[#9B1915] font-bold text-[4rem]"></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
}
