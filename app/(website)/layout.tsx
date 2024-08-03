import { getSettings } from "@/lib/sanity/client";
import Footer from "@/components/footer";
import { urlForImage } from "@/lib/sanity/image";
import Navbar from "@/components/navbar";
import Head from "next/head";

async function sharedMetaData(params) {
  const settings = await getSettings();

  return {
    title: {
      default: settings?.title || "INOVTOUR",
      template: "%s | Stablo"
    },
    description: settings?.description || "INOVTOUR cooperates with the best travel agencies in the world to provide you with the best travel experience.",
    keywords: ["travel", "tourism", "vacation", "trip111111"],
    authors: [{ name: "Govinda Systems DAO" }],
    canonical: settings?.url,
    openGraph: {
      images: [
        {
          url: urlForImage(settings?.openGraphImage)?.src || "/img/opengraph.jpg",
          width: 800,
          height: 600
        }
      ]
    },
    twitter: {
      title: settings?.title || "INOVTOUR",
      card: "summary_large_image"
    },
    robots: {
      index: true,
      follow: true
    },
    additionalMetaTags: [
      {
        name: "facebook-domain-verification",
        content: process.env.NEXT_PUBLIC_META_TAG
      }
    ]
  };
}

export async function generateMetadata({ params }) {
  return await sharedMetaData(params);
}

export default async function Layout({ children, params }) {
  const settings = await getSettings();
  return (
    <div id="__next">
      <Head>
        <meta name="facebook-domain-verification" content={process.env.NEXT_PUBLIC_META_TAG} />
      </Head>
      <Navbar {...settings} />
      <div>{children}</div>
      <Footer {...settings} />
    </div>
  );
}

export const revalidate = 60;
