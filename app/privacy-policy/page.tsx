import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-7xl px-4 py-12 md:px-12 lg:py-16">
        <h1 className="mb-10 text-[32px] font-bold text-gray-900 tracking-tight">
          Privacy Policy
        </h1>

        <div className="space-y-8">
          <section>
            <h2 className="mb-2 text-[20px] font-bold text-gray-900 tracking-tight">
              1. Overview
            </h2>
            <p className="text-[16px] leading-relaxed text-gray-500">
              We collect minimal data needed to provide our inventory management services. Your business data belongs to you and is protected with industry-standard security.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-[20px] font-bold text-gray-900 tracking-tight">
              2. Data We Collect
            </h2>
            <p className="text-[16px] leading-relaxed text-gray-500">
              Business information (inventory, sales, customers), account details, and technical data. We never sell your data to third parties.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-[20px] font-bold text-gray-900 tracking-tight">
              3. How We Use Data
            </h2>
            <p className="text-[16px] leading-relaxed text-gray-500">
              To provide and improve our services, process payments, send updates, and ensure security. We use anonymized data for analytics.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-[20px] font-bold text-gray-900 tracking-tight">
              4. Data Protection
            </h2>
            <p className="text-[16px] leading-relaxed text-gray-500">
              256-bit SSL encryption, regular security audits, and secure servers in Nepal. Daily backups ensure your data is always safe.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-[20px] font-bold text-gray-900 tracking-tight">
              5. Your Rights
            </h2>
            <p className="text-[16px] leading-relaxed text-gray-500">
              Access your data, request corrections, download your information, or delete your account. Contact us for any data requests.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-[20px] font-bold text-gray-900 tracking-tight">
              6. Contact Us
            </h2>
            <p className="text-[16px] leading-relaxed text-gray-500">
              For privacy questions or data requests, email privacy@stocknep.com. We respond within 48 hours.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}