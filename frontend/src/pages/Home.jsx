import Hero from "../components/hero/Hero";
import About from "../components/sections/About";
import Services from "../components/sections/Services";
import PortfolioHighlight from "../components/sections/PortfolioHighlight";
import Stats from "../components/sections/Stats";
import Process from "../components/sections/Process";
import CareersHighlight from "../components/sections/CareersHighlight";
import CTA from "../components/sections/CTA";
import Footer from "../components/sections/Footer";
import Navbar from "../components/navbar/Navbar";
import useLenis from "../hooks/useLenis";

/**
 * Landing page: an animated hero followed by a highlight of every section of
 * the site. Each block previews a page and routes to its dedicated, full
 * version (About, Services, Portfolio, Careers, Contact).
 */
export default function Home({ ready }) {
  useLenis();

  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <Hero ready={ready} />
        <About />
        <Services />
        <PortfolioHighlight />
        <Stats />
        <Process />
        <CareersHighlight />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
