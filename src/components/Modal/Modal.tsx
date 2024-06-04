import ReactDOM from 'react-dom';
import { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

interface ModalProps {
    isOpen: boolean;
    title: string;
    release: string;
    text: string;
    formUrl: string;
    onClose: () => void;
}

// Extend the Window interface to include Tally
declare global {
    interface Window {
        Tally: {
            loadEmbeds: () => void;
        };
    }
}

export default function Modal({ isOpen, title, release, text, onClose, formUrl }: ModalProps) {
    useEffect(() => {
        if (isOpen) {
            const widgetScriptSrc = 'https://tally.so/widgets/embed.js';

            const loadTallyEmbed = () => {
                if (typeof window.Tally !== 'undefined') {
                    window.Tally.loadEmbeds();
                    return;
                }
                document.querySelectorAll('iframe[data-tally-src]:not([src])').forEach((iframeEl) => {
                    if (iframeEl instanceof HTMLIFrameElement) {
                        iframeEl.src = iframeEl.dataset.tallySrc || '';
                    }
                });
            };

            // If the Tally widget script is not loaded yet, load it
            if (document.querySelector(`script[src="${widgetScriptSrc}"]`) === null) {
                const script = document.createElement('script');
                script.src = widgetScriptSrc;
                script.onload = loadTallyEmbed;
                script.onerror = loadTallyEmbed;
                document.body.appendChild(script);
            } else {
                loadTallyEmbed();
            }

            // Disable scroll on the body when modal is open
            document.body.style.overflow = 'hidden';
            document.body.style.touchAction = 'none';
            document.body.style.overscrollBehavior = 'contain';
        } else {
            // Re-enable scroll when modal is closed
            document.body.style.overflow = 'auto';
            document.body.style.touchAction = '';
            document.body.style.overscrollBehavior = '';
        }

        // Cleanup function to reset overflow style when the component unmounts
        return () => {
            document.body.style.overflow = 'auto';
            document.body.style.touchAction = '';
            document.body.style.overscrollBehavior = '';
        };
    }, [isOpen]);

    if (!isOpen) {
        return null;
    }

    return ReactDOM.createPortal(
        <div className="modal-overlay fixed inset-0 flex justify-center items-center w-screen h-screen bg-black bg-opacity-50 backdrop-blur-sm z-10 p-4 md:p-20">
            <div className="modal-content bg-main h-screen flex flex-col items-center justify-center rounded-lg text-text relative overflow-y-auto">
                <button
                    className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded"
                    onClick={onClose}
                >
                    <FontAwesomeIcon icon={faClose} className="text-title font-bold text-[1.5rem] md:text-[1.75rem]" />
                </button>
                <div className="px-10 xl:px-30 2xl:px-40">
                    <h2 className="hidden md:block text-title magistral-black text-[1.75rem] leading-[2.25] tracking-[.1rem] text-center">{title} {release && "- " + release}</h2>
                    <h2 className="md:hidden text-title magistral-black text-[1.15rem] tracking-[.1rem] text-center pt-8">{title}</h2>
                    <h2 className="md:hidden text-title magistral-black text-[1.15rem] tracking-[.1rem] text-center">{release}</h2>
                    <hr className="xxs:my-6 md:my-0 4xl:my-6" />
                    <h3 className="text-title magistral-black text-[1.15rem] md:text-[1.5rem] leading-[2.25] tracking-[.1rem] text-center pb-[1rem]">{text}</h3>
                    <iframe
                        data-tally-src={formUrl}
                        loading="lazy"
                        width="100%"
                        height="528"
                        frameBorder="0"
                        marginHeight={0}
                        marginWidth={0}
                        title="React Productpage">
                    </iframe>
                </div>
            </div>
        </div>,
        document.body
    );
}
