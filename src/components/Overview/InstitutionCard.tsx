import React, { useState } from 'react';
import Modal from '../Modal/Modal';

interface InstitutionCardProps {
    name: string;
    description: string;
    price: string;
    version: string;
    focus?: boolean;
}

export const InstitutionCard: React.FC<InstitutionCardProps> = ({ name, description, price, version, focus }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalRelease, setModalRelease] = useState('');
    const [modalText, setModalText] = useState('');
    const [modalUrl, setModalUrl] = useState('');

    const handleOpenModal = (title: string, release: string, text: string, url: string) => {
        setModalTitle(title);
        setModalRelease(release);
        setModalText(text);
        setModalUrl(`${url}&version=${version}`);
        setModalOpen(true);
    };

    return (
        <>
            <Modal isOpen={isModalOpen} title={modalTitle} release={modalRelease} text={modalText} formUrl={modalUrl} onClose={() => setModalOpen(false)} />

            <div className={`flex flex-col justify-between gap-8 md:gap-32 ${focus ? "bg-title text-alt outline-0 h-full w-full md:h-full" : "bg-alt text-text h-[100%] md:h-[90%] w-full outline outline-1 outline-[#eeeeee2a]"} px-7 py-7 md:px-10 md:py-10 rounded-lg`}>
                <div>
                    <h2 className="magistral-black text-[1.7rem] 4xl:text-[1.52rem] leading-[1.25] tracking-[.1rem] xl:text-[1rem] 2xl:text-[1.8rem]">{name}</h2>
                    <p className="pt-[1rem] tracking-[.05rem]">{description}</p>
                </div>
                <div>
                    <div className="flex gap-4">
                        <a onClick={() => handleOpenModal('Lorem Ipsum', '', "Lorem ipsum dolor sit amet consectetur adipisicing elit!", 'https://tally.so/embed/w4kkBb?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1')} className={`btn-institutions ${focus ? "bg-alt text-title text-[.8rem] md:text-[0.6rem] lg:text-[.5rem] xl:text-[.7rem] 2xl:text-[.55vw] 4xl:text-[1.15rem]" : "bg-title text-alt text-[.8rem] md:text-[0.54rem] lg:text-[.5rem] xl:text-[.7rem] 2xl:text-[.55vw] 4xl:text-[1.15rem]"} w-full py-3 px-4 rounded-full text-center capitalize magistral-bold cursor-pointer flex justify-center items-center`}>Lorem Ipsum</a>
                        <a onClick={() => handleOpenModal('Lorem Ipsum Dolar', '', 'Lorem ipsum dolor sit amet consectetur.', 'https://tally.so/embed/nrKKBM?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1')} className={`btn-institutions ${focus ? "bg-alt text-title text-[.8rem] md:text-[0.9rem] 4xl:text-[1.15rem]" : "bg-title text-alt text-[.8rem] md:text-[0.8rem] 4xl:text-[1.15rem]"} w-full py-3 px-4 rounded-full text-center capitalize magistral-bold cursor-pointer flex justify-center items-center`}>Nam ab</a>
                    </div>
                    <div className="py-[1rem]">
                        <hr />
                    </div>
                    <div className="flex flex-row justify-center gap-[2rem] pb-[.5rem]">
                        <span className="magistral-bold text-[1.5rem] leading-[1.25] tracking-[.1rem]">&euro; {price}*,-</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="notice relative magistral-bold text-[.7rem] leading-[1.25] tracking-[.1rem]">Lorem ipsum dolor sit amet consectetur adipisicing<br />
                            <span>Lorem ipsum {!focus && "dolar"} sit amet</span><br />
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};
