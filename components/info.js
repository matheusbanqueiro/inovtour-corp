"use client";

import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';
import arrowRight from "@/components/icons/arrow-right.svg";

const Info = ({ imgSrc, imgAlt, isImgRight = false, title, mainParagraph, secondaryParagraph, buttonText, buttonLink }) => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <div className="text-center">
          {/* Ajuste o tamanho do título aqui */}
          <h2 className="text-4xl font-bold text-gray-900 sm:text-1xl md:text-1xl">
            {title}
          </h2>
        </div>

        {/* Conteúdo principal */}
        <div className={`mt-12 flex flex-col ${isImgRight ? 'md:flex-row-reverse' : 'md:flex-row'} items-center`}>
          <div className="md:w-1/2">
            <Image
              src={imgSrc}
              alt={imgAlt}
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="mt-8 md:mt-0 md:w-1/2 md:pl-12">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {mainParagraph}
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {secondaryParagraph}
            </p>
            <Link href={buttonLink} passHref>
              <button className="flex bg-main items-center gap-2 text-white px-6 py-3 rounded hover:bg-main/90 transition-all duration-300 ease-in-out shadow-md">
                {buttonText}
                <Image
                  src={arrowRight}
                  alt="arrow"
                  width={18}
                  height={18}
                />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Info.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  isImgRight: PropTypes.bool,
  title: PropTypes.string.isRequired,
  mainParagraph: PropTypes.string.isRequired,
  secondaryParagraph: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonLink: PropTypes.string.isRequired
};

Info.defaultProps = {
  isImgRight: false
};

export default Info;
