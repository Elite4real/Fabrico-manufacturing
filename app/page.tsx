import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import Pricing from "@/components/Pricing";
import Integrations from "@/components/Integrations";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
    {/* am coding */}
      <Header />
      <main>
        <Hero />
        <Services />
        <Benefits />
        <Pricing />
        <Integrations />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
