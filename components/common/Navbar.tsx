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
    <nav className="mt-5 h-[70px] w-full px-4 md:px-12">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/Logo.png"
              alt="Stock Nep logo"
              width={80}
              height={40}
              className="h-10 w-20"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <div>
          <ul className="flex items-center gap-2.5 text-[18px] font-normal leading-7 tracking-[-0.03em] md:gap-4 lg:gap-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="cursor-pointer text-[#475569] transition-colors hover:text-gray-400"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <Link href="/login">
            <Button
              variant="ghost"
              className="cursor-pointer border border-gray-100 font-semibold text-black outline"
            >
              LOG IN
            </Button>
          </Link>

          <Link href="/get-started">
            <Button className="cursor-pointer bg-[#007BFF] font-bold text-white hover:bg-[#085bb4]">
              START FREE TRIAL
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}