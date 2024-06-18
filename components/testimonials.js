"use client";

import React from "react";
import Image from "next/image";
import {
  Testimonials1Img,
  Testimonials2Img,
  Testimonials3Img
} from "./img/testimonials";

const testimonials = [
  {
    quote:
      "Serviço impecável! Reservaram minhas passagens aéreas rapidamente e sem complicações. Recomendo!",
    name: "Cody Fisher",
    image: Testimonials1Img
  },
  {
    quote:
      "A hospedagem foi excelente, com localização estratégica e todo o conforto que eu precisava. Ótima escolha!",
    name: "Kathryn Murphy",
    image: Testimonials2Img
  },
  {
    quote:
      "Excelente serviço! Passagens aéreas, hotelaria e locação de carro impecáveis. Recomendamos a Inovtour!",
    name: "Theresa Webb",
    image: Testimonials3Img
  }
];

const Testimonials = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-medium text-gray-900">
            Depoimentos
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col justify-center rounded-lg bg-white p-5 shadow-lg">
              <div className="items-center flex justify-center">
                <p className="mb-4 w-64 text-center italic text-gray-600">
                  "{testimonial.quote}"
                </p>
              </div>

              <div className="flex items-center justify-end gap-2">
                <div className="ml-4">
                  <p className=" text-grey1">{testimonial.name}</p>
                </div>
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
