import { useEffect, useState } from "react";

const usePageLoad = (): { isPageLoad: boolean } => {
  const [isPageLoad, setIsPageLoad] = useState(false);

  useEffect(() => {
    setIsPageLoad(true);
  }, []);
  
  return { isPageLoad };
};

export default usePageLoad;
