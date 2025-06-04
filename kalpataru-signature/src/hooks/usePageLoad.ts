import { useEffect, useState } from "react";

const usePageLoad = (): { isPageLoad: boolean } => {
  const [isPageLoad, setIsPageLoad] = useState(false);
  const [isSecInViewport, setIsSecInViewport] = useState(false)

  useEffect(() => {
    setIsPageLoad(true);
  }, []);

  useEffect (() => {
    
  })

  return { isPageLoad };
};

export default usePageLoad;
