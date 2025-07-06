import Navbar from "@/components/layout/nav";
import Hero from "@/components/landing/Hero";
import About from "@/components/landing/about";
import Kelebihan from "@/components/landing/kelebihan";
import PreviewSection from "@/components/landing/preview";
import WhatsappContact from "@/components/landing/whatsapp";
import Footer from "@/components/layout/footer";
import VideoSection from "@/components/landing/video";


export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Kelebihan/>
      <PreviewSection/>
      <VideoSection videoSrc="/video2.mp4"/>
      <WhatsappContact/>
      <Footer/>
    </div>
  );
}