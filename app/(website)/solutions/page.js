import React, { useEffect } from 'react';
import Solutions from "./solutions";

export default async function SolutionsPage() {
  useEffect(() => {
    window.fbq('track', 'ViewContent', { page: 'SolutionsPage' });
  }, []);

  return <Solutions />;
}
