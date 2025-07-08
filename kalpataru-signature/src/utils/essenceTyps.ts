import { BannerSection, Breadcrumbs, ExploreTheEssence, ImageData } from "./type";

export interface PincodeProperty {
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

export type ResidentsSecProperty = {
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

export type EssenceComponent =
  | SignaturePinCode
  | EssenceVideoSec
  | ResidentsSec
  | ExploreTheEssence;

export interface EssenceACF {
  banner_section?: BannerSection;
  essence_components?: EssenceComponent[];
  breadcrumbs: Breadcrumbs;
}

export interface EssencePageData {
  acf: EssenceACF;
}
