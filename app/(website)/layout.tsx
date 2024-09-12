import { Metadata } from 'next';
import { getSettings } from "@/lib/sanity/client";
import Footer from "@/components/footer";
import { urlForImage } from "@/lib/sanity/image";
import Navbar from "@/components/navbar";
import ConsentManager from "@/components/consentManager";  // Novo componente de cliente

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSettings();

  return {
    title: {
      default: settings?.title || "INOVTOUR",
      template: "%s | Stablo"
    },
    description: settings?.description || "INOVTOUR cooperates with the best travel agencies in the world to provide you with the best travel experience.",
    keywords: ["travel", "tourism", "vacation", "trip"],
    authors: [{ name: "Govinda Systems DAO" }],
    alternates: {
      canonical: settings?.url || "https://default-url.com",
    },
    openGraph: {
      images: [
        {
          url: urlForImage(settings?.openGraphImage)?.src || "/img/opengraph.jpg",
          width: 800,
          height: 600,
        }
      ],
    },
    twitter: {
      title: settings?.title || "INOVTOUR",
      card: "summary_large_image",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function Layout({ children }: { children: React.ReactNode }) {
  const settingsPromise = getSettings();
  const settings = await settingsPromise; 

  return (
    <html lang="en">
      <head>
        <title>{settings?.title || "INOVTOUR"}</title>
        <meta name="description" content={settings?.description || "INOVTOUR cooperates with the best travel agencies in the world to provide you with the best travel experience."} />
      </head>
      <body>
        <div id="__next">
          <Navbar {...settings} />
          {children}
          <Footer {...settings} />

          {/* Componente que gerencia o consentimento e rastreamento */}
          <ConsentManager />
        </div>
      </body>
    </html>
  );
}
