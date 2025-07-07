import { ResidenceProjectItem } from "@/utils/residenceType";
import Image from "next/image";
import Link from "next/link";

interface FilterprojectDataProps {
  filterprojectData: ResidenceProjectItem[];
}

const ResidenceProjects = ({ filterprojectData }: FilterprojectDataProps) => {
  if (!filterprojectData) return;
  return (
    <>
      {filterprojectData.map((project: ResidenceProjectItem) => (
        <div
          className="signaturebroucher-wrapper residence-item"
          key={project?.id}
        >
          <div className="signature-image">
            {project?.acf?.banner_section?.banner_options?.[0]
              ?.banner_image_field?.url ? (
              <Image
                src={
                  project?.acf?.banner_section?.banner_options?.[0]
                    ?.banner_image_field?.url
                }
                alt=""
                width={
                  project?.acf?.banner_section?.banner_options?.[0]
                    ?.banner_image_field?.width
                }
                height={
                  project?.acf?.banner_section?.banner_options?.[0]
                    ?.banner_image_field?.height
                }
                style={{ width: "auto", height: "auto" }}
              />
            ) : (
              <Image
                src="/images/kalpataru-azuro.webp"
                alt=""
                width={2560}
                height={1440}
                style={{ width: "auto", height: "auto" }}
              />
            )}
          </div>
          <div className="signature-content">
            <h2 className="signature-content-heading">
              {project?.acf?.banner_section?.project_banner_heading}
            </h2>
            <h3 className="signature-content-subheading">
              {project?.acf?.banner_section?.project_location}
            </h3>
            <p className="signature-content-bodycopy">
              {project?.acf?.banner_section?.project_listing_description}
            </p>
            <Link
              href={`/residences/${project?.slug}`}
              className="ctaBluetext "
            >
              View Project{" "}
              <Image
                src="images/signature-cta-arrow.svg"
                alt=""
                width={0}
                height={0}
                style={{ width: "auto", height: "auto" }}
              />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default ResidenceProjects;
