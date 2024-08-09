"use client";

import React from 'react';

const AboutSection = ({ title, subtitle }) => {
  return (
    <div className="py-12 text-center flex justify-center bg-white3">
      <div className="max-w-4xl">
        <h2 className="md:text-6xl sm:text-4xl text-3xl font-normal text-maindark">
          {title}
        </h2>
        <p className="mt-4 md:text-lg text-base text-maindark">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
