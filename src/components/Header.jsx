"use client";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";

export const Header = () => {
  return (
    <header className="flex items-center justify-center">
      <div className="flex justify-between py-8 w-[1130px]">
        <Link href="/">
          <img
            src="/Metablog-Logo.png"
            className="w-[138px] h-[36px] cursor-pointer"
            alt="Metablog logo"
          />
        </Link>
        <div className="gap-10 flex items-center">
          <Link className="hover:text-[#d4a373]" href="/">
            Home
          </Link>
          <Link className="hover:text-[#d4a373]" href="/blog">
            Blog
          </Link>
          <Link className="hover:text-[#d4a373]" href="/contact">
            Contact
          </Link>
        </div>

        <div className="relative h-[36px] flex items-center justify-center bg-[#F4F4F5] p-2 rounded-[5px]">
          <input
            type="text"
            className="outline-none bg-transparent focus:ring-blue-500"
            placeholder="Search"
          />
          <IoSearch className="text-[#52525B]" />
        </div>
      </div>
    </header>
  );
};
