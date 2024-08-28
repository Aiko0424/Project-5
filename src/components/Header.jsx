"use client";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";

export const Header = () => {
  return (
    <header className="flex items-center justify-center">
      <div className="flex justify-between py-8 w-[1130px]">
        <img
          src="/Metablog-Logo.png"
          className="w-[138px] h-[36px]"
          alt="Metablog logo"
        />
        <div className="gap-10 flex items-center">
          <Link className="#3b" href="/">
            Home
          </Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
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
