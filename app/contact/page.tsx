import Navbar from "@/components/Navbar";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-black">
      <Navbar />
      <main>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
