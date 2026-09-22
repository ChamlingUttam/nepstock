import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full bg-[#087ff5] text-white">
      <div className="mx-auto w-[90%] py-10 sm:py-12 lg:py-14">

        {/* Main Footer */}
        <div className="flex flex-col gap-12 lg:grid lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 xl:gap-12">

          {/* Left Section */}
          <div className="w-full">
            <h2 className="mb-6 text-xl font-semibold leading-7 tracking-tight sm:text-[22px]">
              StockNep
            </h2>

            <p className="w-full max-w-2xl text-base font-normal leading-7 tracking-[-0.03em] sm:text-lg">
              StockNep is a smart inventory management SaaS designed for
              businesses in Nepal. Track stock, manage sales, generate
              invoices, and grow faster with confidence.
            </p>

            {/* Social Media */}
            <div className="mt-7 flex items-center gap-2">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white transition hover:bg-white hover:text-[#087ff5]"
              >
                <FaFacebook className="text-lg sm:text-xl" />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white transition hover:bg-white hover:text-[#087ff5]"
              >
                <FaInstagram className="text-lg sm:text-xl" />
              </a>

              <a
                href="#"
                aria-label="TikTok"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white transition hover:bg-white hover:text-[#087ff5]"
              >
                <FaTiktok className="text-lg sm:text-xl" />
              </a>

              <a
                href="#"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white transition hover:bg-white hover:text-[#087ff5]"
              >
                <FaWhatsapp className="text-lg sm:text-xl" />
              </a>
            </div>
          </div>

          {/* Right Sections */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4 sm:gap-x-6 lg:gap-x-8">

            {/* Product */}
            <div>
              <h3 className="mb-5 text-sm font-medium uppercase leading-5 sm:text-base">
                Product
              </h3>

              <ul className="flex flex-col gap-4 text-sm leading-6">
                <li>
                  <Link
                    href="/feature"
                    className="transition-opacity hover:opacity-70"
                  >
                    Features
                  </Link>
                </li>

                <li>
                  <Link
                    href="/pricing"
                    className="transition-opacity hover:opacity-70"
                  >
                    Pricing
                  </Link>
                </li>

                <li>
                  <a
                    href="#"
                    className="transition-opacity hover:opacity-70"
                  >
                    Templates
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="mb-5 text-sm font-medium uppercase leading-5 sm:text-base">
                Support
              </h3>

              <ul className="flex flex-col gap-4 text-sm leading-6">
                <li>
                  <Link
                    href="/faqs"
                    className="transition-opacity hover:opacity-70"
                  >
                    FAQs
                  </Link>
                </li>

                <li>
                  <Link
                    href="/contact"
                    className="transition-opacity hover:opacity-70"
                  >
                    Contact
                  </Link>
                </li>

                <li>
                  <Link
                    href="/blog"
                    className="transition-opacity hover:opacity-70"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="mb-5 text-sm font-medium uppercase leading-5 sm:text-base">
                Legal
              </h3>

              <ul className="flex flex-col gap-4 text-sm leading-6">
                <li>
                  <Link
                    href="/privacy-policy"
                    className="transition-opacity hover:opacity-70"
                  >
                    Privacy Policy
                  </Link>
                </li>

                <li>
                  <Link
                    href="/Term-of-service"
                    className="transition-opacity hover:opacity-70"
                  >
                    Terms of Service
                  </Link>
                </li>

                <li>
                  <Link
                    href="/cookie-policy"
                    className="transition-opacity hover:opacity-70"
                  >
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="mb-5 text-sm font-medium uppercase leading-5 sm:text-base">
                Contact Us
              </h3>

              <ul className="flex flex-col gap-4 text-sm leading-6">

                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 shrink-0" strokeWidth={2} />

                  <a
                    href="mailto:hello@sajilows.com"
                    className="whitespace-nowrap transition-opacity hover:opacity-70"
                  >
                    hello@sajilows.com
                  </a>
                </li>

                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0" strokeWidth={2} />

                  <a
                    href="tel:9746888890"
                    className="whitespace-nowrap transition-opacity hover:opacity-70"
                  >
                    974-6888890
                  </a>
                </li>

                <li className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 shrink-0" strokeWidth={2} />

                  <span className="whitespace-nowrap">
                    Pragati Chowk, Itahari
                  </span>
                </li>

              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="mt-10 border-t border-white/70 pt-5 sm:mt-12 sm:pt-6">
          <p className="text-center text-xs font-semibold uppercase leading-5 tracking-tight sm:text-sm">
            © 2026 Sajilo Webs. All Rights Reserved. Powerd by Youth IT
          </p>
        </div>
      </div>
    </footer>
  );
}