"use client";
import React from "react";
import usePageLoad from "@/hooks/usePageLoad";
import { BannerSection } from "@/utils/type";
import Image from "next/image";

interface BannerProps {
  bannerData?: BannerSection;
}

const BannerComponent = ({ bannerData }: BannerProps) => {
  const { isPageLoad } = usePageLoad();

  if (!bannerData) return null;
  const {
    video_link,
    banner_video,
    banner_image_field: imageUrl,
    banner_heading: mainHeading = "",
    banner_sub_heading: bannerSubHeading,
    banner_description: para,
    project_location: address,
    project_banner_heading: projectBannerHeading = "",
  } = bannerData;

  const videoUrl = video_link || banner_video || "";

  const spanData = mainHeading
    ? mainHeading.split(" ")
    : projectBannerHeading?.split(" ");

  return (
    <section className="homebannerSec projectdetBanner">
      <div className="videoBox">
        {videoUrl || bannerData?.banner_options?.[0]?.banner_video_field ? (
          <video autoPlay muted loop playsInline preload="metadata">
            <source
              src={`${
                videoUrl
                  ? videoUrl
                  : bannerData?.banner_options?.[0]?.banner_video_field
              }`}
              type="video/mp4"
            />
          </video>
        ) : (
          <Image
            src={`${
              imageUrl
                ? imageUrl
                : bannerData?.banner_options?.[0]?.banner_image_field?.url
            }`}
            alt=""
          />
        )}
      </div>
      <div className="homebannerWrapper homebannerContent">
        <div className="secHeading philosopy-banner">
          <h1
            className={`swift-up-text ${isPageLoad ? "new-swift-up-text" : ""}`}
          >
            {spanData?.map((el: string, i: number) => (
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
