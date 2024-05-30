import Container from "@/components/container";
import AboutSection from "@/components/aboutSection";
import PillarsSection from "@/components/pillarsSection";
import VisionMissionValuesSection from "@/components/visionMissionValuesSection";
import VisionMissionValuesImg from "@/public/img/vision_mission_values_section.png";

export default function About() {
    const aboutTitle = 'INOVTOUR há 14 anos fazendo história na gestão de viagens corporativas por todo mundo';
    const aboutSubtitle = 'Contando com profissionais experientes e capacitados, comprometidos em desenvolver os melhores resultados.';

    const vision = "Por entendermos que cada cliente é único e exclusivo, nossa principal motivação é proporcionar um atendimento personalizado em todas as viagens, oferecendo soluções de gestão que alinhem os resultados com eficiência, através de processos especializados.";
    const mission = "Innovar no Mercado de Viagens Corporativas, através de ferramentas de gestão consolidadas, com um alto desempenho, para buscar o melhor resultado, no processo da viagem corporativa, incentivando relações de confiança com os nossos clientes.";
    const values = [
        "Valorização Humana",
        "Qualidade e Eficiência",
        "Segurança",
        "Comprometimento"
    ];

    return (
        <Container>
            <AboutSection 
                title={aboutTitle}
                subtitle={aboutSubtitle}
            />
            <PillarsSection />
            <VisionMissionValuesSection 
                vision={vision}
                mission={mission}
                values={values}
                imageSrc={VisionMissionValuesImg}
            />
        </Container>
    );
}
