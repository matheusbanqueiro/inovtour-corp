"use client";

import React from "react";
import Image from "next/image";
import contactFormImg from "./img/contactForm.png";
import FormFields from "./formFields";

const ContactForm = () => {
  return (
    <div id="contact-form" className="bg-gray-100 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-5xl font-medium text-gray-900">
            Converse com nossos agentes
          </h2>
        </div>

        <div className="mt-10 flex flex-col items-center md:flex-row">
          <div className="rounded-lg bg-white p-6 shadow-lg md:w-1/2">
            <h3 className="mb-4 text-center text-xl font-semibold text-gray-900">
              Escolha o melhor em gestão e consultoria de viagens.
            </h3>
            <p className="mb-4 text-center text-xs text-gray-700">
              Preencha as informações e nossos especialistas irão
              entrar em contato com você.
            </p>
            <FormFields />
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
