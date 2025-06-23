import { fetchPageData, fetchProjectData } from "@/utils/wp-api";
import ClientProjectDetails from "@/components/ClientProjectDetails";

const ProjectDetail = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const resolvedParams = await params;
  const pageData = await fetchProjectData(`residences/${resolvedParams.slug}`);
  return <ClientProjectDetails pageData={pageData} />;
};

export default ProjectDetail;