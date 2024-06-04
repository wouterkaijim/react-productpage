import { useState, useEffect, useRef, SetStateAction, MutableRefObject } from 'react';
import { InstitutionCard } from "./InstitutionCard";
import Modal from '../Modal/Modal';

export default function Prices() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalRelease, setModalRelease] = useState('');
    const [modalText, setModalText] = useState('');
    const [modalUrl, setModalUrl] = useState('');
    const [focusedCard, setFocusedCard] = useState('Lipsum2');

    const handleOpenModal = (
        title: SetStateAction<string>,
        release: SetStateAction<string>,
        text: SetStateAction<string>,
        url: SetStateAction<string>
    ) => {
        setModalTitle(title);
        setModalRelease(release);
        setModalText(text);
        setModalUrl(url);
        setModalOpen(true);
    };

    const observer: MutableRefObject<IntersectionObserver | null> = useRef(null);

    useEffect(() => {
        const updateFocus = debounce((name: string) => {
            setFocusedCard(name);
        }, 300);

        observer.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && window.innerWidth < 768) {
                        const name = entry.target.getAttribute('data-name') ?? '';
                        if (entry.intersectionRatio >= 0.55) {
                            updateFocus(name);
                        }
                    }
                });
            },
            { threshold: [1] }
        );

        const cards = document.querySelectorAll('.institution-card');
        const currentObserver = observer.current;
        if (currentObserver) {
            cards.forEach((card) => currentObserver.observe(card));
        }

        return () => {
            if (currentObserver) {
                cards.forEach((card) => currentObserver.unobserve(card));
            }
        };
    }, []);

    useEffect(() => {
        const setDotOrder = () => {
            const orderMap = {
                'Lipsum2': 0,
                'Lipsum1': 1,
                'Lipsum3': 2
            };
            if (window.innerWidth < 768) {
                document.documentElement.style.setProperty('--dot-order-0', orderMap['Lipsum2'].toString());
                document.documentElement.style.setProperty('--dot-order-1', orderMap['Lipsum1'].toString());
                document.documentElement.style.setProperty('--dot-order-2', orderMap['Lipsum3'].toString());
            }
        };

        setDotOrder();
        window.addEventListener('resize', setDotOrder, { passive: true });

        return () => {
            window.removeEventListener('resize', setDotOrder);
        };
    }, []);

    return (
        <>
            <Modal isOpen={isModalOpen} title={modalTitle} release={modalRelease} text={modalText} formUrl={modalUrl} onClose={() => setModalOpen(false)} />

            <div className="flex flex-col justify-center items-center pb-4 w-full gap-4 text-title">
                <div>
                    <h3 className="text-[1.5rem] text-center magistral-bold tracking-[.05rem]">
                        Experience how Lorem can Ipsum your Dolar.
                    </h3>
                    <h3 className="text-[1.5rem] text-center magistral-bold tracking-[.05rem] xxs:pt-[2rem] xs:pt-[1.5rem]">
                    Lorem ipsum dolor<span className="magistral-black bg-gradient-to-r from-[#E41B1F] to-[#9B1915] text-transparent bg-clip-text"> sit amet </span>consectetur adipisicing<span className="magistral-black bg-gradient-to-r from-[#E41B1F] to-[#9B1915] text-transparent bg-clip-text"> elit nesciunt</span>.
                    </h3>
                </div>
                <div className="relative w-full">
                    <div className="flex flex-col gap-4 md:gap-0 md:flex-row md:justify-center items-center w-full text-title min-h-[34rem] md:mt-[3rem] mb-[2rem] overflow-x-scroll md:overflow-x-hidden snap-x snap-mandatory scroll-container pt-main md:pt-[0]">
                        <div className="institution-card lipsum1 flex items-center snap-center flex-shrink-0 w-full md:w-[32.5%] h-[100%] md:pr-[1%]" data-name="Lipsum1">
                            <InstitutionCard name="Lorem Ipsum" description="Lorem ipsum dolor sit amet consectetur." price="9.99" version="Lipsum1" focus={focusedCard === 'Lipsum1'} />
                        </div>
                        <div className="institution-card lipsum2 flex items-center snap-center flex-shrink-0 w-full md:w-[35%] h-[100%] md:px-[1%]" data-name="Lipsum2">
                            <InstitutionCard name="Dolar Sit" description="Lorem ipsum dolor sit amet consectetur." price="14.99" version="Cultural Heritage" focus={focusedCard === 'Lipsum2'} />
                        </div>
                        <div className="institution-card lipsum3 flex items-center snap-center flex-shrink-0 w-full md:w-[32.5%] h-[100%] md:pl-[1%]" data-name="Lipsum3">
                            <InstitutionCard name="Amet Elit" description="Lorem ipsum dolor sit amet consectetur." price="21.99" version="Lipsum3" focus={focusedCard === 'Lipsum3'} />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center pb-4 w-full gap-4 text-title">
                    <div className='flex flex-col gap-4 items-center'>
                        <h3 className="magistral-bold text-[1.35rem] md:text-[1.5rem] text-center tracking-[.05rem]">
                            Lorem ipsum <span className="magistral-black bg-gradient-to-r from-[#E41B1F] to-[#9B1915] text-transparent bg-clip-text"> dolar sit </span>amet
                        </h3>
                        <button onClick={() => handleOpenModal('Lorem Ipsum Dolar', 'Lorem Ipsum', 'Lorem ipsum dolor sit amet.', 'https://tally.so/embed/mKooeM?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1')} className="btn-full w-fit py-2 px-4 rounded-full text-[1.25rem] mr-[.05rem]">Consectetur Adipisicing Elit</button>
                    </div>
                </div>
            </div>
        </>
    );
}

// Utility function for debouncing
function debounce(func: (this: void, name: string) => void, delay: number | undefined) {
    let timeoutId: number | undefined;
    return function (this: void, ...args: [string]) {
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}
