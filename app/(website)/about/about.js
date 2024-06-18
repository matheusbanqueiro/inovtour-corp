import Container from "@/components/container";
import AboutSection from "@/components/aboutSection";
import PillarsSection from "@/components/pillarsSection";
import VisionMissionValuesSection from "@/components/visionMissionValuesSection";
import VisionMissionValuesImg from "@/public/img/vision_mission_values_section.png";

export default function About() {
  const aboutTitle =
    "INOVTOUR há 14 anos fazendo história na gestão de viagens corporativas por todo mundo";
  const aboutSubtitle =
    "Contando com profissionais experientes e capacitados, comprometidos em desenvolver os melhores resultados.";

  const vision =
    "Por entendermos que cada cliente é único e exclusivo, nosso principal compromisso é disponibilizar um serviço de atendimento aos clientes, dentro do mais alto padrão de qualidade, garantindo que todas as suas necessidades sejam atendidas com eficiência, através de soluções práticas e seguras.";
  const mission =
    "Inovar o Mercado de Viagens Corporativas, através da busca contínua da superação das expectativas dos clientes, em relação à qualidade dos serviços que prestamos, sobretudo, em desenvolver o sucesso, confiança e melhores resultados.";
  const values = [
    "Valorização Humana",
    "Qualidade e Eficiência",
    "Segurança",
    "Comprometimento",
    "Superação dos Resultados",
    "Melhoria Contínua",
    "Inovação"
  ];

  return (
    <>
      <AboutSection title={aboutTitle} subtitle={aboutSubtitle} />
      <PillarsSection />
      <div className="bg-white3">
        <Container>
          <VisionMissionValuesSection
            vision={vision}
            mission={mission}
            values={values}
            imageSrc={VisionMissionValuesImg}
          />
        </Container>
      </div>
    </>
  );
}
