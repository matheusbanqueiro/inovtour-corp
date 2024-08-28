"use client";

import React, { useEffect } from 'react';

const EventTracker = ({ eventName, eventParams = {} }) => {
  useEffect(() => {
    if (!window.fbq) {
      throw new Error('Facebook Pixel is not initialized.');
    }

    window.fbq('track', eventName, eventParams);
    console.log(`Facebook Pixel event sent: ${eventName}`, eventParams);

    if (!window.dataLayer) {
      throw new Error('Google Tag Manager is not initialized.');
    }

    window.dataLayer.push({
      event: eventName,
      ...eventParams,
    });
    console.log(`GTM event sent: ${eventName}`, eventParams);

  }, [eventName, eventParams]);

  return null;
};

export default EventTracker;
