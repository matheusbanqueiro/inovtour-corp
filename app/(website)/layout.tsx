import { Metadata } from 'next';
import { getSettings } from "@/lib/sanity/client";
import Footer from "@/components/footer";
import { urlForImage } from "@/lib/sanity/image";
import Navbar from "@/components/navbar";
import Head from 'next/head';
import React from 'react';
import ClientLayout from "@/components/clientLayout";

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
      <Head>
        <title>{settings?.title || "INOVTOUR"}</title>
        <meta name="description" content={settings?.description || "INOVTOUR cooperates with the best travel agencies in the world to provide you with the best travel experience."} />
      </Head>
      <body>
        <div id="__next">
          <Navbar {...settings} /> 
          <ClientLayout gtmId={gtmId} pixelId={pixelId} settings={settings}>
            {children}
          </ClientLayout>
          <Footer {...settings} /> 
        </div>
      </body>
    </html>
  );
}

export const revalidate = 60;
