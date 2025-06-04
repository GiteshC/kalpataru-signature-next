"use client";
import { useEffect } from "react";

export default function Home() {

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
  }, []); // Empty dependency array means this runs once on mount
  return (
    <div>
      <section className="homebannerSec">
        <div className="videoBox">
          <video autoPlay muted loop playsInline preload="metadata">
            <source src="/images/homepage-video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="homebannerWrapper homebannerContent">
          <div className="secHeading">
            <h1 className="swift-up-text new-swift-up-text"><span>Signature Collection</span></h1>
            <p className="bannerTextanimation bannerTextanimationnew">
              <span>Fine Living. Finer Experiences</span>
            </p>
          </div>
        </div>
        <div className="scrollText scrollTextnew">
          <h3>Scroll to Explore</h3>
        </div>
      </section>

      <section className="signatureSec" id="signature-philosophy">
        <div className="signatureWrapper">
          <div className="secHeading">
            <h2 className="section-text-up newClass"><span>Signature Philosophy</span></h2>
            <p className="section-text-up newClass"><span>The pursuit of luxury. Our ultimate obsession.</span></p>
            <a href="" className="section-text-up ctaBluetext newClass">
              <span>Explore More{" "}
                <img src="/images/cta-arrow.svg" alt="" />
              </span>
            </a>
          </div>
        </div>
        <div className="signatureVideo">
          <div className="videoBox">
            <video autoPlay muted loop playsInline preload="metadata">
              <source src="/images/signature-philosophy.mp4" type="video/mp4" />
            </video>
          </div>
          <a data-fancybox="" data-ratio="2" href="https://youtu.be/hN9fi92qncw?si=Sl1L3YBum54Y27ni">
            Play full video
          </a>
        </div>
      </section>

      <section className="signatureSec" id="signature-philosophy">
        <div className="signatureWrapper">
          <div className="secHeading">
            <h2 className="section-text-up newClass"><span>Signature ESSENCE</span></h2>
            <p className="section-text-up newClass"><span>When luxury is honed over decades, it starts to embody perfection.</span></p>
            <a href="" className="section-text-up ctaBluetext newClass">
              <span>Explore More{" "}
                <img src="/images/cta-arrow.svg" alt="" />
              </span>
            </a>
          </div>
        </div>
        <div className="signatureVideo">
          <div className="videoBox">
            <video autoPlay muted loop playsInline preload="metadata">
              <source src="/images/signature-essence.mp4" type="video/mp4" />
            </video>
          </div>
          <a data-fancybox="" data-ratio="2" href="https://youtu.be/hN9fi92qncw?si=Sl1L3YBum54Y27ni">
            Play full video
          </a>
        </div>
      </section>

      <section className="signatureSec" id="signature-philosophy">
        <div className="signatureWrapper">
          <div className="secHeading">
            <h2 className="section-text-up newClass"><span>SIGNATURE RESIDENCES</span></h2>
            <p className="section-text-up newClass"><span>Where raising the bar is a matter of simply living.</span></p>
            <a href="" className="section-text-up ctaBluetext newClass">
              <span>Explore More{" "}
                <img src="/images/cta-arrow.svg" alt="" />
              </span>
            </a>
          </div>
        </div>
        <div className="signatureVideo">
          <div className="videoBox">
            <video autoPlay muted loop playsInline preload="metadata">
              <source src="/images/signature-residences.mp4" type="video/mp4" />
            </video>
          </div>
          <a data-fancybox="" data-ratio="2" href="https://youtu.be/hN9fi92qncw?si=Sl1L3YBum54Y27ni">
            Play full video
          </a>
        </div>
      </section>

      <section className="signatureSec" id="signature-philosophy">
        <div className="signatureWrapper">
          <div className="secHeading">
            <h2 className="section-text-up newClass"><span>SIGNATURE EXPERIENCES</span></h2>
            <p className="section-text-up newClass"><span>Curating rare experiences. For rarest among us.</span></p>
            <a href="" className="section-text-up ctaBluetext newClass">
              <span>Explore More{" "}
                <img src="/images/cta-arrow.svg" alt="" />
              </span>
            </a>
          </div>
        </div>
        <div className="signatureVideo">
          <div className="videoBox">
            <video autoPlay muted loop playsInline preload="metadata">
              <source src="/images/signature-experience.mp4" type="video/mp4" />
            </video>
          </div>
          <a data-fancybox="" data-ratio="2" href="https://youtu.be/hN9fi92qncw?si=Sl1L3YBum54Y27ni">
            Play full video
          </a>
        </div>
      </section>

      <section className="requestSec reqNewSec">
        <div className="requestBG">
          <img src="/images/requestBG.png" alt="request-bg" className="desktopImg" />
          <img src="/images/request-private-viewmbl.png" alt="request-bg" className="mobileImg" />
        </div>
        <div className="requestWrapper requestContent reqNewContent">
          <div className="secHeading newSecHeading">
            <h2 className="section-text-up">
              <div className="trigger">
                <span>Request a Private Preview <img src="/images/cta-arrow-white.svg" alt="" /></span>
              </div>
            </h2>
          </div>
        </div>
      </section>

    </div>
  );
}