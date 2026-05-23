import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Gallery from "@/components/sections/Gallery";
import Location from "@/components/sections/Location";
import AppointmentForm from "@/components/sections/AppointmentForm";
import WhatsAppChatWidget from "@/components/chatbot/ChatWidget";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Location />
        <AppointmentForm />
        <WhatsAppChatWidget />
      </main>
      <Footer />
    </>
  );
}
