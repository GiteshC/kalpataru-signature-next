'use client'
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
                      <img src="/images/kalpataru-oceana2.webp" className="desktopImg" alt="" />
                      <img src="/images/kalpataru-oceana2-mob.webp" className="mobileImg" alt="" />
                    </div>
                    <div>
                      <img src="/images/kalpataru-oceana3.webp" className="desktopImg" alt="" />
                      <img src="/images/kalpataru-oceana3-mob.webp" className="mobileImg" alt="" />
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
                    View Project <img src="/images/view-project-arrow.svg" alt="" />
                  </a>
                </span>
              </div>
            </div>
            <div className="signPincodeContent section-text-up">
              <div className="signPincodeImg">
                <span>
                  <Slider className="single-item" {...settings}>
                    <div>
                      <img src="/images/kalpataru-azuro1.webp" className="desktopImg" alt="" />
                      <img src="/images/kalpataru-azuro1-mob.webp" className="mobileImg" alt="" />
                    </div>
                    <div>
                      <img src="/images/kalpataru-azuro2.webp" className="desktopImg" alt="" />
                      <img src="/images/kalpataru-azuro2-mob.webp" className="mobileImg" alt="" />
                    </div>
                    <div>
                      <img src="/images/kalpataru-azuro3.webp" className="desktopImg" alt="" />
                      <img src="/images/kalpataru-azuro3-mob.webp" className="mobileImg" alt="" />
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
                    View Project <img src="/images/view-project-arrow.svg" alt="" />
                  </a>
                </span>
              </div>
            </div>
            <div className="signPincodeContent section-text-up">
              <div className="signPincodeImg">
                <span>
                  <Slider className="single-item" {...settings}>
                    <div>
                      <img src="/images/kalpataru-prive1.webp" className="desktopImg" alt="" />
                      <img src="/images/kalpataru-prive1-mob.webp" className="mobileImg" alt="" />
                    </div>
                    <div>
                      <img src="/images/kalpataru-prive2.webp" className="desktopImg" alt="" />
                      <img src="/images/kalpataru-prive2-mob.webp" className="mobileImg" alt="" />
                    </div>
                    <div>
                      <img src="/images/kalpataru-prive3.webp" className="desktopImg" alt="" />
                      <img src="/images/kalpataru-prive3-mob.webp" className="mobileImg" alt="" />
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
                    View Project <img src="/images/view-project-arrow.svg" alt="" />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="requestSec reqNewSec pincodeRequestSec">
        <div className="requestBG">
          <img src="/images/request-previewbg.webp" className="desktopImg" alt="" />
          <img src="/images/request-preview-mobile.webp" className="mobileImg" alt="" />
        </div>
        <div className="requestWrapper requestContent reqNewContent">
          <div className="secHeading newSecHeading ">
            <h2 className="section-text-up">
              <div className="trigger">
                <span>
                  {" "}
                  Request a Private Preview{" "}
                  <img src="/images/cta-arrow-white.svg" alt="" />
                </span>
              </div>
            </h2>
          </div>
        </div>
      </section>

      <div className="breadcrumbsSec">
        <p>
          <a href="/">Home &nbsp; / &nbsp;</a>{" "}
          <a href="signature-essence.html">Essence &nbsp; / &nbsp;</a> Pincode
        </p>
      </div>

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