"use client";

import React from "react";
import Image from "next/image";
import Users from "./icons/users.svg";
import Clock from "./icons/clock.svg";
import Search from "./icons/search.svg";

const InovtourNumbers = () => {
  const stats = [
    {
      icon: Users,
      value: "+77k",
      label: "usuários no Brasil"
    },
    {
      icon: Clock,
      value: "+48m",
      label: "buscas em 2023"
    },
    {
      icon: Search,
      value: "4seg",
      label: "para responder"
    }
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-5xl font-medium text-gray-900">
            INOVTOUR em números
          </h2>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="max-w-xs rounded-md bg-white p-10 text-center shadow-lg">
              <div className="mb-4 flex justify-center">
                <Image
                  src={stat.icon}
                  alt={stat.label}
                  width={40}
                  height={40}
                />
              </div>
              <div className="text-3xl font-bold text-gray-900">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InovtourNumbers;
