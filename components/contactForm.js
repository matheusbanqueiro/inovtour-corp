"use client";

import React, { useState } from "react";
import Image from "next/image";
import contactFormImg from "./img/contactForm.png";

const ContactForm = () => {
  const [contactPreference, setContactPreference] = useState("");

  return (
    <div className="bg-gray-100 py-12">
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
            <form className="">
              <div className="flex flex-col items-center justify-center gap-6">
                <div className="">
                  <input
                    type="text"
                    className="rounded-md border-2 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Nome"
                  />
                </div>
                <div className="">
                  <input
                    type="email"
                    className="rounded-md border-2 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="E-mail"
                  />
                </div>
                <div className="">
                  <input
                    type="tel"
                    className="rounded-md border-2 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Telefone"
                  />
                </div>
                <div className="">
                  <p className="flex gap-5 py-3 text-gray-700">
                    Preferência de contato{" "}
                    <span className="text-grey2">(Opcional)</span>
                  </p>
                  <div className="flex space-x-3">
                    <button
                      type="button"
                      className={`rounded-md border-2 text-sm border-main py-2 px-3 font-semibold text-main hover:bg-main/10 focus:outline-none ${
                        contactPreference === "E-mail"
                          ? "bg-blue-300 text-white"
                          : "text-gray-700"
                      }`}
                      onClick={() => setContactPreference("E-mail")}>
                      E-mail
                    </button>
                    <button
                      type="button"
                      className={`rounded-md border-2 text-sm border-main py-2 px-3 font-semibold text-main hover:bg-main/10 focus:outline-none ${
                        contactPreference === "Telefone"
                          ? "bg-blue-300  text-white"
                          : "text-gray-700"
                      }`}
                      onClick={() =>
                        setContactPreference("Telefone")
                      }>
                      Telefone
                    </button>
                    <button
                      type="button"
                      className={`rounded-md border-2 text-sm border-main py-2 px-3 font-semibold text-main hover:bg-main/10 focus:outline-none ${
                        contactPreference === "WhatsApp"
                          ? "bg-blue-300 text-white"
                          : "text-gray-700"
                      }`}
                      onClick={() =>
                        setContactPreference("WhatsApp")
                      }>
                      WhatsApp
                    </button>
                  </div>
                </div>

                <div className="">
                  <textarea
                    className="border-2 border-grey3 w-72 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="4"
                    placeholder="Explique sua necessidade"></textarea>
                </div>
              <div className="justi flex items-center">
                <input
                  type="checkbox"
                  id="consent"
                  className="mr-2"
                />
                <label htmlFor="consent" className="text-gray-700">
                  Concordo em receber informações
                </label>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className=" rounded bg-main font-bold text-sm px-4 py-4 text-white hover:bg-main/80 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  Enviar mensagem
                </button>
              </div>
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
