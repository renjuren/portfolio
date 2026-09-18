import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AmbientBackground from "@/components/effects/AmbientBackground";
import GreenRibbon from "@/components/effects/GreenRibbon";
import Hero from "@/components/sections/Hero";
import SectionTransition from "@/components/sections/SectionTransition";
import About from "@/components/sections/About";
import Statistics from "@/components/sections/Statistics";
import Projects from "@/components/sections/Projects";
import Clients from "@/components/sections/Clients";
import Expertise from "@/components/sections/Expertise";
import BottomCTA from "@/components/sections/BottomCTA";

export default function Home() {
  return (
    <>
      <AmbientBackground />
      <GreenRibbon />
      <Header />
      <main>
        <Hero />
        <SectionTransition text="Crafting systems that scale" />
        <About />
        <Statistics />
        <Projects />
        <Clients />
        <SectionTransition text="Deep expertise" />
        <Expertise />
        <BottomCTA />
      </main>
      <Footer />
    </>
  );
}
