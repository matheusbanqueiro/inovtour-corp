"use client";

import React from "react";
import Image from "next/image";
import travelManagementImg from "./img/travelManagement.png";
import World from "./icons/world.svg";

const TravelManagement = () => {
  // Restructured topics with parent-child relationships
  const structuredTopics = [
    {
      title: "Equipe Operacional com Consultores de Viagens Sêniores;",
    },
    {
      title: "Atendimento Personalizado, Humanizado, Digital & On-line;"
    },
    {
      title: "Segurança e Praticidade de Soluções para Garantir os Melhores Resultados;",
    },
    {
      title: "Compromisso de Melhorar a Eficiência e Assegurar a Excelência da Qualidade;",
    },
    {
      title: "Implantação de SLA com Atendimento em Até 20 Minutos;",
    },
    {
      title: "Logística Completa em Viagens Corporativas;",
    },
    {
      title: "Atendimento Emergencial 7/24hs;",
    },
    {
      title: "Controle e Gerenciamento de Processos;",
    },
    {
      title: "Relatórios Customizados - Report BI;",
    },
    {
      title: "Gerenciamento e Criação de Política de Viagens com Implantação de LGPD;",
    },
    {
      title: "Consultoria e Análises de Resultados;",
    },
    {
      title: "Passagens Aéreas;",
    },
    {
      title: "Reserva de Hotéis;",
    },
    {
      title: "Locação de Veículos;",
    },
    {
      title: "Eventos Corporativos;",
    },
    {
      title: "Seguro de Viagem;",
    },
    {
      title: "Negociação com Fornecedores e Acordos Corporativos;",
    },
    {
      title: "Sistema Operacional de Viagens On-Line;",
    },
    {
      title: "Programa de Milhas Corporativas:",
      subItems: [
        "O Funcionário Soma Milhas",
        "A Empresa Pontos Qualificáveis em Viagens",
      ],
    },
    {
      title: "Controle de Despesas e Reembolsos - Expenses;",
      subItems: [
        "Por projetos",
        "Centro de custo",
        "Campanhas",
        "Departamentos",
        "Reembolsos",
        "Expenses",
      ],
    },
  ];

  // Dividir os tópicos em duas colunas mantendo a hierarquia
  const midPoint = Math.ceil(structuredTopics.length / 2);
  const firstColumn = structuredTopics.slice(0, midPoint);
  const secondColumn = structuredTopics.slice(midPoint);

  const renderTopic = (topic) => (
    <div key={topic.title} className="space-y-2">
      <div className="flex items-center gap-3">
        <Image
          src={World}
          alt="World icon"
          width={24}
          height={24}
          className=""
        />
        <p>{topic.title}</p>
      </div>
      {topic.subItems && (
        <ul className="ml-8 space-y-2">
          {topic.subItems.map((subItem, index) => (
            <li key={index} className="flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <p className="text-gray-600">{subItem}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  return (
    <div className="bg-gray-100 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-xl font-medium text-gray-900 sm:text-2xl md:text-3xl">
            CONSULTORIA E GERENCIAMENTO COMPLETO DE VIAGENS CORPORATIVAS NACIONAIS E INTERNACIONAIS
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

        <div className="text-center mt-8">
          <p className="text-lg font-medium text-gray-800 sm:text-xl md:text-2xl">
            Desenvolvemos soluções para construção eficiente da gestão de viagens corporativas, 
            sobre as quais são direcionadas em consolidar e garantir os melhores resultados:
          </p>
        </div>

        {/* Tópicos em duas colunas com subitems */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6 text-sm text-gray-700 sm:text-base md:text-lg">
            {firstColumn.map(renderTopic)}
          </div>
          <div className="space-y-6 text-sm text-gray-700 sm:text-base md:text-lg">
            {secondColumn.map(renderTopic)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelManagement;