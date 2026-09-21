import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full bg-[#007BFF] px-[62px] py-12 text-white">
      <div className="w-full">

        {/* Main Footer */}
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">

          {/* Left Section */}
          <div className="max-w-[560px]">
            <h1 className="mb-7 text-[22px] font-semibold leading-7 tracking-[-0.03em]">
              Stock Nep
            </h1>

            <p className="max-w-[560px] text-[20px] font-normal leading-[31px] tracking-[-0.03em]">
              StockNep is a smart inventory management SaaS designed for
              businesses in Nepal. Track stock, manage sales, generate
              invoices, and grow faster with confidence.
            </p>

            {/* Social Media */}
            <div className="mt-7 flex items-center gap-2">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white transition hover:bg-white hover:text-[#007BFF]"
              >
                <FaFacebook size={21} />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white transition hover:bg-white hover:text-[#007BFF]"
              >
                <FaInstagram size={21} />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white transition hover:bg-white hover:text-[#007BFF]"
              >
                <FaTiktok size={21} />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white transition hover:bg-white hover:text-[#007BFF]"
              >
                <FaWhatsapp size={21} />
              </a>
            </div>
          </div>

          {/* Right Sections */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-10 sm:grid-cols-4 lg:min-w-[650px] lg:gap-x-16">

            {/* Product */}
            <div>
              <h2 className="mb-5 text-[16px] font-medium uppercase leading-5 tracking-[-0.02em]">
                Product
              </h2>

              <ul className="flex flex-col gap-4 text-[14px] font-normal leading-[22px] tracking-[-0.03em] text-[#F1F5F9]">
                <li>
                  <Link href="/feature" className="transition hover:opacity-70">
                    Features
                  </Link>
                </li>

                <li>
                  <Link href="/pricing" className="transition hover:opacity-70">
                    Pricing
                  </Link>
                </li>

                <li>
                  <a href="#" className="transition hover:opacity-70">
                    Templates
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h2 className="mb-5 text-[16px] font-medium uppercase leading-5 tracking-[-0.02em]">
                Support
              </h2>

              <ul className="flex flex-col gap-4 text-[14px] font-normal leading-[22px] tracking-[-0.03em] text-[#F1F5F9]">
                <li>
                  <Link href="/faqs" className="transition hover:opacity-70">
                    FAQs
                  </Link>
                </li>

                <li>
                  <Link href="/contact" className="transition hover:opacity-70">
                    Contact
                  </Link>
                </li>

                <li>
                  <Link href="/blog" className="transition hover:opacity-70">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h2 className="mb-5 text-[16px] font-medium uppercase leading-5 tracking-[-0.02em]">
                Legal
              </h2>

              <ul className="flex flex-col gap-4 text-[14px] font-normal leading-[22px] tracking-[-0.03em] text-[#F1F5F9]">
                <li>
                  <Link
                    href="/privacy-policy"
                    className="transition hover:opacity-70"
                  >
                    Privacy Policy
                  </Link>
                </li>

                <li>
                  <Link
                    href="/Term-of-service"
                    className="transition hover:opacity-70"
                  >
                    Terms of Service
                  </Link>
                </li>

                <li>
                  <Link
                    href="/cookie-policy"
                    className="transition hover:opacity-70"
                  >
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h2 className="mb-5 text-[16px] font-medium uppercase leading-5 tracking-[-0.02em]">
                Contact
              </h2>

              <ul className="flex flex-col gap-4 text-[14px] font-normal leading-[22px] tracking-[-0.03em] text-[#F1F5F9]">

                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 shrink-0" strokeWidth={2} />

                  <a
                    href="mailto:hello@example.com"
                    className="transition hover:opacity-70"
                  >
                    hello@example.com
                  </a>
                </li>

                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0" strokeWidth={2} />

                  <a
                    href="tel:+9779800000000"
                    className="transition hover:opacity-70"
                  >
                    +977 9800000000
                  </a>
                </li>

                <li className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 shrink-0" strokeWidth={2} />

                  <span>Kathmandu, Nepal</span>
                </li>

              </ul>
            </div>

          </div>
        </div>

        {/* Bottom */}
        <div className="mt-9 border-t border-white/40 pt-5">
          <p className="text-center text-[16px] font-medium uppercase leading-5 tracking-[-0.02em]">
            © 2026 Sajilo Webs. All Rights Reserved. Powered by Youth IT
          </p>
        </div>

      </div>
    </footer>
  );
}