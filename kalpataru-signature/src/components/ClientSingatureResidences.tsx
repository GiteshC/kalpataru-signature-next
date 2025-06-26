"use client";

import React, { useEffect, useState } from "react";
import BannerComponent from "./BannerComponent";
import { ResidencePageData, ResidenceProjectItem } from "@/utils/residenceType";
import ExploreCompoent from "./ExploreCompoent";
import ResidenceProjects from "./ResidenceProjects";
import PathComponent from "./PathComponent";

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
  const [searchText, setSearchText] = useState("");

  const searchResult = (
    resProjectData: ResidenceProjectItem[],
    searchText: string
  ) => {
    const searchData = resProjectData.filter((card) => {
      const banner = card?.acf?.banner_section;

      const heading = banner?.project_banner_heading || "";
      const location = banner?.project_location || "";
      const description = banner?.project_listing_description || "";

      const searchTerm = searchText.toLowerCase();

      return (
        heading.toLowerCase().includes(searchTerm) ||
        location.toLowerCase().includes(searchTerm) ||
        description.toLowerCase().includes(searchTerm)
      );
    });
    setFilterProjectData(searchData);
  };

  // useEffect(() => {
  //   const hasBanner = document.querySelector(".animationBanner");

  //   const addClass = (selector: string, className: string) => {
  //     document
  //       .querySelectorAll(selector)
  //       .forEach((el) => el.classList.add(className));
  //   };

  //   const fadeOut = (selector: string, duration: number) => {
  //     document.querySelectorAll(selector).forEach((el) => {
  //       (el as HTMLElement).style.transition = `opacity ${duration}ms`;
  //       (el as HTMLElement).style.opacity = "0";
  //       setTimeout(() => {
  //         (el as HTMLElement).style.display = "none";
  //       }, duration);
  //     });
  //   };

  //   const fadeIn = (selector: string, duration: number) => {
  //     document.querySelectorAll(selector).forEach((el) => {
  //       (el as HTMLElement).style.opacity = "0";
  //       (el as HTMLElement).style.display = "block";
  //       (el as HTMLElement).style.transition = `opacity ${duration}ms`;
  //       setTimeout(() => {
  //         (el as HTMLElement).style.opacity = "1";
  //       }, 10);
  //     });
  //   };

  //   const swiftUpTextAnimate = () => {
  //     const swiftUpElements = document.querySelectorAll(".new-swift-up-text");
  //     swiftUpElements.forEach((elem) => {
  //       const words = elem.textContent?.trim().split(" ") || [];
  //       elem.innerHTML = "";
  //       words.forEach((word) => {
  //         elem.innerHTML += `<span><i>${word}</i></span> `;
  //       });
  //       const children = elem.querySelectorAll("span > i");
  //       children.forEach((node, index) => {
  //         (node as HTMLElement).style.animationDelay = `${index * 0.4}s`;
  //       });
  //     });
  //   };

  //   if (hasBanner) {
  //     addClass(".loader", "loaded");
  //     addClass("body", "loaded");
  //     fadeIn(".loader", 3000);

  //     setTimeout(() => {
  //       fadeOut(".loader", 3000);
  //       addClass(".loaderLogoimg", "loaderImg");
  //       addClass("header", "headerNew");
  //       addClass(".letter", "letterNew");
  //     }, 3000);

  //     setTimeout(() => {
  //       addClass(".headerWrapper ul", "innerMenulink");
  //       addClass(".centerLogo", "centerLogonew");
  //       addClass(".scrollText", "scrollTextnew");
  //       addClass(".swift-up-text", "new-swift-up-text");
  //       swiftUpTextAnimate();
  //     }, 4000);

  //     setTimeout(() => {
  //       addClass(".bannerTextanimation", "bannerTextanimationnew");
  //     }, 5000);

  //     setTimeout(() => {
  //       addClass(".loader", "loaded");
  //       addClass("body", "loaded");
  //     }, 60000);
  //   } else {
  //     addClass("header", "headerNew");
  //     addClass(".headerWrapper ul", "innerMenulink");
  //     addClass(".centerLogo", "centerLogonew");
  //     addClass(".scrollText", "scrollTextnew");
  //     addClass(".swift-up-text", "new-swift-up-text");
  //     swiftUpTextAnimate();

  //     setTimeout(() => {
  //       addClass(".bannerTextanimation", "bannerTextanimationnew");
  //     }, 1000);
  //   }

  //   const inViewport = () => {
  //     const allElements = document.getElementsByClassName("section-text-up");
  //     const windowHeight = window.innerHeight;

  //     const elems = () => {
  //       for (let i = 0; i < allElements.length; i++) {
  //         const top = allElements[i].getBoundingClientRect().top;
  //         if (top < windowHeight) {
  //           allElements[i].classList.add("newClass");
  //         } else {
  //           allElements[i].classList.remove("newClass");
  //         }
  //       }
  //     };

  //     elems();
  //     window.addEventListener("scroll", elems);

  //     // Cleanup scroll listener
  //     return () => window.removeEventListener("scroll", elems);
  //   };

  //   inViewport();
  // }, []);

  useEffect(() => {
    searchResult(resProjectData, searchText);
  }, [searchText]);

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
              id="search"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button className="searchimg-div">
              <img src="/images/search-icon.svg" alt="" />
            </button>
          </div>
        </div>
        {filterprojectData.length !== 0 ? (
          <ResidenceProjects filterprojectData={filterprojectData} />
        ) : (
          <div id="dataNotFound">No residences found.</div>
        )}
      </section>

      <ExploreCompoent exploreData={pageData?.acf?.related_section} />

      <PathComponent pathData={pageData?.acf?.breadcrumbs} />
    </>
  );
};

export default ClientSingatureResidences;
