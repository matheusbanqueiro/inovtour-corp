import { getAllAuthors, getSettings } from "@/lib/sanity/client";
import About from "./about";

export default async function AboutPage() {
  return <About />;
}

// export const revalidate = 60;
