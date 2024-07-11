"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import images from './img/clients';

const Clients = () => {
  useEffect(() => {
    console.log('Images in Clients component:', images);
  }, []);

  if (!images || images.length === 0) {
    return <div>Carregando...</div>; // Adicionar um estado de carregamento
  }

  // Estilos Inline
  const containerStyle = {
    padding: '3rem 0',
    backgroundColor: '#f7fafc',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '1rem',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const itemStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0.5rem',
  };

  const headingStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#1a202c',
    textAlign: 'center',
  };

  const buttonStyle = {
    display: 'inline-block',
    fontWeight: 'bold',
    backgroundColor: '#1a202c',
    color: '#fff',
    padding: '0.75rem 1.5rem',
    borderRadius: '0.375rem',
    textAlign: 'center',
    textDecoration: 'none',
    transition: 'background-color 0.3s',
  };

  return (
    <div style={containerStyle}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <h2 style={headingStyle}>
            Conheça nossos Clientes
          </h2>
        </div>

        <div style={gridStyle}>
          {images.map((client, index) => (
            <div key={index} style={itemStyle}>
              <Image
                src={client.src}
                alt={client.name}
                width={150}
                height={80}
                objectFit="contain"
                className="transition-all duration-300"
              />
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="/contact"
            style={buttonStyle}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#2d3748'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#1a202c'}
          >
            Quero ser cliente
          </a>
        </div>
      </div>
    </div>
  );
};

export default Clients;
