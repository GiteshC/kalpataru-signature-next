"use client";

import React, { useEffect, useState } from "react";
import BannerComponent from "./BannerComponent";
import { ResidencePageData, ResidenceProjectItem } from "@/utils/residenceType";
import ExploreCompoent from "./ExploreCompoent";
import ResidenceProjects from "./ResidenceProjects";
import PathComponent from "./PathComponent";
import Image from "next/image";

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

  useEffect(() => {
    searchResult(resProjectData, searchText);
  }, [resProjectData, searchText]);

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
              <Image src="/images/search-icon.svg" alt="" />
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
