import Image from "next/image";
import Link from "next/link";
import { FaInstagram,FaTiktok, FaWhatsapp} from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";


export default function Footer() {
  return (
    <footer className="w-full px-13 py-12 bg-[#075BFF]  text-white">
      <div className="max-w-7xl mx-auto">

        {/* Main Footer */}
        <div className="flex flex-col lg:flex-row justify-between gap-10">

          {/* Left Div */}
          <div className="flex flex-col max-w-sm">

            {/* Logo */}
            <span><h1 className="font-bold  mb-4">Stock Nep</h1></span>
           

            {/* Description */}
            <p className="text-sm text-gray-200 leading-6">
             StockNep is a smart inventory management SaaS designed 
for businesses in Nepal. Track stock, manage sales, generate 
invoices, and grow faster with confidence.
            </p>

            {/* Heading */}
            <h1 className="text-xl font-semibold mt-6">
              Follow us
            </h1>

            {/* Social Media */}
            <div className="flex items-center gap-4 mt-4">
              <a href="#" className="hover:text-gray-300 transition">
                <FaFacebook size={20} />
              </a>

              <a href="#" className="hover:text-gray-300 transition">
                <FaInstagram size={20} />

              </a>

              <a href="#" className="hover:text-gray-300 transition">
                <FaTiktok size={20} />
              </a>

              <a href="#" className="hover:text-gray-300 transition">
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>

          {/* Right Div */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-10 md:gap-8">

            {/* Product */}
            <div>
              <h2 className="text-lg font-semibold mb-4">
                Product
              </h2>

              <ul className="flex flex-col gap-3 text-sm text-gray-200">
                <li>
                  <Link href="/feature" className="hover:text-white">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="pricing" className="hover:text-white">
                    Pricing
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Templates
                  </a>
                </li>
               
              </ul>
            </div>

            {/* Support */}
            <div>
              <h2 className="text-lg font-semibold mb-4">
                Support
              </h2>

              <ul className="flex flex-col gap-3 text-sm text-gray-200">
               
                <li>
                  <Link href="/faqs" className="hover:text-white">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/blogs" className="hover:text-white">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>


            {/* Legal */}
             <div>
              <h2 className="text-lg font-semibold mb-4">
                Legal
              </h2>

              <ul className="flex flex-col gap-3 text-sm text-gray-200">
                <li className="cursor-pointer">
                  <Link href={"/privacy-policy"} className="">
            Privacy Policy
            </Link>
                </li>
                <li>
                  <Link href={"/Term-of-service"} className="">
            Terms of Service
            </Link>
                </li>
                <li>
                   <Link href={"/cookie-policy"} className="">
            Cookies Policy
            </Link>
                </li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h2 className="text-lg font-semibold mb-4">
                Contact Us
              </h2>

              <ul className="flex flex-col gap-3 text-sm text-gray-200">
                <li>
                  <a href="mailto:hello@example.com" className="hover:text-white">
                    hello@example.com
                  </a>
                </li>
                <li>
                  <a href="tel:+9779800000000" className="hover:text-white">
                    +977 9800000000
                  </a>
                </li>
                <li>
                  Kathmandu, Nepal
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 mt-10 pt-6 flex  items-center justify-center font-semibold text-white ">
        <span> 
         © 2026 Sajilo Webs. All rights reserved. Powerd by Youth IT
        </span>
        </div>

      </div>
    </footer>
  );
}

