import { fetchPageData } from "./wp-api";

export const getStaticPageProps = (pageId: string, revalidateTime = 60) => {
  return async function () {
    try {
      const pageData = await fetchPageData(pageId);
        console.log("Fetched PageData:", pageData);
      return {
        pageData: { pageData},
        revalidate: revalidateTime,
      };
    } catch (error) {
      console.error(error);
      return {
        notFound: true,
      };
    }
  };
};
