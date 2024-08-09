"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const CallToAction = ({
  backgroundImage,
  title,
  subtitle,
  buttonText,
  buttonLink
}) => {
  return (
    <div className="relative mb-14 h-96 rounded-xl bg-gray-900 text-white">
      <Image
        src={backgroundImage}
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute inset-0 z-0 rounded-xl"
      />
      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-6 rounded-xl bg-black/40">
        <p className="text-center text-base text-white3 sm:text-lg md:text-xl">
          {title}
        </p>
        <Link href={buttonLink} passHref>
          <button className="inline-block rounded bg-mainlight px-6 py-3 text-2xl font-bold text-white3 hover:bg-mainlight/90 md:text-3xl">
            {buttonText}
          </button>
        </Link>
        <p className="text-white3">{subtitle}</p>
      </div>
    </div>
  );
};

export default CallToAction;
