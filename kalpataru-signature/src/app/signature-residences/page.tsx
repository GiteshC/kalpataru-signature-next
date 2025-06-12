"use client";
import { useEffect } from "react";

export default function Residence() {
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
      }, []); // Empty dependency array means this runs once on mount
      
    useEffect(() => {
        const searchInput = document.getElementById("search");
        if (searchInput) {
            searchInput.addEventListener("keyup", searchResidencesOnKeyUp);
        }
        return () => {
            if (searchInput) {
                searchInput.removeEventListener("keyup", searchResidencesOnKeyUp);
            }
        };
    }, []);

    function searchResidencesOnKeyUp() {
        const input = document.getElementById("search") as HTMLInputElement;
        if (!input) return;

        const filter = input.value.toUpperCase();
        const residenceItems = document.getElementsByClassName("residence-item");
        let found = false;

        for (let i = 0; i < residenceItems.length; i++) {
            const item = residenceItems[i] as HTMLElement;
            const titleElement = item.getElementsByClassName("signature-content-heading")[0] as HTMLElement;
            const locationElement = item.getElementsByClassName("signature-content-subheading")[0] as HTMLElement;
            
            if (!titleElement || !locationElement) continue;

            const title = titleElement.textContent || "";
            const location = locationElement.textContent || "";
            const txtValue = title + " " + location;

            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                item.style.display = "";
                found = true;
            } else {
                item.style.display = "none";
            }
        }
        
        const dataNotFound = document.getElementById("dataNotFound");
        if (dataNotFound) {
            dataNotFound.style.display = found ? "none" : "block";
        }
    }

    function showAllResidences() {
        const residenceItems = document.getElementsByClassName("residence-item");
        for (let i = 0; i < residenceItems.length; i++) {
            const item = residenceItems[i] as HTMLElement;
            item.style.display = "";
        }
       
        const dataNotFound = document.getElementById("dataNotFound");
        if (dataNotFound) {
            dataNotFound.style.display = "none";
        }
    }

    return (
        <div>
            <section className="homebannerSec projectdetBanner">
            <div className="videoBox">
                <video autoPlay muted loop playsInline preload="metadata">
                <source src="/images/homepage-video.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="homebannerWrapper homebannerContent">
                <div className="secHeading">
                    <h1 className="swift-up-text"><span>SIGNATURE RESIDENCES</span></h1>
                    <p className="bannerTextanimation"><span> The perception of luxury is ever changing. <br /> Our creations however, leave a lasting impression.</span></p>
                </div>
            </div>
            <div className="scrollText">
                <h3>Explore projects</h3>
            </div>
            </section>
            <section className="bodycopySec">
                <div className="searchBar">
                    <div className="searchBar-wrapper">
                    <input type="text" autoComplete="none" placeholder="Search project or location name" name="search" id="search" />
                    <button className="searchimg-div">
                        <img src="/images/search-icon.svg" alt="" />
                    </button>
                    </div>
                </div>
                <div className="signaturebroucher-wrapper residence-item">
                    <div className="signature-image">
                        <img src="/images/kalpataru-azuro.webp" alt="" />
                    </div>
                    <div className="signature-content">
                    <h2 className="signature-content-heading">Kalpataru Azuro</h2>
                    <h3 className="signature-content-subheading">Nepean Sea Road, Mumbai</h3>
                    {/* <p class="signature-content-bodycopy sign-p-margin">Private seafront living. In its finest rendition.</p> */}
                    <p className="signature-content-bodycopy">Private seafront living. Inspired by the rhythm of the ocean. Infusing the finest luxuries created by man with the luxuries of nature.</p>
                    <a href="project-details.html" className="ctaBluetext ">View Project <img src="images/signature-cta-arrow.svg" alt="" /></a>
                    </div>
                </div>
                <div className="signaturebroucher-wrapper residence-item">
                    <div className="signature-image">
                        <img src="/images/kalpataru-prive.webp" alt="" />
                    </div>
                    <div className="signature-content">
                        <h2 className="signature-content-heading">Kalpataru Privé</h2>
                        <h3 className="signature-content-subheading">Altamount Road, Mumbai</h3>
                        {/* <p class="signature-content-bodycopy sign-p-margin">Private seafront living. In its finest rendition.</p> */}
                        <p className="signature-content-bodycopy">A thoughtfully curated lifestyle of one residnece per floor. Elevating living standards even in Mumbai's Billionaires' Row.</p>
                        <a href="project-details.html" className="ctaBluetext">View Project <img src="images/signature-cta-arrow.svg" alt="" /></a>
                    </div>
                </div>
                <div className="signaturebroucher-wrapper residence-item">
                    <div className="signature-image">
                        <img src="/images/kalpataru-oceana.webp" alt="" />
                    </div>
                    <div className="signature-content">
                        <h2 className="signature-content-heading">Kalpataru Oceana</h2>
                        <h3 className="signature-content-subheading">Prabhadevi, Mumbai</h3>
                        {/* <p class="signature-content-bodycopy sign-p-margin">Private seafront living. In its finest rendition.</p> */}
                        <p className="signature-content-bodycopy">A haven of private living, overlooking the serene sea. A home meant for a privileged few. And rightly so.</p>
                        <a href="project-details.html" className="ctaBluetext">View Project <img src="images/signature-cta-arrow.svg" alt="" /></a>
                    </div>
                </div>
                <div id="dataNotFound" style={{ display: "none" }}>No residences found.</div>
            </section>
            <section className="requestSec">
                <div className="requestBG">
                    <img src="/images/signature-experience-footer.webp" alt="" className="desktopImg" />
                    <img src="/images/signature-experience-footer-mbl.webp" alt="" className="mobileImg" />
                </div>
                <div className="requestWrapper requestContent">
                    <div className="secHeading">
                        <h2 className="section-text-up"><span>Signature Experience</span></h2>
                        {/* <p>Curating rare experiences. For rarest among us.</p> */}
                        <div className="trigger">
                            <a className="ctaOne section-text-up" href="signature-experience.html"><span>Explore More<img src="images/cta-arrow-white.svg" alt="" /></span></a>
                        </div>
                    </div>
                </div>
            </section>
            <div className="breadcrumbsSec">
                <p>
                    <a href="index.html">Home &nbsp; / &nbsp;</a> <a href="signature-philosophy.html">Philosophy  &nbsp; / &nbsp;</a> Residences
                </p>
            </div>
        </div>
    )
}   