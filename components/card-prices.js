import React, { useState } from "react";
import Image from "next/image";
import MapPin from "../components/icons/map-pin2.svg";
import Arrow from "../components/icons/arrow-left.svg";
import ArrowRightBlue from "../components/icons/arrow-right-blue.svg";

const CardPrices = ({ cardsData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 5) % cardsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 5 + cardsData.length) % cardsData.length);
  };

  const currentCards = cardsData.slice(currentIndex, currentIndex + 5).concat(
    cardsData.slice(0, Math.max(0, currentIndex + 5 - cardsData.length))
  );

  return (
    <div className="mt-8 flex flex-col items-center justify-center gap-3">
      <button
        onClick={handlePrev}
        className="absolute left-2 rounded-lg bg-main p-2"
      >
        <Image
          src={Arrow}
          width={28}
          height={28}
          alt="arrow"
        />
      </button>
      <div className="flex gap-5">
        {currentCards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 rounded-lg bg-gray-100 p-4"
          >
            <Image
              src={card.imagem}
              width={200}
              height={200}
              alt="imagem card"
              className="full h-32 rounded-lg object-cover"
            />
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-1">
                <Image
                  src={MapPin}
                  width={24}
                  height={24}
                  alt="Pin Map"
                />
                <p className="text-base font-medium text-dark1">
                  {card.local}
                </p>
              </div>
              <p className="text-2xl font-semibold text-main">
                R$ {card.value}
              </p>
            </div>
            <button className="flex w-fit items-center gap-1 rounded-md border border-main p-2 hover:bg-main/20">
              <p className="text-sm font-medium text-main">
                Consultar condições
              </p>
              <Image
                src={ArrowRightBlue}
                width={20}
                height={20}
                alt="Arrow Right"
              />
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={handleNext}
        className="absolute right-2 rounded-lg bg-main p-2"
      >
        <Image
          src={Arrow}
          width={28}
          height={28}
          alt="arrow"
          className="rotate-180"
        />
      </button>
      <div className="mt-3 flex gap-3">
        {Array.from({ length: Math.ceil(cardsData.length / 5) }).map((_, index) => (
          <span
            key={index}
            className={`cursor-pointer rounded-full p-2 ${index === Math.floor(currentIndex / 5) ? 'bg-main' : 'bg-grey3'}`}
            onClick={() => setCurrentIndex(index * 5)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default CardPrices;
