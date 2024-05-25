"use client";

import React from 'react';
import Image from 'next/image';
import commitmentSectionImg from "./img/commitmentSection.png";

const CommitmentSection = () => {
  return (
    <div className="bg-blue-700 text-white py-4 flex items-center justify-center relative">
      <p className="text-lg md:text-xl lg:text-2xl font-semibold">
        Compromisso de construir e desenvolver os melhores resultados para sua viagem
      </p>
      <div className="absolute right-4 bottom-0">
        <Image
          src={commitmentSectionImg}
          alt="Avião"
          width={100}
          height={40}
          className="h-auto"
        />
      </div>
    </div>
  );
};

export default CommitmentSection;