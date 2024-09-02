"use client";

import React from "react";

const Blogpost = ({ posts }) => {
  return (
    <div>
      {posts.map(({ title, cover_image }, index) => {
        return (
          <div key={index}>
            <div>{title}</div>
            <img src={cover_image} alt="" />
          </div>
        );
      })}
    </div>

    // <div className="flex flex-col items-center justify-center mt-[100px]">
    //   <div className="w-[1216px] h-7 text-[#181a2a] text-2xl font-bold font-['Work Sans'] leading-7">
    //     All Blog Post
    //     <div>{title}</div>
    //   </div>
    //   {/* blog */}
    //   <div className="flex flex-wrap w-[1230px] justify-between gap-5 mb-[30px] mt-[40px]">
    //     <div className="w-[392px] h-[488px] p-4 bg-white rounded-xl border border-[#e8e8ea] flex-col justify-center items-center gap-4 inline-flex">
    //       <img className="w-[360px] h-60 rounded-md" src={cover_image} />
    //       <div className="self-stretch h-[200px] p-2 flex-col justify-start items-start gap-5 flex">
    //         <div className="self-stretch h-32 flex-col justify-start items-start gap-4 flex">
    //           <div className="px-2.5 py-1 bg-[#4b6bfb]/5 rounded-md justify-center items-center gap-1 inline-flex">
    //             <div className="text-[#4b6bfb] text-sm font-medium font-['Work Sans'] leading-tight">
    //               Technology
    //             </div>
    //           </div>
    //           <div className="self-stretch text-[#181a2a] text-2xl font-semibold font-['Work Sans'] leading-7">
    //             {title}
    //           </div>
    //         </div>
    //         <div className="justify-start items-center gap-5 inline-flex">
    //           <div className="justify-start items-center gap-3 flex">
    //             <img className="w-9 h-9 rounded-[28px]" src="/Profile.png" />
    //             <div className="text-[#97989f] text-base font-medium font-['Work Sans'] leading-normal">
    //               Ernie Smith
    //             </div>
    //           </div>
    //           <div className="text-[#97989f] text-base font-normal font-['Work Sans'] leading-normal">
    //             {/* {date.split("T")[0]} */}
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Blogpost;
