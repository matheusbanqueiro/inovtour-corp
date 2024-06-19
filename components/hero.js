"use client";

import Image from "next/image";
import Link from "next/link";
import HeroNew from "./img/hero-new.png";

export default function Hero() {
  return (
    <div className="relative w-full h-screen">
      <Image
        src={HeroNew}
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-start p-10 gap-8">
        <h1 className="text-dark1 text-5xl font-regular w-[556px]">
          Sua empresa com atendimento de excelência no gerenciamento de viagens corporativas
        </h1>
        <p className="text-dark2 text-lg w-1/2">
          Consultoria, Soluções em viagens e eventos corporativos nacionais e internacionais
        </p>
        <Link href="/solutions" className="px-6 py-3 bg-main text-white text-lg rounded hover:bg-maindark/90">
          Saiba mais
        </Link>
      </div>
    </div>
  );
}