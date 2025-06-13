"use client";
import BannerComponent from "@/components/BannerComponent";
import PathComponent from "@/components/PathComponent";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";

const addZeros = (num: number, length = 2): string => num.toString().padStart(length, "0");

export default function ProjectDetail() {
  const luxurySliderRef = useRef<Slider | null>(null);
  const maestroSliderRef = useRef<Slider | null>(null);
  const [totalSlides, setTotalSlides] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(1); 
  const [totalHolderSlides, setTotalHolderSlides] = useState(0);
  const [currentHolderSlide, setCurrentHolderSlide] = useState(1);
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const [isMainAccordionOpen, setIsMainAccordionOpen] = useState(false);

  const handleAccordionClick = (id: number) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const handleMainAccordionClick = () => {
    setIsMainAccordionOpen(!isMainAccordionOpen);
  };

  const slides = [
    {
      id: 1,
      img: "/images/our-maestros-slider-img1.webp",
      title: "Hans Brouwer",
      subTitle: "Founder, HB Designs",
      descHeading: "Architectural Consultant",
      description:
        "A history of consistently delivering finely crafted, intelligently designed, highly sophisticated projects, makes HB Design the ideal partner for our pursuit of luxury.",
    },
    {
      id: 2,
      img: "/images/our-maestros-slider-img2.webp",
      title: "WME Consultants",
      subTitle: "Bengaluru, Karnataka",
      descHeading: "Structural Consultant",
      description:
        "A firm that is committed to the principles of building in harmony with the environment. With a history of creating thoughtful frameworks that minimise any impact on the environment.",
    },
    {
      id: 3,
      img: "/images/our-maestros-slider-img3.webp",
      title: "Landscape Tectonix",
      subTitle: "Bangkok, Thailand",
      descHeading: "LANDSCAPE CONSULTANT",
      description:
        "Established in 2005, Landscape Tectonix have international expertise in the residential, commercial and hospitality sectors. Landscape Tectonix has a philosophy of delivering the best service with each of its unique designs.",
    },
  ];

  const holderSlides = [
    {
      id: 1,
      mediaImg1: "/images/kalpataru-detail-luxury1.webp",
      mediaImg2: "/images/kalpataru-detail-luxury1-mob.webp",
      overlapImg1: "/images/luxuries-card-1.svg",
      text: "The ocean isn't the same blue for everyone",
    },
    {
      id: 2,
      mediaImg1: "/images/kalpataru-detail-luxury2.webp",
      mediaImg2: "/images/kalpataru-detail-luxury2-mob.webp",
      overlapImg1: "/images/luxuries-card-2.svg",
      text: "Built for beautiful sunsets",
    },
    {
      id: 3,
      mediaImg1: "/images/kalpataru-detail-luxury3.webp",
      mediaImg2: "/images/kalpataru-detail-luxury3-mob.webp",
      overlapImg1: "/images/luxuries-card-3.svg",
      text: "The edge of land and sea.",
    },
  ];

  const projectData = [
    {
      id: 1,
      title: "KALPATARU AZURO: A - TOWER 1",
      description:
        "MahaRERA Reg No: Kalpataru Radiance: B - Brilliance Reg. No: P51800000810. For further details, please visit",
      link: "https://maharera.mahaonline.gov.in/",
      image: "/images/rera-scanner.png"
    },
    {
      id: 2,
      title: "KALPATARU AZURO: B - TOWER 1",
      description:
        "MahaRERA Reg No: Kalpataru Radiance: B - Brilliance Reg. No: P51800000810. For further details, please visit",
      link: "https://maharera.mahaonline.gov.in/",
      image: "/images/rera-scanner.png"
    },
    {
      id: 3,
      title: "KALPATARU AZURO: A - TOWER 2",
      description:
        "MahaRERA Reg No: Kalpataru Radiance: B - Brilliance Reg. No: P51800000810. For further details, please visit",
      link: "https://maharera.mahaonline.gov.in/",
      image: "/images/rera-scanner.png"
    },
    {
      id: 4,
      title: "KALPATARU AZURO: B - TOWER 2",
      description:
        "MahaRERA Reg No: Kalpataru Radiance: B - Brilliance Reg. No: P51800000810. For further details, please visit",
      link: "https://maharera.mahaonline.gov.in/",
      image: "/images/rera-scanner.png"
    },
    {
      id: 5,
      title: "KALPATARU AZURO: C - TOWER 2",
      description:
        "MahaRERA Reg No: Kalpataru Radiance: B - Brilliance Reg. No: P51800000810. For further details, please visit",
      link: "https://maharera.mahaonline.gov.in/",
      image: "/images/rera-scanner.png"
    }
  ];  

  const settings = {
    arrows: true,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    centerMode: false,
    fade: true,
    cssEase: "linear",
    speed: 800,
    afterChange: (current: number) => setCurrentSlide(current + 1),
  };

  const holderSettings = {
    slidesToShow: 0.9,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "490px",
    dots: false,
    infinite: false,
    afterChange: (index: number) => setCurrentHolderSlide(index + 1),
    responsive: [
      {
        breakpoint: 1930,
        settings: {
          slidesToShow: 0.8,
          centerPadding: "480px",
        },
      },
      {
        breakpoint: 1600,
        settings: {
          centerPadding: "350px",
        },
      },
      {
        breakpoint: 1400,
        settings: {
          centerPadding: "320px",
        },
      },
      {
        breakpoint: 1285,
        settings: {
          centerPadding: "310px",
        },
      },
      {
        breakpoint: 1025,
        settings: {
          centerPadding: "220px",
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1,
          centerPadding: "100px",
        },
      },
      {
        breakpoint: 690,
        settings: {
          slidesToShow: 1,
          centerPadding: "50px",
        },
      },
    ],
  }

  useEffect(() => {
    setTotalSlides(slides.length);
    setTotalHolderSlides(holderSlides.length);
  }, [slides.length, holderSlides.length]);

  useEffect(() => {
    const hasBanner = document.querySelector(".animationBanner");

    const addClass = (selector: string, className: string) => {
      document
        .querySelectorAll(selector)
        .forEach((el) => el.classList.add(className));
    };

    const fadeOut = (selector: string, duration: number) => {
      document.querySelectorAll(selector).forEach((el) => {
        (el as HTMLElement).style.transition = `opacity ${duration}ms`;
        (el as HTMLElement).style.opacity = "0";
        setTimeout(() => {
          (el as HTMLElement).style.display = "none";
        }, duration);
      });
    };

    const fadeIn = (selector: string, duration: number) => {
      document.querySelectorAll(selector).forEach((el) => {
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
      swiftUpElements.forEach((elem) => {
        const words = elem.textContent?.trim().split(" ") || [];
        elem.innerHTML = "";
        words.forEach((word) => {
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

      <BannerComponent videoUrl="/images/project-azuro.mp4" mainHeading="KALPATARU AZURO" para="An homage to the ocean. And to luxury." address="Nepean Sea Road, 400006" />

      <section className="signatureSec">
        <div className="signatureWrapper">
          <div className="secHeading">
            <h2 className="section-text-up">
              <span>ON THE CUSP OF THE SEA AND IN THE HEART OF THE CITY.</span>
            </h2>
            <p className="section-text-up">
              <span>
                Kalpataru Azuro pays homage to the magnificence of the sea.
                Offering a living experience that truly feels connected to it.
                And within its world, emulating the abundance that defines it.
              </span>
            </p>
          </div>
        </div>
        <div className="videoBox">
          <img src="/images/azuro-img.webp" className="desktopImg" />
          <img
            src="/images/kalpataru-azuro-details-2-mobile.webp"
            className="mobileImg"
          />
        </div>
      </section>

      <section className="luxuriesSlider">
        <div className="signatureWrapper">
          <div className="secHeading">
            <h2 className="section-text-up">
              <span>
                The finest luxuries. Often reserved for the finest among us.
              </span>
            </h2>
          </div>
          <div className="wrapper">
            <div className="slider-container">
              {holderSlides.length > 1 && (
                <div className="slides-numbers" style={{ display: "block" }}>
                  <span className="active">{addZeros(currentHolderSlide)}</span> / <span className="total">{addZeros(totalHolderSlides)}</span>
                </div>
              )}
              <Slider ref={luxurySliderRef} className="slider-holder" {...holderSettings}>
                {holderSlides.map((slide, index) => (
                  <div key={index} className="item">
                    <div className="media-wrap">
                      <img src={slide.mediaImg1} className="desktopImg" />
                      <img src={slide.mediaImg2} className="mobileImg" />
                    </div>
                    <div className="overlapText">
                      <img src={slide.overlapImg1} />
                      <h3>{slide.text}</h3>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>

      <section className="maestrosSlidersec">
        <div className="secHeading">
          <h2 className="section-text-up">
            <span>OUR MAESTROS</span>
          </h2>
          <p className="section-text-up">
            <span>
              It takes true craft to master the art of luxury. And we've
              partnered with its greatest practitioners.
            </span>
          </p>
        </div>
        <div className="maestrosliderCounter">
          <div className="sliderArrow">
            {slides.length > 1 && (
              <div className="slides-numbers" style={{ display: "block" }}>
                <span className="active">{addZeros(currentSlide)}</span> / <span className="total">{addZeros(totalSlides)}</span>
              </div>
            )}
          </div>
          <Slider className="maestrosSlider" ref={maestroSliderRef} {...settings}>
            {slides.map((slide, index) => (
              <div key={index} className="innerSliderbox">
                <div className="imgDiv">
                  <img src={slide.img} alt={slide.title} />
                </div>
                <div className="infoDiv">
                  <div className="headingMain">
                    <h3>{slide.title}</h3>
                    <h5>{slide.subTitle}</h5>
                  </div>
                  <div className="subHeadings">
                    <h4>{slide.descHeading}</h4>
                    <p>{slide.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      <section className="signatureSec projectdetBeach">
        <div className="signatureWrapper">
          <div className="secHeading">
            <h2 className="section-text-up">
              <span>
                A home that stands out Both aesthetically And in its experience.
              </span>
            </h2>
          </div>
        </div>
        <div className="signatureImg">
          <div className="Viewimages">
            <img src="/images/project-det-6thfold.png" className="desktopImg" />
            <img
              src="/images/project-det-6thfold-mobile.webp"
              className="mobileImg"
            />
          </div>
          <div className="innerText">
            <h3>
              Immerse yourself in the luxury of panoramic sea views, and revel
              in the untold abundance around you.
            </h3>
          </div>
        </div>
      </section>

      <section className="reraContainer">
        <ul className="accordion">
          <li>
            <div className={`mainHeadingdiv toggle ${isMainAccordionOpen ? 'showDiv' : ''}`} onClick={handleMainAccordionClick}>
              <a href="#" onClick={(e) => e.preventDefault()} className="headingMain">
                RERA DETAILS
              </a>
            </div>
            <ul className="inner" style={{ display: isMainAccordionOpen ? 'block' : 'none' }}>
              {projectData.map((proj, index)=>(
                <li key={proj.id}>
                  <div className={`innerDescHeading toggle ${openAccordion === proj.id ? 'active' : ''}`} onClick={()=>handleAccordionClick(proj.id)}>
                    <a href="#" onClick={(e) => e.preventDefault()} className="subHeadings">{proj.title}</a>
                  </div>
                  <div className="innerInfo" style={{display: openAccordion === proj.id ? 'block' : 'none', transition: 'all 0.3s ease-in-out'}}>
                    <div className="descDetils">
                      <p>{proj.description}
                        <a href="#" onClick={(e) => e.preventDefault()} target="_blank">{proj.link}</a>
                        This project is secured with ICICI Bank Limited. The No
                        Objection Certificate would be issued, at the relevant
                        time, if required.
                      </p>
                      <div className="scannerImg">
                        <img src={proj.image} />
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </section>

      <section className="requestSec reqNewSec">
        <div className="requestBG">
          <img src="/images/request-previewbg.webp" className="desktopImg" />
          <img
            src="/images/request-preview-mobile.webp"
            className="mobileImg"
          />
        </div>
        <div className="requestWrapper requestContent reqNewContent">
          <div className="secHeading newSecHeading ">
            <h2 className="section-text-up">
              <div className="trigger">
                <span>
                  {" "}
                  Request A Private Preview{" "}
                  <img src="/images/cta-arrow-white.svg" />
                </span>
              </div>
            </h2>
          </div>
        </div>
      </section>

      <section className="requestSec">
        <div className="requestBG">
          <img
            src="/images/signature-residences-footer.webp"
            className="desktopImg"
          />
          <img
            src="/images/signature-residences-footer-mbl.webp"
            className="mobileImg"
          />
        </div>
        <div className="requestWrapper requestContent">
          <div className="secHeading">
            <h2 className="section-text-up">
              <span>Signature Residences</span>
            </h2>
            <div className="trigger">
              <a
                className="ctaOne section-text-up"
                href="signature-residences.html"
              >
                <span>
                  Explore our Projects
                  <img src="/images/cta-arrow-white.svg" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <PathComponent pageName="Azuro" flag={true} subpage="Residences" path="signature-residences" />

      {/* <div className="modal">
        <div className="modalInner">
          <div className="headerLogo">
            <a href="index.html">
              {" "}
              <img src="/images/headerlogo.svg" className="desktopImg" />
            </a>
          </div>
          <span className="close-button">
            <img src="/images/popup-close-icon.svg" className="mobileImg" />
          </span>
          <span className="close-buttonTwo">
            <img src="/images/backarrow-modal.svg" />
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
