"use client";

import { useState } from "react";
import Link from "next/link";
import { Blogpost } from "./BlogCard";

export const BlogAllPost = ({ posts }) => {
  const [sliceCount, setSliceCount] = useState(9);

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Header */}
      <div className="w-[1216px] h-7 text-[#181a2a] text-2xl font-bold font-['Work Sans'] leading-7 mb-[20px]">
        All Blog Post
      </div>

      {/* All blog */}
      <div className="flex flex-wrap w-[1230px] justify-between gap-5 mb-[30px]">
        {posts.slice(0, sliceCount).map((el, index) => (
          <Link href={`single/${el.id}`}>
            <Blogpost
              key={index}
              title={el.title}
              date={el.published_at}
              img={el.cover_image}
            />
          </Link>
        ))}
      </div>

      {/* Load More button */}
      {sliceCount < posts.length && (
        <div
          onClick={() => setSliceCount((prev) => prev + 3)}
          className="h-12 px-5 py-3 rounded-md border border-[#696a75]/30 justify-center items-center gap-3 inline-flex mb-[100px] cursor-pointer bg-transparent text-[#696a75] hover:bg-gray-500 hover:text-white"
        >
          <div className="text-base font-medium font-['Work Sans'] leading-normal">
            Load More
          </div>
        </div>
      )}
    </div>
  );
};
