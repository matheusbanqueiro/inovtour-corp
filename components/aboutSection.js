"use client";

import React from 'react';

const AboutSection = ({ title, subtitle }) => {
  return (
    <div className="py-12 bg-gray-100 text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900">
          {title}
        </h2>
        <p className="mt-4 text-lg text-gray-700">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
