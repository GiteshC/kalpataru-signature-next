"use client";

import React, { useEffect, useState } from "react";
import BannerComponent from "./BannerComponent";
import { ResidencePageData, ResidenceProjectItem } from "@/utils/residenceType";
import ExploreCompoent from "./ExploreCompoent";
import ResidenceProjects from "./ResidenceProjects";

interface ResidenceProps {
  pageData: ResidencePageData;
  projectsData: ResidenceProjectItem[];
}

const ClientSingatureResidences = ({
  pageData,
  projectsData,
}: ResidenceProps) => {
  const [resProjectData, setResProjectData] = useState(projectsData);
  const [filterprojectData, setFilterProjectData] = useState(projectsData);

  console.log(resProjectData);

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
      const titleElement = item.getElementsByClassName(
        "signature-content-heading"
      )[0] as HTMLElement;
      const locationElement = item.getElementsByClassName(
        "signature-content-subheading"
      )[0] as HTMLElement;

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
    <>
      <BannerComponent bannerData={pageData?.acf?.banner_section} />

      <section className="bodycopySec">
        <div className="searchBar">
          <div className="searchBar-wrapper">
            <input
              type="text"
              autoComplete="none"
              placeholder="Search project or location name"
              name="search"
              id="search"
            />
            <button className="searchimg-div">
              <img src="/images/search-icon.svg" alt="" />
            </button>
          </div>
        </div>
        <ResidenceProjects  filterprojectData={filterprojectData}/>
        <div id="dataNotFound" style={{ display: "none" }}>
          No residences found.
        </div>
      </section>

      <ExploreCompoent exploreData={pageData?.acf?.related_section} />

      <div className="breadcrumbsSec">
        <p>
          <a href="index.html">Home &nbsp; / &nbsp;</a>{" "}
          <a href="signature-philosophy.html">Philosophy &nbsp; / &nbsp;</a>{" "}
          Residences
        </p>
      </div>
    </>
  );
};

export default ClientSingatureResidences;
