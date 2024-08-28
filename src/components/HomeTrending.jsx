import Image from "next/image";

export default function HomeTrending() {
  return (
    <div className="flex items-center justify-center mt-[100px]">
      {/* Trending title */}
      <div className="w-[1230px] h-[390px] flex-col justify-start items-start flex">
        <div className="w-[184px] text-[#181a2a] text-2xl font-bold font-['Work Sans'] leading-7 mb-[30px]">
          Trending
        </div>

        {/* Trending blogs */}
        <div className="flex w-[1232px] gap-5 justify-between">
          {/* Trending blog 1 */}
          <div className="relative w-[289px] h-[320px] rounded-xl">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-40 rounded-xl z-20"></div>{" "}
            {/* Background Image */}
            <div className="absolute inset-0 bg-[url('/Trending-1.png')] bg-cover rounded-xl z-10"></div>{" "}
            {/* Blog Info */}
            <div className="absolute w-[230px] left-[28px] bottom-[28px] h-[120px] flex flex-col justify-start items-start gap-4 z-30">
              <div className="px-2.5 py-1 bg-[#4b6bfb] rounded-md flex justify-center items-center gap-1">
                <div className="text-white text-xs font-medium font-['Work Sans'] leading-tight">
                  Technology
                </div>
              </div>
              <div className="w-[230px] h-[76px] text-white text-lg font-semibold font-['Work Sans'] leading-7">
                The Impact of Technology on the Workplace: How Technology is
                Changing
              </div>
            </div>
          </div>
          {/* Trending blog 2 */}
          <div className="relative w-[289px] h-[320px] rounded-xl">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-40 rounded-xl z-20"></div>{" "}
            {/* Background Image */}
            <div className="absolute inset-0 bg-[url('/Trending-2.png')] bg-cover rounded-xl z-10"></div>{" "}
            {/* Blog Info */}
            <div className="absolute w-[230px] left-[28px] bottom-[28px] h-[120px] flex flex-col justify-start items-start gap-4 z-30">
              <div className="px-2.5 py-1 bg-[#4b6bfb] rounded-md flex justify-center items-center gap-1">
                <div className="text-white text-xs font-medium font-['Work Sans'] leading-tight">
                  Technology
                </div>
              </div>
              <div className="w-[230px] h-[76px] text-white text-lg font-semibold font-['Work Sans'] leading-7">
                The Impact of Technology on the Workplace: How Technology is
                Changing
              </div>
            </div>
          </div>
          {/* Trending blog 3 */}
          <div className="relative w-[289px] h-[320px] rounded-xl">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-40 rounded-xl z-20"></div>{" "}
            {/* Background Image */}
            <div className="absolute inset-0 bg-[url('/Trending-3.png')] bg-cover rounded-xl z-10"></div>{" "}
            {/* Blog Info */}
            <div className="absolute w-[230px] left-[28px] bottom-[28px] h-[120px] flex flex-col justify-start items-start gap-4 z-30">
              <div className="px-2.5 py-1 bg-[#4b6bfb] rounded-md flex justify-center items-center gap-1">
                <div className="text-white text-xs font-medium font-['Work Sans'] leading-tight">
                  Technology
                </div>
              </div>
              <div className="w-[230px] h-[76px] text-white text-lg font-semibold font-['Work Sans'] leading-7">
                The Impact of Technology on the Workplace: How Technology is
                Changing
              </div>
            </div>
          </div>
          {/* Trending blog 4 */}
          <div className="relative w-[289px] h-[320px] rounded-xl">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-40 rounded-xl z-20"></div>{" "}
            {/* Background Image */}
            <div className="absolute inset-0 bg-[url('/Trending-4.png')] bg-cover rounded-xl z-10"></div>{" "}
            {/* Blog Info */}
            <div className="absolute w-[230px] left-[28px] bottom-[28px] h-[120px] flex flex-col justify-start items-start gap-4 z-30">
              <div className="px-2.5 py-1 bg-[#4b6bfb] rounded-md flex justify-center items-center gap-1">
                <div className="text-white text-xs font-medium font-['Work Sans'] leading-tight">
                  Technology
                </div>
              </div>
              <div className="w-[230px] h-[76px] text-white text-lg font-semibold font-['Work Sans'] leading-7">
                The Impact of Technology on the Workplace: How Technology is
                Changing
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
