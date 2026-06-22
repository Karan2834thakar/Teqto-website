import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import About from "../components/sections/About";
import Services from "../components/sections/Services";
import Stats from "../components/sections/Stats";
import Process from "../components/sections/Process";
import CTA from "../components/sections/CTA";
import Footer from "../components/sections/Footer";
import useLenis from "../hooks/useLenis";

export default function Home({ ready }) {
  useLenis();

  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <Hero ready={ready} />
        <About />
        <Services />
        <Stats />
        <Process />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
