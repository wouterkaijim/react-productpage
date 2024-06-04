import Slider from "react-slick";
import {ReactNode} from "react";
import useAutoRefs from "../../hooks/useAutoRefs";

// Setup features array
const features = [
    {
        title: "Gloria Restaurants",
        embed: <iframe title="Gloria Restaurants" frameBorder="0" allowFullScreen className="flex-grow"
                    allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking="true"
                    execution-while-out-of-viewport="true" execution-while-not-rendered="true" web-share="true"
                    src="https://sketchfab.com/models/f73938826a974fa691a1213f01c13db8/embed?camera=0&ui_animations=0&ui_infos=0&ui_stop=0&ui_inspector=0&ui_watermark_link=0&ui_watermark=0&ui_ar=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_annotations=0"></iframe>
    },
    {
        title: "Hackney Log Boat Copy",
        embed: <iframe title="Hackney Log Boat Copy" frameBorder="0" allowFullScreen className="flex-grow"
                   allow="autoplay; fullscreen; xr-spatial-tracking"
                   xr-spatial-tracking="true" execution-while-out-of-viewport="true" execution-while-not-rendered="true" web-share="true"
                   src="https://sketchfab.com/models/041e237d36d0444f85513c4ba17b7f2a/embed?camera=0&ui_animations=0&ui_infos=0&ui_stop=0&ui_inspector=0&ui_watermark_link=0&ui_watermark=0&ui_ar=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_annotations=0"></iframe>
    },
    {
        title: "Parish Boundary Marker",
        embed: <iframe title="Parish Boundary Marker" frameBorder="0" allowFullScreen className="flex-grow"
                   allow="autoplay; fullscreen; xr-spatial-tracking"
                   xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share
                   src="https://sketchfab.com/models/647f41430f684f8e8b9d0fa75e2dd18a/embed?camera=0&ui_animations=0&ui_infos=0&ui_stop=0&ui_inspector=0&ui_watermark_link=0&ui_watermark=0&ui_ar=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_annotations=0"></iframe>
    },
    {
        title: "Royal Eye Hospital FS",
        embed: <iframe title="Royal Eye Hospital FS" frameBorder="0" allowFullScreen className="flex-grow"
                   allow="autoplay; fullscreen; xr-spatial-tracking"
                   xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share
                   src="https://sketchfab.com/models/67f047939eaa45c9bac5bd15c1726f4b/embed?camera=0&ui_animations=0&ui_infos=0&ui_stop=0&ui_inspector=0&ui_watermark_link=0&ui_watermark=0&ui_ar=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_annotations=0"></iframe>
    },
    {
        title: "Apollo Artemis Marble Relief",
        embed: <iframe title="Apollo Artemis Marble Relief" frameBorder="0" allowFullScreen className="flex-grow"
                   allow="autoplay; fullscreen; xr-spatial-tracking"
                   xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share
                   src="https://sketchfab.com/models/7a0ec3159cbc4fae828006b533712d98/embed?camera=0&ui_animations=0&ui_infos=0&ui_stop=0&ui_inspector=0&ui_watermark_link=0&ui_watermark=0&ui_ar=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_annotations=0"></iframe>
    }
];

export default function Features() {
    const setRef = useAutoRefs();

    return (
        <>
            <div id="features" className="relative top-0 bg-alt w-full h-full px-5 xxs:pt-[3rem] md:px-[2rem] md:pt-[2rem] lg:px-[5%] lg:pt-[3.2rem] xl:px-[8.5%] xl:pt-main 2xl:px-[20.5%] 4xl:px-[26.5%] py-5 pb-[10rem] md:pb-[12rem] overflow-hidden ">
                <h2 ref={setRef} className="text-title text-[2rem] md:text-[3rem] magistral-bold leading-[2.25] md:leading-[4.5rem] tracking-[.1rem] pb-5 sm:text-left">Example models</h2>
                <div className="flex flex-row text-[white]">
                    <Slider
                        dots={true}
                        infinite={true}
                        speed={500}
                        vertical={false}
                        slidesToShow={4}
                        slidesToScroll={1}
                        arrows={false}
                        className="w-full"
                        centerMode={false}
                        appendDots={(dots) => {
                            return <ul>{dots}</ul>;
                        }}
                        slide="flex justify-center items-center"
                        autoplay={true}
                        autoplaySpeed={3500}
                        pauseOnHover={true}
                        pauseOnFocus={true}
                        responsive={[
                            {
                                breakpoint: 2586,
                                settings: {
                                    slidesToShow: 4,
                                }
                            },
                            {
                                breakpoint: 2430,
                                settings: {
                                    slidesToShow: 3,
                                }
                            },
                            {
                                breakpoint: 1920,
                                settings: {
                                    slidesToShow: 3,
                                }
                            },
                            {
                                breakpoint: 1240,
                                settings: {
                                    slidesToShow: 2,
                                    centerPadding: "100"
                                }
                            },
                            {
                                breakpoint: 865,
                                settings: {
                                    slidesToShow: 1,
                                    centerPadding: "190"
                                }
                            },
                            {
                                breakpoint: 504,
                                settings: {
                                    slidesToShow: 1,
                                    centerPadding: "0"
                                }
                            }
                        ]}
                    >
                        {features.map((feature, i) => (
                            <div key={i}>
                                <div className="container flex xxs:justify-center xl:justify-start">
                                    <FeatureCard title={feature.title} embed={feature.embed}/>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    );
}

interface FeatureCardProps {
    title: string;
    embed: ReactNode
}

function FeatureCard(props: FeatureCardProps) {
    return (
        <div className="relative flex flex-col max-w-[300px] h-[400px] bg-main rounded-[2rem] overflow-hidden">
            {props.embed}
            <h2 className="text-[#aaa] text-lg text-center py-[1rem] font-bold tracking-[-0.015em] px-[2rem] ">{props.title}</h2>
        </div>
    );
}