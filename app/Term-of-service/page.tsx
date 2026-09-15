
import Link from "next/link";

export default function TermOfServicePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-[1280px] px-6 py-8 sm:px-8 lg:px-10">
        <h1 className="mb-6 text-[20px] font-bold text-[#172033]">
          Term of Service
        </h1>

        <div className="space-y-6">
            <section>
                <h2 className="mb-2 text-[14px] font-bold text-[#172033]"> 
                    1. Agreement
                </h2>
                <p className="text-[11px] leading-5 text-[#526174]">
            By using StockNep, you agree to these terms. Read them carefully before using our platform.
            </p>
            </section>

            <section>
            <h2 className="mb-2 text-[14px] font-bold text-[#172033]">
              2. Your Account
            </h2>
            <p className="text-[11px] leading-5 text-[#526174]">
            You're responsible for your account security. Keep credentials safe and notify us of unauthorized access.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-[14px] font-bold text-[#172033]">
              3. Payment
            </h2>
            <p className="text-[11px] leading-5 text-[#526174]">
              Monthly/annual billing in Nepali Rupees. Cancel anytime. No hidden fees or lock-in contracts.
            </p>
          </section>

        <section>
            <h2 className="mb-2 text-[14px] font-bold text-[#172033]">
              4. Acceptable Use
            </h2>
            <p className="text-[11px] leading-5 text-[#526174]">
             Use for legitimate business only. No illegal activities, spamming, or platform abuse.
            </p>
          </section>


          <section>
            <h2 className="mb-2 text-[14px] font-bold text-[#172033]">
              5. Your Data
            </h2>
            <p className="text-[11px] leading-5 text-[#526174]">
              You own your business data. We protect it with security measures and never sell it to third parties.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-[14px] font-bold text-[#172033]">
              6. Liability
            </h2>
            <p className="text-[11px] leading-5 text-[#526174]">
             We are not liable for business decisions based on platform data. Maximum liability limited to fees paid.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}

