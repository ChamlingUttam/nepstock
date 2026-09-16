import { User, Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";
import TailSection from "@/components/common/TailSection";

async function getBlogBySlug(slug: string) {
  // First, try fetching directly using the slug as ID, which is common
  let res = await fetch(`https://stocknep.product-api.hamroyouthit.com/api/v1/public/blog/${slug}`, {
    next: { revalidate: 3600 },
  });
  
  if (res.ok) {
    const data = await res.json();
    if (data?.data) return data.data;
  }

  // Fallback: fetch all and filter by slug
  res = await fetch("https://stocknep.product-api.hamroyouthit.com/api/v1/public/blog", {
    next: { revalidate: 3600 },
  });
  
  if (res.ok) {
    const data = await res.json();
    const blogs = data?.data?.data || [];
    return blogs.find((b: any) => b.slug === slug);
  }

  return null;
}

export default async function SingleBlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const blog = await getBlogBySlug(resolvedParams.slug);

  if (!blog) {
    return (
      <main className="min-h-screen bg-white px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-gray-900">Blog not found</h1>
        <Link href="/blog" className="mt-6 inline-block text-[#075BFF] hover:underline">
          &larr; Back to all blogs
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <article className="mx-auto max-w-4xl px-4 py-12 md:px-12 lg:py-16">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#075BFF] mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to Blogs
        </Link>

        {blog.category && (
          <div className="mb-4">
            <span className="inline-block rounded-full bg-[#E6F2FF] px-3 py-1 text-xs font-semibold text-[#075BFF]">
              {blog.category.name}
            </span>
          </div>
        )}

        <h1 className="mb-4 text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
          {blog.title}
        </h1>

        {blog.short_description && (
          <p className="mb-8 text-lg text-gray-600 leading-relaxed max-w-3xl">
            {blog.short_description}
          </p>
        )}

        <div className="flex items-center gap-6 text-sm font-medium text-gray-500 mb-8 border-b border-gray-100 pb-8">
          <div className="flex items-center gap-2">
            <User className="h-5 w-5" />
            <span>{blog.Author?.name || "StockNep"}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            <span>
              {new Date(blog.created_at).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>
        </div>

        {blog.image && (
          <div className="mb-10 w-full overflow-hidden rounded-2xl bg-gray-100 aspect-video relative">
            <img
              src={`https://stocknep.product-api.hamroyouthit.com${blog.image}`}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div 
          className="[&>h1]:text-2xl [&>h1]:font-bold [&>h1]:mt-6 [&>h1]:mb-3 [&>h2]:text-xl [&>h2]:font-bold [&>h2]:mt-6 [&>h2]:mb-3 [&>h3]:text-lg [&>h3]:font-bold [&>h3]:mt-5 [&>h3]:mb-2 [&>h4]:text-base [&>h4]:font-bold [&>h4]:mt-4 [&>h4]:mb-2 [&>p]:mb-4 [&>p]:leading-relaxed [&>p]:text-[15px] [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:mb-4 [&>ul>li]:mb-2 [&>ul>li]:text-[15px] [&>ol]:list-decimal [&>ol]:pl-5 [&>ol]:mb-4 [&>ol>li]:mb-2 [&>ol>li]:text-[15px] [&_strong]:font-semibold text-gray-700 [&_a]:text-[#075BFF] [&_a]:hover:underline"
          dangerouslySetInnerHTML={{ __html: blog.long_description }}
        />
      </article>

      <TailSection />
    </main>
  );
}
