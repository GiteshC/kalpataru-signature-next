import { fetchPostsData } from "@/Api/wp-postsApi";
import ClientProjectDetails from "@/components/ClientProjectDetails";

const ProjectDetail = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const resolvedParams = await params;
  const pageData = await fetchPostsData(`residences?slug=${resolvedParams.slug}`);
  return <ClientProjectDetails pageData={pageData} />;
};

export default ProjectDetail;