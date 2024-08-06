import { getAllAuthors, getSettings } from "@/lib/sanity/client";
import About from "./about";

export default async function AboutPage() {

  useEffect(() => {
    window.fbq('track', 'ViewContent', { page: 'AboutPage' });
  }, []);


  return <About />;
}

// export const revalidate = 60;
