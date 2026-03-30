import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { ImpactMetrics } from "@/components/sections/ImpactMetrics";
import { GastronomicGallery } from "@/components/sections/GastronomicGallery";
import { BrandSlider } from "@/components/sections/BrandSlider";
import { ContactForm } from "@/components/sections/ContactForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-background">
      <Navbar />
      <Hero />
      <ImpactMetrics />
      <GastronomicGallery />
      <BrandSlider />
      <ContactForm />
      <Footer />
    </main>
  );
}
