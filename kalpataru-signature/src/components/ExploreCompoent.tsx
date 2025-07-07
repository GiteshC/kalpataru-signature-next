"use client";
import { useRef } from "react";
import useIsSecVisible from "@/hooks/useIsSecVisible";
import { ExploreTheEssence } from "@/utils/type";
import Link from "next/link";
import Image from "next/image";

interface ExploreSecProps {
  exploreData?: ExploreTheEssence;
}

const   ExploreCompoent = ({ exploreData }: ExploreSecProps) => {  
  const ref = useRef(null);
  const { isSecInViewport } = useIsSecVisible(ref);

  if (!exploreData) return null;
  const {
    box_desktop_image: desktopImgUrl,
    box_mobile_image: mblImgUrl,
    cta_link: pageUrl,
    cta_text: subHeading,
    heading,
    section_heading,
  } = exploreData;
  const secHeading = heading || section_heading || "";

  return (
    <section className="requestSec" ref={ref}>
      <div className="requestBG">
        <Image
          src={desktopImgUrl?.url || ""}
          alt=""
          width={desktopImgUrl?.width}
          height={desktopImgUrl?.height}
          className="desktopImg"
        />
        <Image
          src={mblImgUrl?.url || ""}
          alt=""
          width={mblImgUrl?.width}
          height={mblImgUrl?.height}
          className="mobileImg"
        />
      </div>
      <div className="requestWrapper requestContent">
        <div className="secHeading">
          <h2
            className={`section-text-up ${isSecInViewport ? "newClass" : ""}`}
          >
            <span>{secHeading}</span>
          </h2>
          <Link
            href={`${pageUrl}`}
            className={`ctaOne section-text-up ${
              isSecInViewport ? "newClass" : ""
            } `}
          >
            <span>
              {subHeading}
              <Image
                src="/images/cta-arrow-white.svg"
                alt=""
                width={0}
                height={0}
                style={{ width: "auto", height: "auto" }}
              />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExploreCompoent;
