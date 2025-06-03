"use client";
import BannerComponent from "@/components/BannerComponent";
import { useEffect, useState } from "react";

const SignaturePhilosophy = () => {
  const [isPageLoad, setIsPageLoad] = useState(false);
  useEffect(() => {
    setIsPageLoad(true);
  }, []);
  return (
    <>
      <BannerComponent
        isPageLoad={isPageLoad}
        mainHeading="SIGNATURE PHILOSOPHY"
        para="The pursuit of luxury. Our ultimate obsession."
      />
    </>
  );
};

export default SignaturePhilosophy;
