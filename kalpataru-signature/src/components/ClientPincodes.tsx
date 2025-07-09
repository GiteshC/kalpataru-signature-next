"use client";
import BannerComponent from "@/components/BannerComponent";
import ExploreCompoent from "@/components/ExploreCompoent";
import { useEffect, useRef, useState } from "react";
import { pincodeSlider } from "@/components/ArrowSliderComponent";
import SliderComponent from "@/components/SliderComponent";
import SectionObserver from "./SectionObserver";
import Image from "next/image";
import { PincodePageData, PinCodeDetailBox } from "@/utils/pincodeType";

interface PincodePageDataProps {
  pageData: PincodePageData;
}

export default function PincodePage({ pageData }: PincodePageDataProps) {
  const [nav1, setNav1] = useState(null);
  const slider1 = useRef(null);
  const pincodesContentBox = pageData?.acf?.pincodes_content_box;

  useEffect(() => {
    setNav1(slider1.current);
  }, []);

  return (
    <div>
      <BannerComponent bannerData={pageData?.acf?.pincodes_banner_section} />

      {pincodesContentBox && (
        <SectionObserver>
          {(isSecInViewport, ref) => (
            <section className="signPincodeSec" ref={ref}>
              <div className="signPindcodeWrapper">
                <div className="secHeading">
                  <h2 className={`section-text-up ${isSecInViewport ? "newClass" : ""}`}>
                    <span>{pincodesContentBox?.section_heading}</span>
                  </h2>
                </div>
                <div className="signPincodeContainer">
                  {pincodesContentBox?.pincodes_detail_boxes?.map((detailBox : PinCodeDetailBox, index : number)=>(
                    <div key={index} className={`signPincodeContent section-text-up ${isSecInViewport ? "newClass" : ""}`} style={isSecInViewport ? { transitionDelay: `${index * 0.3}s`} : {}}>
                      <div className="signPincodeImg">
                        <span className="single-item">
                            <SliderComponent setting={{...pincodeSlider, asNavFor: nav1 ?? undefined}} ref={slider1}>
                                {detailBox.pincodes_image_slider?.map((image, idx : number)=>(
                                    <div key={idx}>
                                        <Image src={image.pincode_desktop_image?.url || ''} className="desktopImg" alt="" width={image.pincode_desktop_image?.width} height={image.pincode_desktop_image?.height} style={{ width: "100%", height: "auto" }} />
                                        <Image src={image.pincode_mobile_image?.url || ''} className="mobileImg" alt="" width={image.pincode_mobile_image?.width} height={image.pincode_mobile_image?.height} style={{ width: "100%", height: "auto" }} />
                                    </div>
                                ))}
                            </SliderComponent>
                        </span>
                      </div>
                      <div className="signPincodedata">
                        <h3 className={`section-text-up ${isSecInViewport ? "newClass" : ""}`}>
                            <span>{detailBox?.pincodes_heading}</span>
                        </h3>
                        <p className={`section-text-up newtext-p ${isSecInViewport ? "newClass" : ""}`}>{" "}
                          <span>{detailBox?.pincodes_description}</span>
                        </p>
                        <span>
                            <a className="ctaBluetext" href={detailBox?.cta_link}>{detailBox?.cta_text}{" "}<Image src="/images/view-project-arrow.svg" alt="" width={0} height={0} style={{ width: "auto", height: "auto" }} /></a>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}
        </SectionObserver>
      )}

      <ExploreCompoent exploreData={pageData?.acf?.related_sections} />
    </div>
  );
}
