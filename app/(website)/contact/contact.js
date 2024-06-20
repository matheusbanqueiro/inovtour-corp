"use client";

import Container from "@/components/container";
import Image from "next/image";
import Unsplash from "@/components/img/unsplash.png";
import Phone from "@/components/icons/phone.svg";
import MapPin from "@/components/icons/map-pin.svg";
import MessageCircle from "@/components/icons/message-circle.svg";
import Email from "@/components/icons/mail.svg";
import FormFields from "@/components/formFields"; // Import FormFields

export default function Contact() {
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
      title: "Atendimento 7/24hs"
    }
  ];

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
            Falar com os agentes da INOVTOUR
          </h3>
          <p className="mb-4 text-center text-sm text-gray-700">
            Preencha as informações e nossos especialistas irão entrar
            em contato com você.
          </p>
          <FormFields />
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
