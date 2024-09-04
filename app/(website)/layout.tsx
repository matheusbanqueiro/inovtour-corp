import { Metadata } from 'next';
import { getSettings } from "@/lib/sanity/client";
import Footer from "@/components/footer";
import { urlForImage } from "@/lib/sanity/image";
import Navbar from "@/components/navbar";
import GoogleTagManager from "@/components/googleTagManager";
import FacebookPixel from "@/components/facebookPixel";
import CookieConsent from "@/components/cookieConsent";  // Importando o componente CookieConsent


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
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  const pixelId = process.env.NEXT_PUBLIC_PIXEL_ID;

  return (
    <html lang="en">
      <head>
        <title>{settings?.title || "INOVTOUR"}</title>
        <meta name="description" content={settings?.description || "INOVTOUR cooperates with the best travel agencies in the world to provide you with the best travel experience."} />
        {/* Remova os componentes do head para evitar erros de hidratação */}
      </head>
      <body>
        <div id="__next">
          <Navbar {...settings} />
          {children}
          <Footer {...settings} />
          
          {/* Renderize os scripts somente se o consentimento foi dado */}
          {gtmId && <GoogleTagManager gtmId={gtmId} />}
          {pixelId && <FacebookPixel pixelId={pixelId} />}
        </div>
      </body>
    </html>
  );
}

export const revalidate = 60;
