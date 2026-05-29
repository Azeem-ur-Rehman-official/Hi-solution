import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SplineDemo from "@/components/sections/SplineDemo";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black">
      <Navbar />
      <main>
        <SplineDemo/>
        {/* <Hero /> */}
        <Services />
        <Process />
        <WhyChooseUs />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}