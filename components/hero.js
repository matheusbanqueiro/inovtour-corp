"use client";

import Image from "next/image";
import Link from "next/link";
import HeroNew from "./img/hero-new.png";

export default function Hero() {
  return (
    <div className="relative h-screen w-full">
      <Image
        src={HeroNew}
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />
      <div className="absolute inset-0 flex flex-col items-start justify-center gap-8 p-6 sm:p-8 md:p-10">
        <h1 className="font-regular w-auto text-2xl text-dark1 sm:text-4xl md:w-[556px] md:text-5xl">
          Tenha a melhor experiência de qualidade humanizada, digital e on-line em 
          Viagens e Eventos Corporativos
        </h1>
        <p className="text-sm text-dark2 sm:text-base md:w-1/2 md:text-lg">
          Consultoria e soluções em viagens e eventos corporativos
          nacionais e internacionais
        </p>
        <Link
          href="/solutions"
          className="rounded bg-main px-6 py-3 text-lg text-white hover:bg-maindark/90">
          Saiba mais
        </Link>
      </div>
    </div>
  );
}
