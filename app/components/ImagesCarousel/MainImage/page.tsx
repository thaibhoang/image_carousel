"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MainImage = ({ currentImage, handlePrevious, handleNext }) => {
  return (
    <>
      <div className="relative mb-4 group">
        <div className="relative w-full aspect-[3/2] sm:aspect-[2/1] lg:aspect-[5/2] bg-gray-900 rounded-lg overflow-hidden">
          <Image
            src={currentImage.link}
            fill
            className="object-contain"
            priority
            alt="current image"
          />
        </div>

        <button
          onClick={handlePrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[120%] p-2 rounded-full bg-gray-300 hover:bg-gray-400 shadow-lg transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[120%] p-2 rounded-full bg-gray-300 hover:bg-gray-400 shadow-lg transition-colors"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </>
  );
};

export default MainImage;
