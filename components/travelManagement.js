"use client";

import React from "react";
import Image from "next/image";
import travelManagementImg from "./img/travelManagement.png";
import World from "./icons/world.svg";

const TravelManagement = () => {
  const topics = [
    "Equipe Operacional com Consultores de Viagens Sêniores.",
    "Implantação de SLA com Atendimento em Até 20 Minutos.",
    "Logística Completa em Viagens Corporativas.",
    "Atendimento Emergencial 7/24hs.",
    "Controle e Gerenciamento de Processos.",
    "Relatórios Customizados - Report BI.",
    "Gerenciamento e Criação de Política de Viagens com Implantação de LGPD.",
    "Consultoria e Análises de Resultados.",
    "Passagens Aéreas.",
    "Reserva de Hotéis.",
    "Locação de Veículos.",
    "Eventos Corporativos.",
    "Seguro de Viagem.",
    "Negociação com Fornecedores e Acordos Corporativos.",
    "Sistema Operacional de Viagens On-Line.",
    "Programa de Milhas Corporativas.",
    "Controle de Despesas e Reembolsos - Expenses.",
    "Viagens de Férias e de Lazer aos Funcionários e Colaboradores.",
  ];

  // Dividir os tópicos em duas colunas
  const midPoint = Math.ceil(topics.length / 2);
  const firstColumn = topics.slice(0, midPoint);
  const secondColumn = topics.slice(midPoint);

  return (
    <div className="bg-gray-100 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-xl font-medium text-gray-900 sm:text-2xl md:text-3xl">
            CONSULTORIA E GERENCIAMENTO COMPLETO DE VIAGENS CORPORATIVAS - NACIONAIS E INTERNACIONAIS
          </h3>
        </div>

        {/* Imagem em cima */}
        <div className="mt-10 flex justify-center">
          <Image
            src={travelManagementImg}
            alt="Gerenciamento de viagens"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>

        {/* Tópicos em duas colunas */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <ul className="list-none space-y-4 text-sm text-gray-700 sm:text-base md:text-lg">
            {firstColumn.map((topic, index) => (
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
          <ul className="list-none space-y-4 text-sm text-gray-700 sm:text-base md:text-lg">
            {secondColumn.map((topic, index) => (
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
  );
};

export default TravelManagement;
