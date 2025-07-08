"use client";
import { useEffect } from "react";
import BannerComponent from "@/components/BannerComponent";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { Fancybox } from "@fancyapps/ui";
import { HomepagePageData } from "@/utils/homepageTyps";
import SectionObserver from "./SectionObserver";
import PrivatePreviewModal from "./PrivatePreviewModal";
import useModalContext from "@/context/modalContext";
import Image from "next/image";

interface HomepageProps {
  pageData: HomepagePageData;
}

const ClientHomepage = ({ pageData }: HomepageProps) => {
  const { isModalOpen, setIsModalOpen, modalHandler } = useModalContext();

  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {});
    return () => {
      Fancybox.destroy();
    };
  }, []);
  return (
    <div>
      <BannerComponent bannerData={pageData?.acf?.banner_section} />
      {pageData?.acf?.signature_sections?.map((sec, index) => {
        return (
          <SectionObserver key={index}>
            {(isSecInViewport, ref) => (
              <section className="signatureSec" ref={ref}>
                <div className="signatureWrapper">
                  <div className="secHeading">
                    <h2
                      className={`section-text-up ${
                        isSecInViewport ? "newClass" : ""
                      }`}
                    >
                      <span>{sec?.section_heading}</span>
                    </h2>
                    <p
                      className={`section-text-up ${
                        isSecInViewport ? "newClass" : ""
                      }`}
                    >
                      <span>{sec?.section_description}</span>
                    </p>
                    <a
                      href={sec?.section_cta_link}
                      className={`section-text-up ctaBluetext ${
                        isSecInViewport ? "newClass" : ""
                      }`}
                    >
                      <span>
                        {sec?.section_cta_text}{" "}
                        <Image
                          src="/images/cta-arrow.svg"
                          alt=""
                          width={0}
                          height={0}
                          style={{ width: "auto", height: "auto" }}
                        />
                      </span>
                    </a>
                  </div>
                </div>
                <div className="signatureVideo">
                  <div className="videoBox">
                    <video autoPlay muted loop playsInline preload="metadata">
                      <source src={sec?.short_video} type="video/mp4" />
                    </video>
                  </div>
                  <a data-fancybox="" data-ratio="2" href={sec?.video_cta_link}>
                    {sec?.video_cta_text}
                  </a>
                </div>
              </section>
            )}
          </SectionObserver>
        );
      })}
      <SectionObserver>
        {(isSecInViewport, ref) => (
          <section className="requestSec reqNewSec" ref={ref}>
            <div className="requestBG">
              <Image
                src={`${pageData.acf.request_section?.bg_image.url}`}
                alt={`${pageData.acf.request_section?.bg_image.title}`}
                className="desktopImg"
                width={pageData.acf.request_section?.bg_image.width}
                height={pageData.acf.request_section?.bg_image.height}
              />
              <Image
                src={`${pageData.acf.request_section?.bg_image_mobile.url}`}
                alt={`${pageData.acf.request_section?.bg_image_mobile.title}`}
                className="mobileImg"
                width={pageData.acf.request_section?.bg_image_mobile.width}
                height={pageData.acf.request_section?.bg_image_mobile.height}
              />
            </div>
            <div className="requestWrapper requestContent reqNewContent">
              <div className="secHeading newSecHeading">
                <h2
                  className={`section-text-up ctaBluetext ${
                    isSecInViewport ? "newClass" : ""
                  }`}
                  onClick={modalHandler}
                >
                  <div className="trigger">
                    <span>
                      {pageData.acf.request_section?.section_heading}
                      <Image
                        src="/images/cta-arrow-white.svg"
                        alt=""
                        width={0}
                        height={0}
                        style={{ width: "auto", height: "auto" }}
                      />
                    </span>
                  </div>
                </h2>
              </div>
            </div>
          </section>
        )}
      </SectionObserver>

      {isModalOpen ? (
        <PrivatePreviewModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default ClientHomepage;
