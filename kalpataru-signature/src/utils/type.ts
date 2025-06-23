
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
type LuxuriesGallery = {
  luxuries_heading_icon? : ImageData;
  luxuries_heading? : string;
  luxuries_desktop_image? : ImageData;
  luxuries_mobile_image? : ImageData;
}

type MaestrosContent = {
  maestros_image? : ImageData;
  person_name? : string;
  person_designation? : string;
  heading? : string;
  description? : string;
}

type ReraDetailListsGallery = {
  rera_list_heading? : string;
  rera_list_description? : string;
  rera_list_image? : ImageData;
}

export interface RelatedSection {
  acf_fc_layout: "related_section";
  heading?: string;
  cta_text?: string;
  cta_link?: string;
  box_desktop_image?: ImageData;
  box_mobile_image?: ImageData;
}

export interface ResidencesSignature {
  acf_fc_layout: "residences_signature";
  section_heading?: string;
  section_description?: string;
  desktop_image?: ImageData;
  mobile_image?: ImageData;
}

export interface ResidencesMaestros {
  acf_fc_layout: "maestros_section";
  section_heading?: string;
  section_description?: string;
  maestros_content : MaestrosContent[]
}

export interface ResidencesLuxuries {
  acf_fc_layout: "residences_luxuries";
  section_heading?: string;
  luxuries_gallery : LuxuriesGallery[]
}

export interface ResidencesHighlightSection {
  acf_fc_layout: "residences_highlight_section";
  section_heading?: string;
  section_desktop_image? : ImageData;
  section_mobile_image? : ImageData;
  box_description : string
}

export interface ResidencesReraDetails {
  acf_fc_layout: "rera_details_section";
  rera_heading?: string;
  rera_detail_lists : ReraDetailListsGallery[]
}

export interface ResidencesRequestPreview {
  acf_fc_layout: "request_preview_section";
  section_heading?: string;
  section_desktop_image? : ImageData;
  section_mobile_image? : ImageData;
}

export type ResidencesComponent = RelatedSection | ResidencesSignature | ResidencesLuxuries | ResidencesMaestros | ResidencesHighlightSection | ResidencesReraDetails | ResidencesRequestPreview;

export interface ACF {
  banner_section?: BannerSection;
  residences_components?: ResidencesComponent[];
}

export interface PageData {
  acf: ACF;
}