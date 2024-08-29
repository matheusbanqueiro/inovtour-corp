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
import EventTracker from "@/components/eventTracker";

export default function Solutions() {
  const bannerSlides = [
    {
      imagem: SolutionsBannerImg,
      titulo: "Transforme suas viagens em experiências excepcionais com nossas soluções completas para passagens aéreas, hospedagem, aluguel de carros e muito mais!",
      subtitulo: "Seja para destinos nacionais ou internacionais, temos tudo o que a sua empresa precisa para viajar com conforto, segurança e tranquilidade."
    },
    {
      imagem: SolutionsBannerImg2,
      titulo: "A INOVTOUR tem todo o compromisso com a eficiência e qualidade, asseguramos proporcionar a melhor experiência de atendimento humanizado, personalizado, digital e on-line.",
      subtitulo: ""
    },
    {
      imagem: SolutionsBannerImg3,
      titulo: "Somos direcionados pelos interesses de nossos clientes, sobretudo, em desenvolver e construir soluções que agregam valor e melhores resultados.",
      subtitulo: ""
    }
  ];

  const buttonLink = "/contact";

  const segments = [
    {
      imgSrc: SolutionsAirlineTicketsImg,
      imgAlt: "Passagens aéreas",
      isImgRight: false,
      title: "Passagens aéreas",
      mainParagraph:
        "Aqui sua empresa encontra as melhores ofertas de passagens aéreas para voos nacionais e internacionais. Tenha a melhor experiência de atendimento em Viagens Corporativas, através da nossa equipe experiente e comprometida em proporcionar o sucesso, tranquilidade e segurança em todos os processos de viagens.",
      secondaryParagraph: "",
      buttonText: "Solicitar cotação",
      buttonLink: buttonLink
    },
    {
      imgSrc: SolutionsAccommodationImg,
      imgAlt: "Hospedagem",
      isImgRight: true,
      title: "Hospedagem",
      mainParagraph:
        "Parceria com as principais rede de hotéis do Brasil e do mundo garantem conforto, segurança e localização privilegiada e estratégica para os seus negócios.",
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
        "Em parceria com as melhores locadoras, oferecemos uma ampla gama de veículos modernos, garantindo que você chegue aos seus compromissos de forma segura e confortável.",
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
      imgAlt: "Viagens de férias e lazer",
      isImgRight: false,
      title: "Viagens de férias e lazer",
      mainParagraph:
        "Também oferecemos atendimento exclusivo para viagem de férias e lazer, incluindo passagens aéreas com tarifas especiais, hotelaria de alta qualidade e locação de veículos.",
      secondaryParagraph:
        "Aproveite descontos exclusivos e suporte 7/24hs. Personalizamos sua viagem conforme suas necessidades. Viaje com conforto, segurança, praticidade e economia!",
      buttonText: "Solicitar cotação",
      buttonLink: buttonLink
    }
  ];

  return (
    <>
      <EventTracker eventName="pageView" eventParams={{ page: 'SolutionsPage' }} />
      <Banner slides={bannerSlides} />
      <h1 className="md:mt-16 sm:mt-8 mt-4 text-center sm:text-3xl text-2xl md:text-4xl font-bold text-maindark mb-12">
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
              <div>
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
              <div>
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
              <div>
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
              <div>
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
      <h1 className="mb-4 md:mt-24 mt-12 text-center md:text-4xl text-2xl font-bold text-maindark">
        Confira alguns serviços com preço exclusivo
      </h1>
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
