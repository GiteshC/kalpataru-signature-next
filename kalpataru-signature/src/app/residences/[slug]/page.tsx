import { fetchPostsData } from "@/Api/wp-postsApi";
import ClientProjectDetails from "@/components/ClientProjectDetails";

const ProjectDetail = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const resolvedParams = await params;
  const pageData = await fetchPostsData(`residences?slug=${resolvedParams.slug}`);
  const postData = pageData?.[0].slug === resolvedParams.slug ? pageData?.[0] : null;
  
  return <ClientProjectDetails pageData={postData} />;
};

export default ProjectDetail;