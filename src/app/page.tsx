import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Stewardship from "@/components/Stewardship";
import Projects from "@/components/Projects";
import Community from "@/components/Community";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <Philosophy />
      <Stewardship />
      <Projects />
      <Community />
      <Footer />
    </main>
  );
}
