"use client";

import React from 'react';
import Image from 'next/image';
import travelManagementImg from "./img/travelManagement.png";

const TravelManagement = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            Gerenciamento completo de viagens nacionais e internacionais
          </h2>
        </div>

        <div className="mt-10 flex flex-col md:flex-row items-center">
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
            <ul className="list-none space-y-4 text-lg text-gray-700">
              <li className="flex items-start">
                <span className="mr-2 text-blue-500">
                  {/* SVG Icon */}
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                Logística completa em Viagens Corporativas;
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-500">
                  {/* SVG Icon */}
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                Controle e gerenciamento de processos;
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-500">
                  {/* SVG Icon */}
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                Consultoria e análises de resultados;
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-500">
                  {/* SVG Icon */}
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                Sistema operacional de viagens on-Line;
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-500">
                  {/* SVG Icon */}
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                Eventos corporativos;
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-500">
                  {/* SVG Icon */}
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                Atendimento Emergencial 24h diariamente;
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-500">
                  {/* SVG Icon */}
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                Seguro viagem;
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-500">
                  {/* SVG Icon */}
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                Negociação com fornecedores e acordos corporativos;
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-500">
                  {/* SVG Icon */}
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                Relatórios gerenciais de resultados.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelManagement;