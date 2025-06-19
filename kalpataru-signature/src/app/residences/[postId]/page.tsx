import { fetchPageData } from "@/utils/wp-api";
import ClientProjectDetails from "@/components/ClientProjectDetails";

const ProjectDetail = async ({ params }: { params: Promise<{ postId: string }> }) => {
  const resolvedParams = await params;
  const pageData = await fetchPageData(`posts/${resolvedParams.postId}`);
  return <ClientProjectDetails pageData={pageData} />;
};

export default ProjectDetail;