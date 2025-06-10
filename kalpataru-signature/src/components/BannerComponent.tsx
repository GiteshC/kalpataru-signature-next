'use client';
import React from "react";
import usePageLoad from "@/hooks/usePageLoad";

const BannerComponent = ({
  videoUrl,
  mainHeading,
  para,
}: {
  videoUrl: string,
  mainHeading: string;
  para: string;
}) => {
  const { isPageLoad } = usePageLoad();
  const spanData = mainHeading.split(" ");
  
  return (
    <section className="homebannerSec projectdetBanner">
      <div className="videoBox">
        <video autoPlay muted loop playsInline preload="metadata">
          <source src={videoUrl} type="video/mp4" />
        </video>
      </div>
      <div className="homebannerWrapper homebannerContent">
        <div className="secHeading philosopy-banner">
          <h1
            className={`swift-up-text ${isPageLoad ? "new-swift-up-text" : ""}`}
          >
            {spanData.map((el, i) => (
              <span key={el} >
                <i style={{ transitionDelay: `${i * 0.4}s`}}>{el}&nbsp;</i>
              </span>
            ))}
          </h1>
          <p
            className={`bannerTextanimation ${
              isPageLoad ? "bannerTextanimationnew" : ""
            }`}
          >
            <span>{para}</span>
          </p>
        </div>
      </div>
      <div className="scrollText">
        <h3>Scroll to Explore</h3>
      </div>
    </section>
  );
};

export default BannerComponent;