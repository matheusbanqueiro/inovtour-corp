"use client";

import React, { useState } from 'react';
import ClientWrapper from "@/components/clientWrapper";
import CookieConsent from "@/components/cookieConsent";

export default function ClientLayout({
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
  const [consentGiven, setConsentGiven] = useState(false);

  const handleConsent = () => {
    setConsentGiven(true);
  };

  return (
    <>
      {consentGiven ? (
        <ClientWrapper gtmId={gtmId} pixelId={pixelId} settings={settings}>
          {children}
        </ClientWrapper>
      ) : (
        <>
          {children}
          <CookieConsent onAccept={handleConsent} />
        </>
      )}
    </>
  );
}
