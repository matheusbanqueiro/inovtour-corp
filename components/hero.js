"use client";

import Image from "next/image";
import Link from "next/link";
import heroImg from "./img/hero.png";

export default function Hero() {
  return (
    <div className="relative w-full h-screen">
      <Image
        src={heroImg}
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start p-10">
        <h1 className="text-white text-5xl font-bold mb-4">
          Sua empresa com atendimento de excelência no gerenciamento de viagens corporativas
        </h1>
        <p className="text-white text-lg mb-6">
          Consultoria, Soluções em viagens e eventos corporativos nacionais e internacionais
        </p>
        <Link href="/saiba-mais" className="px-6 py-3 bg-blue-700 text-white text-lg rounded hover:bg-blue-800">
          Saiba mais
        </Link>
      </div>
    </div>
  );
}