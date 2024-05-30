import Container from "@/components/container";
import Banner from "@/components/banner";
import InfoSegment from "@/components/infoSegment";
import {
    SolutionsBannerImg,
    SolutionsAirlineTicketsImg
} from "@/public/img/solutions";

export default function Solutions() {

    const bannerImgs = [
        SolutionsBannerImg,
    ];
    const bannerTitle = 'Transforme suas viagens em experiências excepcionais';
    const bannerSubtitle = 'Seja para destinos nacionais ou internacionais, temos tudo o que você precisa para viajar com conforto e eficiência';

    const segments = [
        {
            imgSrc: SolutionsAirlineTicketsImg,
            imgAlt: "Passagens aéreas",
            isImgRight: false,
            title: "Passagens aéreas",
            mainParagraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.",
            secondaryParagraph: "Suspendisse et rhoncus nisl, eu tempor urna.",
            buttonText: "Solicitar cotação",
            buttonLink: "/cotacao-passagens"
        },
        {
            imgSrc: "/img/hotel.png",
            imgAlt: "Hospedagem",
            isImgRight: true,
            title: "Hospedagem",
            mainParagraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.",
            secondaryParagraph: "Suspendisse et rhoncus nisl, eu tempor urna.",
            buttonText: "Solicitar cotação",
            buttonLink: "/cotacao-hospedagem"
        },
        {
            imgSrc: "/img/carRental.png",
            imgAlt: "Aluguel de carros",
            isImgRight: false,
            title: "Aluguel de carros",
            mainParagraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.",
            secondaryParagraph: "Suspendisse et rhoncus nisl, eu tempor urna.",
            buttonText: "Solicitar cotação",
            buttonLink: "/cotacao-carros"
        },
        {
            imgSrc: "/img/corporateEvents.png",
            imgAlt: "Eventos corporativos",
            isImgRight: true,
            title: "Eventos corporativos",
            mainParagraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.",
            secondaryParagraph: "Suspendisse et rhoncus nisl, eu tempor urna.",
            buttonText: "Solicitar cotação",
            buttonLink: "/cotacao-eventos"
        }
    ];

    return (
        <Container>
            <Banner 
                images={bannerImgs} 
                title={bannerTitle} 
                subtitle={bannerSubtitle} 
            />
            {segments.map((segment, index) => (
                <InfoSegment
                    key={index}
                    imgSrc={segment.imgSrc}
                    imgAlt={segment.imgAlt}
                    isImgRight={segment.isImgRight}
                    title={segment.title}
                    mainParagraph={segment.mainParagraph}
                    secondaryParagraph={segment.secondaryParagraph}
                    buttonText={segment.buttonText}
                    buttonLink={segment.buttonLink}
                />
            ))}
        </Container>
    );
}
