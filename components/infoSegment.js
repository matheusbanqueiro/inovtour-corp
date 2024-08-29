"use client";

import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';
import arrowRight from "@/components/icons/arrow-right.svg";

const InfoSegment = ({ imgSrc, imgAlt, isImgRight = false, title, mainParagraph, secondaryParagraph, buttonText, buttonLink }) => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-900">
            {title}
          </h3>
        </div>

        <div className={`mt-4 flex flex-col ${isImgRight ? 'md:flex-row-reverse' : 'md:flex-row'} items-center`}>
          <div className="md:w-1/2">
            <Image
              src={imgSrc}
              alt={imgAlt}
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className="mt-4 md:mt-0 md:w-1/2 md:pl-8">
            <p className="text-gray-700 mb-4">
              {mainParagraph}
            </p>
            <p className="text-gray-700 mb-4">
              {secondaryParagraph}
            </p>
            <Link href={buttonLink} passHref>
              <button className="flex bg-main items-center gap-2 text-white px-6 py-3 rounded hover:bg-main/90">
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

InfoSegment.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  isImgRight: PropTypes.bool,
  title: PropTypes.string.isRequired,
  mainParagraph: PropTypes.string.isRequired,
  secondaryParagraph: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonLink: PropTypes.string.isRequired
};

InfoSegment.defaultProps = {
  isImgRight: false
};

export default InfoSegment;
