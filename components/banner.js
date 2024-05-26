"use client";

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Banner = ({ images, title, subtitle }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    console.log('Banner parameters:', { images, title, subtitle });
  }, [images, title, subtitle]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  if (!images || images.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ ...styles.container, backgroundImage: `url(${images[currentIndex]})` }}>
      <div style={styles.overlay}>
        <h1 style={styles.title}>{title}</h1>
        <p style={styles.subtitle}>{subtitle}</p>
        <div style={styles.controls}>
          <button onClick={handlePrev} style={styles.button}>Prev</button>
          <button onClick={handleNext} style={styles.button}>Next</button>
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

const styles = {
  container: {
    position: 'relative',
    height: '275px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textAlign: 'center',
    padding: '0 20px',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: '16px',
    marginTop: '10px',
  },
  controls: {
    marginTop: '20px',
  },
  button: {
    backgroundColor: 'white',
    color: 'black',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
    margin: '0 10px',
  },
};

export default Banner;
