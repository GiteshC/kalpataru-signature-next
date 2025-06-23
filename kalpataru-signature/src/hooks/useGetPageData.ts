"use client";
import { useEffect, useState } from "react";
import { PageData } from "../utils/type";

const useGetPageData = (pageId: string) => {
  const [pageData, setPageData] = useState<PageData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const getPageData = async () => {
    try {
      const res = await fetch(
        `https://ixdtm.com/projects/kalpataru-signature-wp/wp-json/acf/v3/${pageId}`
      );
      const data = await res.json();
      setPageData(data);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPageData();
  }, [pageId]);

  return { pageData, isLoading };
};

export default useGetPageData;
