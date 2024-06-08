"use client";

import React from 'react';
import Image from 'next/image';
import commitmentSectionImg from "./img/commitmentSection.png";

const CommitmentSection = () => {
  return (
    <div className="bg-main text-white py-4 flex items-center justify-center relative">
      <p className="text-lg h-16 md:text-xl lg:text-lg font-medium">
        Compromisso de construir e desenvolver os melhores resultados para sua viagem
      </p>
      <div className="absolute right-44 bottom-4">
        <Image
          src={commitmentSectionImg}
          alt="Avião"
          width={500}
          height={100}
          className="h-auto"
        />
      </div>
    </div>
  );
};

export default CommitmentSection;