import ClientSingatureResidences from "@/components/ClientSingatureResidences";
import { fetchPageData } from "@/Api/wp-api";
import {
  ResidenceExploreSection,
  ResidencePageData,
  ResidenceProjectItem,
} from "@/utils/residenceType";
import { fetchPostsData } from "@/Api/wp-postsApi";

function normalizeResidenceExplore(raw: any): ResidenceExploreSection {
  return {
    heading: raw?.related_section_heading,
    cta_text: raw?.related_section_cta,
    cta_link: raw?.related_section_cta_link,
    box_desktop_image: raw?.related_section_image_desktop,
    box_mobile_image: raw?.related_section_image_mobile,
  };
}

export default async function SignatureResidence() {
  const pageData: ResidencePageData = await fetchPageData("pages/353");
  const projectsData: ResidenceProjectItem[] = await fetchPostsData("residences");

  const normalizedRelatedSection = normalizeResidenceExplore(
    pageData.acf.related_section
  );

  const finalData: ResidencePageData = {
    ...pageData,
    acf: {
      ...pageData.acf,
      related_section: normalizedRelatedSection,
    },
  };
  return <ClientSingatureResidences pageData={finalData} projectsData={projectsData} />;
}
