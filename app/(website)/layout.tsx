import { Metadata } from 'next';
import { getSettings } from "@/lib/sanity/client";
import Footer from "@/components/footer";
import { urlForImage } from "@/lib/sanity/image";
import Navbar from "@/components/navbar";

// Metadata é gerado de forma síncrona
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
      canonical: settings?.url || "https://default-url.com", // Definindo a URL canônica
      // Você pode adicionar outras URLs alternativas aqui, se necessário
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

// Função Layout não deve ser async
export default async function Layout({ children }: { children: React.ReactNode }) {
  const settings = await getSettings(); // Resolva a Promise aqui

  return (
    <div id="__next">
      <Navbar {...settings} />
      <div>{children}</div>
      <Footer {...settings} />
    </div>
  );
}

export const revalidate = 60;
