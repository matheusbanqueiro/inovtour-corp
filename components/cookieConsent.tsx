"use client";

import React, { useState, useEffect } from "react";

export default function CookieConsent({ onAccept }: { onAccept: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (consent) {
      setIsVisible(false);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
    onAccept();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 z-50">
      <div className="flex justify-between items-center">
        <p>Este site usa cookies para melhorar sua experiência. Ao continuar navegando, você concorda com o uso de cookies.</p>
        <button
          onClick={handleAccept}
          className="bg-blue-500 text-white px-4 py-2 rounded ml-4"
        >
          Aceitar
        </button>
      </div>
    </div>
  );
}
