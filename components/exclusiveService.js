"use client";

import React from "react";
import Image from "next/image";
import exclusiveServiceImg from "./img/exclusiveService.png";

const ExclusiveService = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base font-bold text-gray-900 sm:text-lg md:text-xl">
            Atendimento Exclusivo e Personalizado
          </h2>
        </div>

        <div className="mt-10 flex flex-col items-center md:flex-row">
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
            <p className="mb-4 text-gray-700">
              Oferecemos a implantação de um “Posto de Serviço
              Exclusivo e Personalizado”, nas dependências da
              INOVTOUR.
            </p>
            <p className="mb-4 text-gray-700">
              Temos capacidade imediata de implantação de atendimento
              com qualidade e eficiência, com toda a infraestrutura
              tecnológica necessária à empresa, garantindo o pleno
              funcionamento de todas as atividades e operações.
            </p>
            <a
              href="/saiba-mais"
              className="inline-block rounded bg-main px-6 py-3 text-lg font-bold text-white hover:bg-main/90">
              Saiba mais
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExclusiveService;
