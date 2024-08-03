import { getSettings } from "@/lib/sanity/client";
import Contact from "./contact";

export default async function ContactPage() {
  const settings = await getSettings();
  console.log("Contact:")
  console.log(settings)
  return <Contact {...settings}/>;
}

export const revalidate = 60;
