"use client"; // Add this line at the top

import { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const slides = [
  {
    id: 1,
    image: "/Hero-pic.jpeg",
    category: "Technology",
    title: "Grid system for better Design User Interface",
    date: "August 20, 2022",
  },
  {
    id: 2,
    image:
      "https://www.adorama.com/alc/wp-content/uploads/2020/10/abstract-photography-design-feature.jpg",
    category: "Abstract",
    title: "Abstract Facebook Cover",
    date: "September 20, 2021",
  },
  {
    id: 3,
    image: "https://www.trendycovers.com/covers/1322932923.jpg",
    category: "Soulmate",
    title: "Is soulmate concept real? ",
    date: "October 40, 2017",
  },
  // Add more slides here as needed
];

export default function HomeSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const { image, category, title, date } = slides[currentIndex];

  return (
    <div className="flex flex-col items-center justify-center mt-[100px]">
      <div className="relative w-[1230px] h-[600px]">
        {/* Image */}
        <div
          className="absolute inset-0 w-full h-full rounded-xl bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 w-full h-full bg-black opacity-40 rounded-xl"></div>
        {/* Content */}
        <div className="absolute w-[598px] h-[252px] p-10 left-[11px] top-[335px] bg-white rounded-xl shadow border border-[#e8e8ea] flex flex-col justify-start items-start gap-2 z-30">
          <div className="px-2.5 py-1 bg-[#4b6bfb] rounded-md mb-2">
            <div className="text-white text-sm font-medium font-['Work Sans'] leading-tight">
              {category}
            </div>
          </div>
          <div className="self-stretch text-[#181a2a] text-4xl font-semibold font-['Work Sans'] leading-10 mb-6">
            {title}
          </div>
          <div className="text-[#97989f] text-base font-normal font-['Work Sans'] leading-normal">
            {date}
          </div>
        </div>
      </div>
      {/* Slider buttons */}
      <div className="flex w-[1230px] mt-[11px] justify-end gap-[9px]">
        <button
          onClick={handlePrevClick}
          className="flex w-10 h-10 rounded-md border border-[#696a75] items-center justify-center"
        >
          <BsChevronLeft />
        </button>
        <button
          onClick={handleNextClick}
          className="flex w-10 h-10 rounded-md border border-[#696a75] items-center justify-center"
        >
          <BsChevronRight />
        </button>
      </div>
    </div>
  );
}
