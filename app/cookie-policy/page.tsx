import Link from "next/link";

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-[1280px] px-6 py-8 sm:px-8 lg:px-10">
        <h1 className="mb-6 text-[20px] font-bold text-[#172033]">
          Cookie Policy
        </h1>

        <div className="space-y-6">
            <section>
                <h2 className="mb-2 text-[14px] font-bold text-[#172033]"> 
                    1. What are Cookies?
                </h2>
                <p className="text-[11px] leading-5 text-[#526174]">
                    Cookies are small text files stored on your device when you visit websites. They help websites remember your preferences and improve your experience.
            </p>
            </section>

            <section>
            <h2 className="mb-2 text-[14px] font-bold text-[#172033]">
              2. Your Account
            </h2>
            <p className="text-[11px] leading-5 text-[#526174]">
            You are responsible for your account security. Keep credentials safe and notify us of unauthorized access.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}