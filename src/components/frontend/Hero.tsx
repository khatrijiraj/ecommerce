// Hero.tsx

import Image from "next/image";
import React, { useState, useEffect } from "react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselItems = [
    "/b8.png",
    "/b6.png",
    "/b7.png",
    "/b1.jpg",
    "/b2.jpg",
    "/b3.jpg",
    "/b4.jpg",
  ];

  const handleClick = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(
        currentSlide === carouselItems.length - 1 ? 0 : currentSlide + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide, carouselItems.length]);

  return (
    <div className="mx-10 mt-4 relative md:w-auto  w-[400px] max-h-[500px] overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 25.1}%)` }}>
        {carouselItems.map((item, index) => (
          <div key={index} className="mx-2 w-[500px] max-h-[500px] flex-none">
            <Image
              src={item}
              alt={`Slide ${index + 1}`}
              width={500}
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
            }`}></button>
        ))}
      </div>
    </div>
  );
};

export default Hero;
