import Image from "next/image";
import React, { useState, useEffect } from "react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [numVisibleImages, setNumVisibleImages] = useState(1);
  const carouselItems = [
    "/b8.png",
    "/b6.png",
    "/b7.png",
    "/b1.jpg",
    "/b2.jpg",
    "/b3.jpg",
    "/b4.jpg",
  ];

  const handleClick = (index: React.SetStateAction<number>) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const calculateNumVisibleImages = () => {
      if (window.innerWidth >= 1024) {
        return 3;
      } else if (window.innerWidth >= 768) {
        return 2;
      } else {
        return 1;
      }
    };

    setNumVisibleImages(calculateNumVisibleImages());

    const handleResize = () => {
      setNumVisibleImages(calculateNumVisibleImages());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getTransformStyle = () => {
    return {
      transform: `translateX(-${(currentSlide * 100) / numVisibleImages}%)`,
    };
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden mt-4">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={getTransformStyle()}
      >
        {carouselItems.map((item, index) => (
          <div
            key={item}
            className={`flex-shrink-0 w-full md:w-1/2 lg:w-1/${numVisibleImages} px-4`}
          >
            <Image
              src={item}
              alt={`Slide ${index + 1}`}
              layout="responsive"
              width={1000}
              height={500}
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-2 inset-x-0 flex justify-center">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className={`h-2 w-2 mx-1 rounded-full ${
              index === currentSlide ? "bg-gray-900" : "bg-gray-200"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Hero;
