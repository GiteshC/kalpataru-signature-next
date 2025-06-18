export interface ImageData {
  url?: string;
  alt?: string;
  width?: number;
  height?: number;
}

export interface BannerOptions {
  acf_fc_layout?: "banner_video";
  banner_video_field?: string;
}

export interface BannerSection {
  video_link?: string;
  banner_heading?: string;
  banner_description?: string;
  banner_options?: BannerOptions[];
  project_location?: string;
}

export interface VisionSection {
  acf_fc_layout: "pioneers_section";
  section_heading?: string;
  section_description?: string;
  section_desktop_image?: ImageData;
  section_mobile_image?: ImageData;
  image_description?: string;
}
export interface HouseOfFirstSection {
  acf_fc_layout: "house_of_firsts";
  section_heading?: string;
  section_description?: string;
  short_video?: string;
  full_video_link?: string;
  image_description?: string;
  cta_text?: string;
}
export interface ExploreTheEssence {
  acf_fc_layout: "related_page_section";
  heading?: string;
  cta_text?: string;
  cta_link?: string;
  box_desktop_image?: ImageData;
  box_mobile_image?: ImageData;
}

export type PhilosophyComponent =
  | VisionSection
  | HouseOfFirstSection
  | ExploreTheEssence;

export interface ACF {
  banner_section?: BannerSection;
  philosophy_components?: PhilosophyComponent[];
}

export interface PageData {
  acf: ACF;
}
