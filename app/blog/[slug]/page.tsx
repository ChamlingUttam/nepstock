import Link from "next/link";
import Image from "next/image";

const blogTitle =
  "Why Every Business in Nepal Needs an Inventory Management System in 2026";

const hotelBlogContent = `
  <p>When we hear the term "Gen-Z," we remember a massive crowd of youths raising their voices loud, the innocent faces of the Gen-Z martyrs, blood, destruction, and all the chaos. But behind those loud and aggressive protesters, there is a generation that grew up holding deep dissatisfaction with what they see around them. The Gen-Z moments of September 8 and 9 and the generational shift in national politics are changes that we often talk about. But all changes do not need to become headlines. Some revolutions are quiet, yet impactful.</p>

  <p>This generation, before or after the protest, always wanted a change. Gen-Z understands global standards, systems, and practices. They try to learn, observe, align, and advance. Gen-Z wants to rewire the sociopolitical systems.<br />They disagree with the traditional benchmarks for success and so-called 'ideal' personality. They choose a career based on passion, not stability. This is a change that our society always needed.</p>

  <p>The biggest or most impactful change that has been introduced in society is the ability to question. Questioning the system is often taken as disrespect. But now, Nepalese society understands that raising questions is actually the highest form of responsibility. Instead of adjusting, people have begun questioning.<br />Although they have a greater feeling of uncertainty, confusion, and burnout, they hope for betterment. This shows that this generation is highly optimistic. Gen-Z may not have greater knowledge of the political ideologies compared to the preceding generations. But they advocate good governance, transparency, and justice. And basically, this is what truly matters.</p>

  <p>Gen-Z normalizes the issues of mental health. They are more practically redefining the gender roles inside the families. They break the social hierarchy and caste barriers strongly. They promote gradual acceptance of LGBTQ+ identities. This makes society a better place to live for 'everyone.'</p>

  <p>They replace blind obedience with critical thinking. They believe that respect is earned, not gained as a bonus for authority. They always search for a reason to trust any idea or person and discourage blind faith. This is a vital change that can increase a sense of responsibility in the authorities.</p>

  <p>Gen-Z has many flaws, like digital over-dependence, psychological vulnerability, emphasis on individuality, desire for quick results, and so on. But the Gen-Z youths in Nepal are transforming the core of Nepalese households, thinking patterns, and overall civic consciousness. These are the unseen gears of progress—silent, small, and internal—that will eventually lead to a systemic shift in Nepal.</p>
`;

const staticBlogs = [
  {
    slug: "why-every-business-needs-inventory-management",
    title: blogTitle,
    author: "Lija Niraula",
    date: "Apr 11, 2026",
    image: "/api/blog-image",
    content: hotelBlogContent,
  },
  {
    slug: "why-every-hotel-needs-website",
    title: blogTitle,
    author: "Lija Niraula",
    date: "Aug 18, 2026",
    image: "/api/blog-image",
    content: hotelBlogContent,
  },
  {
    slug: "why-every-hotel-needs-website-2",
    title: blogTitle,
    author: "Lija Niraula",
    date: "Aug 18, 2026",
    image: "/api/blog-image",
    content: hotelBlogContent,
  },
  {
    slug: "why-every-hotel-needs-website-3",
    title: blogTitle,
    author: "Lija Niraula",
    date: "Aug 18, 2026",
    image: "/api/blog-image",
    content: hotelBlogContent,
  },
  {
    slug: "why-every-hotel-needs-website-4",
    title: blogTitle,
    author: "Lija Niraula",
    date: "Aug 18, 2026",
    image: "/api/blog-image",
    content: hotelBlogContent,
  },
  {
    slug: "why-every-hotel-needs-website-5",
    title: blogTitle,
    author: "Lija Niraula",
    date: "Aug 18, 2026",
    image: "/api/blog-image",
    content: hotelBlogContent,
  },
];

const socialButtonClass =
  "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-300 text-gray-600 transition-colors hover:border-[#075BFF] hover:text-[#075BFF]";

