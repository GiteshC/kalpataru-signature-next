"use client";

import usePageLoad from "@/hooks/usePageLoad";
import { ExploreTheEssence } from "@/utils/type";
import Link from "next/link";

interface ExploreSecProps {
  exploreData?: ExploreTheEssence;
}

const ExploreCompoent = ({ exploreData }: ExploreSecProps) => {
  if (!exploreData) return null;
  const {
    box_desktop_image: desktopImgUrl,
    box_mobile_image: mblImgUrl,
    cta_link: pageUrl,
    cta_text: subHeading,
    heading: secHeading,
  } = exploreData;

  const { isPageLoad } = usePageLoad();
  return (
    <section className="requestSec">
      <div className="requestBG">
        <img src={desktopImgUrl?.url} alt="" className="desktopImg" />
        <img src={mblImgUrl?.url} alt="" className="mobileImg" />
      </div>
      <div className="requestWrapper requestContent">
        <div className="secHeading">
          <h2 className={`section-text-up ${isPageLoad ? "newClass" : ""}`}>
            <span>{secHeading}</span>
          </h2>
          <Link
            href={`${pageUrl}`}
            className={`ctaOne section-text-up ${
              isPageLoad ? "newClass" : ""
            } `}
          >
            <span>
              {subHeading}
              <img src="/images/cta-arrow-white.svg" alt="" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExploreCompoent;

//   {
//   desktopImgUrl,
//   mblImgUrl,
//   secHeading,
//   subHeading,
//   pageUrl,
// }: {
//   desktopImgUrl: any;
//   mblImgUrl: any;
//   secHeading: any;
//   subHeading: any;
//   pageUrl: any;
// }
