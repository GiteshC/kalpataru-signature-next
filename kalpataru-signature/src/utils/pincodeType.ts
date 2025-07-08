import { BannerSection, Breadcrumbs, ImageData, ExploreTheEssence } from "./type";

export type PinCodeDetailBox = {
    pincodes_image_slider?: {
        pincode_desktop_image?: ImageData;
        pincode_mobile_image?: ImageData;
    }[];
    pincodes_heading? : string;
    pincodes_description? : string;
    cta_text? : string;
    cta_link? : string;
}

type PincodeContentBox = {
    section_heading? : string;
    pincodes_detail_boxes? : PinCodeDetailBox[];
}

export interface PincodeACF {
    pincodes_content_box? : PincodeContentBox;
    related_sections? : ExploreTheEssence;
    pincodes_banner_section? : BannerSection;
    breadcrumbs? : Breadcrumbs;
}

export interface PincodePageData {
    acf: PincodeACF;
}