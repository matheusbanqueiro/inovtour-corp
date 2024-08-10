"use client";

import Container from "@/components/container";
import Banner from "@/components/banner";
import InfoSegment from "@/components/infoSegment";
import CallToAction from "@/components/callToAction";
import Image from "next/image";
import React from "react";
import {
  SolutionsBannerImg,
  SolutionsAirlineTicketsImg,
  SolutionsAccommodationImg,
  SolutionsCarRentalImg,
  SolutionsCorporateEventsImg,
  SolutionsPromotionPackagesImg,
  SolutionsCallToActionImg,
  SolutionsWatermark1Img,
  SolutionsWatermark2Img,
  SolutionsBannerImg2,
  SolutionsBannerImg3,
  SolutionsWatermark3Img
} from "@/public/img/solutions";
import CardPrices from "@/components/card-prices";
import Paris from "@/components/img/paris.jpg";

export default function Solutions() {
  const bannerImgs = [
    SolutionsBannerImg,
    SolutionsBannerImg2,
    SolutionsBannerImg3
  ];
  const bannerTitle =
    "Transforme suas viagens em experiências excepcionais com nossas soluções completas para passagens aéreas, hospedagem, aluguel de carros e muito mais!";
  const bannerSubtitle =
    "Seja para destinos nacionais ou internacionais, temos tudo o que você precisa para viajar com conforto e eficiência";

  const buttonLink = "/contact";

  const segments = [
    {
      imgSrc: SolutionsAirlineTicketsImg,
      imgAlt: "Passagens aéreas",
      isImgRight: false,
      title: "Passagens aéreas",
      mainParagraph:
        "Aqui você encontra as melhores ofertas de passagens aéreas para voos nacionais e internacionais.",
      secondaryParagraph:
        "Quer aproveitar as férias com a família? Ou curtir seu destino preferido? Viagem a trabalho? Não importa o destino, nós temos várias ofertas para você.",
      buttonText: "Solicitar cotação",
      buttonLink: buttonLink
    },
    {
      imgSrc: SolutionsAccommodationImg,
      imgAlt: "Hospedagem",
      isImgRight: true,
      title: "Hospedagem",
      mainParagraph:
        "Oferecemos uma seleção cuidadosa de hotéis e acomodações que atendem às necessidades específicas dos viajantes corporativos.",
      secondaryParagraph:
        "Com localização estratégica, comodidades de alta qualidade e serviços personalizados, garantimos que sua estadia seja produtiva e agradável.",
      buttonText: "Solicitar cotação",
      buttonLink: buttonLink
    },
    {
      imgSrc: SolutionsCarRentalImg,
      imgAlt: "Aluguel de carros",
      isImgRight: false,
      title: "Aluguel de carros",
      mainParagraph:
        "Proporcionamos soluções de mobilidade para que você tenha mais flexibilidade e agilidade em suas viagens de negócios.",
      secondaryParagraph:
        "Em parceria com as melhores locadoras, oferecemos uma ampla gama de veículos modernos e confortáveis, garantindo que você chegue aos seus compromissos de forma segura e pontual.",
      buttonText: "Solicitar cotação",
      buttonLink: buttonLink
    },
    {
      imgSrc: SolutionsCorporateEventsImg,
      imgAlt: "Eventos corporativos",
      isImgRight: true,
      title: "Eventos corporativos",
      mainParagraph:
        "Organizamos eventos corporativos completos, desde o planejamento até a execução.",
      secondaryParagraph:
        "Oferecemos locação de espaços, infraestrutura, hospedagem, transporte e catering de alta qualidade. Personalizamos cada detalhe para garantir o sucesso do seu evento.",
      buttonText: "Solicitar cotação",
      buttonLink: buttonLink
    },
    {
      imgSrc: SolutionsPromotionPackagesImg,
      imgAlt: "Pacotes promocionais",
      isImgRight: false,
      title: "Pacotes promocionais",
      mainParagraph:
        "Oferecemos pacotes promocionais exclusivos para a sua viagem, incluindo passagens aéreas com tarifas especiais, hotelaria de alta qualidade e locação de veículos.",
      secondaryParagraph:
        "Aproveite descontos exclusivos e suporte 7/24hs. Personalizamos os pacotes conforme suas necessidades. Viaje com conforto e economia!",
      buttonText: "Solicitar cotação",
      buttonLink: buttonLink
    }
  ];

  // const cardsData = [
  //   {
  //     local: "Paris",
  //     value: "100,00",
  //     imagem: Paris
  //   },
  //   {
  //     local: "Londres",
  //     value: "200,00",
  //     imagem: Paris
  //   },
  //   {
  //     local: "Nova York",
  //     value: "300,00",
  //     imagem: Paris
  //   },
  //   {
  //     local: "Tóquio",
  //     value: "400,00",
  //     imagem: Paris
  //   },
  //   {
  //     local: "Sydney",
  //     value: "500,00",
  //     imagem: Paris
  //   },
  //   {
  //     local: "Berlim",
  //     value: "600,00",
  //     imagem: Paris
  //   },
  //   {
  //     local: "Roma",
  //     value: "700,00",
  //     imagem: Paris
  //   },
  //   {
  //     local: "Madrid",
  //     value: "800,00",
  //     imagem: Paris
  //   },
  //   {
  //     local: "Moscou",
  //     value: "900,00",
  //     imagem: Paris
  //   },
  //   {
  //     local: "Dubai",
  //     value: "1000,00",
  //     imagem: Paris
  //   }
  // ];

  return (
    <>
      <Banner
        images={bannerImgs}
        title={bannerTitle}
        subtitle={bannerSubtitle}
      />
      <h1 className="md:mt-36 sm:mt-16 mt-8 text-center sm:text-3xl text-2xl md:text-4xl font-bold text-maindark">
      Saiba mais sobre as soluções que a INOVTOUR desenvolve para a construção de melhores resultados
      </h1>
      <div>
        {segments.map((segment, index) => (
          <React.Fragment key={index}>
            <InfoSegment
              imgSrc={segment.imgSrc}
              imgAlt={segment.imgAlt}
              isImgRight={segment.isImgRight}
              title={segment.title}
              mainParagraph={segment.mainParagraph}
              secondaryParagraph={segment.secondaryParagraph}
              buttonText={segment.buttonText}
              buttonLink={segment.buttonLink}
            />
            {index === 0 && (
              <div className="py-6 ">
                <Image
                  src={SolutionsWatermark1Img}
                  alt="Watermark"
                  width={800}
                  height={200}
                  className="w-full"
                />
              </div>
            )}
            {index === 1 && (
              <div className="py-6 ">
                <Image
                  src={SolutionsWatermark2Img}
                  alt="Watermark"
                  width={800}
                  height={200}
                  className="w-full"
                />
              </div>
            )}
            {index === 2 && (
              <div className="py-6 ">
                <Image
                  src={SolutionsWatermark1Img}
                  alt="Watermark"
                  width={800}
                  height={200}
                  className="w-full"
                />
              </div>
            )}
            {index === 3 && (
              <div className="py-6 ">
                <Image
                  src={SolutionsWatermark3Img}
                  alt="Watermark"
                  width={800}
                  height={200}
                  className="w-full"
                />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      <h1 className="mb-4 md:mt-36 mt-8 text-center md:text-4xl text-2xl font-bold text-maindark">
        Confira alguns serviços com preço exclusivo
      </h1>
      {/* <div className="mb-8 mt-8 flex flex-col gap-3 bg-maindark py-8">
        <div>
          <h1 className="text-center text-2xl font-bold text-white2">
            Destinos nacionais
          </h1>
          <CardPrices cardsData={cardsData} />
        </div>
        <div className="mt-16">
          <h1 className="text-center text-2xl font-bold text-white2">
            Destinos internacionais
          </h1>
          <CardPrices cardsData={cardsData} />
        </div>
      </div> */}
      <Container>
        <CallToAction
          backgroundImage={SolutionsCallToActionImg}
          title="Gostou das opções de serviços que oferecemos?"
          subtitle="Nossos agentes estão à sua espera"
          buttonText="Sua jornada começa aqui"
          buttonLink="/contact"
        />
      </Container>
    </>
  );
}
