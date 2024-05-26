import Container from "@/components/container";
import Image from "next/image";
import Link from "next/link";
import Banner from "@/components/banner";
import SolutionsBannerImg from "@/public/img/solutions_banner.png";

export default function Solutions() {
    const bannerImgs = [
        "/img/solutions_banner.png",
        "/img/solutions_banner.png",
      ];
    const bannerTitle = 'Transforme suas viagens em experiências excepcionais';
    const bannerSubtitle = 'Seja para destinos nacionais ou internacionais, temos tudo o que você precisa para viajar com conforto e eficiência';

    return (
        <Container>
            <Banner 
                images={bannerImgs} 
                title={bannerTitle} 
                subtitle={bannerSubtitle} 
            />
        </Container>
    );
}