"use client";

import React from "react";
import Image from "next/image";
import arrowRight from "@/components/icons/arrow-right.svg";
import Airplane from "@/components/icons/airplane.svg";
import Car from "@/components/icons/car.svg";
import Hotel from "@/components/icons/hotel.svg";

const solutions = [
  {
    title: "Passagens aéreas",
    icon: Airplane,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    button: "Solicite cotação",
    link: "/cotacao-passagens"
  },
  {
    title: "Hospedagem",
    icon: Hotel,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    button: "Solicite cotação",
    link: "/cotacao-hospedagem"
  },
  {
    title: "Aluguel de carros",
    icon: Car,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    button: "Solicite cotação",
    link: "/cotacao-carros"
  }
];

const Solutions = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-center text-5xl font-medium text-dark1 lg:text-3xl">
            Explore nossas soluções
          </h2>
        </div>

        <div className="mt-10">
          <div className="flex flex-wrap justify-center gap-6">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="flex max-w-sm flex-col items-center rounded-lg bg-white p-6 shadow-lg gap-4">
                <div className="mb-4 h-24">
                  <Image
                    src={solution.icon}
                    alt={solution.title}
                    width={100}
                    height={100}
                  />
                </div>
                <h3 className="mb-2 text-center text-2xl font-semibold">
                  {solution.title}
                </h3>
                <p className="mb-4 w-52 text-base text-left text-gray-600">
                  "{solution.description}"
                </p>
                <a
                  href={solution.link}
                  className="flex items-center gap- rounded bg-main px-4 py-2 text-sm font-semibold text-white hover:bg-main/90">
                  {solution.button}
                  <Image
                    src={arrowRight}
                    alt="arrow"
                    width={18}
                    height={18}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
