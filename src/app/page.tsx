import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Statistics from "@/components/sections/Statistics";
import Projects from "@/components/sections/Projects";
import Clients from "@/components/sections/Clients";
import Expertise from "@/components/sections/Expertise";
import BottomCTA from "@/components/sections/BottomCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Statistics />
        <Projects />
        <Clients />
        <Expertise />
        <BottomCTA />
      </main>
      <Footer />
    </>
  );
}
