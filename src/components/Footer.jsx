"use client";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="flex flex-col w-screen h-[495px] bg-[#F6F6F7] justify-center items-center">
      <div className="flex items-center w-[1215px] h-[236px] gap-y-5">
        {/* About */}
        <div className="flex items-center w-[289px] h-[236px]">
          <div className="">
            <div className="text-[#181a2a] text-lg font-semibold font-sans leading-7 mb-3">
              About
            </div>
            <div className="w-[280px] text-[#696a75] text-base font-normal font-sans leading-normal mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </div>
            <div className="">
              <span className="text-[#3B3C4A] text-base font-normal font-sans leading-normal">
                Email: info@jstemplate.net
              </span>
              <br />
              <span className="text-[#3B3C4A] text-base font-normal font-sans leading-normal">
                Phone: 880 123 456 789
              </span>
            </div>
          </div>
        </div>

        {/* Pages */}
        <div className="flex justify-center text-sm items-start h-[236px] w-[521px] mr-5">
          <div className="flex flex-col gap-2">
            <span className="text-[#3b3c4a]">Home</span>
            <span className="text-[#3b3c4a]">Blog</span>
            <span className="text-[#3b3c4a]">Contact</span>
          </div>
        </div>

        {/* Icons */}
        <div className="flex gap-[26px] justify-center items-start h-[236px]">
          <img src="/Facebook-icon.png" className="w-4 h-4" alt="" />
          <img src="Twitter-icon.png" className="w-4 h-4" alt="" />
          <img src="Instagram-icon.png" className="w-4 h-4" alt="" />
          <img src="Linkedin-icon.png" className="w-4 h-4" alt="" />
        </div>
      </div>

      {/* Line */}
      <hr className="h-[2px] w-[1215px] bg-gray-300 mt-[25px]" />

      {/* Line */}
      <div className="flex justify-between items-center w-[1215px] py-5">
        <img src="/Copyright-logo.png" className="w-[231px] h-[54px]" alt="" />
        <div className="flex gap-4">
          <span className="flex items-center text-base justify-center text-[#3B3C4A]">
            Terms of Use
          </span>
          <hr className="w-[1px] h-[24px] bg-gray-300 flex items-center justify-center" />
          <span className="flex items-center text-base justify-center text-[#3B3C4A]">
            Privacy Policy
          </span>
          <hr className="w-[1px] h-[24px] text-base bg-gray-300 flex items-center justify-center" />
          <span className="flex items-center justify-center text-[#3B3C4A]">
            Cookie Policy
          </span>
        </div>
      </div>
    </footer>
  );
};
