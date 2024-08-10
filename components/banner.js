"use client";

import React, { useState, useEffect, memo } from "react";
import Image from "next/image";

const Banner = ({ images, title, subtitle }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); // Muda a imagem a cada 6 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  const handleClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="relative">
      <Image
        src={images[currentImageIndex]}
        width={900}
        height={900}
        alt="imagem banner"
        className="w-full h-72 md:h-auto"
      />
      <div className="absolute bottom-0 left-0 right-0 md:top-28 top-5 p-6">
        <h1 className="text-center md:text-4xl sm:text-2xl text-xl text-white">{title}</h1>
        <p className="md:mt-8 mt-4 text-center text-xs md:text-sm text-white">
          {subtitle}
        </p>
        <div className="md:mt-12 mt-2 flex justify-center gap-3">
          {images.map((_, index) => (
            <span
              key={index}
              className={`cursor-pointer rounded-full p-1 md:p-2 ${index === currentImageIndex ? 'bg-maindark' : 'bg-grey3'}`}
              onClick={() => handleClick(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(Banner);
