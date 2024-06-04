import { useEffect, useRef, MutableRefObject } from "react";
import useAutoRefs from "../../hooks/useAutoRefs";
import useVisibilityAdjustments from "../../hooks/useBrightnessAdjustment";
import Dimensions from "./Dimensions";
import Prices from "./Prices";

export default function Overview() {
    const setRef = useAutoRefs();
    const setBrightnessRef = useVisibilityAdjustments();
    const videoRef: MutableRefObject<HTMLVideoElement | null> = useRef(null);

    useEffect(() => {
        const video = videoRef.current;

        const handlePlay = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    video?.play().catch(error => console.error("Play was prevented:", error));
                } else {
                    video?.pause();
                }
            });
        };

        const observer = new IntersectionObserver(handlePlay, {
            threshold: 0.5,
        });

        if (video) {
            observer.observe(video);
        }

        return () => {
            if (video) {
                observer.unobserve(video);
            }
        };
    }, []);

    return (
        <>
            <div id="overview" className="bg-main flex flex-col px-5 xxs:py-[3rem] md:px-[2rem] md:py-[2rem] lg:px-[5%] lg:py-[3.2rem] xl:px-[8.5%] xl:py-main 2xl:px-[20.5%] 4xl:px-[26.5%] py-5">
                <div ref={setRef} className="opacity-1 md:opacity-1 md:opacity-0 flex flex-col justify-between gap-4">
                    <div>
                        <h3 className="text-title magistral-black text-[1.5rem] leading-[2.25] tracking-[.1rem] sm:text-left lg:text-center magistral">Lorem ipsum dolor</h3>
                        <p className="text-text text-[1.125rem] tracking-[.05rem]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id sint, ipsam tenetur quia ipsa eligendi voluptatibus, doloremque error explicabo rerum veritatis excepturi consequatur dolorum ducimus voluptates minus et saepe dolor nisi numquam dolorem. Sunt ullam expedita necessitatibus. Non excepturi modi incidunt.</p>
                    </div>
                    <div className="mt-[3.5rem]">
                        <h3 className="text-title magistral-black text-[1.5rem] leading-[2.25] tracking-[.1rem] sm:text-left lg:text-center magistral">Lorem ipsum dolor sit</h3>
                        <p className="text-text text-[1.125rem] tracking-[.05rem]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni rerum expedita, odio labore totam nostrum explicabo nesciunt ducimus neque, unde, ab repudiandae voluptates nam optio minima. Cum porro fugit qui natus asperiores repellendus sed provident itaque minima rerum animi dicta ipsum accusantium aspernatur nam in labore, earum harum vitae quas, recusandae esse velit id. Natus inventore necessitatibus vitae nesciunt ea? Repellat architecto accusantium neque eveniet aliquam sunt voluptas debitis necessitatibus fugit nostrum quod doloribus, maxime pariatur suscipit consectetur placeat!</p>
                    </div>
                </div>

                <div className="flex justify-center xl:justify-between items-center gap-0 xl:pt-main py-8 my-[4rem] xl:my-0">
                    <div className="flex items-center rounded-l-lg rounded-tr-sm rounded-br-sm max-h-[80%] hidden xl:block xl:max-w-[30%] overflow-hidden">
                        <img
                            ref={setBrightnessRef}
                            src="https://place-hold.it/250x150"
                            alt="Branding image 1"
                        />
                    </div>
                    <div className="flex justify-center items-center max-h-[100%] xxs:max-w-[100%] xl:max-w-[35%] overflow-hidden">
                        <video
                            ref={videoRef}
                            loop
                            autoPlay
                            playsInline
                            muted
                            id="branding-video"
                            className="h-full xl:rounded-sm rounded-xl"
                        >
                            <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div className="flex rounded-r-lg rounded-tl-sm rounded-bl-sm max-h-[80%] hidden xl:block xl:max-w-[30%] overflow-hidden">
                        <img
                            ref={setBrightnessRef}
                            src="https://place-hold.it/250x150"
                            alt="Branding image 2"
                        />
                    </div>
                </div>

                <div ref={setRef} className="opacity-1 md:opacity-0 xl:pt-main flex xl:flex-row flex-col xl:justify-between pb-main gap-4">
                    <div className="xl:max-w-[40%]">
                        <h3 className="text-title magistral-black text-[1.5rem] leading-[2.25] tracking-[.1rem] sm:text-left lg:text-center magistral">
                            Lorem ipsum?
                        </h3>
                        <ul className="list-disc flex flex-col gap-3 pl-4 text-text text-[1.125rem] tracking-[.05rem]">
                            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas a quis voluptatum nobis ab ratione culpa perspiciatis.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio inventore odit quaerat maxime rem!</li>
                            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum voluptatem quasi debitis laudantium repudiandae veritatis numquam.</li>
                        </ul>
                    </div>
                    <div className="xl:max-w-[40%] mt-[3.5rem] xl:mt-0">
                        <h3 className="text-title magistral-black text-[1.5rem] leading-[2.25] tracking-[.1rem] sm:text-left lg:text-center">
                            Lorem ipsum dolor
                        </h3>
                        <ul className="list-disc flex flex-col gap-3 pl-4 text-text text-[1.125rem] tracking-[.05rem]">
                            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In numquam optio dolore est blanditiis voluptatum unde.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam cum eos temporibus blanditiis iste.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam at mollitia harum iusto delectus minus minima debitis deleniti?</li>
                        </ul>
                    </div>
                </div>

                <div ref={setRef} className="flex flex-col justify-between gap-4 md:pb-main my-[1rem]">
                    <Dimensions />
                </div>

                <div ref={setRef} className="opacity-1 md:opacity-0 xxs:pt-main lg:pt-[3rem] lg:pb-[1.5rem] flex flex-row justify-between" id="order">
                    <Prices />
                </div>

            </div>
        </>
    );
}
