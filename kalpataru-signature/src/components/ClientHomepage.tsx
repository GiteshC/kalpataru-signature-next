"use client";
import { useEffect, useRef } from "react";
import BannerComponent from "@/components/BannerComponent";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { Fancybox } from "@fancyapps/ui";
import {
  HomepagePageData,
} from "@/utils/homepageTyps";
import SectionObserver from "./SectionObserver";

interface HomepageProps {
  pageData: HomepagePageData;
}

const ClientHomepage = ({ pageData }: HomepageProps) => {
    console.log(pageData);

    useEffect(() => {
        Fancybox.bind("[data-fancybox]", {});
        return () => {
          Fancybox.destroy();
        };
    }, []);
    return (
      <div>
        <BannerComponent bannerData={pageData?.acf?.banner_section} />
        {pageData?.acf?.signature_sections?.map((sec, index) => {
            return (
                <SectionObserver key={index}>
                    {(isSecInViewport, ref) => (
                        <section className="signatureSec" ref={ref}>
                            <div className="signatureWrapper">
                                <div className="secHeading">
                                    <h2 className={`section-text-up ${
                                        isSecInViewport ? "newClass" : ""
                                    }`}>
                                        <span>{sec?.section_heading}</span>
                                    </h2>
                                    <p className={`section-text-up ${
                                        isSecInViewport ? "newClass" : ""
                                    }`}>
                                        <span>{sec?.section_description}</span>
                                    </p>
                                    <a href={sec?.section_cta_link} className={`section-text-up ctaBluetext ${
                                        isSecInViewport ? "newClass" : ""
                                    }`}>
                                        <span>
                                            {sec?.section_cta_text} <img src="/images/cta-arrow.svg" alt="" />
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className="signatureVideo" ref={ref}>
                                <div className="videoBox">
                                    <video autoPlay muted loop playsInline preload="metadata">
                                        <source src={sec?.short_video} type="video/mp4" />
                                    </video>
                                </div>
                                <a
                                    data-fancybox=""
                                    data-ratio="2"
                                    href={sec?.video_cta_link}
                                >
                                    {sec?.video_cta_text}
                                </a>
                            </div>
                        </section>
                    )}
                </SectionObserver>
            );
        })}
  
        {/* <section className="requestSec reqNewSec">
          <div className="requestBG">
            <img
              src="/images/requestBG.png"
              alt="request-bg"
              className="desktopImg"
            />
            <img
              src="/images/request-private-viewmbl.png"
              alt="request-bg"
              className="mobileImg"
            />
          </div>
          <div className="requestWrapper requestContent reqNewContent">
            <div className="secHeading newSecHeading">
              <h2 className="section-text-up">
                <div className="trigger">
                  <span>
                    Request a Private Preview{" "}
                    <img src="/images/cta-arrow-white.svg" alt="" />
                  </span>
                </div>
              </h2>
            </div>
          </div>
        </section> */}
      </div>
    );
}

export default ClientHomepage;