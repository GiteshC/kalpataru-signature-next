"use client";
import { useEffect, useRef, useState } from "react";
import { Fancybox } from "@fancyapps/ui";
import BannerComponent from "@/components/BannerComponent";
import ExploreCompoent from "@/components/ExploreCompoent";
import useIsSecVisible from "@/hooks/useIsSecVisible";
import {
  pincodeMapSecNav,
  pincodesMapSec,
  residentSlider,
  videoWrapperslider,
} from "@/components/ArrowSliderComponent";
import SliderComponent from "@/components/SliderComponent";
import Slider from "react-slick";
import { PrevArrow, NextArrow } from "@/components/ArrowSliderComponent";
import PathComponent from "@/components/PathComponent";
import Link from "next/link";
import {
  EssencePageData,
  EssenceVideoSec,
  ResidentsSec,
  ResidentsSecProperty,
  SignaturePinCode,
} from "@/utils/essenceTyps";
import { ExploreTheEssence } from "@/utils/type";
import Image from "next/image";

interface EssenceProps {
  pageData: EssencePageData;
}

const ClientSignatureEssence = ({ pageData }: EssenceProps) => {
  const pincodeSlider1 = useRef<Slider | null>(null);
  const pincodeSlider2 = useRef<Slider | null>(null);
  const [nav1, setNav1] = useState<Slider | null>(null);
  const [nav2, setNav2] = useState<Slider | null>(null);

  const [pincodesMapsecSlider, setPincodesMapsecSlider] = useState(0);
  const [essenceVidsecSlider, setEssenceVidsecSlider] = useState(0);

  const sectionOne = pageData?.acf?.essence_components?.[0] as SignaturePinCode;
  const sectionTwo = pageData?.acf?.essence_components?.[1] as EssenceVideoSec;
  const sectionThree = pageData?.acf?.essence_components?.[2] as ResidentsSec;
  const sectionFour = pageData?.acf
    ?.essence_components?.[3] as ExploreTheEssence;

  const sliderRef = useRef<Slider | null>(null);

  const handleEssencePrev = () => sliderRef.current?.slickPrev();
  const handleEssenceNext = () => sliderRef.current?.slickNext();

  const pincodeMapSecRef = useRef(null);
  const { isSecInViewport: pincodeMapSec } = useIsSecVisible(pincodeMapSecRef);

  useEffect(() => {
    if (
      sectionOne?.acf_fc_layout === "pincodes_content" &&
      pincodeSlider1.current &&
      pincodeSlider2.current
    ) {
      setNav1(pincodeSlider1.current);
      setNav2(pincodeSlider2.current);
    }
  }, [sectionOne]);

  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {
      Thumbs: {
        showOnStart: false,
      },
      groupAll: false,
    });
    return () => {
      Fancybox.destroy();
    };
  }, []);
  return (
    <>
      <BannerComponent bannerData={pageData?.acf?.banner_section} />

      <section className="signatureSec pincodesMapsec" ref={pincodeMapSecRef}>
        {sectionOne?.acf_fc_layout === "pincodes_content" && (
          <>
            <div className="signatureWrapper">
              <div className="secHeading">
                <h2
                  className={`section-text-up ${
                    pincodeMapSec ? "newClass" : ""
                  }`}
                >
                  <span>{sectionOne?.section_heading}</span>
                </h2>
                <p
                  className={`section-text-up ${
                    pincodeMapSec ? "newClass" : ""
                  }`}
                >
                  <span>{sectionOne?.section_description}</span>
                </p>
              </div>
            </div>
            <div className="pincodesMap">
              <div className="mapSlider">
                <SliderComponent
                  setting={{
                    ...pincodesMapSec,
                    asNavFor: nav2 ?? undefined,
                    beforeChange: (_oldIndex: number, newIndex: number) => {
                      setPincodesMapsecSlider(newIndex);
                    },
                  }}
                  ref={pincodeSlider1}
                >
                  {sectionOne?.pincodes_properties?.map((el) => (
                    <div className="bgMaps" key={el?.pincode_area_image?.id}>
                      <Image
                        src={el?.pincode_area_image?.url || ""}
                        alt={el?.pincode_area_image?.title || ""}
                        width={el?.pincode_area_image?.width}
                        height={el?.pincode_area_image?.height}
                        style={{ width: "100%", height: "auto" }}
                      />
                    </div>
                  ))}
                </SliderComponent>
              </div>
              <div className="numberandDetails">
                <div className="slides-numbers" style={{ display: "block" }}>
                  <span className="active">
                    {String(pincodesMapsecSlider + 1).padStart(2, "0")}
                  </span>
                  <span>/</span>
                  <span className="total">
                    {String(sectionOne.pincodes_properties?.length).padStart(
                      2,
                      "0"
                    )}
                  </span>
                </div>
                <div className="locationSlider">
                  <SliderComponent
                    setting={{
                      ...pincodeMapSecNav,
                      asNavFor: nav1 ?? undefined,
                    }}
                    ref={pincodeSlider2}
                  >
                    {sectionOne?.pincodes_properties?.map((card, i) => (
                      <div className="innerContent" key={i}>
                        <div className="imgDiv">
                          <div className="bigImg">
                            <Image
                              src={
                                card?.property_images?.property_big_image
                                  ?.url || ""
                              }
                              alt=""
                              width={
                                card?.property_images?.property_big_image?.width
                              }
                              height={
                                card?.property_images?.property_big_image
                                  ?.height
                              }
                              style={{ width: "100%", height: "auto" }}
                            />
                          </div>
                          <div className="smallImg">
                            <div className="innerSmallimg">
                              <Image
                                src={
                                  card?.property_images
                                    ?.property_small_image_one?.url || ""
                                }
                                alt=""
                                width={
                                  card?.property_images
                                    ?.property_small_image_one?.width
                                }
                                height={
                                  card?.property_images
                                    ?.property_small_image_one?.height
                                }
                                style={{ width: "100%", height: "auto" }}
                              />
                            </div>
                            <div className="innerSmallimg">
                              <Image
                                src={
                                  card?.property_images
                                    ?.property_small_image_two?.url || ""
                                }
                                alt=""
                                width={
                                  card?.property_images
                                    ?.property_small_image_two?.width
                                }
                                height={
                                  card?.property_images
                                    ?.property_small_image_two?.height
                                }
                                style={{ width: "100%", height: "auto" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="pincodeDetails">
                          <h3>{card?.property_name}</h3>
                          <p>{card?.property_description}</p>
                          <Link href={"/pincodes"} className="ctaBluetext">
                            {card?.cta_text}
                            <Image
                              src="images/pincode-arrow.svg"
                              alt=""
                              width={0}
                              height={0}
                              style={{ width: "auto", height: "auto" }}
                            />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </SliderComponent>
                </div>
              </div>
            </div>
          </>
        )}
      </section>

      <section className="essenceVidsec">
        {sectionTwo?.acf_fc_layout === "interview_section" && (
          <>
            <div className="videoWrapperslider">
              <SliderComponent
                ref={sliderRef}
                setting={{
                  ...videoWrapperslider,
                  beforeChange: (_oldIndex: number, essNewIndex: number) => {
                    setEssenceVidsecSlider(essNewIndex);
                  },
                }}
              >
                {sectionTwo?.interview_content?.map((el) => (
                  <div key={el.video_thumbnail.id} className="innerBoxes">
                    <div className="videoMaindiv">
                      <div className="textDiv">
                        <h3>{el.heading}</h3>
                        <h2>{el.sub_heading}</h2>
                      </div>
                      <div className="bottomText">
                        <h4>{el.designer_name}</h4>
                        <p>{el.designer_designation}</p>
                      </div>
                    </div>
                    <div className="videoDiv">
                      <a
                        data-fancybox
                        data-type="video"
                        data-ratio="2"
                        href={el.video_link}
                      >
                        <div className="video">
                          <Image
                            src={el.video_thumbnail.url || ""}
                            alt=""
                            width={el.video_thumbnail.width}
                            height={el.video_thumbnail.height}
                            style={{ width: "auto", height: "auto" }}
                          />
                          <div className="popupButton">
                            <Image
                              src="images/resident-slider-arrow.svg"
                              alt=""
                              title=""
                              width={0}
                              height={0}
                              style={{ width: "auto", height: "auto" }}
                            />
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                ))}
              </SliderComponent>
            </div>
            <div className="sliderArrow">
              <PrevArrow
                className="maestroprev slick-arrow"
                onClick={handleEssencePrev}
              />
              <div className="slides-numbers" style={{ display: "block" }}>
                <span className="active">
                  {String(essenceVidsecSlider + 1).padStart(2, "0")}
                </span>
                <span>/</span>
                <span className="total">
                  {String(sectionTwo.interview_content?.length).padStart(
                    2,
                    "0"
                  )}
                </span>
              </div>
              <NextArrow
                className="maestronext slick-arrow"
                onClick={handleEssenceNext}
              />
            </div>
          </>
        )}
      </section>

      <section className="residentsSec">
        {sectionThree?.acf_fc_layout === "residents_testimonials" && (
          <div className="residentsWrapper">
            <div className="secHeading">
              <h2>{sectionThree.section_heading}</h2>
              <p>{sectionThree.section_sub_heading}</p>
            </div>
            <div className="resCounterslider">
              {/* <div className="slides-numbers" style={{ display: "none" }}>
                <span className="active">
                  {String(1 + 1).padStart(2, "0")}
                </span>
                <span>/</span>
                <span className="total">
                  {String(sectionThree.testimonials_content?.length).padStart(
                    2,
                    "0"
                  )}
                </span>
              </div> */}
              <div className="residentSlider">
                <SliderComponent setting={{ ...residentSlider }}>
                  {sectionThree.testimonials_content?.map(
                    (el: ResidentsSecProperty) => (
                      <div className="innerBoxes" key={el.video_thumbnail.id}>
                        <div className="videoBox">
                          <Image
                            src={el.video_thumbnail.url || ""}
                            alt=""
                            width={el.video_thumbnail.width}
                            height={el.video_thumbnail.height}
                            style={{ width: "auto", height: "auto" }}
                          />
                          <div className="popupButton">
                            <a
                              data-fancybox
                              data-ratio="4"
                              href={el.video_link}
                            >
                              <Image
                                src="images/resident-slider-arrow.svg"
                                alt=""
                                title=""
                                width={0}
                                height={0}
                                style={{ width: "auto", height: "auto" }}
                              />
                            </a>
                          </div>
                        </div>
                        <div className="descriptionBox">
                          <h3>{el.video_heading}</h3>
                        </div>
                      </div>
                    )
                  )}
                </SliderComponent>
              </div>
            </div>
          </div>
        )}
      </section>

      {sectionFour?.acf_fc_layout === "related_page_section" && (
        <ExploreCompoent exploreData={sectionFour} />
      )}

      <PathComponent pathData={pageData?.acf?.breadcrumbs} />
    </>
  );
};

export default ClientSignatureEssence;
