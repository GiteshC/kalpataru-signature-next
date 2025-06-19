"use client";
import { useEffect, useRef } from "react";
import BannerComponent from "@/components/BannerComponent";
import ExploreCompoent from "@/components/ExploreCompoent";
import useIsSecVisible from "@/hooks/useIsSecVisible";
import useGetPageData from "@/hooks/useGetPageData";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { Fancybox } from "@fancyapps/ui";
import PathComponent from "@/components/PathComponent";
const ClientSignaturePhilosophy = ({ pageData }: any) => {
  console.log(pageData, "11");

  const visionSec = useRef(null);
  const houseOfFirstSec = useRef(null);
  const { isSecInViewport: visionSection } = useIsSecVisible(visionSec);
  const { isSecInViewport: houseOfFirstSection } =
    useIsSecVisible(houseOfFirstSec);

  const sectionOne = pageData?.acf?.philosophy_components?.[0];
  const sectionTwo = pageData?.acf?.philosophy_components?.[1];
  const sectionThree = pageData?.acf?.philosophy_components?.[2];

  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {});
    return () => {
      Fancybox.destroy();
    };
  }, []);

  return (
    <>
      <BannerComponent
        videoUrl={pageData?.acf?.banner_section?.video_link || ""}
        imageUrl=""
        mainHeading={pageData?.acf?.banner_section?.banner_heading || ""}
        para={pageData?.acf?.banner_section?.banner_description || ""}
        bannerSubHeading=""
        address=""
      />
      <section className="philo-vision-section" ref={visionSec}>
        {sectionOne?.acf_fc_layout === "pioneers_section" && (
          <div className="vision-wrapper">
            <div className="visionHeadingSec">
              <h2
                className={`section-text-up ${visionSection ? "newClass" : ""}`}
              >
                <span>{sectionOne?.section_heading}</span>
              </h2>
              <p
                className={`section-text-up ${visionSection ? "newClass" : ""}`}
              >
                <span>{sectionOne?.section_description}</span>
              </p>
            </div>
            <div className="visionVideoSec">
              <div className="secVideoBox">
                <img
                  src={sectionOne?.section_desktop_image?.url}
                  alt=""
                  className="desktopImg"
                />
                <img
                  src={sectionOne?.section_mobile_image?.url}
                  alt=""
                  className="mobileImg"
                />
              </div>
              <div className="secVideoContent">
                <p>{sectionOne?.image_description}</p>
              </div>
            </div>
          </div>
        )}
      </section>

      <section
        className="philo-vision-section philo-houseOfFirst-sec"
        ref={houseOfFirstSec}
      >
        {sectionTwo?.acf_fc_layout === "house_of_firsts" && (
          <div className="vision-wrapper">
            <div className="visionHeadingSec hof-headingSec">
              <h2
                className={`section-text-up ${
                  houseOfFirstSection ? "newClass" : ""
                }`}
              >
                <span>{sectionTwo?.section_heading}</span>
              </h2>
              <p
                className={`section-text-up ${
                  houseOfFirstSection ? "newClass" : ""
                }`}
              >
                <span>{sectionTwo?.section_description}</span>
              </p>
            </div>
            <div className="visionVideoSec">
              <div className="secVideoBox">
                <video autoPlay muted loop playsInline preload="metadata">
                  <source src={sectionTwo.short_video} type="video/mp4" />
                </video>
              </div>
              <a
                data-fancybox
                data-type="video"
                data-ratio="2"
                href={sectionTwo?.full_video_link}
              >
                {sectionTwo.cta_text}
              </a>
            </div>
          </div>
        )}
      </section>

      {sectionThree?.acf_fc_layout === "related_page_section" && (
        <ExploreCompoent
          desktopImgUrl={sectionThree?.box_desktop_image?.url}
          mblImgUrl={sectionThree?.box_mobile_image?.url}
          secHeading={sectionThree?.heading}
          subHeading={sectionThree?.cta_text}
          pageUrl={sectionThree?.cta_link}
        />
      )}
      <PathComponent pageName="Philosophy" flag={false} subpage="" path="" pageData={pageData} />
    </>
  );
};

export default ClientSignaturePhilosophy;
