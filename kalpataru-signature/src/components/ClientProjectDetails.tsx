"use client";
import { useEffect, useRef, useState } from "react";
import BannerComponent from "@/components/BannerComponent";
import ExploreCompoent from "@/components/ExploreCompoent";
import PathComponent from "@/components/PathComponent";
import SliderComponent from "@/components/SliderComponent";
import { luxuriesSlider, maestrosSlider } from "@/components/ArrowSliderComponent";
import { ResidencesProjectACF, ResidencesComponent, ResidencesLuxuries, ResidencesMaestros, ResidencesReraDetails, ResidencesSignature, ResidencesHighlightSection, ResidencesRequestPreview, LuxuriesGallery, MaestrosContent, ReraDetailListsGallery } from "@/utils/residenceType";
import { ExploreTheEssence } from "@/utils/type";
import SectionObserver from "./SectionObserver";
import useModalContext from "@/context/modalContext";
import PrivatePreviewModal from "./PrivatePreviewModal";
import Image from "next/image";

interface ProjectDetailProps {
  pageData: ResidencesProjectACF;
}

export default function ProjectDetail({ pageData }: ProjectDetailProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const [isMainAccordionOpen, setIsMainAccordionOpen] = useState(false);
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  const { isModalOpen, setIsModalOpen, modalHandler } = useModalContext();

  const relatedSection = pageData?.acf?.residences_components?.find(
    (component: ResidencesComponent) => component?.acf_fc_layout === "related_section"
  );
  const residencesSignature = pageData?.acf?.residences_components?.find(
    (component: ResidencesComponent) => component?.acf_fc_layout === "residences_signature"
  ) as ResidencesSignature | undefined;
  const residencesLuxuries = pageData?.acf?.residences_components?.find(
    (component: ResidencesComponent) => component?.acf_fc_layout === "residences_luxuries"
  ) as ResidencesLuxuries | undefined;
  const residencesMaestros = pageData?.acf?.residences_components?.find(
    (component: ResidencesComponent) => component?.acf_fc_layout === "maestros_section"
  ) as ResidencesMaestros | undefined;
  const residencesHighlightSection = pageData?.acf?.residences_components?.find(
    (component: ResidencesComponent) =>
      component?.acf_fc_layout === "residences_highlight_section"
  ) as ResidencesHighlightSection | undefined;
  const residencesReraDetails = pageData?.acf?.residences_components?.find(
    (component: ResidencesComponent) => component?.acf_fc_layout === "rera_details_section"
  ) as ResidencesReraDetails | undefined;
  const residencesRequestPreview = pageData?.acf?.residences_components?.find(
    (component: ResidencesComponent) => component?.acf_fc_layout === "request_preview_section"
  ) as ResidencesRequestPreview | undefined;

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
                {residencesSignature?.desktop_image?.url && (
                  <Image src={residencesSignature?.desktop_image?.url} className="desktopImg" alt="" width={residencesSignature?.desktop_image?.width} height={residencesSignature?.desktop_image?.height} style={{ width: "100%", height: "auto" }} />
                )}
                {residencesSignature?.mobile_image?.url && (
                  <Image src={residencesSignature?.mobile_image?.url} className="mobileImg" alt="" width={residencesSignature?.mobile_image?.width} height={residencesSignature?.mobile_image?.height} style={{ width: "100%", height: "auto" }} />
                )}
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
                  <h2
                    className={`section-text-up ${
                      isSecInViewport ? "newClass" : ""
                    }`}
                  >
                    <span>{residencesLuxuries?.section_heading}</span>
                  </h2>
                </div>
                <div className="wrapper">
                  <div className="slider-container">
                    {residencesLuxuries?.luxuries_gallery?.length > 1 && (
                      <div
                        className="slides-numbers"
                        style={{ display: "block" }}
                      >
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
                      <SliderComponent setting={{...luxuriesSlider, asNavFor: nav1 ?? undefined, beforeChange: (_oldIndex: number, newIndex: number) => {setCurrentSlide(newIndex);},}} ref={slider1}>
                        {residencesLuxuries?.luxuries_gallery?.map(
                          (slide: LuxuriesGallery, index: number) => (
                            <div key={index} className="item">
                              <div className="media-wrap">
                                {slide.luxuries_desktop_image?.url && (
                                  <Image src={slide?.luxuries_desktop_image?.url} className="desktopImg" alt="" width={slide?.luxuries_desktop_image?.width} height={slide?.luxuries_desktop_image?.height} style={{ width: "auto", height: "auto" }} />
                                )}
                                {slide.luxuries_mobile_image?.url && (
                                  <Image src={slide?.luxuries_mobile_image?.url} className="mobileImg" alt="" width={slide?.luxuries_mobile_image?.width} height={slide?.luxuries_mobile_image?.height} style={{ width: "auto", height: "auto" }} />
                                )}
                              </div>
                              <div className="overlapText">
                                {slide.luxuries_heading_icon?.url && (
                                  <Image src={slide?.luxuries_heading_icon?.url} alt="" width={slide?.luxuries_heading_icon?.width} height={slide?.luxuries_heading_icon?.height} style={{ width: "auto", height: "auto" }} />
                                )}
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
                <h2
                  className={`section-text-up ${
                    isSecInViewport ? "newClass" : ""
                  }`}
                >
                  <span>{residencesMaestros?.section_heading}</span>
                </h2>
                <p
                  className={`section-text-up ${
                    isSecInViewport ? "newClass" : ""
                  }`}
                >
                  <span>{residencesMaestros?.section_description}</span>
                </p>
              </div>
              <div className="maestrosliderCounter">
                <div className="sliderArrow">
                  {residencesMaestros?.maestros_content &&
                    residencesMaestros.maestros_content.length > 1 && (
                      <div
                        className="slides-numbers"
                        style={{ display: "block" }}
                      >
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
                      (slide: MaestrosContent, index: number) => (
                        <div key={index} className="innerSliderbox">
                          <div className="imgDiv">
                            {slide.maestros_image?.url && (
                              <Image src={slide?.maestros_image?.url} alt={slide.maestros_image?.title || ""} width={slide?.maestros_image?.width} height={slide?.maestros_image?.height} style={{ width: "100%", height: "auto" }} />
                            )}
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
                  {residencesHighlightSection?.section_desktop_image?.url && (
                    <Image src={residencesHighlightSection?.section_desktop_image?.url} className="desktopImg" alt="" width={residencesHighlightSection?.section_desktop_image?.width} height={residencesHighlightSection?.section_desktop_image?.height} style={{ width: "100%", height: "auto" }}/>
                  )}
                  {residencesHighlightSection?.section_mobile_image?.url && (
                    <Image src={residencesHighlightSection?.section_mobile_image?.url} className="mobileImg" alt="" width={residencesHighlightSection?.section_mobile_image?.width} height={residencesHighlightSection?.section_mobile_image?.height} style={{ width: "100%", height: "auto" }}/>
                  )}
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
                  <div className={`mainHeadingdiv toggle ${isMainAccordionOpen ? "showDiv" : ""}`} onClick={handleMainAccordionClick}>
                    <a href="#" onClick={(e) => e.preventDefault()} className="headingMain">{residencesReraDetails?.rera_heading}</a>
                  </div>
                  <ul className={`inner ${isMainAccordionOpen ? "show" : ""}`} style={{ display: isMainAccordionOpen ? "block" : "none" }}>
                    {residencesReraDetails?.rera_detail_lists?.map(
                      (proj: ReraDetailListsGallery, index: number) => (
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
                              display:
                                openAccordion === index ? "block" : "none",
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
                                {proj.rera_list_image?.url && (
                                  <Image src={proj?.rera_list_image?.url} alt="" width={proj?.rera_list_image?.width} height={proj?.rera_list_image?.height} style={{ width: "100%", height: "auto" }}
                                  />
                                )}
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
                {residencesRequestPreview?.section_desktop_image?.url && (
                  <Image src={residencesRequestPreview?.section_desktop_image?.url} className="desktopImg" alt="" width={residencesRequestPreview?.section_desktop_image?.width} height={residencesRequestPreview?.section_desktop_image?.height} style={{ width: "100%", height: "auto" }}/>
                )}
                {residencesRequestPreview?.section_mobile_image?.url && (
                  <Image src={residencesRequestPreview?.section_mobile_image?.url} className="mobileImg" alt="" width={residencesRequestPreview?.section_mobile_image?.width} height={residencesRequestPreview?.section_mobile_image?.height} style={{ width: "100%", height: "auto" }}/>
                )}
              </div>
              <div className="requestWrapper requestContent reqNewContent">
                <div className="secHeading newSecHeading ">
                  <h2
                    className={`section-text-up ${
                      isSecInViewport ? "newClass" : ""
                    }`}
                    onClick={modalHandler}
                  >
                    <div className="trigger">
                      <span>
                        {residencesRequestPreview?.section_heading}{" "}
                        <Image src="/images/cta-arrow-white.svg" alt="" width={0} height={0} style={{ width: "auto", height: "auto" }}/>
                      </span>
                    </div>
                  </h2>
                </div>
              </div>
            </section>
          )}
        </SectionObserver>
      )}

      {relatedSection && (
        <ExploreCompoent exploreData={relatedSection as ExploreTheEssence} />
      )}

      <PathComponent pathData={pageData?.acf?.breadcrumbs} />

      {isModalOpen ? (
        <PrivatePreviewModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      ) : (
        ""
      )}
    </>
  );
}