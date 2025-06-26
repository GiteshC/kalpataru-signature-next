"use client";
import { useEffect, useRef, useState } from "react";
import BannerComponent from "@/components/BannerComponent";
import ExploreCompoent from "@/components/ExploreCompoent";
import PathComponent from "@/components/PathComponent";
import SliderComponent from "@/components/SliderComponent";
import {
  luxuriesSlider,
  maestrosSlider,
} from "@/components/ArrowSliderComponent";
import { ResidencesProjectACF } from "@/utils/residenceType";
import SectionObserver from "./SectionObserver";

interface ProjectDetailProps {
  pageData: ResidencesProjectACF;
}

export default function ProjectDetail({ pageData }: ProjectDetailProps | any) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const [isMainAccordionOpen, setIsMainAccordionOpen] = useState(false);
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  const relatedSection = pageData?.acf?.residences_components?.find(
    (component: any) => component?.acf_fc_layout === "related_section"
  );
  const residencesSignature = pageData?.acf?.residences_components?.find(
    (component: any) => component?.acf_fc_layout === "residences_signature"
  );
  const residencesLuxuries = pageData?.acf?.residences_components?.find(
    (component: any) => component?.acf_fc_layout === "residences_luxuries"
  );
  const residencesMaestros = pageData?.acf?.residences_components?.find(
    (component: any) => component?.acf_fc_layout === "maestros_section"
  );
  const residencesHighlightSection = pageData?.acf?.residences_components?.find(
    (component: any) =>
      component?.acf_fc_layout === "residences_highlight_section"
  );
  const residencesReraDetails = pageData?.acf?.residences_components?.find(
    (component: any) => component?.acf_fc_layout === "rera_details_section"
  );
  const residencesRequestPreview = pageData?.acf?.residences_components?.find(
    (component: any) => component?.acf_fc_layout === "request_preview_section"
  );

  const handleAccordionClick = (id: number) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const handleMainAccordionClick = () => {
    setIsMainAccordionOpen(!isMainAccordionOpen);
  };

  const totalSlides = residencesMaestros?.maestros_content?.length || 0;
  const totalHolderSlides = residencesLuxuries?.luxuries_gallery?.length || 0;

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  return (
    <>
      <BannerComponent bannerData={pageData?.acf?.banner_section} />

      {residencesSignature && (
        <SectionObserver>
          {(isSecInViewport, ref) => (
            <section className="signatureSec" ref={ref}>
              <div className="signatureWrapper">
                <div className="secHeading">
                  <h2 className={`section-text-up ${isSecInViewport ? "newClass" : ""}`}>
                    <span>{residencesSignature?.section_heading}</span>
                  </h2>
                  <p className={`section-text-up ${isSecInViewport ? "newClass" : ""}`}>
                    <span>{residencesSignature?.section_description}</span>
                  </p>
                </div>
              </div>
              <div className="videoBox">
                <img
                  src={residencesSignature?.desktop_image?.url}
                  className="desktopImg"
                />
                <img
                  src={residencesSignature?.mobile_image?.url}
                  className="mobileImg"
                />
              </div>
            </section>
          )}
        </SectionObserver>
      )}

      {residencesLuxuries && (
        <SectionObserver>
          {(isSecInViewport, ref) => (
            <section className="luxuriesSlider" ref={ref}>
              <div className="signatureWrapper">
                <div className="secHeading">
                  <h2 className={`section-text-up ${isSecInViewport ? "newClass" : ""}`}>
                    <span>{residencesLuxuries?.section_heading}</span>
                  </h2>
                </div>
                <div className="wrapper">
                  <div className="slider-container">
                    {residencesLuxuries?.luxuries_gallery?.length > 1 && (
                      <div className="slides-numbers" style={{ display: "block" }}>
                        <span className="active">
                          {String(currentSlide + 1).padStart(2, "0")}
                        </span>
                        <span>&nbsp;/&nbsp;</span>
                        <span className="total">
                          {String(totalHolderSlides).padStart(2, "0")}
                        </span>
                      </div>
                    )}
                    <div className="slider-holder">
                      <SliderComponent
                        setting={{
                          ...luxuriesSlider,
                          asNavFor: nav1 ?? undefined,
                          beforeChange: (_oldIndex: number, newIndex: number) => {
                            setCurrentSlide(newIndex);
                          },
                        }}
                        ref={slider1}
                      >
                        {residencesLuxuries?.luxuries_gallery?.map(
                          (slide: any, index: number) => (
                            <div key={index} className="item">
                              <div className="media-wrap">
                                <img
                                  src={slide.luxuries_desktop_image?.url}
                                  className="desktopImg"
                                />
                                <img
                                  src={slide.luxuries_mobile_image?.url}
                                  className="mobileImg"
                                />
                              </div>
                              <div className="overlapText">
                                <img src={slide.luxuries_heading_icon?.url} />
                                <h3>{slide.luxuries_heading}</h3>
                              </div>
                            </div>
                          )
                        )}
                      </SliderComponent>
                    </div>
                  </div>
                </div>
              </div>
            </section>          
          )}
        </SectionObserver>
      )}

      {residencesMaestros && (
        <SectionObserver>
          {(isSecInViewport, ref) => (
            <section className="maestrosSlidersec" ref={ref}>
              <div className="secHeading">
                <h2 className={`section-text-up ${isSecInViewport ? "newClass" : ""}`}>
                  <span>{residencesMaestros?.section_heading}</span>
                </h2>
                <p className={`section-text-up ${isSecInViewport ? "newClass" : ""}`}>
                  <span>{residencesMaestros?.section_description}</span>
                </p>
              </div>
              <div className="maestrosliderCounter">
                <div className="sliderArrow">
                  {residencesMaestros?.maestros_content?.length > 1 && (
                    <div className="slides-numbers" style={{ display: "block" }}>
                      <span className="active">
                        {String(currentSlide + 1).padStart(2, "0")}
                      </span>
                      <span>&nbsp;/&nbsp;</span>
                      <span className="total">
                        {String(totalSlides).padStart(2, "0")}
                      </span>
                    </div>
                  )}
                </div>
                <div className="maestrosSlider">
                  <SliderComponent
                    setting={{
                      ...maestrosSlider,
                      asNavFor: nav2 ?? undefined,
                      beforeChange: (_oldIndex: number, newIndex: number) => {
                        setCurrentSlide(newIndex);
                      },
                    }}
                    ref={slider2}
                  >
                    {residencesMaestros?.maestros_content?.map(
                      (slide: any, index: number) => (
                        <div key={index} className="innerSliderbox">
                          <div className="imgDiv">
                            <img
                              src={slide.maestros_image?.url}
                              alt={slide.maestros_image?.title}
                            />
                          </div>
                          <div className="infoDiv">
                            <div className="headingMain">
                              <h3>{slide.person_name}</h3>
                              <h5>{slide.person_designation}</h5>
                            </div>
                            <div className="subHeadings">
                              <h4>{slide.heading}</h4>
                              <p>{slide.description}</p>
                            </div>
                          </div>
                        </div>
                      )
                    )}
                  </SliderComponent>
                </div>
              </div>
            </section>          
          )}
        </SectionObserver>
      )}

      {residencesHighlightSection && (
        <SectionObserver>
          {(isSecInViewport, ref) => (
            <section className="signatureSec projectdetBeach" ref={ref}>
              <div className="signatureWrapper">
                <div className="secHeading">
                  <h2 className={`section-text-up ${isSecInViewport ? "newClass" : ""}`}>
                    <span>{residencesHighlightSection?.section_heading}</span>
                  </h2>
                </div>
              </div>
              <div className="signatureImg">
                <div className="Viewimages">
                  <img
                    src={residencesHighlightSection?.section_desktop_image?.url}
                    className="desktopImg"
                  />
                  <img
                    src={residencesHighlightSection?.section_mobile_image?.url}
                    className="mobileImg"
                  />
                </div>
                <div className="innerText">
                  <h3>{residencesHighlightSection?.box_description}</h3>
                </div>
              </div>
            </section>          
          )}
        </SectionObserver>
      )}

      {residencesReraDetails && (
        <SectionObserver>
          {(isSecInViewport, ref) => (
            <section className="reraContainer" ref={ref}>
              <ul className="accordion">
                <li>
                  <div
                    className={`mainHeadingdiv toggle ${
                      isMainAccordionOpen ? "showDiv" : ""
                    }`}
                    onClick={handleMainAccordionClick}
                  >
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="headingMain"
                    >
                      {residencesReraDetails?.rera_heading}
                    </a>
                  </div>
                  <ul
                    className={`inner ${isMainAccordionOpen ? "show" : ""}`}
                    style={{ display: isMainAccordionOpen ? "block" : "none" }}
                  >
                    {residencesReraDetails?.rera_detail_lists?.map(
                      (proj: any, index: number) => (
                        <li key={index}>
                          <div
                            className={`innerDescHeading toggle ${
                              openAccordion === index ? "showDiv" : ""
                            }`}
                            onClick={() => handleAccordionClick(index)}
                          >
                            <a
                              href="#"
                              onClick={(e) => e.preventDefault()}
                              className="subHeadings"
                            >
                              {proj.rera_list_heading}
                            </a>
                          </div>
                          <div
                            className="innerInfo"
                            style={{
                              display: openAccordion === index ? "block" : "none",
                              transition: "all 0.3s ease-in-out",
                            }}
                          >
                            <div className="descDetils">
                              <p>
                                <a
                                  href="https://maharera.mahaonline.gov.in/"
                                  onClick={(e) => e.preventDefault()}
                                  target="_blank"
                                >
                                  {proj.rera_list_description}
                                </a>
                              </p>
                              <div className="scannerImg">
                                <img src={proj.rera_list_image?.url} />
                              </div>
                            </div>
                          </div>
                        </li>
                      )
                    )}
                  </ul>
                </li>
              </ul>
            </section>          
          )}
        </SectionObserver>
      )}

      {residencesRequestPreview && (
        <SectionObserver>
          {(isSecInViewport, ref) => (
            <section className="requestSec reqNewSec" ref={ref}>
              <div className="requestBG">
                <img
                  src={residencesRequestPreview?.section_desktop_image?.url}
                  className="desktopImg"
                />
                <img
                  src={residencesRequestPreview?.section_mobile_image?.url}
                  className="mobileImg"
                />
              </div>
              <div className="requestWrapper requestContent reqNewContent">
                <div className="secHeading newSecHeading ">
                  <h2 className={`section-text-up ${isSecInViewport ? "newClass" : ""}`}>
                    <div className="trigger">
                      <span>
                        {residencesRequestPreview?.section_heading}{" "}
                        <img src="/images/cta-arrow-white.svg" />
                      </span>
                    </div>
                  </h2>
                </div>
              </div>
            </section>          
          )}
        </SectionObserver>
      )}

      {relatedSection && <ExploreCompoent exploreData={relatedSection} />}

      <PathComponent pathData={pageData?.acf?.breadcrumbs} />

      {/* */}
    </>
  );
}
