export async function fetchPostsData(slug: string) {
  const res = await fetch(
    `https://ixdtm.com/projects/kalpataru-signature-wp/wp-json/wp/v2/${slug}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  const postsData = await res.json();
  return postsData?.[0];
}
