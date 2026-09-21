"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Features", href: "/feature" },
  { name: "Pricing", href: "/pricing" },
  { name: "About Us", href: "/about" },
  { name: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="mt-3 h-[70px] w-full px-4 sm:px-6 md:mt-5 md:px-8 lg:px-[62px]">
      <div className="relative flex h-full w-full items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            <Image
              src="/Logo.png"
              alt="Stock Nep logo"
              width={80}
              height={40}
              className="h-9 w-auto sm:h-10"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 md:block">
          <ul className="flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="cursor-pointer whitespace-nowrap text-base font-normal leading-7 tracking-[-0.03em] text-[#475569] transition-colors hover:text-gray-400 lg:text-[18px]"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Buttons */}
        <div className="ml-auto hidden items-center gap-3 md:flex">
          <Link href="/login">
            <Button
              variant="ghost"
              className="h-auto cursor-pointer border border-gray-200 bg-white px-4 py-3 text-sm font-semibold uppercase leading-4 tracking-[-0.01em] text-[#475569] hover:bg-white hover:text-[#475569] lg:text-base"
            >
              LOG IN
            </Button>
          </Link>

          <Link href="/get-started">
            <Button className="h-auto cursor-pointer bg-[#007BFF] px-4 py-3 text-sm font-semibold uppercase leading-4 tracking-[-0.01em] text-white hover:bg-[#085bb4] lg:px-5 lg:text-base">
              START FREE TRIAL
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex cursor-pointer items-center justify-center rounded-md p-2 text-[#475569] md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="relative z-50 mt-2 w-full rounded-xl border border-gray-100 bg-white p-4 shadow-lg md:hidden">
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-normal text-[#475569] transition-colors hover:bg-gray-50"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-3 flex flex-col gap-3 border-t border-gray-100 pt-4">
            <Link href="/login" onClick={() => setMenuOpen(false)}>
              <Button
                variant="ghost"
                className="w-full cursor-pointer border border-gray-200 bg-white py-3 text-sm font-semibold uppercase text-[#475569] hover:bg-white hover:text-[#475569]"
              >
                LOG IN
              </Button>
            </Link>

            <Link href="/get-started" onClick={() => setMenuOpen(false)}>
              <Button className="w-full cursor-pointer bg-[#007BFF] py-3 text-sm font-semibold uppercase text-white hover:bg-[#085bb4]">
                START FREE TRIAL
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}