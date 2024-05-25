"use client";

import React from 'react';

const InovtourNumbers = () => {
  const stats = [
    {
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
            d="M17 20h5v-2a3 3 0 00-3-3h-4a3 3 0 00-3 3v2h5zm0 0v-2a3 3 0 00-3-3H8a3 3 0 00-3 3v2h5v-2a3 3 0 00-3-3H3a3 3 0 00-3 3v2h5"
          />
        </svg>
      ),
      value: "+77k",
      label: "usuários no Brasil",
    },
    {
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
            d="M8 6h13M8 12h10M8 18h6M3 6h.01M3 12h.01M3 18h.01"
          />
        </svg>
      ),
      value: "+48m",
      label: "buscas em 2023",
    },
    {
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
            d="M12 8v4l3 3m4-10a9 9 0 11-9-9 9 9 0 019 9z"
          />
        </svg>
      ),
      value: "4seg",
      label: "para responder",
    },
  ];

  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            INOVTOUR em números
          </h2>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 max-w-xs w-full text-center"
            >
              <div className="mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InovtourNumbers;