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
            <h3 className="mb-8 text-5xl font-medium text-dark1">
              Visão
            </h3>
            <p className="mb-8 text-dark2">{vision}</p>
            <h3 className="mb-8 text-5xl font-medium text-dark1">
              Missão
            </h3>
            <p className="mb-8 text-dark2">{mission}</p>
            <h3 className="mb-8 text-5xl font-medium text-dark1">
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
                  <span className="text-gray-700">{value}</span>
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
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMissionValuesSection;
