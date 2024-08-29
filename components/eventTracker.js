"use client";

import React, { useEffect } from 'react';

const EventTracker = ({ eventName, eventParams = {} }) => {
  useEffect(() => {
    console.log('EventTracker initialized', { eventName, eventParams });

    const checkFbqInterval = setInterval(() => {
      if (window.fbq) {
        console.log('Facebook Pixel found, sending event...');
        window.fbq('track', eventName, eventParams);
        console.log(`Facebook Pixel event sent: ${eventName}`, eventParams);
        clearInterval(checkFbqInterval);
      } else {
        console.log('Facebook Pixel (fbq) not found yet...');
      }
    }, 500);

    const checkGtmInterval = setInterval(() => {
      if (window.dataLayer) {
        console.log('Google Tag Manager found, sending event...');
        window.dataLayer.push({
          event: eventName,
          ...eventParams,
        });
        console.log(`GTM event sent: ${eventName}`, eventParams);
        clearInterval(checkGtmInterval);
      } else {
        console.log('Google Tag Manager (dataLayer) not found yet...');
      }
    }, 500);

    // Aumentar o intervalo de checagem
    setTimeout(() => {
      if (checkGtmInterval) {
        console.warn('Google Tag Manager (dataLayer) not found after extended waiting period.');
        clearInterval(checkGtmInterval);
      }
    }, 15000); // 15 segundos

    return () => {
      console.log('Cleaning up intervals...');
      clearInterval(checkFbqInterval);
      clearInterval(checkGtmInterval);
    };
  }, [eventName, eventParams]);

  return null;
};

export default EventTracker;
