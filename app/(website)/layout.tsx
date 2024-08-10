import { Metadata } from 'next';
import { getSettings } from "@/lib/sanity/client";
import Footer from "@/components/footer";
import { urlForImage } from "@/lib/sanity/image";
import Navbar from "@/components/navbar";
import Script from 'next/script';

// Função para gerar metadados de forma síncrona
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

// Layout principal do website
export default async function Layout({ children }: { children: React.ReactNode }) {
  const settingsPromise = getSettings(); // Obtém a promessa
  const settings = await settingsPromise; // Resolve a promessa antes de usar

  return (
    <html lang="en">
      <head>
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window,document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${process.env.NEXT_PUBLIC_PIXEL_ID}');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_PIXEL_ID}&ev=PageView&noscript=1`}
            alt="Facebook Pixel"
          />
        </noscript>
      </head>
      <body>
        <div id="__next">
          <Navbar {...settings} /> {/* Usando os dados resolvidos */}
          <div>{children}</div>
          <Footer {...settings} /> {/* Usando os dados resolvidos */}
        </div>
      </body>
    </html>
  );
}

export const revalidate = 60;
