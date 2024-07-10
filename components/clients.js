"use client";

import React from 'react';
import Image from 'next/image';
import {
    LacosteImg, 
    FiespImg, 
    ItaltelImg, 
    GptwImg, 
    RdiImg, 
    AmakhaImg, 
    FitchRatingsImg, 
    FisImg, 
    FoxconnImg, 
    MedicinaUspImg, 
    GreeImg
} from './img/clients';

/*
- PORSCHE
- AFIP
- FROOTY
- GREE
- ⁠AMAKHA
- COGRA
- BRTUV 
- UPS
- GPTW
- AYALLA
- REAL VALOR
- BLEND IT
- ITALTEL
- FACULDADE DE MEDICINA
- ⁠FUNDAÇÃO FACULDADE DE MEDICINA
- ⁠Q-RAILING
- ⁠FIESP
*/

const Clients = () => {
  const clients = [
    { name: 'Lacoste', src: LacosteImg },
    { name: 'Fiesp', src: FiespImg },
    { name: 'Italtel', src: ItaltelImg },
    { name: 'Great Place to Work', src: GptwImg },
    { name: 'RDI', src: RdiImg },
    { name: 'Amakha Paris', src: AmakhaImg },
    { name: 'Fitch Ratings', src: FitchRatingsImg },
    { name: 'FIS', src: FisImg },
    { name: 'Foxconn', src: FoxconnImg },
    { name: 'Medicina USP', src: MedicinaUspImg },
    { name: 'Gree', src: GreeImg },
  ];

  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-gray-900">
            Conheça nossos Clientes
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-center">
          {clients.map((client, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image
                src={client.src}
                alt={client.name}
                width={150}
                height={80}
                objectFit="contain"
                className="grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="/contact"
            className="inline-block font-bold bg-main text-white px-6 py-3 rounded hover:bg-main/90"
          >
            Quero ser cliente
          </a>
        </div>
      </div>
    </div>
  );
};

export default Clients;