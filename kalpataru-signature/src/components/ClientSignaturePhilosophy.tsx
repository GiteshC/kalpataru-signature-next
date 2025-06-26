"use client";
import { useEffect } from "react";
import BannerComponent from "@/components/BannerComponent";
import ExploreCompoent from "@/components/ExploreCompoent";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { Fancybox } from "@fancyapps/ui";
import PathComponent from "@/components/PathComponent";
import { PhilosophyPageData } from "@/utils/philosophyTyps";

import SectionObserver from "./SectionObserver";

interface PhilosophyProps {
  pageData: PhilosophyPageData;
}

const ClientSignaturePhilosophy = ({ pageData }: PhilosophyProps) => {
  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {});
    return () => {
      Fancybox.destroy();
    };
  }, []);

  return (
    <>
      <BannerComponent bannerData={pageData?.acf?.banner_section} />
      {pageData?.acf?.philosophy_components?.map((sec, index) => {
        if (sec?.acf_fc_layout === "pioneers_section") {
          return (
            <SectionObserver key={index}>
              {(isSecInViewport, ref) => (
                <section className="philo-vision-section" ref={ref}>
                  <div className="vision-wrapper">
                    <div className="visionHeadingSec">
                      <h2
                        className={`section-text-up ${
                          isSecInViewport ? "newClass" : ""
                        }`}
                      >
                        <span>{sec?.section_heading}</span>
                      </h2>
                      <p
                        className={`section-text-up ${
                          isSecInViewport ? "newClass" : ""
                        }`}
                      >
                        <span>{sec?.section_description}</span>
                      </p>
                    </div>
                    <div className="visionVideoSec">
                      <div className="secVideoBox">
                        <img
                          src={sec?.section_desktop_image?.url}
                          alt=""
                          className="desktopImg"
                        />
                        <img
                          src={sec?.section_mobile_image?.url}
                          alt=""
                          className="mobileImg"
                        />
                      </div>
                      <div className="secVideoContent">
                        <p>{sec?.image_description}</p>
                      </div>
                    </div>
                  </div>
                </section>
              )}
            </SectionObserver>
          );
        }

        if (sec?.acf_fc_layout === "house_of_firsts") {
          return (
            <SectionObserver key={index}>
              {(isSecInViewport, ref) => (
                <section
                  className="philo-vision-section philo-houseOfFirst-sec"
                  ref={ref}
                >
                  <div className="vision-wrapper">
                    <div className="visionHeadingSec hof-headingSec">
                      <h2
                        className={`section-text-up ${
                          isSecInViewport ? "newClass" : ""
                        }`}
                      >
                        <span>{sec?.section_heading}</span>
                      </h2>
                      <p
                        className={`section-text-up ${
                          isSecInViewport ? "newClass" : ""
                        }`}
                      >
                        <span>{sec?.section_description}</span>
                      </p>
                    </div>
                    <div className="visionVideoSec">
                      <div className="secVideoBox">
                        <video
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload="metadata"
                        >
                          <source src={sec.short_video} type="video/mp4" />
                        </video>
                      </div>
                      <a
                        data-fancybox
                        data-type="video"
                        data-ratio="2"
                        href={sec?.full_video_link}
                      >
                        {sec.cta_text}
                      </a>
                    </div>
                  </div>
                </section>
              )}
            </SectionObserver>
          );
        }

        if (sec?.acf_fc_layout === "related_page_section") {
          return (
            <SectionObserver key={index}>
              {(isSecInViewport, ref) => <ExploreCompoent exploreData={sec} />}
            </SectionObserver>
          );
        }
      })}

      <PathComponent pathData = {pageData?.acf?.breadcrumbs}/>
    </>
  );
};

export default ClientSignaturePhilosophy;
