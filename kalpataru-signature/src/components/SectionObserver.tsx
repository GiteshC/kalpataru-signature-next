"use client";

import useIsSecVisible from "@/hooks/useIsSecVisible";
import React, { RefObject, useRef } from "react";

type SectionProps = {
  children: (isSecInViewport: boolean,  ref: React.RefObject<HTMLDivElement | null>) => React.ReactNode;
};

const SectionObserver = ({ children }: SectionProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { isSecInViewport } = useIsSecVisible(ref);

  return <>{children(isSecInViewport, ref)}</>;
};

export default SectionObserver;
