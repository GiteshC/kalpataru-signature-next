export interface ImageData {
  id?: number;
  url?: string;
  alt?: string;
  name?: string;
}

export interface BannerOptions {
  acf_fc_layout?: "banner_video" | "banner_image";
  banner_video_field?: string;
  banner_image_field?: ImageData
}

export interface BannerSection {
  video_link?: string;
  banner_heading?: string;
  banner_sub_heading?: string;
  banner_description?: string;
  banner_options?: BannerOptions[];
  project_location?: string;
  project_banner_heading? : string;
}

//Philloshophy Page API Types
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

//Essence Page API Types
type PincodeProperty = {
  property_name: string;
  property_description: string;
  cta_text: string;
  cta_link: string;
  property_images: {
    property_big_image: ImageData;
    property_small_image_one: ImageData;
    property_small_image_two: ImageData;
  };
  pincode_area_image: ImageData; 
};

type EssenceVideoProperty = {
  heading: string;
  sub_heading: string;
  designer_name: string;
  designer_designation: string;
  video_thumbnail: ImageData;
  video_link: string;
};

type ResidentsSecProperty = {
  video_heading: string;
  video_link: string;
  video_thumbnail: ImageData;
};

export interface SignaturePinCode {
  acf_fc_layout: "pincodes_content";
  section_heading?: string;
  section_description?: string;
  pincodes_properties?: PincodeProperty[];
}
export interface EssenceVideoSec {
  acf_fc_layout: "interview_section";
  interview_content?: EssenceVideoProperty[];
}
export interface ResidentsSec {
  acf_fc_layout: "residents_testimonials";
  section_heading?: string;
  section_sub_heading?: string;
  testimonials_content?: ResidentsSecProperty[];
}

export type PhilosophyComponent =
  | VisionSection
  | HouseOfFirstSection
  | ExploreTheEssence;

export type EssenceComponent =
  | SignaturePinCode
  | EssenceVideoSec
  | ResidentsSec
  | ExploreTheEssence


//Residences Page API Types
export interface RelatedSection {
  acf_fc_layout: "related_section";
  heading?: string;
  cta_text?: string;
  cta_link?: string;
  box_desktop_image?: ImageData;
  box_mobile_image?: ImageData;
}

export type ResidencesComponent =
  | RelatedSection

export interface ACF {
  banner_section?: BannerSection;
  philosophy_components?: PhilosophyComponent[];
  essence_components?: EssenceComponent[];
  residences_components?: ResidencesComponent[];
}

export interface PageData {
  acf: ACF;
}
