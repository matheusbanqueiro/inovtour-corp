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
    mainParagraph: "Oferecemos a implantação de um “Posto de Serviço Exclusivo e Personalizado”, nas dependências da INOVTOUR.",
    secondaryParagraph: "Temos capacidade imediata de implantação de atendimento com qualidade e eficiência, com toda a infraestrutura tecnológica necessária à empresa, garantindo o pleno funcionamento de todas as atividades e operações.",
    buttonText: "Saiba mais",
    buttonLink: "/"
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
