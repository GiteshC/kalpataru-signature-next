"use client";

import React, { useEffect, useState } from "react";
import SliderComponent from "./SliderComponent";
import { experienceSlider } from "./ArrowSliderComponent";
import { ExperiencePageData } from "@/utils/experienceType";
import BannerComponent from "./BannerComponent";
import SectionObserver from "./SectionObserver";
import { Fancybox } from "@fancyapps/ui";
import ExploreCompoent from "./ExploreCompoent";
import PathComponent from "./PathComponent";
import Image from "next/image";

interface ExperienceProps {
  pageData: ExperiencePageData;
}

const ClientSingatureExprience = ({ pageData }: ExperienceProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {});
    return () => {
      Fancybox.destroy();
    };
  }, []);
  return (
    <>
      <BannerComponent bannerData={pageData?.acf?.banner_section} />

      {pageData?.acf?.experience_components?.map((sec, index) => {
        if (sec.acf_fc_layout === "experience_section") {
          return (
            <SectionObserver key={index}>
              {(isSecInViewport, ref) => (
                <section className="signatureSec signExpimgsection" ref={ref}>
                  <div className="signatureWrapper">
                    <div className="secHeading">
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
                    <div className="imgSection">
                      {sec?.experience_of_living?.map((imageCard: any) => (
                        <div
                          key={imageCard?.experience_image?.id}
                          className={`innerImg section-text-up ${
                            isSecInViewport ? "newClass" : ""
                          }`}
                        >
                          <span>
                            <a
                              data-fancybox=""
                              data-ratio="2"
                              href={imageCard?.experience_video_link}
                            >
                              <Image
                                src={imageCard?.experience_image?.url}
                                alt=""
                              />
                              <div className="popupButton">
                                <Image
                                  src="/images/resident-slider-arrow.svg"
                                  alt=""
                                  title=""
                                />
                              </div>
                            </a>
                          </span>
                        </div>
                      ))}
                      {/* <div
                        className={`innerImg section-text-up ${
                          experienceSection ? "newClass" : ""
                        }`}
                      >
                        <span>
                          <a
                            data-fancybox=""
                            data-ratio="2"
                            href="https://www.youtube.com/embed/XenKI94naI0?autoplay=1&amp;mute=1"
                          >
                            <Image
                              src="images/madhurbaya-avanatestimonial-thumbnail-bigimg.webp"
                              alt=""
                            />
                            <div className="popupButton">
                              <Image
                                src="/images/resident-slider-arrow.svg"
                                alt=""
                                title=""
                              />
                            </div>
                          </a>
                        </span>
                      </div>
                      <div
                        className={`innerImg section-text-up ${
                          experienceSection ? "newClass" : ""
                        }`}
                      >
                        <span>
                          <a
                            data-fancybox=""
                            data-ratio="2"
                            href="https://www.youtube.com/embed/viptE0F8Jv8?autoplay=1&amp;mute=1"
                          >
                            <Image
                              src="images/mr-santhanam-amodatestimonial-bigimg.webp"
                              alt=""
                            />
                            <div className="popupButton">
                              <Image
                                src="/images/resident-slider-arrow.svg"
                                alt=""
                                title=""
                              />
                            </div>
                          </a>
                        </span>
                      </div> */}
                    </div>
                  </div>
                </section>
              )}
            </SectionObserver>
          );
        }
        if (sec.acf_fc_layout === "cultural_events") {
          return (
            <SectionObserver key={index}>
              {(isSecInViewport, ref) => (
                <section className="signatureSec sigexpEventsec" ref={ref}>
                  <div className="signatureWrapper">
                    <div className="secHeading">
                      <h2
                        className={`section-text-up ${
                          isSecInViewport ? "newClass" : ""
                        }`}
                      >
                        <span>{sec.section_heading}</span>
                      </h2>
                      <p
                        className={`section-text-up ${
                          isSecInViewport ? "newClass" : ""
                        }`}
                      >
                        <span>{sec.section_description}</span>
                      </p>
                    </div>
                  </div>
                  <div className="slider-container">
                    <div
                      className="slides-numbers"
                      style={{ display: "block" }}
                    >
                      <span className="active">
                        {String(currentSlide + 1).padStart(2, "0")}
                      </span>
                      <span>/</span>
                      <span className="total">
                        {String(sec?.event_content?.length).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="eventSlider">
                      <SliderComponent
                        setting={{
                          ...experienceSlider,
                          beforeChange: (
                            _oldIndex: number,
                            newIndex: number
                          ) => {
                            setCurrentSlide(newIndex);
                          },
                        }}
                      >
                        {sec?.event_content?.map((card) => (
                          <div
                            className="eventDetails"
                            key={card?.event_image?.id}
                          >
                            <div className="eventImg">
                              <Image
                                src={`${card?.event_image?.url}`}
                                alt={`${card?.event_image?.title}`}
                              />
                            </div>
                            <div className="eventName">
                              <h4>{card?.event_name}</h4>
                              <h3>{card?.event_date}</h3>
                            </div>
                          </div>
                        ))}
                      </SliderComponent>
                    </div>
                  </div>
                </section>
              )}
            </SectionObserver>
          );
        }

        if (sec?.acf_fc_layout === "related_page_section") {
          return (
            <ExploreCompoent key={index} exploreData={sec} />
          );
        }
      })}

      <PathComponent pathData = {pageData?.acf?.breadcrumbs}/>
    </>
  );
};

export default ClientSingatureExprience;
