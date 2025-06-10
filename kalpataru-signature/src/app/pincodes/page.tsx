'use client'
import { sign } from "crypto";
import { useEffect } from "react";
import Slider from "react-slick";

export default function PincodePage() {

  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
  };

  useEffect(() => {
    const hasBanner = document.querySelector(".animationBanner");

    const addClass = (selector: string, className: string) => {
      document.querySelectorAll(selector).forEach(el => el.classList.add(className));
    };

    const fadeOut = (selector: string, duration: number) => {
      document.querySelectorAll(selector).forEach(el => {
        (el as HTMLElement).style.transition = `opacity ${duration}ms`;
        (el as HTMLElement).style.opacity = "0";
        setTimeout(() => {
          (el as HTMLElement).style.display = "none";
        }, duration);
      });
    };

    const fadeIn = (selector: string, duration: number) => {
      document.querySelectorAll(selector).forEach(el => {
        (el as HTMLElement).style.opacity = "0";
        (el as HTMLElement).style.display = "block";
        (el as HTMLElement).style.transition = `opacity ${duration}ms`;
        setTimeout(() => {
          (el as HTMLElement).style.opacity = "1";
        }, 10);
      });
    };

    const swiftUpTextAnimate = () => {
      const swiftUpElements = document.querySelectorAll(".new-swift-up-text");
      swiftUpElements.forEach(elem => {
        const words = elem.textContent?.trim().split(" ") || [];
        elem.innerHTML = "";
        words.forEach(word => {
          elem.innerHTML += `<span><i>${word}</i></span> `;
        });
        const children = elem.querySelectorAll("span > i");
        children.forEach((node, index) => {
          (node as HTMLElement).style.animationDelay = `${index * 0.4}s`;
        });
      });
    };

    if (hasBanner) {
      addClass(".loader", "loaded");
      addClass("body", "loaded");
      fadeIn(".loader", 3000);

      setTimeout(() => {
        fadeOut(".loader", 3000);
        addClass(".loaderLogoimg", "loaderImg");
        addClass("header", "headerNew");
        addClass(".letter", "letterNew");
      }, 3000);

      setTimeout(() => {
        addClass(".headerWrapper ul", "innerMenulink");
        addClass(".centerLogo", "centerLogonew");
        addClass(".scrollText", "scrollTextnew");
        addClass(".swift-up-text", "new-swift-up-text");
        swiftUpTextAnimate();
      }, 4000);

      setTimeout(() => {
        addClass(".bannerTextanimation", "bannerTextanimationnew");
      }, 5000);

      setTimeout(() => {
        addClass(".loader", "loaded");
        addClass("body", "loaded");
      }, 60000);
    } else {
      addClass("header", "headerNew");
      addClass(".headerWrapper ul", "innerMenulink");
      addClass(".centerLogo", "centerLogonew");
      addClass(".scrollText", "scrollTextnew");
      addClass(".swift-up-text", "new-swift-up-text");
      swiftUpTextAnimate();

      setTimeout(() => {
        addClass(".bannerTextanimation", "bannerTextanimationnew");
      }, 1000);
    }

    const inViewport = () => {
      const allElements = document.getElementsByClassName("section-text-up");
      const windowHeight = window.innerHeight;

      const elems = () => {
        for (let i = 0; i < allElements.length; i++) {
          const top = allElements[i].getBoundingClientRect().top;
          if (top < windowHeight) {
            allElements[i].classList.add("newClass");
          } else {
            allElements[i].classList.remove("newClass");
          }
        }
      };

      elems();
      window.addEventListener("scroll", elems);

      // Cleanup scroll listener
      return () => window.removeEventListener("scroll", elems);
    };

    inViewport();
  }, []);

  return (
    <div>
      <section className="homebannerSec projectdetBanner">
        <div className="videoBox">
          <video autoPlay muted loop playsInline preload="metadata">
            <source src="/images/homepage-banner.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="homebannerWrapper homebannerContent">
          <div className="secHeading">
            <h1 className="swift-up-text">
              <span>SIGNATURE PIN CODES</span>{" "}
            </h1>
            <p className="bannerTextanimation">
              <span>
                Iconic locations. Iconic luxury landmarks.
                <br /> One common thread. Kalpataru.
              </span>
            </p>
          </div>
        </div>
        <div className="scrollText">
          <h3>Scroll to Explore</h3>
        </div>
      </section>

      <section className="signPincodeSec">
        <div className="signPindcodeWrapper">
          <div className="secHeading">
            <h2 className="section-text-up">
              <span>
                Each pin code is pivotal to the experience of high-end luxury.
              </span>
            </h2>
          </div>
          <div className="signPincodeContainer">
            <div className="signPincodeContent section-text-up">
              <div className="signPincodeImg">
                <span>
                  <Slider className="single-item" {...settings}>
                    <div>
                      <img src="/images/kalpataru-oceana1.webp" className="desktopImg" alt="" />
                      <img src="/images/kalpataru-oceana1-mob.webp" className="mobileImg" alt="" />
                    </div>
                    <div>
                      <img
                        src="/images/kalpataru-oceana2.webp"
                        className="desktopImg"
                        alt=""
                      />
                      <img
                        src="/images/kalpataru-oceana2-mob.webp"
                        className="mobileImg"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="/images/kalpataru-oceana3.webp"
                        className="desktopImg"
                        alt=""
                      />
                      <img
                        src="/images/kalpataru-oceana3-mob.webp"
                        className="mobileImg"
                        alt=""
                      />
                    </div>
                  </Slider>
                </span>
              </div>
              <div className="signPincodedata">
                <h3 className="section-text-up">
                  <span>Prabhadevi, 400025</span>
                </h3>
                <p className="section-text-up newtext-p">
                  {" "}
                  <span>
                    A haven of private living, overlooking the serene sea,
                    Kalpataru Oceana is a world of untold abundance. A home
                    meant for a privileged few. And rightly so.
                  </span>
                </p>
                <span>
                  <a className="ctaBluetext" href="project-details.html">
                    View Project{" "}
                    <img src="/images/view-project-arrow.svg" alt="" />
                  </a>
                </span>
              </div>
            </div>
            <div className="signPincodeContent section-text-up">
              <div className="signPincodeImg">
                <span>
                  <Slider className="single-item" {...settings}>
                    <div>
                      <img
                        src="/images/kalpataru-azuro1.webp"
                        className="desktopImg"
                        alt=""
                      />
                      <img
                        src="/images/kalpataru-azuro1-mob.webp"
                        className="mobileImg"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="/images/kalpataru-azuro2.webp"
                        className="desktopImg"
                        alt=""
                      />
                      <img
                        src="/images/kalpataru-azuro2-mob.webp"
                        className="mobileImg"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="/images/kalpataru-azuro3.webp"
                        className="desktopImg"
                        alt=""
                      />
                      <img
                        src="/images/kalpataru-azuro3-mob.webp"
                        className="mobileImg"
                        alt=""
                      />
                    </div>
                  </Slider>
                </span>
              </div>
              <div className="signPincodedata">
                <h3 className="section-text-up">
                  <span>Nepean sea road, 400006</span>
                </h3>
                <p className="section-text-up newtext-p">
                  {" "}
                  <span>
                    A location of immense history and heritage, Nepean Sea Road
                    has been coveted since the days of the British Raj. And
                    continues to be so.
                  </span>
                </p>
                <span>
                  <a className="ctaBluetext" href="project-details.html">
                    View Project{" "}
                    <img src="/images/view-project-arrow.svg" alt="" />
                  </a>
                </span>
              </div>
            </div>
            <div className="signPincodeContent section-text-up">
              <div className="signPincodeImg">
                <span>
                  <Slider className="single-item" {...settings}>
                    <div>
                      <img
                        src="/images/kalpataru-prive1.webp"
                        className="desktopImg"
                        alt=""
                      />
                      <img
                        src="/images/kalpataru-prive1-mob.webp"
                        className="mobileImg"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="/images/kalpataru-prive2.webp"
                        className="desktopImg"
                        alt=""
                      />
                      <img
                        src="/images/kalpataru-prive2-mob.webp"
                        className="mobileImg"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="/images/kalpataru-prive3.webp"
                        className="desktopImg"
                        alt=""
                      />
                      <img
                        src="/images/kalpataru-prive3-mob.webp"
                        className="mobileImg"
                        alt=""
                      />
                    </div>
                  </Slider>
                </span>
              </div>
              <div className="signPincodedata">
                <h3 className="section-text-up">
                  <span>amount Road, 400026</span>
                </h3>
                <p className="section-text-up newtext-p">
                  <span>
                    With its thoughtfully curated lifestyle, and the luxury of
                    private, opulent homes on offer, Kalpataru Privé truly
                    elevates living standards. Even in a place that is widely
                    known as the Billionaires’ Row.
                  </span>
                </p>
                <span>
                  <a className="ctaBluetext" href="project-details.html">
                    View Project{" "}
                    <img src="/images/view-project-arrow.svg" alt="" />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="requestSec reqNewSec pincodeRequestSec">
        <div className="requestBG">
          <img
            src="/images/request-previewbg.webp"
            className="desktopImg"
            alt=""
          />
          <img
            src="/images/request-preview-mobile.webp"
            className="mobileImg"
            alt=""
          />
        </div>
        <div className="requestWrapper requestContent">
            <div className="secHeading">
              <h2 className="section-text-up newClass">
                <span>Signature Residence</span>
              </h2>
              <div className="triggertwo">
                <a className="ctaOne" href="https://ixdtm.com/projects/kalpataru-signature-wp/signature-residences/">Explore More{" "}
                  <img src="/images/cta-arrow-white.svg" alt="" />
                </a>
              </div>
            </div>
        </div>
      </section>

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