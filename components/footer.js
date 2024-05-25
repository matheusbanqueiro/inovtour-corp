"use client";

import Container from "@/components/container";
import ThemeSwitch from "@/components/themeSwitch";
import Image from "next/image";
import VercelLogo from "../public/img/vercel.svg";
import { useState } from "react";

export default function Footer(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log("Name:", name);
    console.log("Email:", email);
  };

  return (
    <Container className="mt-10 border-t border-gray-100 dark:border-gray-800 p-5">
      <div className="text-right mb-5">
        <a href="#top" className="text-blue-700 hover:text-blue-900">
          Voltar ao topo ↑
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-5 text-sm text-gray-500 dark:text-gray-600">
        <div className="col-span-1">
          <h3 className="text-white">Receba promoções</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 mt-2 mb-2 border rounded"
            />
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 mb-2 border rounded"
            />
            <button type="submit" className="w-full p-2 bg-blue-700 text-white rounded hover:bg-blue-800">
              Enviar
            </button>
          </form>
        </div>
        <div className="col-span-1">
          <h3 className="text-white">Localização</h3>
          <address>
            Av Dr Chucri Zaidan, S/N - Bloco B<br />
            Andar 24 - Vila São Francisco<br />
            Zona Sul, São Paulo / SP<br />
            CEP: 04711-130
          </address>
        </div>
        <div className="col-span-1">
          <h3 className="text-white">Contato</h3>
          <p>Atendimento 24h</p>
          <p>(11) 5524-9700</p>
          <p>exclusivo@inovtour.com</p>
        </div>
        <div className="col-span-1">
          <h3 className="text-white">Mapa do site</h3>
          <ul>
            <li><a href="/" className="hover:text-blue-500">Início</a></li>
            <li><a href="/service" className="hover:text-blue-500">Serviços</a></li>
            <li><a href="/about" className="hover:text-blue-500">Quem Somos</a></li>
            <li><a href="/contact" className="hover:text-blue-500">Contato</a></li>
            <li><a href="/blog" className="hover:text-blue-500">Blog</a></li>
          </ul>
        </div>
        <div className="col-span-1">
          <Image
            src={VercelLogo}
            alt="INOVTOUR"
            width="150"
            height="50"
          />
          <p className="mt-2">INOVTOUR VIAGENS E TURISMO LTDA</p>
          <p>CNPJ: 12.207.821/0001-82</p>
          <div className="flex space-x-4 mt-2">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/img/facebook-icon.png" alt="Facebook" className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/img/instagram-icon.png" alt="Instagram" className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="/img/linkedin-icon.png" alt="LinkedIn" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center mt-5 border-t border-gray-200 pt-5">
        <div className="flex space-x-4">
          <a href="/terms" className="hover:text-blue-500">Condições gerais</a>
          <a href="/privacy-policy" className="hover:text-blue-500">Política de Privacidade</a>
        </div>
        <div className="text-center text-xs">
          Desenvolvido por Govinda Systems DAO
        </div>
      </div>
    </Container>
  );
}