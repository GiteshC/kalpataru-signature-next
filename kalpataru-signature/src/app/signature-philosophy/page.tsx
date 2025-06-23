import ClientSignaturePhilosophy from "@/components/ClientSignaturePhilosophy";
import {PhilosophyPageData } from "@/utils/philosophyTyps";
import { fetchPageData } from "@/Api/wp-api";

const SignaturePhilosophy = async () => {
  const pageData: PhilosophyPageData = await fetchPageData("pages/242");
  return <ClientSignaturePhilosophy pageData={pageData} />;
};

export default SignaturePhilosophy;
