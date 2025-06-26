import {
  BannerSection,
  Breadcrumbs,
  ExploreTheEssence,
  ImageData,
} from "./type";

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

export type PhilosophyComponent =
  | VisionSection
  | HouseOfFirstSection
  | ExploreTheEssence;

export interface PhilosophyACF {
  banner_section?: BannerSection;
  philosophy_components?: PhilosophyComponent[];
  breadcrumbs: Breadcrumbs;
}

export interface PhilosophyPageData {
  acf: PhilosophyACF;
}
