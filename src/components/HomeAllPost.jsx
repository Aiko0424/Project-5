"use client";

import { useState } from "react";
import { Card } from "./Card";
import Link from "next/link";

export const HomeAllpost = ({ posts }) => {
  const [sliceCount, setSliceCount] = useState(9);

  return (
    <div className="flex flex-col items-center justify-center mt-[100px]">
      <div className="flex-col justify-start items-center gap-8 inline-flex">
        {/* All blog header */}
        <div className="self-stretch h-[85px] flex-col justify-start items-start gap-8 flex">
          <div className="w-[184px] text-[#181a2a] text-2xl font-bold font-['Work Sans'] leading-7">
            All Blog Post
          </div>
          <div className="w-[1216px] justify-start items-center gap-[30px] inline-flex">
            <div className="justify-start items-center gap-5 flex">
              <div className="text-[#495057] hover:text-[#d4a373] cursor-pointer text-xs font-bold font-['Work Sans'] leading-[25px]">
                All
              </div>
              <div className="text-[#495057] hover:text-[#d4a373] cursor-pointer text-xs font-bold font-['Work Sans'] leading-[25px]">
                Design
              </div>
              <div className="text-[#495057] hover:text-[#d4a373] cursor-pointer text-xs font-bold font-['Work Sans'] leading-[25px]">
                Travel
              </div>
              <div className="text-[#495057] hover:text-[#d4a373] cursor-pointer text-xs font-bold font-['Work Sans'] leading-[25px]">
                Fashion
              </div>
              <div className="text-[#495057] hover:text-[#d4a373] cursor-pointer text-xs font-bold font-['Work Sans'] leading-[25px]">
                Technology
              </div>
              <div className="text-[#495057] hover:text-[#d4a373] cursor-pointer text-xs font-bold font-['Work Sans'] leading-[25px]">
                Branding
              </div>
            </div>

            <Link
              href="/blog"
              className="grow shrink basis-0 text-right text-[#495057] hover:text-[#d4a373] cursor-pointer text-xs font-bold font-['Work Sans'] leading-[25px]"
            >
              View All
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap w-[1230px] justify-between gap-5 mb-[30px]">
          {posts.slice(0, sliceCount).map((el, index) => (
            <Link href={`single/${el.id}`}>
              <Card
                key={index}
                title={el.title}
                date={el.published_at}
                img={el.cover_image}
              />
            </Link>
          ))}
        </div>
      </div>

      {/* button */}
      <div
        onClick={() => setSliceCount((prev) => prev + 3)}
        className={`h-12 px-5 py-3 rounded-md border border-[#696a75]/30 justify-center items-center gap-3 inline-flex mb-[100px] cursor-pointer bg-transparent text-[#696a75] hover:bg-gray-500 hover:text-white ${
          sliceCount >= posts.length && "hidden"
        }`}
      >
        <div className="text-base font-medium font-['Work Sans'] leading-normal">
          Load More
        </div>
      </div>
    </div>
  );
};
