"use client";

import React, { useEffect } from 'react';
import About from "./about";

export default function AboutPage() {

  useEffect(() => {
    window.fbq('track', 'ViewContent', { page: 'AboutPage' });
  }, []);

  return <About />;
}