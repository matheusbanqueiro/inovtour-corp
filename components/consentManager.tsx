// components/consentManager.tsx (novo componente)

"use client";  // Isso permite o uso de hooks como useState e useEffect

import { useState, useEffect } from 'react';
import GoogleTagManager from './googleTagManager';
import FacebookPixel from './facebookPixel';
import CookieConsent from './cookieConsent';

export default function ConsentManager() {
  const [consentGiven, setConsentGiven] = useState(false);
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  const pixelId = process.env.NEXT_PUBLIC_PIXEL_ID;

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (consent === "true") {
      setConsentGiven(true);  // Consentimento foi dado previamente
    }
  }, []);

  const handleConsentAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setConsentGiven(true);  // Ativar scripts após consentimento
  };

  return (
    <>
      {/* Renderizar os scripts se o consentimento foi dado */}
      {consentGiven && gtmId && <GoogleTagManager gtmId={gtmId} />}
      {consentGiven && pixelId && <FacebookPixel pixelId={pixelId} />}
      
      {/* Exibir o banner de consentimento */}
      {!consentGiven && <CookieConsent onAccept={handleConsentAccept} />}
    </>
  );
}
