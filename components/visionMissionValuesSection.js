"use client";

import React from 'react';
import Image from 'next/image';

const VisionMissionValuesSection = ({ vision, mission, values, imageSrc }) => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start mb-12">
          <div className="md:w-1/2 text-left md:pr-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Visão</h3>
            <p className="text-gray-700 mb-8">{vision}</p>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Missão</h3>
            <p className="text-gray-700 mb-8">{mission}</p>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Valores</h3>
            <ul className="list-none ml-0">
              {values.map((value, index) => (
                <li key={index} className="flex items-center mb-2">
                  <span className="inline-block w-2 h-2 bg-gray-700 rounded-full mr-2"></span>
                  <span className="text-gray-700">{value}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <Image src={imageSrc} alt="Vision and Mission" width={400} height={400} className="object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMissionValuesSection;
