"use client";

import React from "react";
import Image from "next/image";
import { Pillars1Img, Pillars2Img, Pillars3Img } from "./img/pillars";

const PillarsSection = () => {
  const pillars = [
    {
      description: [
        "Solidez",
        "Eficiência",
        "Rapidez",
        "Alto desempenho de Resultados"
      ],
      imageSrc: Pillars1Img
    },
    {
      description: [
        "Conhecimento e Soluções Práticas ",
        "Foco em cada Cliente"
      ],
      imageSrc: Pillars2Img
    },
    {
      description: [
        "Construir um Relacionamento de Confiança ",
        "Integridade",
        "Sucesso"
      ],
      imageSrc: Pillars3Img
    }
  ];

  return (
    <div className="bg-gray-100 py-12 text-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h3 className="mb-12 text-5xl font-medium text-black">
          Nossos pilares
        </h3>
        <div className="flex justify-center gap-10">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-lg bg-white px-14 py-6 shadow-md">
              <Image
                src={pillar.imageSrc}
                alt={pillar.title}
                width={150}
                height={150}
                className="mb-5"
              />

              <div className="flex flex-col gap-5 text-left text-base text-dark1">
                {pillar.description.map((desc, i) => (
                  <div key={i} className="flex w-48 gap-2">
                    <p className="flex items-center">
                      <p className="rounded-sm bg-main p-1"></p>
                    </p>
                    {desc}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PillarsSection;
