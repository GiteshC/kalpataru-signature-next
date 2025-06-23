"use client";
import React from "react";
import usePageLoad from "@/hooks/usePageLoad";
import { BannerSection } from "@/utils/type";

interface BannerProps {
  bannerData?: BannerSection;
}

const BannerComponent = ({ bannerData }: BannerProps) => {
  if (!bannerData) return null;
  const {
    video_link,
    banner_video,
    banner_image_field: imageUrl,
    banner_heading: mainHeading = "",
    banner_sub_heading: bannerSubHeading,
    banner_description: para,
    project_location: address,
  } = bannerData;

  const videoUrl = video_link || banner_video || "";

  const { isPageLoad } = usePageLoad();
  const spanData = mainHeading.split(" ");

  return (
    <section className="homebannerSec projectdetBanner">
      <div className="videoBox">
        {videoUrl ? (
          <video autoPlay muted loop playsInline preload="metadata">
            <source src={`${videoUrl}`} type="video/mp4" />
          </video>
        ) : (
          <img src={`${imageUrl}`} alt="" />
        )}
      </div>
      <div className="homebannerWrapper homebannerContent">
        <div className="secHeading philosopy-banner">
          <h1
            className={`swift-up-text ${isPageLoad ? "new-swift-up-text" : ""}`}
          >
            {spanData.map((el: any, i: number) => (
              <span key={el}>
                <i style={{ transitionDelay: `${i * 0.4}s` }}>{el}&nbsp;</i>
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
          {bannerSubHeading && (
            <h3
              className={`bannerTextanimation ${
                isPageLoad ? "bannerTextanimationnew" : ""
              }`}
            >
              <span>{bannerSubHeading}</span>
            </h3>
          )}
          {address && (
            <h3
              className={`bannerTextanimation ${
                isPageLoad ? "bannerTextanimationnew" : ""
              }`}
            >
              <span>{address}</span>
            </h3>
          )}
        </div>
      </div>
      <div className={`scrollText ${isPageLoad ? "scrollTextnew" : ""}`}>
        <h3>
          {mainHeading.trim().toLocaleUpperCase() === "SIGNATURE RESIDENCES"
            ? "Explore projects"
            : "Scroll to Explore"}
        </h3>
      </div>
    </section>
  );
};

export default BannerComponent;
