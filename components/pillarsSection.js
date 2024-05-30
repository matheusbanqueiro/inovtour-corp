"use client";

import React from 'react';
import Image from 'next/image';
import {
    Pillars1Img,
    Pillars2Img,
    Pillars3Img
} from './img/pillars';

const PillarsSection = () => {
    const pillars = [
        {
            title: "Sólidez",
            description: [
                "Eficiência",
                "Rapidez",
                "Alto desempenho de Resultados"
            ],
            imageSrc: Pillars1Img
        },
        {
            title: "Conhecimento e Soluções Práticas",
            description: [
                "Foco em cada Cliente"
            ],
            imageSrc: Pillars2Img
        },
        {
            title: "Construir um Relacionamento de Confiança",
            description: [
                "Integridade",
                "Sucesso"
            ],
            imageSrc: Pillars3Img
        }
    ];

    return (
        <div className="py-12 bg-gray-100 text-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-12">Nossos pilares</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pillars.map((pillar, index) => (
                        <div key={index} className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center">
                            <Image
                                src={pillar.imageSrc}
                                alt={pillar.title}
                                width={150}
                                height={150}
                                className="mb-4"
                            />
                            <h4 className="text-xl font-semibold text-gray-800 mb-4">{pillar.title}</h4>
                            <ul className="text-gray-600 text-left list-disc list-inside">
                                {pillar.description.map((desc, i) => (
                                    <li key={i}>{desc}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PillarsSection;
