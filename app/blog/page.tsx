import Link from "next/link";
import { User, Calendar } from "lucide-react";
import TailSection from "@/components/common/TailSection";
import Image from "next/image";

const staticBlogs = [
  {
    id: 1,
    slug: "why-every-business-needs-inventory-management",
    title:
      "Why Every Business in Nepal Needs an Inventory Management System in 2026",
    short_description:
      "In today's digital world, having a proper inventory management system for businesses is no longer optional—it's essential.",
    image: "/api/blog-image",
    Author: { name: "Lija Niraula" },
    created_at: "2026-04-11T00:00:00.000Z",
  },
  {
    id: 2,
    slug: "why-every-hotel-needs-website",
    title: "Why Every Hotel Needs a Professional Website in 2026?",
    short_description:
      "In today's digital world, having a professional website for hotel businesses is no longer optional—it's essential.",
    image: "/api/blog-image",
    Author: { name: "Lija Niraula" },
    created_at: "2026-08-18T00:00:00.000Z",
  },
  {
    id: 3,
    slug: "why-every-hotel-needs-website-2",
    title: "Why Every Hotel Needs a Professional Website in 2026?",
    short_description:
      "In today's digital world, having a professional website for hotel businesses is no longer optional—it's essential.",
    image: "/api/blog-image",
    Author: { name: "Lija Niraula" },
    created_at: "2026-08-18T00:00:00.000Z",
  },
  {
    id: 4,
    slug: "why-every-hotel-needs-website-3",
    title: "Why Every Hotel Needs a Professional Website in 2026?",
    short_description:
      "In today's digital world, having a professional website for hotel businesses is no longer optional—it's essential.",
    image: "/api/blog-image",
    Author: { name: "Lija Niraula" },
    created_at: "2026-08-18T00:00:00.000Z",
  },
  {
    id: 5,
    slug: "why-every-hotel-needs-website-4",
    title: "Why Every Hotel Needs a Professional Website in 2026?",
    short_description:
      "In today's digital world, having a professional website for hotel businesses is no longer optional—it's essential.",
    image: "/api/blog-image",
    Author: { name: "Lija Niraula" },
    created_at: "2026-08-18T00:00:00.000Z",
  },
  {
    id: 6,
    slug: "why-every-hotel-needs-website-5",
    title: "Why Every Hotel Needs a Professional Website in 2026?",
    short_description:
      "In today's digital world, having a professional website for hotel businesses is no longer optional—it's essential.",
    image: "/api/blog-image",
    Author: { name: "Lija Niraula" },
    created_at: "2026-08-18T00:00:00.000Z",
  },
];

export default function BlogPage() {
  const blogs = staticBlogs;

  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="mx-auto max-w-7xl px-4 pt-10 pb-8 text-center sm:px-6 md:px-8 md:pt-12 lg:px-12 lg:pt-16">
        <h1 className="mb-4 text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
          Our Blog <span className="text-[#007BFF]">Page</span>
        </h1>

        <p className="mx-auto mb-8 max-w-3xl text-sm font-normal leading-6 tracking-[-0.02em] text-[#475569] sm:text-base md:text-lg md:leading-7">
          Reach out for inquiries, support, or feedback. Fill out the form, and
          we&apos;ll get back to you promptly.
        </p>
      </section>

      {/* Blog Grid */}
      <section className="mx-auto w-full max-w-[1400px] px-4 pb-0 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <Link
              key={blog.id}
              href={`/blog/${blog.slug}`}
              className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
            >
              {/* Blog Image */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#EAE8EC]">
                {blog.image ? (
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain mix-blend-multiply"
                  />
                ) : (
                  <div className="h-full w-full bg-[#EAE8EC]" />
                )}
              </div>

              {/* Blog Content */}
              <div className="flex min-w-0 flex-col p-4 sm:p-5">
                <h3 className="mb-3 line-clamp-2 font-manrope text-xl font-semibold leading-tight tracking-tight text-gray-900 transition-colors group-hover:text-[#007BFF] sm:text-2xl">
                  {blog.title}
                </h3>

                <p className="mb-5 line-clamp-3 font-manrope text-sm font-normal leading-6 text-gray-500 sm:text-base">
                  {blog.short_description}
                </p>

                {/* Author & Date */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-gray-100 pt-4 text-xs font-medium text-gray-500 sm:text-sm">
                  <div className="flex min-w-0 items-center gap-2">
                    <User className="h-4 w-4 shrink-0" />
                    <span className="truncate">
                      {blog.Author?.name || "Aakash Chaudhary"}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 shrink-0" />
                    <span>
                      {new Date(blog.created_at).toLocaleDateString(
                        "en-US",
                        {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        }
                      )}
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
      <div className="pt-8 sm:pt-10">
        <TailSection />
      </div>
    </main>
  );
}