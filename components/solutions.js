"use client";

import React from "react";

const solutions = [
  {
    title: "Passagens aéreas",
    icon: (
      <svg
        className="w-12 h-12 text-blue-500 mx-auto"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10.5 6.5L3 21h4l2-4h8.5a2.5 2.5 0 002.5-2.5v-1a2.5 2.5 0 00-2.5-2.5H7l3.5-4.5z"
        />
      </svg>
    ),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    button: "Solicite cotação",
    link: "/cotacao-passagens",
  },
  {
    title: "Hospedagem",
    icon: (
      <svg
        className="w-12 h-12 text-blue-500 mx-auto"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 17l4-4 4 4m0 0v-8a4 4 0 00-4-4 4 4 0 00-4 4v8z"
        />
      </svg>
    ),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    button: "Solicite cotação",
    link: "/cotacao-hospedagem",
  },
  {
    title: "Aluguel de carros",
    icon: (
      <svg
        className="w-12 h-12 text-blue-500 mx-auto"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
        />
      </svg>
    ),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    button: "Solicite cotação",
    link: "/cotacao-carros",
  },
];

const Solutions = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
            Explore nossas soluções
          </h2>
        </div>

        <div className="mt-10">
          <div className="flex flex-wrap justify-center gap-6">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 max-w-sm flex flex-col items-center"
              >
                <div className="mb-4">{solution.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-center">
                  {solution.title}
                </h3>
                <p className="text-gray-600 text-center mb-4">
                  {solution.description}
                </p>
                <a
                  href={solution.link}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  {solution.button}
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