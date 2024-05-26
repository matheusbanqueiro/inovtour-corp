import Link from "next/link";
import Container from "@/components/container";
import PostList from "@/components/postlist";
import Hero from "@/components/hero";
import Solutions from "@/components/solutions";
import TravelManagement from "@/components/travelManagement";
import CommitmentSection from "@/components/commitmentSection";
import ExclusiveService from "@/components/exclusiveService";
import InovtourNumbers from "@/components/inovtourNumbers";
import Clients from "@/components/clients";
import ContactForm from "@/components/contactForm";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Solutions />
      <TravelManagement />
      <CommitmentSection />
      <ExclusiveService />
      <InovtourNumbers />
      <Clients />
      <ContactForm />
      <Testimonials />
    </>
  );
}
