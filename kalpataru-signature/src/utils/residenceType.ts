import { BannerSection, ExploreTheEssence, ImageData } from "./type";

export interface ResidenceExploreSection extends ExploreTheEssence {
  related_section_heading?: string;
  related_section_cta?: string;
  related_section_cta_link?: string;
  related_section_image_desktop?: ImageData;
  related_section_image_mobile?: ImageData;
}

export interface BannerImageOption {
  banner_image_field?: ImageData;
  banner_video_field?: string;
}

export interface ResidenceProjectItem {
  id: number;
  slug: string;
  type: string;
  status: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  acf: {
    banner_section?: {
      banner_description?: string;
      banner_sub_heading?: string;
      project_banner_heading: string;
      project_listing_description: string;
      project_location?: string;
      banner_options?: BannerImageOption[];
    };
    breadcrumbs?: {
      parent_pages: any[]; // You can make it more strict if needed
      current_page_name?: string;
    };
    residences_components?: any[]; // Define component types if needed
  };
  date: string;
  modified: string;
  link: string;
}

export interface ResidenceACF {
  banner_section?: BannerSection;
  related_section?: ResidenceExploreSection;
  residence_projects?: ResidenceProjectItem[];
}

export interface ResidencePageData {
  acf: ResidenceACF;
}
