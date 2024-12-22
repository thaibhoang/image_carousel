"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const ImageList = ({ images, handleThumbnailClick, currentIndex }) => {
  const scrollContainerRef = useRef(null);
  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const thumbnail = container.children[currentIndex];

      if (thumbnail) {
        const containerWidth = container.offsetWidth;
        const thumbnailWidth = thumbnail.offsetWidth;
        const thumbnailLeft = thumbnail.offsetLeft;

        // Calculate the desired scroll position to center the thumbnail
        const scrollTo = thumbnailLeft - containerWidth / 2;

        // Smooth scroll to the calculated position
        container.scrollTo({
          left: scrollTo,
          behavior: "smooth",
        });
      }
    }
  }, [currentIndex]);

  return (
    <>
      <div
        className="flex gap-2 overflow-x-hidden pb-4 scroll-smooth"
        ref={scrollContainerRef}
      >
        {images.map((image, index) => {
          return (
            <button
              key={image.id}
              onClick={() => handleThumbnailClick(index)}
              className={`relative w-40 h-40 flex-shrink-0 flex items-center justify-center bg-gray-800 flex-grow transition-all ${
                currentIndex === index
                  ? "border border-1 border-solid border-white"
                  : "opacity-70 hover:opacity-100"
              }`}
            >
              <Image
                src={image.link}
                alt={"image_" + image.id}
                fill
                className="object-cover"
              />
            </button>
          );
        })}
      </div>
    </>
  );
};

export default ImageList;
