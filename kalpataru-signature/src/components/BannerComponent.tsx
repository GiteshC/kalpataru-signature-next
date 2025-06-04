import React from "react";

const BannerComponent = ({ isPageLoad, bannerVideo, mainHeading, para }: { isPageLoad: boolean, bannerVideo: String, mainHeading: String, para:  String },  ) => {
  return (
    <section className="homebannerSec projectdetBanner">
      <div className="videoBox">
        <video autoPlay muted loop playsInline preload="metadata">
          <source src={bannerVideo} type="video/mp4" />
        </video>
      </div>
      <div className="homebannerWrapper homebannerContent">
        <div className="secHeading philosopy-banner">
          <h1 className={`swift-up-text ${isPageLoad ? "new-swift-up-text" : ""}`} >
            {mainHeading}
          </h1>
          <p className="bannerTextanimation">
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
