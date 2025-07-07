
export interface ImageData {
  id?: number;
  url?: string;
  alt?: string;
  name?: string;
  title?: string
  width?: number
  height?: number

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
  banner_image_field?: string;
}

export interface ExploreTheEssence {
  acf_fc_layout?: "related_page_section";
  heading?: string;
  section_heading?: string;
  cta_text?: string;
  cta_link?: string;
  box_desktop_image?: ImageData;
  box_mobile_image?: ImageData;
}

export interface ParentPages{
  parent_page_text: string;
  parent_page_link: string
}

export interface Breadcrumbs{
  parent_pages?: ParentPages[]
  current_page_name?: string
}


export interface ACF {
  banner_section?: BannerSection;
  breadcrumbs?: Breadcrumbs;
}

export interface PageData {
  acf: ACF;
}