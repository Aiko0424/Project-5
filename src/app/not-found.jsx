import Image from "next/image";

export default async function Home() {
  return (
    <div className="flex items-center justify-center mt-[100px] mb-[130px]">
      <div className="w-[642px] h-52 justify-center items-center gap-10 flex">
        <div className="text-black text-7xl font-normal font-['Work Sans'] leading-[72px]">
          404
        </div>
        <hr className=" flex h-[200px] w-[1px] bg-gray-300 mt-[25px] items-center justify-center" />

        <div className="py-2 flex-col justify-end items-start gap-5 inline-flex">
          <div className="text-black text-2xl font-semibold font-['Work Sans'] leading-10">
            Page Not Found
          </div>
          <div className="w-[392px] text-[#696a75] text-lg font-normal font-['Work Sans'] leading-relaxed">
            We're sorry, This page is unknown or does not exist the page you are
            looking for.
          </div>
          <div className="px-4 py-2.5 bg-[#4b6bfb] rounded-md justify-center items-center inline-flex">
            <div className="text-center text-white text-sm font-medium font-['Work Sans'] leading-tight">
              Back To Home
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
