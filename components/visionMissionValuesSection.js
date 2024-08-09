"use client";

import React from "react";
import Image from "next/image";
import World from "../components/icons/world.svg";

const VisionMissionValuesSection = ({
  vision,
  mission,
  values,
  imageSrc
}) => {
  return (
    <div className="bg-white3 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-start md:flex-row">
          <div className="h-[520px] overflow-hidden overflow-y-auto text-left md:w-1/2 md:pr-8">
            <h3 className="mb-8 text-3xl font-medium text-dark1 sm:text-4xl md:text-5xl">
              Visão
            </h3>
            <p className="mb-8 text-sm text-dark2 md:text-base">
              {vision}
            </p>
            <h3 className="mb-8 text-3xl font-medium text-dark1 sm:text-4xl md:text-5xl">
              Missão
            </h3>
            <p className="mb-8 text-sm text-dark2 md:text-base">
              {mission}
            </p>
            <h3 className="mb-8 text-3xl font-medium text-dark1 sm:text-4xl md:text-5xl">
              Valores
            </h3>
            <div className="flex flex-col gap-3">
              {values.map((value, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Image
                    src={World}
                    alt="World icon"
                    width={24}
                    height={24}
                    className=""
                  />
                  <span className="text-gray-700 text-sm md:text-base">{value}</span>
                </li>
              ))}
            </div>
          </div>
          <div className="flex justify-center md:w-1/2 md:justify-end">
            <Image
              src={imageSrc}
              alt="Vision and Mission"
              width={400}
              height={400}
              className="object-contain sm:w-72 w-60 md:w-96"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMissionValuesSection;
