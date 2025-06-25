import ClientHomepage from "@/components/ClientHomepage";
import {HomepagePageData } from "@/utils/homepageTyps";
import { fetchPageData } from "@/Api/wp-api";

const Homepage = async () => {
  const pageData: HomepagePageData = await fetchPageData("pages/7");
  return <ClientHomepage pageData={pageData} />;
};

export default Homepage;