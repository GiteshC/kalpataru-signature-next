import { BannerSection, ImageData } from "./type";

export interface CommonSection {
    section_heading?: string;
    section_description?: string;
    section_cta_text?: string;
    section_cta_link?: string;
    short_video?: string;
    video_cta_link?: string;
    video_cta_text?: string;
}

export interface RequestSection{
    bg_image: ImageData;
    bg_image_mobile: ImageData;
    section_heading: string
}

export interface HomepageACF {
    banner_section?: BannerSection;
    signature_sections?: CommonSection[];
    request_section?: RequestSection
}

export interface HomepagePageData {
    acf: HomepageACF;
}