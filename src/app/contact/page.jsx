import Link from "next/link";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-[114px] mb-[66px]">
      {/* Contact us */}
      <div className="h-[163px] flex-col justify-start items-start gap-5 flex mb-[20px]">
        <div className="text-black text-4xl font-semibold font-['Work Sans'] leading-10">
          Contact Us
        </div>
        <div className="w-[624px] h-[103px] text-[#696a75] text-base font-normal font-['Plus Jakarta Sans'] leading-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam
        </div>
      </div>

      {/* Info */}
      <div className="h-[153px] py-2.5 justify-start items-center gap-[50px] inline-flex mb-[40px]">
        <div className="w-[294px] h-[133px] p-4 rounded-xl border border-[#e8e8ea] flex-col justify-start items-start gap-2.5 inline-flex">
          <div className="text-black text-2xl font-semibold font-['Work Sans'] leading-10">
            Address
          </div>
          <div className="w-[260px] text-[#696a75] text-lg font-normal font-['Work Sans'] leading-relaxed">
            1328 Oak Ridge Drive, Saint Louis, Missouri
          </div>
        </div>
        <div className="w-[294px] h-[133px] p-4 rounded-xl border border-[#e8e8ea] flex-col justify-start items-start gap-2.5 inline-flex">
          <div className="text-black text-2xl font-semibold font-['Work Sans'] leading-10">
            Contact
          </div>
          <div className="w-40 text-[#696a75] text-lg font-normal font-['Work Sans'] leading-relaxed">
            313-332-8662
            <br />
            info@email.com
          </div>
        </div>
      </div>
      {/* Contact Form */}
      <div className="w-[643px] h-[440px] pl-[35px] pr-[130px] pt-[29px] pb-[26px] bg-[#f6f6f7] rounded-[10px] justify-start items-center inline-flex">
        <div className="h-[385px] flex-col justify-start items-start gap-6 inline-flex">
          <div className="text-black text-lg font-semibold font-['Work Sans'] leading-relaxed">
            Leave a Message
          </div>
          {/* Form */}
          <div className="w-[478px] pb-[18px] justify-center items-start flex flex-col gap-[20px]">
            <div className="flex gap-7 items-start w-[478px]">
              <input
                type="text"
                className="outline-none bg-white p-2 border-solid border-2 rounded-md text-[#97989f] w-[210px] focus:ring-blue-500"
                placeholder="Your name"
              />
              <input
                type="text"
                className="outline-none bg-white p-2 border-solid border-2 rounded-md text-[#97989f] w-[210px] focus:ring-blue-500"
                placeholder="Your email"
              />
            </div>
            <div className="flex items-start justify-start w-[478px]">
              <input
                type="text"
                className="outline-none bg-white p-2 border-solid border-2 rounded-md w-[448px] text-[#97989f] focus:ring-blue-500"
                placeholder="Subject"
              />
            </div>
            <div className="flex items-start justify-start w-[478px]">
              <textarea
                className="outline-none bg-white p-2 border-solid border-2 rounded-md w-[448px] h-[134px] text-[#97989f] focus:ring-blue-500 resize-none"
                placeholder="Write a message"
              ></textarea>
            </div>

            {/* Send message */}
            <div className="h-10 px-4 py-2.5 bg-[#4b6bfb] rounded-md flex-col justify-center items-center inline-flex mt-[9px] cursor-pointer">
              <div className="text-center text-white text-sm font-medium font-['Work Sans'] leading-tight">
                Send Message
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
