import { useState, useEffect } from "react";

const useIsSecVisible = (ref: any): { isSecInViewport: boolean } => {
  const [isSecInViewport, setIsSecInViewport] = useState(false);

  useEffect(() => {
     if (!ref?.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsSecInViewport(entry.isIntersecting);
    });

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref?.current]);

  return { isSecInViewport };
};

export default useIsSecVisible;
