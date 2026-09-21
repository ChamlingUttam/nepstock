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
    <nav className="mt-5 h-[70px] w-full px-[60px]">
      <div className="relative flex h-full w-full items-center justify-between">

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

        {/* Navigation */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="cursor-pointer whitespace-nowrap text-[18px] font-normal leading-7 tracking-[-0.03em] text-[#475569] transition-colors hover:text-gray-400"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Buttons */}
        <div className="ml-auto flex items-center gap-3">
          <Link href="/login">
            <Button
              variant="ghost"
              className="h-auto cursor-pointer border border-gray-200 bg-white px-4 py-3 text-[16px] font-semibold uppercase leading-4 tracking-[-0.01em] text-[#475569] hover:bg-white hover:text-[#475569]"
            >
              LOG IN
            </Button>
          </Link>

          <Link href="/get-started">
            <Button
              className="h-auto cursor-pointer bg-[#007BFF] px-5 py-3 text-[16px] font-semibold uppercase leading-4 tracking-[-0.01em] text-white hover:bg-[#085bb4]"
            >
              START FREE TRIAL
            </Button>
          </Link>
        </div>

      </div>
    </nav>
  );
}