"use client";

import Container from "@/components/container";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import {
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon
} from "@heroicons/react/24/outline";
import Phone from "@/components/icons/phone.svg";
import MapPin from "@/components/icons/map-pin.svg";
import MessageCircle from "@/components/icons/message-circle.svg";
import Email from "@/components/icons/mail.svg";
import Unsplash from "@/components/img/unsplash.png";

import Image from "next/image";

export default function Contact({ settings }) {
  const contact = [
    {
      icon: Phone,
      title: "Tel.: (11) 5524-9700"
    },
    {
      icon: Email,
      title: "E-mail: exclusivo@inovtour.com"
    },
    {
      icon: MessageCircle,
      title: "Atendimento 24h"
    }
  ];

  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    setValue,
    formState: { errors, isSubmitSuccessful, isSubmitting }
  } = useForm({
    mode: "onTouched"
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState(false);
  const [contactPreference, setContactPreference] = useState("");

  // Please update the Access Key in the Sanity CMS - Site Congig Page
  const apiKey = settings?.w3ckey || "YOUR_ACCESS_KEY_HERE";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey,
    settings: {
      from_name: "Inovtour",
      subject: "New Contact Message from Stablo Website"
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setMessage(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setMessage(msg);
    }
  });

  return (
    <>
      <div className="">
        <Image
          src={Unsplash}
          width={200}
          height={200}
          alt={""}
          className="w-full"
        />
      </div>
      <div className="absolute top-20 flex w-full flex-col items-center md:flex-row">
        <div className="mx-auto rounded-lg bg-white p-6 md:w-1/2">
          <h3 className="mb-4 text-center text-3xl font-semibold text-gray-900">
            Falar com os agentes da Inovtour
          </h3>
          <p className="mb-4 text-center text-sm text-gray-700">
            Preencha as informações e nossos especialistas irão entrar
            em contato com você.
          </p>
          <form className="">
            <div className="flex flex-col items-center justify-center gap-6">
              <div className="">
                <select className="rounded-md border-2 text-grey1 px-2 w-72 bg-white text-left py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option className="" value="" disabled selected>
                    Assunto
                  </option>
                  <option value="assunto1">Assunto1</option>
                  <option value="assunto2">Assunto2</option>
                  <option value="assunto3">Assunto3</option>
                  <option value="assunto4">Assunto4</option>
                </select>
              </div>
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
                    className={`rounded-md border-2 border-main px-3 py-2 text-sm font-semibold text-main hover:bg-main/10 focus:outline-none ${
                      contactPreference === "E-mail"
                        ? "bg-blue-300 text-white"
                        : "text-gray-700"
                    }`}
                    onClick={() => setContactPreference("E-mail")}>
                    E-mail
                  </button>
                  <button
                    type="button"
                    className={`rounded-md border-2 border-main px-3 py-2 text-sm font-semibold text-main hover:bg-main/10 focus:outline-none ${
                      contactPreference === "Telefone"
                        ? "bg-blue-300  text-white"
                        : "text-gray-700"
                    }`}
                    onClick={() => setContactPreference("Telefone")}>
                    Telefone
                  </button>
                  <button
                    type="button"
                    className={`rounded-md border-2 border-main px-3 py-2 text-sm font-semibold text-main hover:bg-main/10 focus:outline-none ${
                      contactPreference === "WhatsApp"
                        ? "bg-blue-300 text-white"
                        : "text-gray-700"
                    }`}
                    onClick={() => setContactPreference("WhatsApp")}>
                    WhatsApp
                  </button>
                </div>
              </div>

              <div className="">
                <textarea
                  className="w-72 rounded-md border-2 border-grey3 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  className=" rounded bg-main px-4 py-4 text-sm font-bold text-white hover:bg-main/80 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  Quero ser cliente
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Container>
        <div className="flex justify-between py-14">
          <div className="flex flex-col gap-5 text-left">
            <p className="text-3xl font-medium">
              Caso prefira entrar em contato
            </p>
            {contact.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <Image
                  src={item.icon}
                  width={28}
                  height={28}
                  alt={item.title}
                />
                <p className="text-lg text-dark2">{item.title}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-5 text-left">
            <p className="text-3xl font-medium">Nossa localização</p>
            <div className="flex items-start gap-2">
              <Image
                src={MapPin}
                width={28}
                height={28}
                alt={"Map Pin"}
                className=""
              />
              <p className="w-96 text-lg text-dark2">
                Endereço: Av Dr Chucri Zaidan, S/N - Bloco B Andar 24
                - Vila São Francisco (Zona Sul), São Paulo, SP
                <br />
                <br />
                CEP: 04711-130
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
