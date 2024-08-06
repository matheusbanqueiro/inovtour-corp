import React, { useEffect } from 'react';
import { getSettings } from "@/lib/sanity/client";
import Contact from "./contact";

export default async function ContactPage() {
  const settings = await getSettings();
  
  useEffect(() => {
    window.fbq('track', 'ViewContent', { page: 'ContactPage' });
  }, []);

  return <Contact {...settings}/>;
}

export const revalidate = 60;
