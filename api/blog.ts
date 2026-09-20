export async function getBlogs() {
  const res = await fetch("https://stocknep.product-api.hamroyouthit.com/api/v1/public/blog", {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    return null;
  }
  return res.json();
}
