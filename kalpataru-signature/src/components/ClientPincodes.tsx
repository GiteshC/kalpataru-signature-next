"use client";
import BannerComponent from "@/components/BannerComponent";
import ExploreCompoent from "@/components/ExploreCompoent";
import { useEffect, useRef, useState } from "react";
import { pincodeSlider } from "@/components/ArrowSliderComponent";
import SliderComponent from "@/components/SliderComponent";
import SectionObserver from "./SectionObserver";

export default function PincodePage({ pageData }: any) {
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
                  {pincodesContentBox?.pincodes_detail_boxes?.map((detailBox : any, index : number)=>(
                    <div key={index} className={`signPincodeContent section-text-up ${isSecInViewport ? "newClass" : ""}`} style={isSecInViewport ? { transitionDelay: `${index * 0.3}s`} : {}}>
                      <div className="signPincodeImg">
                        <span className="single-item">
                            <SliderComponent setting={{...pincodeSlider, asNavFor: nav1 ?? undefined}} ref={slider1}>
                                {detailBox.pincodes_image_slider?.map((image : any, idx : number)=>(
                                    <div key={idx}>
                                        <img src={image.pincode_desktop_image?.url} className="desktopImg" alt="" />
                                        <img src={image.pincode_mobile_image?.url} className="mobileImg" alt="" />
                                    </div>
                                ))}
                            </SliderComponent>
                        </span>
                      </div>
                      <div className="signPincodedata">
                        <h3 className={`section-text-up ${isSecInViewport ? "newClass" : ""}`}>
                            <span>{detailBox?.pincodes_heading}</span>
                        </h3>
                        <p className={`section-text-up newtext-p ${isSecInViewport ? "newClass" : ""}`}>
                            {" "}
                            <span>{detailBox?.pincodes_description}</span>
                        </p>
                        <span>
                            <a className="ctaBluetext" href={detailBox?.cta_link}>{detailBox?.cta_text}{" "}<img src="/images/view-project-arrow.svg" alt="" /></a>
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

      {/* <div className="modal">
        <div className="modalInner">
          <div className="headerLogo">
            <a href="index.html">
              {" "}
              <img src="/images/headerlogo.svg" className="desktopImg" alt="" />
            </a>
          </div>
          <span className="close-button">
            <img src="/images/popup-close-icon.svg" className="mobileImg" alt="" />
          </span>
          <span className="close-buttonTwo">
            <img src="/images/backarrow-modal.svg" alt="" />
          </span>
          <div className="modal-content">
            <div className="meetingModal">
              <h2>Request a Private Preview</h2>
              <div className="innerForm">
                <form action="contact.php" method="post">
                  <input
                    type="text"
                    id="name"
                    name="visitor_name"
                    placeholder="Name"
                    required
                  />
                  <input
                    type="email"
                    id="email"
                    name="visitor_email"
                    placeholder="Email ID"
                    required
                  />
                  <div className="inputNumber">
                    <select id="country" name="country">
                      <option value={+91}>+91</option>
                      <option value={+44}>+44</option>
                      <option value={+51}>+51</option>
                    </select>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      placeholder="Phone number"
                    />
                  </div>
                  <button type="submit">I'm Interested</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
