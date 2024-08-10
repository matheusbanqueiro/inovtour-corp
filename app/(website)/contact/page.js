"use client";

import React, { useEffect, useState } from 'react';
import { getSettings } from "@/lib/sanity/client";
import Contact from "./contact";

export default function ContactPage() {
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    const fetchSettings = async () => {
      const settingsData = await getSettings();
      setSettings(settingsData);
    };

    fetchSettings();

    window.fbq('track', 'ViewContent', { page: 'ContactPage' });
  }, []);

  if (!settings) {
    return <div>Loading...</div>; // Ou qualquer outro estado de carregamento
  }

  return <Contact {...settings} />;
}
