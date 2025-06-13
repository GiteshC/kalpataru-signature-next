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

const SignatureEssence = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  const slider1 = useRef(null);
  const slider2 = useRef(null);

  const sliderRef = useRef<Slider | null>(null);

  const handlePrev = () => sliderRef.current?.slickPrev();
  const handleNext = () => sliderRef.current?.slickNext();
  const pincodeMapSecRef = useRef(null);
  const { isSecInViewport: pincodeMapSec } = useIsSecVisible(pincodeMapSecRef);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

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
      <BannerComponent
        videoUrl="/images/signature-essence.mp4"
        mainHeading="Signature Essence"
        para="When luxury is honed over decades, it starts to embody perfection."
      />
      <section className="signatureSec pincodesMapsec" ref={pincodeMapSecRef}>
        <div className="signatureWrapper">
          <div className="secHeading">
            <h2
              className={`section-text-up ${pincodeMapSec ? "newClass" : ""}`}
            >
              <span>SIGNATURE PIN CODES</span>
            </h2>
            <p className={`section-text-up ${pincodeMapSec ? "newClass" : ""}`}>
              <span>
                India's finest pin codes. Made so by our finest landmarks.
              </span>
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
                  setCurrentSlide(newIndex);
                },
              }}
              ref={slider1}
            >
              <div className="bgMaps">
                <img src="images/kala-ghoda-location.webp" />
              </div>
              <div className="bgMaps">
                <img src="images/kala-ghoda-location.webp" />
              </div>
              <div className="bgMaps">
                <img src="images/kala-ghoda-location.webp" />
              </div>
            </SliderComponent>
          </div>
          <div className="numberandDetails">
            <div className="slides-numbers" style={{ display: "block" }}>
              <span className="active">
                {String(currentSlide + 1).padStart(2, "0")}
              </span>
              <span>/</span>
              <span className="total">
                {String(totalSlides).padStart(2, "0")}
              </span>
            </div>
            <div className="locationSlider">
              <SliderComponent
                setting={{
                  ...pincodeMapSecNav,
                  asNavFor: nav1 ?? undefined,
                }}
                ref={slider2}
              >
                <div className="innerContent">
                  <div className="imgDiv">
                    <div className="bigImg">
                      <img src="images/pincodes-big-img-fold-1.webp" />
                    </div>
                    <div className="smallImg">
                      <div className="innerSmallimg">
                        <img src="images/pincodes-small-img1-fold-1.webp" />
                      </div>
                      <div className="innerSmallimg">
                        <img src="images/pincodes-small-img2-fold-1.webp" />
                      </div>
                    </div>
                  </div>
                  <div className="pincodeDetails">
                    <h3>Nepean Sea Road, 400006</h3>
                    <p>Where opulence meets oceanfront living</p>
                    <a href="pincodes.html" className="ctaBluetext">
                      Explore our Signature Pin Codes
                      <img src="images/pincode-arrow.svg" />
                    </a>
                  </div>
                </div>
                <div className="innerContent">
                  <div className="imgDiv">
                    <div className="bigImg">
                      <img src="images/pincodes-big-img-fold-2.webp" />
                    </div>
                    <div className="smallImg">
                      <div className="innerSmallimg">
                        <img src="images/pincodes-small-img1-fold-2.webp" />
                      </div>
                      <div className="innerSmallimg">
                        <img src="images/pincodes-small-img2-fold-2.webp" />
                      </div>
                    </div>
                  </div>
                  <div className="pincodeDetails">
                    <h3>Prabhedevi, 400025</h3>
                    <p>Where seaside serenity meets urban sophistication</p>
                    <a href="pincodes.html" className="ctaBluetext">
                      Explore our Signature Pin Codes
                      <img src="images/pincode-arrow.svg" />
                    </a>
                  </div>
                </div>
                <div className="innerContent">
                  <div className="imgDiv">
                    <div className="bigImg">
                      <img src="images/pincodes-big-img-fold-3.webp" />
                    </div>
                    <div className="smallImg">
                      <div className="innerSmallimg">
                        <img src="images/pincodes-small-img1-fold-3.webp" />
                      </div>
                      <div className="innerSmallimg">
                        <img src="images/pincodes-small-img2-fold-3.webp" />
                      </div>
                    </div>
                  </div>
                  <div className="pincodeDetails">
                    <h3>Altamount Road, 400026</h3>
                    <p>The Pinnacle Address</p>
                    <a href="pincodes.html" className="ctaBluetext">
                      Explore our Signature Pin Codes
                      <img src="images/pincode-arrow.svg" />
                    </a>
                  </div>
                </div>
              </SliderComponent>
            </div>
          </div>
        </div>
      </section>
      <section className="essenceVidsec">
        <div className="videoWrapperslider">
          <SliderComponent
            ref={sliderRef}
            setting={{
              ...videoWrapperslider,
              beforeChange: (_oldIndex: number, newIndex: number) => {
                setCurrentSlide(newIndex);
              },
            }}
          >
            <div className="innerBoxes">
              <div className="videoMaindiv">
                <div className="textDiv">
                  <h3>INTERVIEW WITH THE</h3>
                  <h2>DESIGNER</h2>
                </div>
                <div className="bottomText">
                  <h4>Abhishek Mathur</h4>
                  <p>Director, Studio HBA Design Consultant</p>
                </div>
              </div>
              <div className="videoDiv">
                <a
                  data-fancybox
                  data-type="video"
                  data-ratio="2"
                  href="https://www.youtube.com/embed/h8RVuCjyO-g?autoplay=1&mute=1"
                >
                  <div className="video">
                    <img src="images/abhishek-mathur.webp" />
                    <div className="popupButton">
                      <img
                        src="images/resident-slider-arrow.svg"
                        alt=""
                        title=""
                      />
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="innerBoxes">
              <div className="videoMaindiv">
                <div className="textDiv">
                  <h3>INTERVIEW WITH THE</h3>
                  <h2>ARCHITECT</h2>
                </div>
                <div className="bottomText">
                  <h4>HANS BROUWER</h4>
                  <p>Founder, HB Designs Architectural Consultant</p>
                </div>
              </div>
              <div className="videoDiv">
                <a
                  data-fancybox
                  data-ratio="2"
                  href="https://www.youtube.com/embed/G0lbFkRvYzU?autoplay=1&mute=1"
                >
                  <div className="video">
                    <img src="images/hansbrouwer-architect-prive.webp" />
                    <div className="popupButton">
                      <img
                        src="images/resident-slider-arrow.svg"
                        alt=""
                        title=""
                      />
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="innerBoxes">
              <div className="videoMaindiv">
                <div className="textDiv">
                  <h3>INTERVIEW WITH THE</h3>
                  <h2>ARCHITECT</h2>
                </div>
                <div className="bottomText">
                  <h4>HANS BROUWER</h4>
                  <p>Founder, HB Designs Architectural Consultant</p>
                </div>
              </div>
              <div className="videoDiv">
                <a
                  data-fancybox
                  data-ratio="2"
                  href="https://www.youtube.com/embed/Q6WdEQz-k2g'?autoplay=1&mute=1 "
                >
                  <div className="video">
                    <img src="images/hansbrouwer-architect-azuro.webp" />
                    <div className="popupButton">
                      <img
                        src="images/resident-slider-arrow.svg"
                        alt=""
                        title=""
                      />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </SliderComponent>
        </div>
        <div className="sliderArrow">
          <PrevArrow className="maestroprev slick-arrow" onClick={handlePrev} />
          <div className="slides-numbers" style={{ display: "block" }}>
            <span className="active">
              {String(currentSlide + 1).padStart(2, "0")}
            </span>
            <span>/</span>
            <span className="total">
              {String(totalSlides).padStart(2, "0")}
            </span>
          </div>
          <NextArrow className="maestronext slick-arrow" onClick={handleNext} />
        </div>
      </section>
      <section className="residentsSec">
        <div className="residentsWrapper">
          <div className="secHeading">
            <h2>OUR RESIDENTS</h2>
            <p>Only those who experience true luxury know it best.</p>
          </div>
          <div className="resCounterslider">
            <div className="slides-numbers" style={{ display: "none" }}>
              <span className="active">
                {String(currentSlide + 1).padStart(2, "0")}
              </span>
              <span>/</span>
              <span className="total">
                {String(totalSlides).padStart(2, "0")}
              </span>
            </div>
            <div className="residentSlider">
              <SliderComponent setting={{ ...residentSlider }}>
                <div className="innerBoxes">
                  <div className="videoBox">
                    <img src="images/madhurbaya-avanatestimonial-thumbnail.webp" />
                    <div className="popupButton">
                      <a
                        data-fancybox
                        data-ratio="4"
                        href="https://www.youtube.com/embed/XenKI94naI0?autoplay=1&mute=1"
                      >
                        <img
                          src="images/resident-slider-arrow.svg"
                          alt=""
                          title=""
                        />
                      </a>
                    </div>
                  </div>
                  <div className="descriptionBox">
                    <h3>"Building Exceptional Homes"</h3>
                  </div>
                </div>
                <div className="innerBoxes">
                  <div className="videoBox">
                    <img src="images/mr-santhanam-amodatestimonial.webp" />
                    <div className="popupButton">
                      <a
                        data-fancybox
                        data-ratio="2"
                        href="https://www.youtube.com/embed/viptE0F8Jv8?autoplay=1&mute=1"
                      >
                        <img
                          src="images/resident-slider-arrow.svg"
                          alt=""
                          title=""
                        />
                      </a>
                    </div>
                  </div>
                  <div className="descriptionBox">
                    <h3>"A place to write your stories"</h3>
                  </div>
                </div>
              </SliderComponent>
            </div>
          </div>
        </div>
      </section>
      <ExploreCompoent
        desktopImgUrl="/images/signature-residences-footer.webp"
        mblImgUrl="/images/signature-residences-footer-mbl.webp"
        secHeading="Signature Residences"
        subHeading="Explore our Projects"
        pageUrl="signature-residences"
      />
      <PathComponent pageName="Essence"/>
    </>
  );
};

export default SignatureEssence;
