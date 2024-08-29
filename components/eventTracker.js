"use client";

import React, { useEffect } from 'react';

const EventTracker = ({ eventName, eventParams = {} }) => {
  useEffect(() => {
    const checkFbqInterval = setInterval(() => {
      if (window.fbq) {
        window.fbq('track', eventName, eventParams);
        console.log(`Facebook Pixel event sent: ${eventName}`, eventParams);
        clearInterval(checkFbqInterval);
      }
    }, 500); // Verifica a cada 500ms

    const checkGtmInterval = setInterval(() => {
      if (window.dataLayer) {
        window.dataLayer.push({
          event: eventName,
          ...eventParams,
        });
        console.log(`GTM event sent: ${eventName}`, eventParams);
        clearInterval(checkGtmInterval);
      }
    }, 500); // Verifica a cada 500ms

    return () => {
      clearInterval(checkFbqInterval);
      clearInterval(checkGtmInterval);
    };
  }, [eventName, eventParams]);

  return null;
};

export default EventTracker;
