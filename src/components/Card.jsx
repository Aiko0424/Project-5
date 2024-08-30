"use client";

export const Card = ({ title, date, img }) => {
  return (
    <div className="justify-start items-start gap-5">
      <div className="w-[392px] p-4 bg-white rounded-xl border border-[#e8e8ea] flex-col justify-center items-center gap-4">
        <img className="w-[360px] h-60 rounded-md" src={img} alt="Blog" />
        <div className="self-stretch h-[188px] p-2 flex-col justify-start items-start gap-5 flex">
          <div className="self-stretch h-32 flex-col justify-start items-start gap-4 flex">
            <div className="px-2.5 py-1 bg-[#4b6bfb]/5 rounded-md justify-center items-center gap-1 inline-flex mt-[10px]">
              <div className="text-[#4b6bfb] text-sm font-medium font-['Work Sans'] leading-tight">
                Technology
              </div>
            </div>
            <div className="self-stretch text-[#181a2a] text-2xl font-semibold font-['Work Sans'] leading-7">
              {title}
            </div>
          </div>
          <div className="justify-start items-center gap-5 inline-flex">
            <div className="text-[#97989f] text-base font-normal font-['Work Sans'] leading-normal">
              {date.split("T")[0]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
