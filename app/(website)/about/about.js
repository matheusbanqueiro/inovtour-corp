import Container from "@/components/container";
import AboutSection from "@/components/aboutSection";
import PillarsSection from "@/components/pillarsSection";
import VisionMissionValuesSection from "@/components/visionMissionValuesSection";
import VisionMissionValuesImg from "@/public/img/vision_mission_values_section.png";
import EventTracker from "@/components/eventTracker";

export default function About() {
  const aboutTitle =
    "A INOVTOUR é formada por Consultores de Viagens altamente experientes e capacitados em desenvolver soluções eficientes que agregam valor.";
  const aboutSubtitle =
    "Nossas soluções são direcionadas em proporcionar a melhor experiência em Gestão de Viagens, assim assegurar e garantir melhores resultados.";

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
      <EventTracker eventName="pageView" eventParams={{ page: 'AboutPage' }} />
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
