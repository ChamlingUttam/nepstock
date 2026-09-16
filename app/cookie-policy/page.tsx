
import Link from "next/link";

export default function CookiePolicyPage(){
    return(
        <main className="min-h-screen bg-white">
            <section className="mx-auto max-w-7xl px-4 py-12 md:px-12 lg:py-16">
        <h1 className="mb-8 text-2xl md:text-3xl font-bold text-gray-900">
          Cookie Policy
        </h1>

        <div className="space-y-8 text-gray-700">
          <section>
            <h2 className="mb-3 text-lg md:text-xl font-bold text-gray-900">
              1. What are Cookies?
            </h2>
            <p className="text-[15px] leading-relaxed text-gray-600">
                Cookies are small text files stored on your device when you visit websites. They help websites remember your preferences and improve your experience.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg md:text-xl font-bold text-gray-900">
              2. How We Cookies?
            </h2>
            <p className="text-[15px] leading-relaxed text-gray-600">
                We use cookies to keep you logged in, remember your settings, understand how you use StockNep, and improve our platform's performance.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg md:text-xl font-bold text-gray-900">
              3. Type of Cookies we use
            </h2>
            <p className="text-[15px] leading-relaxed text-gray-600">
                Essential cookies (required for platform to work), functional cookies (remember preferences), and analytics cookies (help us improve).
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg md:text-xl font-bold text-gray-900">
              4. Controlling Cookies
            </h2>
            <p className="text-[15px] leading-relaxed text-gray-600">
                You can control cookies through your browser settings. Disabling essential cookies may affect StockNep's functionality.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg md:text-xl font-bold text-gray-900">
              5. Third-party Cookies
            </h2>
            <p className="text-[15px] leading-relaxed text-gray-600">
                We use trusted third-party services (like analytics) that may place cookies. We don't control these directly.
            </p>
        </section>


        <section>
            <h2 className="mb-3 text-lg md:text-xl font-bold text-gray-900">
              6. Policy Updates
            </h2>
            <p className="text-[15px] leading-relaxed text-gray-600">
                We'll update this policy as needed. Continued use of StockNep means you accept any updated cookie policy.
            </p>
        </section>
    
        </div>
        </section>
        </main>
    )
}