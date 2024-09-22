"use client";

import React, { useEffect } from 'react';
import Link from "next/link";
import Container from "@/components/container";
import PostList from "@/components/postlist";
import Hero from "@/components/hero";
import Solutions from "@/components/solutions";
import TravelManagement from "@/components/travelManagement";
import CommitmentSection from "@/components/commitmentSection";
import Info from "@/components/info";
import InovtourNumbers from "@/components/inovtourNumbers";
import Clients from "@/components/clients";
import ContactForm from "@/components/contactForm";
import Testimonials from "@/components/testimonials";
import ExclusiveServiceImg from "@/public/img/exclusive_service.png";
import EventTracker from "@/components/eventTracker";

export default function Home() {
  const segment = {
    imgSrc: ExclusiveServiceImg,
    imgAlt: "Atendimento Exclusivo, Personalizado, Digital e On-Line",
    isImgRight: false,
    title: "Atendimento Exclusivo, Personalizado, Digital e On-Line",
    mainParagraph: "Na INOVTOUR, oferecemos atendimento exclusivo, personalizado, digital e on-line para todas as suas necessidades de Viagens Corporativas.",
    secondaryParagraph: "Nossa equipe dedicada está disponível 7/24hs, para garantir a melhor experiência, através de soluções ágeis, eficientes e de qualidade personalizada, oferecemos também toda a estrutura de atendimento digital e on-line.",
    buttonText: "Saiba mais",
    buttonLink: "/solutions"
  };

  return (
    <>
      <EventTracker eventName="pageView" eventParams={{ page: 'HomePage' }} />
      <Hero />
      <Solutions />
      <TravelManagement />
      <CommitmentSection />
      <Info
        imgSrc={segment.imgSrc}
        imgAlt={segment.imgAlt}
        isImgRight={segment.isImgRight}
        title={segment.title}
        mainParagraph={segment.mainParagraph}
        secondaryParagraph={segment.secondaryParagraph}
        buttonText={segment.buttonText}
        buttonLink={segment.buttonLink}
      />
      <InovtourNumbers />
      <Clients />
      <ContactForm />
      <Testimonials />
    </>
  );
}
