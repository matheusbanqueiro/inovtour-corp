"use client";

import Script from 'next/script';

export default function GoogleTagManager({ gtmId }: { gtmId: string }) {
  if (!gtmId) return null;

  return (
    <>
      <Script id="gtm" strategy="afterInteractive" src={`https://www.googletagmanager.com/gtm.js?id=${gtmId}`} />
      <noscript>
        <iframe src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`} height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe>
      </noscript>
    </>
  );
}
