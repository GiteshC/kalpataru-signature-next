"use client";

import usePageLoad from "@/hooks/usePageLoad";
import Link from "next/link";

const ExploreCompoent = ({
  desktopImgUrl,
  mblImgUrl,
  secHeading,
  subHeading,
}: {
  desktopImgUrl: string;
  mblImgUrl: string;
  secHeading: string;
  subHeading: string;
}) => {

  const { isPageLoad } = usePageLoad();
  return (
    <section className="requestSec">
      <div className="requestBG">
        <img src={desktopImgUrl} alt="" className="desktopImg" />
        <img src={mblImgUrl} alt="" className="mobileImg" />
      </div>
      <div className="requestWrapper requestContent">
        <div className="secHeading">
          <h2 className={`section-text-up ${isPageLoad ? "newClass" : ""}`}>
            <span>{secHeading}</span>
          </h2>
          <Link
            href="signature-essence.html"
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
