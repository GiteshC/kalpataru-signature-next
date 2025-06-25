export async function fetchPostsData(postName: string) {
  const res = await fetch(
    `https://ixdtm.com/projects/kalpataru-signature-wp/wp-json/wp/v2/${postName}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  const postsData = await res.json();
  return postsData;
}
