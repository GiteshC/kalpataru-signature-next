
export interface ImageData {
  id?: number;
  url?: string;
  alt?: string;
  name?: string;
}

export interface BannerOptions {
  acf_fc_layout?: "banner_video" | "banner_image";
  banner_video_field?: string;
  banner_image_field?: ImageData;
}

export interface BannerSection {
  video_link?: string;
  banner_video?:string 
  banner_heading?: string;
  banner_sub_heading?: string;
  banner_description?: string;
  banner_options?: BannerOptions[];
  project_location?: string;
  project_banner_heading?: string;
  banner_video_field?: string;
  banner_image_field?: ImageData;
}

export interface ExploreTheEssence {
  acf_fc_layout?: "related_page_section";
  heading?: string;
  cta_text?: string;
  cta_link?: string;
  box_desktop_image?: ImageData;
  box_mobile_image?: ImageData;
}

//Residences Page API Types
export interface RelatedSection {
  acf_fc_layout: "related_section";
  heading?: string;
  cta_text?: string;
  cta_link?: string;
  box_desktop_image?: ImageData;
  box_mobile_image?: ImageData;
}

export type ResidencesComponent = RelatedSection;

export interface ACF {
  banner_section?: BannerSection;
  residences_components?: ResidencesComponent[];
}

export interface PageData {
  acf: ACF;
}

