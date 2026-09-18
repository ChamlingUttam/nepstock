

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Navbar() {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="mt-5 w-full px-4 sticky top-0 bg-white z-50 text-text-gray-400 md:px-12">
      <div className="mx-auto flex max-w-7xl items-center justify-between py-4">

        {/* Logo */}
        <div className=" flex items-center">
          <Link href="/">
          <Image
  src="/Logo.png"
  alt="Logo"
  width={100}
  height={45}
  className="h-auto w-24"
/>
          </Link>
        </div>

        {/* Nav links */}
        <div>
          <ul className="flex cursor-pointer  items-center gap-2.5 text-md font-medium md:gap-4 lg:gap-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="transition-colors text-black hover:text-gray-400"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Buttons - hidden on mobile */}
        <div className="hidden items-center gap-3 md:flex">
          {/* <Link href="/login"> */}
            <Button variant="ghost" className="cursor-pointer text-black outline font-semibold border border-gray-100">
              LOG IN
            </Button>
          {/* </Link> */}

          {/* <Link href="/get-started"> */}
            <Button className="cursor-pointer text-white font-bold bg-[#007BFF] hover:bg-[#085bb4]">
              START FREE TRIAL
            </Button>
          {/* </Link> */}
        </div>

      </div>
    </nav>
  );
}