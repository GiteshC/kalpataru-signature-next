import { BannerSection, Breadcrumbs, ExploreTheEssence, ImageData } from "./type";


export interface ExperienceLiving{
    experience_image: ImageData;
    experience_video_link: string
}
export interface EventContent{
    event_image: ImageData;
    event_name: string;
    event_date: string
}

export interface ExperienceSec {
  acf_fc_layout: "experience_section";
  section_heading?: string;
  section_description?: string;
  experience_of_living?: ExperienceLiving[];
}

export interface CulturalEventsSec {
  acf_fc_layout: "cultural_events";
  section_heading?: string;
  section_description?: string;
  event_content?: EventContent[];
}

export type ExperienceComponent =
  | ExperienceSec
  | CulturalEventsSec
  | ExploreTheEssence;

export interface ExperienceACF {
  banner_section?: BannerSection;
  experience_components?: ExperienceComponent[];
  breadcrumbs: Breadcrumbs;

}

export interface ExperiencePageData {
  acf: ExperienceACF;
}