export default async function SingleBlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const blog = staticBlogs.find((blog) => blog.slug === slug);

  if (!blog) {
    return (
      <main className="min-h-screen bg-white px-4 py-20 text-center">
        <h1 className="font-[Poppins] text-3xl font-semibold text-gray-900">
          Blog not found
        </h1>

        <Link
          href="/blog"
          className="mt-6 inline-block text-[#075BFF] hover:underline"
        >
          ← Back to all blogs
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Back to Blogs */}
      <div className="mx-auto w-full max-w-[1384px] px-4 pt-6 sm:px-6 sm:pt-8 md:px-8">
        <Link
          href="/blog"
          className="inline-flex cursor-pointer items-center text-sm font-medium text-[#075BFF] hover:underline"
        >
          ← Back to Blogs
        </Link>
      </div>

      {/* Featured Image */}
      <div className="mx-auto mt-6 w-full max-w-[1384px] px-4 sm:mt-8 sm:px-6 md:px-8">
        <div className="relative aspect-[1384/420] w-full overflow-hidden rounded-[20px] border border-[#D7E2F0] bg-gray-100">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>

      {/* Blog Content */}
      <article className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 sm:py-10 md:px-8">
        <h1 className="mb-4 w-full max-w-[900px] font-[Poppins] text-2xl font-semibold leading-8 tracking-[-0.48px] text-gray-900 sm:text-[28px] sm:leading-10 sm:tracking-[-0.56px] md:text-[32px] md:leading-[44px] md:tracking-[-0.64px]">
          Why Every Business in Nepal Needs an Inventory Management
          System in 2026
        </h1>

        <div className="mb-1 flex flex-wrap items-center gap-x-5 gap-y-2 text-[14px] font-medium">
          <div className="flex items-center gap-1.5 text-[#075BFF]">
            <svg
              className="h-4 w-4 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>

            <span>{blog.date}</span>
          </div>

          <div className="flex items-center gap-1.5 text-[#075BFF]">
            <svg
              className="h-4 w-4 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
              />
              <circle cx="12" cy="7" r="4" />
            </svg>

            <span>{blog.author}</span>
          </div>
        </div>

        <div className="mb-8 mt-3 h-[3px] w-16 rounded-full bg-[#075BFF]" />

        <div
          className="
            [&>p]:mb-6
            [&>p]:font-[Poppins]
            [&>p]:text-[18px]
            [&>p]:font-normal
            [&>p]:leading-[28px]
            [&>p]:tracking-[-0.54px]
            [&>p]:text-gray-700

            [&>h2]:mt-8
            [&>h2]:mb-4
            [&>h2]:font-[Poppins]
            [&>h2]:text-xl
            [&>h2]:font-semibold
            [&>h2]:leading-8
            [&>h2]:text-gray-900

            [&>h3]:mt-6
            [&>h3]:mb-3
            [&>h3]:font-[Poppins]
            [&>h3]:text-lg
            [&>h3]:font-semibold
            [&>h3]:leading-7
            [&>h3]:text-gray-900

            [&>ul]:mb-5
            [&>ul]:list-disc
            [&>ul]:pl-5

            [&>ul>li]:mb-2
            [&>ul>li]:font-[Poppins]
            [&>ul>li]:text-[18px]
            [&>ul>li]:font-normal
            [&>ul>li]:leading-[28px]
            [&>ul>li]:tracking-[-0.54px]
            [&>ul>li]:text-gray-700

            [&>ol]:mb-5
            [&>ol]:list-decimal
            [&>ol]:pl-5

            [&>ol>li]:mb-2
            [&>ol>li]:font-[Poppins]
            [&>ol>li]:text-[18px]
            [&>ol>li]:font-normal
            [&>ol>li]:leading-[28px]
            [&>ol>li]:tracking-[-0.54px]
            [&>ol>li]:text-gray-700

            [&_strong]:font-semibold
            [&_a]:text-[#075BFF]
            [&_a]:hover:underline
          "
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        <div className="mt-10 border-t border-gray-200" />

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <span className="text-[13px] font-medium text-gray-700">
            Share this Event:
          </span>

          <div className="flex items-center gap-2">
            <a
              href="#"
              aria-label="Share on Facebook"
              className={socialButtonClass}
            >
              <svg
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            <a
              href="#"
              aria-label="Share on Instagram"
              className={socialButtonClass}
            >
              <svg
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.137-.882.3-1.857.344-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            <a
              href="#"
              aria-label="Share on TikTok"
              className={socialButtonClass}
            >
              <svg
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.63-1.07 5.25-2.87 7.21-1.78 1.95-4.32 3.19-6.99 3.25-2.73.07-5.54-.79-7.53-2.61-2.01-1.82-3.13-4.57-2.92-7.34.2-2.6 1.63-5.02 3.82-6.42 2.1-1.36 4.75-1.77 7.15-1.12v4.06c-1.32-.42-2.85-.29-4.04.51-1.12.75-1.78 2.06-1.74 3.41.04 1.34.78 2.61 1.91 3.28 1.13.68 2.58.8 3.83.33 1.25-.47 2.17-1.57 2.46-2.87.21-1.03.14-2.11.14-3.16V.02z" />
              </svg>
            </a>

            <a
              href="#"
              aria-label="Share on WhatsApp"
              className={socialButtonClass}
            >
              <svg
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.371.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}