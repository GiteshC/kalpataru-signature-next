"use client";

import useIsSecVisible from "@/hooks/useIsSecVisible";
import React, { useRef } from "react";

type SectionProps = {
  children: (isSecInViewport: boolean, ref: any) => React.ReactNode;
};

const SectionObserver = ({ children }: SectionProps) => {
  const ref = useRef(null);
  const { isSecInViewport } = useIsSecVisible(ref);

  return <>{children(isSecInViewport, ref)}</>;
};

export default SectionObserver;
