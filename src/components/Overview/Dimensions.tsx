import useAutoRefs from '../../hooks/useAutoRefs';

export default function Dimensions() {

    const setRef = useAutoRefs();

    return (
        <div className="flex flex-col justify-between text-white bg-alt rounded-lg overflow-hidden">
            <div style={{ backgroundImage: `url("https://clipartcraft.com/images/transparent-grid-large-5.png")`, backgroundSize: "100%" }} className="relative bg-title w-full min-h-[520px] md:min-h-[620px] lg:min-h-[720px]">
                <h2 ref={setRef} className="opacity-1 md:opacity-0 absolute pt-10 md:pt-24 px-10 lg:px-32 text-main magistral-black text-[2.5rem] leading-[1.25] tracking-[.1rem] sm:text-left w-[75%]">Lorem Ipsum</h2>
            </div>
            <div className="flex flex-col md:grid md:grid-cols-2 gap-8 py-8 px-8 md:py-24 md:px-32">
                <div ref={setRef} className="opacity-1 md:opacity-0">
                    <h3 className="text-title magistral-black text-[.9rem] xss:text-[1rem] xs:text-[1.15rem] md:text-[1.35rem] leading-[2.25] tracking-[.1rem] sm:text-left magistral capitalize">
                        Lorem Ipsum
                    </h3>
                    <ul className="list-disc flex flex-col gap-3 pl-4 text-text text-[1.125rem] tracking-[.05rem]">
                        <li className="list-item">
                            <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, expedita!</span><br />
                            <span>(lorem ipsum dolor sit amet consectetur)</span>
                        </li>
                        <li className="list-item">
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing.</span>
                        </li>
                    </ul>
                </div>
                <div ref={setRef} className="opacity-1 md:opacity-0">
                    <h3 className="text-title magistral-black text-[.9rem] xss:text-[1rem] xs:text-[1.15rem] md:text-[1.35rem] leading-[2.25] tracking-[.1rem] sm:text-left magistral capitalize">
                        Lorem Ipsum
                    </h3>
                    <ul className="list-disc flex flex-col gap-3 pl-4 text-text text-[1.125rem] tracking-[.05rem]">
                        <li className="list-item">
                            <span>Lorem:</span>
                            <span className="pl-2">Ipsum</span>
                        </li>
                        <li className="list-item">
                            <span>Lorem:</span>
                            <span className="pl-2">Ipsum</span>
                        </li>
                        <li className="list-item">
                            <div>
                                <span>Lorem:</span>
                                <span className="pl-2">Ipsum</span>
                            </div>
                            <span>(amet consectetur adipisicing)</span>
                        </li>
                    </ul>
                </div>
                <div ref={setRef} className="opacity-1 md:opacity-0">
                    <h3 className="text-title magistral-black text-[.9rem] xss:text-[1rem] xs:text-[1.15rem] md:text-[1.35rem] leading-[2.25] tracking-[.1rem] sm:text-left magistral capitalize">
                        Lorem Ipsum
                    </h3>
                    <ul className="list-disc flex flex-col gap-3 pl-4 text-text text-[1.125rem] tracking-[.05rem]">
                        <li className="list-item">
                            <span>Lorem:</span>
                            <span className="pl-2">Ipsum</span>
                        </li>
                        <li className="list-item">
                            <span>Lorem:</span>
                            <span className="pl-2">Ipsum</span>
                        </li>
                        <li className="list-item">
                            <span>Lorem:</span>
                            <span className="pl-2">Ipsum</span>
                        </li>
                    </ul>
                </div>
                <div ref={setRef} className="opacity-1 md:opacity-0">
                    <h3 className="text-title magistral-black text-[.9rem] xss:text-[1rem] xs:text-[1.15rem] md:text-[1.35rem] leading-[2.25] tracking-[.1rem] sm:text-left magistral capitalize">
                        Lorem Ipsum
                    </h3>
                    <ul className="list-disc flex flex-col gap-3 pl-4 text-text text-[1.125rem] tracking-[.05rem]">
                        <li className="list-item">
                            <span>Lorem:</span>
                            <span className="pl-2">Ipsum</span>
                        </li>
                        <li className="list-item">
                            <span>Lorem:</span>
                            <span className="pl-2">Ipsum</span>
                        </li>
                    </ul>
                </div>
                <div ref={setRef} className="opacity-1 md:opacity-0">
                    <h3 className="text-title magistral-black text-[.9rem] xss:text-[1rem] xs:text-[1.15rem] md:text-[1.35rem] leading-[2.25] tracking-[.1rem] sm:text-left magistral capitalize">
                        Lorem Ipsum
                    </h3>
                    <ul className="list-disc flex flex-col gap-3 pl-4 text-text text-[1.125rem] tracking-[.05rem]">
                        <li className="list-item">
                            <span>Lorem:</span>
                            <span className="pl-2">Ipsum</span>
                        </li>
                        <li className="list-item">
                            <span>Lorem:</span>
                            <span className="pl-2">Ipsum</span>
                        </li>
                    </ul>
                </div>
                <div ref={setRef} className="opacity-1 md:opacity-0">
                    <h3 className="text-title magistral-black text-[.9rem] xss:text-[1rem] xs:text-[1.15rem] md:text-[1.35rem] leading-[2.25] tracking-[.1rem] sm:text-left magistral capitalize">
                        Lorem ipsum dolor sit amet.
                    </h3>
                    <ul className="list-disc flex flex-col gap-3 pl-4 text-text text-[1.125rem] tracking-[.05rem]">
                        <li className="list-item">
                            <span>Lorem:</span>
                            <span className="pl-2">Ipsum</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );

}