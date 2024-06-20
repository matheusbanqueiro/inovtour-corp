import Link from "next/link";
import Container from "@/components/container";
import PostList from "@/components/postlist";
import Hero from "@/components/hero";
import Solutions from "@/components/solutions";
import TravelManagement from "@/components/travelManagement";
import CommitmentSection from "@/components/commitmentSection";
import InfoSegment from "@/components/infoSegment";
import InovtourNumbers from "@/components/inovtourNumbers";
import Clients from "@/components/clients";
import ContactForm from "@/components/contactForm";
import Testimonials from "@/components/testimonials";
import ExclusiveServiceImg from "@/public/img/exclusive_service.png";

export default function Home() {

  const segment = {
    imgSrc: ExclusiveServiceImg,
    imgAlt: "Atendimento Exclusivo e Personalizado",
    isImgRight: false,
    title: "Atendimento Exclusivo e Personalizado",
    mainParagraph: "Na INOVTOUR, oferecemos atendimento exclusivo e personalizado para todas as suas necessidades de viagens corporativas. Nossa equipe dedicada está disponível 24/7, garantindo soluções rápidas e eficientes.",
    secondaryParagraph: "Adaptamos nossos serviços para proporcionar a melhor experiência, com foco em qualidade e satisfação.",
    buttonText: "Saiba mais",
    buttonLink: "/solutions"
  };

  return (
    <>
      <Hero />
      <Solutions />
      <TravelManagement />
      <CommitmentSection />
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
      <InovtourNumbers />
      <Clients />
      <ContactForm />
      <Testimonials />
    </>
  );
}
