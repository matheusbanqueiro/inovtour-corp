"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CallToAction = ({ backgroundImage, title, subtitle, buttonText, buttonLink }) => {
  return (
    <div className="relative h-96 bg-gray-900 text-white">
      <Image 
        src={backgroundImage}
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute inset-0 z-0"
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-50">
        <p className="mb-4 text-lg">{title}</p>
        <Link href={buttonLink} passHref>
          <button className="inline-block px-6 py-3 mb-4 text-lg font-bold text-white bg-blue-700 rounded hover:bg-blue-800">
            {buttonText}
          </button>
        </Link>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default CallToAction;
