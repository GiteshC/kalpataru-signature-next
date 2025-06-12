"use client";
import BannerComponent from "@/components/BannerComponent";
import ExploreCompoent from "@/components/ExploreCompoent";
import useIsSecVisible from "@/hooks/useIsSecVisible";
import { useRef, useState } from "react";
import Slider from "react-slick";
import SliderComponent from "@/components/SliderComponent";
import { experienceSlider } from "@/components/ArrowSliderComponent";

export default function SignatureExperience() {
    const experienceSec = useRef(null);
    const { isSecInViewport : experienceSection } = useIsSecVisible(experienceSec);
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = 2;
    
    return (
        <>
            <BannerComponent
                videoUrl="/images/signature-experience.mp4"
                mainHeading="Signature Experience"
                para="It's rare to find experiences like this. Justifiably, only the rare find it."
            />

            <section className="signatureSec signExpimgsection" ref={experienceSec}>
                <div className="signatureWrapper">
                    <div className="secHeading">
                        <h2 className={`section-text-up ${experienceSection ? "newClass" : ""}`}><span>An unparalleled experience of living. And of luxury.</span></h2>
                        <p className={`section-text-up ${experienceSection ? "newClass" : ""}`}><span>Luxury is a subtle art that reveals itself in the finer aspects of living. And our thoughtfully crafted residences, along with the premium amenities that surround them, all strive to be a true exhibitions of this rare art.</span></p>
                    </div>
                    <div className="imgSection">
                        <div className={`innerImg section-text-up ${experienceSection ? "newClass" : ""}`}>
                            <span>
                                <a data-fancybox="" data-ratio="2" href="https://www.youtube.com/embed/XenKI94naI0?autoplay=1&amp;mute=1">
                                    <img src="images/madhurbaya-avanatestimonial-thumbnail-bigimg.webp" alt="" />
                                    <div className="popupButton">
                                        <img src="/images/resident-slider-arrow.svg" alt="" title="" />
                                    </div>
                                </a>
                            </span>
                        </div>
                        <div className={`innerImg section-text-up ${experienceSection ? "newClass" : ""}`}>
                            <span>
                                <a data-fancybox="" data-ratio="2" href="https://www.youtube.com/embed/viptE0F8Jv8?autoplay=1&amp;mute=1">
                                    <img src="images/mr-santhanam-amodatestimonial-bigimg.webp" alt="" />
                                    <div className="popupButton">
                                        <img src="/images/resident-slider-arrow.svg" alt="" title="" />
                                    </div>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="signatureSec sigexpEventsec">
                <div className="signatureWrapper">
                    <div className="secHeading">
                        <h2 className="section-text-up newClass"><span>Exclusive cultural events</span></h2>
                        <p className="section-text-up newClass"><span>Immerse in luxury of fine culture.</span></p>
                    </div>
                </div>
                <div className="slider-container">
                    <div className="slides-numbers" style={{ display: "block" }}>
                        <span className="active">
                            {String(currentSlide + 1).padStart(2, "0")}
                        </span>
                        <span>/</span>
                        <span className="total">
                            {String(totalSlides).padStart(2, "0")}
                        </span>
                    </div>
                    <div className="eventSlider">
                        <SliderComponent setting={{...experienceSlider,
                            beforeChange: (_oldIndex: number, newIndex: number) => {
                                setCurrentSlide(newIndex);
                            },
                        }} >
                            <div className="eventDetails">
                                <div className="eventImg">
                                    <img src="images/event-img-1-scaled.webp" alt="" />
                                </div>
                                <div className="eventName">
                                    <h4>Date: Nov 15th - 25th</h4>
                                    <h3>Yoga and Fitness</h3>
                                </div>
                            </div>
                            <div className="eventDetails">
                                <div className="eventImg">
                                    <img src="images/event-img-2-scaled.webp" alt="" />
                                </div>
                                <div className="eventName">
                                    <h4>Date: Nov 8th - 10th</h4>
                                    <h3>Book Reading Club</h3>
                                </div>
                            </div>
                        </SliderComponent>
                    </div>
                </div>
            </section>

            <ExploreCompoent
                desktopImgUrl="/images/signature-philosophy-footer.webp"
                mblImgUrl="/images/signature-philosophy-footer-mbl.webp"
                secHeading="Signature philosophy"
                subHeading="Explore More"
            />
        </>
    )
}