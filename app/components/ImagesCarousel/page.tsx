"use client";

import { useEffect, useRef, useState } from "react";
import ImageList from "./ImagesList/page";
import MainImage from "./MainImage/page";

const ImageCarousel = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch("http://localhost:3001/images");
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.log("Some thing went wrong with getting the recipe:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchImage();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 10000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  if (loading) return <div className="m-auto">Loading...</div>;
  if (!images.length)
    return <div className="flex justify-center p-8">No images found</div>;

  return (
    <>
      <MainImage
        currentImage={images[currentIndex]}
        handlePrevious={handlePrevious}
        handleNext={handleNext}
      />
      <ImageList
        images={images}
        handleThumbnailClick={handleThumbnailClick}
        currentIndex={currentIndex}
      />
    </>
  );
};

export default ImageCarousel;
