"use client";

import React from 'react';
import Image from 'next/image';
import exclusiveServiceImg from "./img/exclusiveService.png";

const ExclusiveService = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-xl font-bold text-gray-900">
            Atendimento Exclusivo e Personalizado
          </h2>
        </div>

        <div className="mt-10 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <Image
              src={exclusiveServiceImg}
              alt="Atendimento Exclusivo e Personalizado"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className="mt-6 md:mt-0 md:w-1/2 md:pl-10">
            <p className="text-gray-700 mb-4">
              Oferecemos a implantação de um “Posto de Serviço Exclusivo e Personalizado”, nas dependências da INOVTOUR.
            </p>
            <p className="text-gray-700 mb-4">
              Temos capacidade imediata de implantação de atendimento com qualidade e eficiência, com toda a infraestrutura tecnológica necessária à empresa, garantindo o pleno funcionamento de todas as atividades e operações.
            </p>
            <a
              href="/saiba-mais"
              className="bg-main inline-block text-white font-bold text-lg px-6 py-3 rounded hover:bg-main/90"
            >
              Saiba mais
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExclusiveService;