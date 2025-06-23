import { fetchPageData } from "@/Api/wp-api";
import ClientProjectDetails from "@/components/ClientProjectDetails";

const ProjectDetail = async ({
  params,
}: {
  params: Promise<{ postId: string }>;
}) => {
  const { postId } = await params;
  console.log(postId);

  const pageData = await fetchPageData(`residences/${postId}`);
  console.log(pageData);

  return <ClientProjectDetails pageData={pageData} />;
};

export default ProjectDetail;
