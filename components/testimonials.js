"use client";

import React from 'react';
import Image from 'next/image';
import {
    Testimonials1Img,
    Testimonials2Img,
    Testimonials3Img
} from './img/testimonials';

const testimonials = [
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    name: "Cody Fisher",
    image: Testimonials1Img,
  },
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    name: "Kathryn Murphy",
    image: Testimonials2Img,
  },
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    name: "Theresa Webb",
    image: Testimonials3Img,
  },
];

const Testimonials = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Depoimentos</h2>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
              <p className="text-gray-600 italic mb-4">{testimonial.quote}</p>
              <div className="flex items-center">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <p className="text-gray-900 font-semibold">{testimonial.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;