
import Link from "next/link";

export default function TermOfServicePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-7xl px-4 py-12 md:px-12 lg:py-16">
        <h1 className="mb-8 text-2xl md:text-3xl font-bold text-gray-900">
          Terms of Service
        </h1>

        <div className="space-y-8 text-gray-700">
            <section>
                <h2 className="mb-3 text-lg md:text-xl font-bold text-gray-900"> 
                    1. Agreement
                </h2>
                <p className="text-[15px] leading-relaxed text-gray-600">
            By using StockNep, you agree to these terms. Read them carefully before using our platform.
            </p>
            </section>

            <section>
            <h2 className="mb-3 text-lg md:text-xl font-bold text-gray-900">
              2. Your Account
            </h2>
            <p className="text-[15px] leading-relaxed text-gray-600">
            You're responsible for your account security. Keep credentials safe and notify us of unauthorized access.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg md:text-xl font-bold text-gray-900">
              3. Payment
            </h2>
            <p className="text-[15px] leading-relaxed text-gray-600">
              Monthly/annual billing in Nepali Rupees. Cancel anytime. No hidden fees or lock-in contracts.
            </p>
          </section>

        <section>
            <h2 className="mb-3 text-lg md:text-xl font-bold text-gray-900">
              4. Acceptable Use
            </h2>
            <p className="text-[15px] leading-relaxed text-gray-600">
             Use for legitimate business only. No illegal activities, spamming, or platform abuse.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg md:text-xl font-bold text-gray-900">
              5. Your Data
            </h2>
            <p className="text-[15px] leading-relaxed text-gray-600">
              You own your business data. We protect it with security measures and never sell it to third parties.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg md:text-xl font-bold text-gray-900">
              6. Liability
            </h2>
            <p className="text-[15px] leading-relaxed text-gray-600">
             We're not liable for business decisions based on platform data. Maximum liability limited to fees paid.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
