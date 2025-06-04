"use client";
import { useRef } from "react";
import BannerComponent from "@/components/BannerComponent";
import ExploreCompoent from "@/components/ExploreCompoent";
import useIsSecVisible from "@/hooks/useIsSecVisible";
const SignaturePhilosophy = () => {
  const ref = useRef(null);
  const {isSecInViewport} =  useIsSecVisible(ref)
  
  return (
    <>
      <BannerComponent
        videoUrl="/images/homepage-video.mp4"
        mainHeading="SIGNATURE PHILOSOPHY"
        para="The pursuit of luxury. Our ultimate obsession."
      />
      <section className="philo-vision-section" ref={ref}>
        <div className="vision-wrapper">
          <div className="visionHeadingSec">
            <h2 className={`section-text-up ${isSecInViewport ? "newClass" : ""}`}>
              <span>The Pioneers of South Mumbai</span>
            </h2>
            <p className={`section-text-up ${isSecInViewport ? "newClass" : ""}`}>
              <span>
                Our founder's vision transformed South Mumbai from a collection
                of stuffy mid-sized buildings to new residential properties that
                reflected an evolved aesthetic.
              </span>
            </p>
          </div>
          <div className="visionVideoSec">
            <div className="secVideoBox">
              <img
                src="/images/swapnlok-philosophy-desktop.webp"
                alt=""
                className="desktopImg"
              />
              <img
                src="/images/swapnlok-philosophy-mbl.webp"
                alt=""
                className="mobileImg"
              />
            </div>
            <div className="secVideoContent">
              <p>
                Our pursuit of luxury is also a pursuit of perfection. From
                living spaces, to lifestyle elements. From aesthetics, to
                functionality. Our creations strive to elevate living
                experiences to newer, unseen levels.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="philo-vision-section philo-houseOfFirst-sec">
        <div className="vision-wrapper">
            <div className="visionHeadingSec hof-headingSec">
                <h2 className="section-text-up"><span>House of firsts</span></h2>
                <p className="section-text-up"><span>A JOURNEY OF INNOVATION, IS OFTEN A JOURNEY MARKED BY MANY
                        FIRSTS.</span></p>
            </div>
            <div className="visionVideoSec">
                <div className="secVideoBox">
                  <video autoPlay muted loop playsInline preload="metadata">
                      <source src="images/house-of-first.mp4" type="video/mp4" />
                  </video>
                </div>
                <a data-fancybox data-ratio="2" href="https://www.youtube.com/watch?v=AIb9-GMnYD0">Play full video</a>
            </div>
        </div>
    </section>
      <ExploreCompoent
        desktopImgUrl="/images/signature-essence-footer.webp"
        mblImgUrl="/images/signature-essence-footer-mbl.webp"
        secHeading="Signature essence"
        subHeading="Explore the Essence"
      />
    </>
  );
};

export default SignaturePhilosophy;
