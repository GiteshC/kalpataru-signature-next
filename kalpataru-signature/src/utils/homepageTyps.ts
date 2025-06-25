import { BannerSection } from "./type";

export interface CommonSection {
    section_heading?: string;
    section_description?: string;
    section_cta_text?: string;
    section_cta_link?: string;
    short_video?: string;
    video_cta_link?: string;
    video_cta_text?: string;
}

export interface HomepageACF {
    banner_section?: BannerSection;
    signature_sections?: CommonSection[];
}

export interface HomepagePageData {
    acf: HomepageACF;
}