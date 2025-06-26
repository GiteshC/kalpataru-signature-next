import { fetchPageData } from "@/Api/wp-api";
import ClientSingatureExprience from "@/components/ClientSingatureExprience";
import { ExperiencePageData } from "@/utils/experienceType";

const SignatureExperience = async () => {
  const pageData : ExperiencePageData = await fetchPageData("pages/251");
  return <ClientSingatureExprience pageData={pageData}/>

};
export default SignatureExperience;
