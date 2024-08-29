"use client";

import React, { useState, useEffect, memo } from "react";
import Image from "next/image";

const Banner = ({ slides }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handleClick = (index) => {
    setCurrentSlideIndex(index);
  };

  const { imagem, titulo, subtitulo } = slides[currentSlideIndex];

  return (
    <div className="relative">
      <Image
        src={imagem}
        width={900}
        height={900}
        alt="imagem banner"
        className="w-full h-72 md:h-auto"
      />
      <div className="absolute bottom-0 left-0 right-0 md:top-28 top-5 p-6">
        <h1 className="text-center md:text-4xl sm:text-2xl text-xl text-white">{titulo}</h1>
        <p className="md:mt-8 mt-4 text-center text-xs md:text-sm text-white">
          {subtitulo}
        </p>
        <div className="md:mt-12 mt-2 flex justify-center gap-3">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`cursor-pointer rounded-full p-1 md:p-2 ${index === currentSlideIndex ? 'bg-maindark' : 'bg-grey3'}`}
              onClick={() => handleClick(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(Banner);
