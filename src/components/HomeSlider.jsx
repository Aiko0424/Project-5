import Image from "next/image";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";

export default function HomeSlider() {
  return (
    <div className="flex flex-col items-center justify-center mt-[100px]">
      <div className="flex">
        {/* slider section */}
        <div className="w-[1230px] h-[600px] relative">
          {/* зураг */}
          <div className="absolute inset-0 w-[1230px] h-[600px] rounded-xl bg-[url('/Hero-pic.jpeg')] bg-cover z-10	" />{" "}
          {/* Overlay */}
          <div className="absolute inset-0 w-[1230px] h-[600px] bg-black opacity-40 rounded-xl z-20"></div>{" "}
          {/* Баруун доод hero */}
          <div className="w-[598px] h-[252px] p-10 left-[11px] top-[335px] absolute bg-white rounded-xl shadow border border-[#e8e8ea] flex-col justify-start items-start gap-6 z-30">
            <div className="px-2.5 py-1 bg-[#4b6bfb] rounded-md justify-center items-center gap-1 inline-flex mb-2">
              <div className="text-white text-sm font-medium font-['Work Sans'] leading-tight">
                Technology
              </div>
            </div>

            <div className="self-stretch text-[#181a2a] text-4xl font-semibold font-['Work Sans'] leading-10 mb-6">
              Grid system for better Design User Interface
            </div>

            <div className="text-[#97989f] text-base font-normal font-['Work Sans'] leading-normal">
              August 20, 2022
            </div>
          </div>
        </div>
      </div>
      {/* slider button */}
      <div className="flex w-[1230px] mt-[11px] justify-end gap-[9px]">
        <div className="flex w-10 h-10 rounded-md border border-[#696a75] items-center justify-center">
          <BsChevronLeft className="" />
        </div>
        <div className="flex w-10 h-10 rounded-md border border-[#696a75] justify-center items-center">
          <BsChevronRight className="" />
        </div>
      </div>
    </div>
  );
}
