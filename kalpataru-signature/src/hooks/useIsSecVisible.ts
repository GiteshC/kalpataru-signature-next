import { useState, useEffect, RefObject } from "react";

const useIsSecVisible = (
  ref: RefObject<HTMLElement | null>
): { isSecInViewport: boolean } => {
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
  }, [ref]);

  return { isSecInViewport };
};

export default useIsSecVisible;
