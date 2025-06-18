import ClientSignaturePhilosophy from "@/components/ClientSignaturePhilosophy";
import { fetchPageData } from "@/utils/wp-api";

const SignaturePhilosophy = async () => {
  const pageData = await fetchPageData("pages/242");
  return <ClientSignaturePhilosophy pageData={pageData} />;
};

export default SignaturePhilosophy;
