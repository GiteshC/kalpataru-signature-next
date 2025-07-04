import ClientSignatureEssence from "@/components/ClientSignatureEssence";
import { fetchPageData } from "@/Api/wp-api";
import { EssencePageData } from "@/utils/essenceTyps";

const SignatureEssence = async () => {
  const pageData: EssencePageData = await fetchPageData("pages/234");
  return <ClientSignatureEssence pageData={pageData} />;
};

export default SignatureEssence;
