"use client";

import React from "react";
import Image from "next/image";
import travelManagementImg from "./img/travelManagement.png";
import World from "./icons/world.svg";

const TravelManagement = () => {
  const topics = [
    "Logística completa em Viagens Corporativas;",
    "Controle e gerenciamento de processos;",
    "Consultoria e análises de resultados;",
    "Eventos corporativos;",
    "Atendimento Emergencial 7/24hs diariamente;",
    "Seguro viagem;",
    "Negociação com fornecedores e acordos corporativos;",
    "Relatórios gerenciais de resultados;"
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-medium text-gray-900 sm:text-3xl md:text-5xl">
            Gerenciamento completo de viagens nacionais e
            internacionais
          </h2>
        </div>

        <div className="mt-10 flex flex-col items-center md:flex-row">
          <div className="md:w-1/2">
            <Image
              src={travelManagementImg}
              alt="Gerenciamento de viagens"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className="mt-6 md:mt-0 md:w-1/2 md:pl-10">
            <ul className="list-none space-y-4 text-sm text-gray-700 sm:text-base md:text-lg">
              {topics.map((topic, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Image
                    src={World}
                    alt="World icon"
                    width={24}
                    height={24}
                    className=""
                  />
                  <p>{topic}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelManagement;
``;
