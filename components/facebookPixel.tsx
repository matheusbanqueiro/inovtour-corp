"use client";

import Script from "next/script";
import React, { useEffect } from "react";

export default function FacebookPixel({ pixelId }: { pixelId: string }) {
  useEffect(() => {
    if (!window.fbq) {
      window.fbq = function () {
        window.fbq.callMethod
          ? window.fbq.callMethod.apply(window.fbq, arguments)
          : window.fbq.queue.push(arguments);
      };
      window.fbq.push = window.fbq;
      window.fbq.loaded = true;
      window.fbq.version = "2.0";
      window.fbq.queue = [];
      window.fbq('init', pixelId);
      window.fbq('track', 'PageView');
    }
  }, [pixelId]);

  return (
    <>
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        src={`https://connect.facebook.net/en_US/fbevents.js`}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
          alt="Facebook Pixel"
        />
      </noscript>
    </>
  );
}
