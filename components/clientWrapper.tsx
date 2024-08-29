"use client";

import React, { useEffect, useState } from "react";
import Script from "next/script";

export default function ClientWrapper({
  children,
  gtmId,
  pixelId,
  settings,
}: {
  children: React.ReactNode;
  gtmId: string | undefined;
  pixelId: string | undefined;
  settings: any;
}) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    console.log("ClientWrapper mounted, checking if running on client...");
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      console.log("Running on client-side.");
      if (gtmId) {
        console.log("GTM ID provided:", gtmId);
      } else {
        console.warn("No GTM ID provided.");
      }

      if (pixelId) {
        console.log("Pixel ID provided:", pixelId);
      } else {
        console.warn("No Pixel ID provided.");
      }
    }
  }, [isClient, gtmId, pixelId]);

  return (
    <>
      {isClient && pixelId && (
        <>
          <Script
            id="fb-pixel"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                try {
                  console.log('Attempting to initialize Facebook Pixel...');
                  !function(f,b,e,v,n,t,s)
                  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                  n.queue=[];t=b.createElement(e);t.async=!0;
                  t.src=v;s=b.getElementsByTagName(e)[0];
                  s.parentNode.insertBefore(t,s)}(window,document,'script',
                  'https://connect.facebook.net/en_US/fbevents.js');
                  fbq('init', '${pixelId}');
                  console.log('Facebook Pixel initialized successfully with ID:', '${pixelId}');
                } catch (err) {
                  console.error('Failed to initialize Facebook Pixel:', err);
                }
              `,
            }}
          />
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${pixelId}&noscript=1`}
              alt="Facebook Pixel"
            />
          </noscript>
        </>
      )}

      {isClient && gtmId && (
        <>
          <Script
            id="gtm"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                try {
                  console.log('Attempting to initialize Google Tag Manager...');
                  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','${gtmId}');
                  console.log('GTM initialized successfully with ID:', '${gtmId}');
                } catch (err) {
                  console.error('Failed to initialize GTM:', err);
                }
              `,
            }}
          />
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
        </>
      )}

      {children}
    </>
  );
}
