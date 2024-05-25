"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import contactFormImg from "./img/contactForm.png";

const ContactForm = () => {
  const [contactPreference, setContactPreference] = useState('');

  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            Converse com nossos agentes
          </h2>
        </div>

        <div className="mt-10 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Escolha o melhor em gestão e consultoria de viagens.
            </h3>
            <p className="text-gray-700 mb-4">
              Preencha as informações e nossos especialistas irão entrar em contato com você.
            </p>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Nome</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Nome"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">E-mail</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="E-mail"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Telefone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Telefone"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Preferência de contato (Opcional)</label>
                <div className="flex space-x-2">
                  <button
                    type="button"
                    className={`px-4 py-2 border rounded-lg focus:outline-none ${
                      contactPreference === 'E-mail'
                        ? 'bg-blue-500 text-white'
                        : 'text-gray-700'
                    }`}
                    onClick={() => setContactPreference('E-mail')}
                  >
                    E-mail
                  </button>
                  <button
                    type="button"
                    className={`px-4 py-2 border rounded-lg focus:outline-none ${
                      contactPreference === 'Telefone'
                        ? 'bg-blue-500 text-white'
                        : 'text-gray-700'
                    }`}
                    onClick={() => setContactPreference('Telefone')}
                  >
                    Telefone
                  </button>
                  <button
                    type="button"
                    className={`px-4 py-2 border rounded-lg focus:outline-none ${
                      contactPreference === 'WhatsApp'
                        ? 'bg-blue-500 text-white'
                        : 'text-gray-700'
                    }`}
                    onClick={() => setContactPreference('WhatsApp')}
                  >
                    WhatsApp
                  </button>
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Explique sua necessidade</label>
                <textarea
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="4"
                  placeholder="Explique sua necessidade"
                ></textarea>
              </div>
              <div className="mb-4 flex items-center">
                <input type="checkbox" id="consent" className="mr-2" />
                <label htmlFor="consent" className="text-gray-700">
                  Concordo em receber informações
                </label>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Enviar mensagem
                </button>
              </div>
            </form>
          </div>
          <div className="mt-6 md:mt-0 md:w-1/2 md:pl-10">
            <Image
              src={contactFormImg}
              alt="Agente de viagens"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;