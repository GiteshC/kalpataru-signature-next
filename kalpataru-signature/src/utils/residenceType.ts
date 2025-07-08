import { BannerSection, Breadcrumbs, ExploreTheEssence, ImageData } from "./type";

export interface ResidenceExploreSection extends ExploreTheEssence {
  related_section_heading?: string;
  related_section_cta?: string;
  related_section_cta_link?: string;
  related_section_image_desktop?: ImageData;
  related_section_image_mobile?: ImageData;
}

export interface BannerImageOption {
  banner_image_field?: ImageData;
  banner_video_field?: string;
}

export interface ResidenceProjectItem {
  id: number;
  slug: string;
  type: string;
  status: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  acf: {
    banner_section?: {
      banner_description?: string;
      banner_sub_heading?: string;
      project_banner_heading: string;
      project_listing_description: string;
      project_location?: string;
      banner_options?: BannerImageOption[];
    };
  };
  date: string;
  modified: string;
  link: string;
}

export interface ResidenceACF {
  banner_section?: BannerSection;
  related_section?: ResidenceExploreSection;
  residence_projects?: ResidenceProjectItem[];
  breadcrumbs: Breadcrumbs;
}

export interface ResidencePageData {
  acf: ResidenceACF;
}

//Residences Page API Types
export interface LuxuriesGallery {
  luxuries_heading_icon? : ImageData;
  luxuries_heading? : string;
  luxuries_desktop_image? : ImageData;
  luxuries_mobile_image? : ImageData;
}

export interface MaestrosContent {
  maestros_image? : ImageData;
  person_name? : string;
  person_designation? : string;
  heading? : string;
  description? : string;
}

export interface ReraDetailListsGallery {
  rera_list_heading? : string;
  rera_list_description? : string;
  rera_list_image? : ImageData;
}

export interface RelatedSection {
  acf_fc_layout?: "related_section";
  heading?: string;
  cta_text?: string;
  cta_link?: string;
  box_desktop_image?: ImageData;
  box_mobile_image?: ImageData;
}

export interface ResidencesSignature {
  acf_fc_layout?: "residences_signature";
  section_heading?: string;
  section_description?: string;
  desktop_image?: ImageData;
  mobile_image?: ImageData;
}

export interface ResidencesMaestros {
  acf_fc_layout?: "maestros_section";
  section_heading?: string;
  section_description?: string;
  maestros_content? : MaestrosContent[]
}

export interface ResidencesLuxuries {
  acf_fc_layout?: "residences_luxuries";
  section_heading?: string;
  luxuries_gallery : LuxuriesGallery[]
}

export interface ResidencesHighlightSection {
  acf_fc_layout?: "residences_highlight_section";
  section_heading?: string;
  section_desktop_image? : ImageData;
  section_mobile_image? : ImageData;
  box_description : string
}

export interface ResidencesReraDetails {
  acf_fc_layout?: "rera_details_section";
  rera_heading?: string;
  rera_detail_lists : ReraDetailListsGallery[]
}

export interface ResidencesRequestPreview {
  acf_fc_layout?: "request_preview_section";
  section_heading?: string;
  section_desktop_image? : ImageData;
  section_mobile_image? : ImageData;
}

export type ResidencesComponent = RelatedSection | ResidencesSignature | ResidencesLuxuries | ResidencesMaestros | ResidencesHighlightSection | ResidencesReraDetails | ResidencesRequestPreview;

type ResidencesACFData = {
  banner_section?: BannerSection;
  residences_components?: ResidencesComponent[];
  breadcrumbs?: Breadcrumbs;
}

export interface ResidencesProjectACF {
  acf?: ResidencesACFData;
}