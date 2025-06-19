import ClientSignatureEssence from "@/components/ClientSignatureEssence";
import { fetchPageData } from "@/utils/wp-api";

const SignatureEssence = async () => {
  const pageData = await fetchPageData("pages/234");
  return <ClientSignatureEssence pageData={pageData} />;
};

export default SignatureEssence;
