import Link from "next/link";
import { User, Calendar } from "lucide-react";
import TailSection from "@/components/common/TailSection";
import Image from "next/image";

async function getBlogs() {
  const res = await fetch("https://stocknep.product-api.hamroyouthit.com/api/v1/public/blog", {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    return null;
  }
  return res.json();
}

export default async function BlogPage() {
  const data = await getBlogs();
  const blogs = data?.data?.data || [];

  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="mx-auto max-w-7xl px-4 py-12 md:px-12 lg:py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Our Blog <span className="text-[#075BFF]">Page</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          Reach out for inquiries, support, or feedback. Fill out the form, and we'll get back to you promptly.
        </p>
      </section>

      {/* Blog Grid */}
      <section className="mx-auto max-w-7xl px-4 md:px-12 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog: any) => (
            <Link key={blog.id} href={`/blog/${blog.slug}`} className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-[4/3] w-full bg-[#F3F2F7] relative overflow-hidden">
                {blog.image ? (
                  <img
                    src={`https://stocknep.product-api.hamroyouthit.com${blog.image}`}
                    alt={blog.title}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="h-full w-full bg-[#F3F2F7]" />
                )}
              </div>
              <div className="flex flex-col flex-grow p-6">
                <h3 className="mb-3 text-[18px] leading-snug font-bold text-gray-900 line-clamp-2 group-hover:text-[#075BFF] transition-colors">
                  {blog.title}
                </h3>
                <p className="mb-6 text-[14px] leading-relaxed text-gray-500 line-clamp-3">
                  {blog.short_description}
                </p>
                
                <div className="mt-auto flex items-center gap-5 text-[13px] font-medium text-gray-500 border-t border-gray-100 pt-5">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{blog.Author?.name || "Aakash Chaudhary"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>
                      {new Date(blog.created_at).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
          {blogs.length === 0 && (
            <div className="col-span-full py-12 text-center text-gray-500">
              No blogs found.
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <TailSection />
    </main>
  );
}
