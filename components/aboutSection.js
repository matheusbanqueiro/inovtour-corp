"use client";

import React from 'react';

const AboutSection = ({ title, subtitle }) => {
  return (
    <div className="py-12 text-center flex justify-center bg-white3">
      <div className="max-w-4xl">
        <h2 className="text-6xl font-normal text-maindark">
          {title}
        </h2>
        <p className="mt-4 text-lg text-maindark">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
