export async function fetchPageData(pageId: string) {
  const res = await fetch(
    `https://ixdtm.com/projects/kalpataru-signature-wp/wp-json/wp/v2/${pageId}`,
    {
      next: { revalidate: 60 },
    }
  );
  const pageData = await res.json();
  return pageData;
}
