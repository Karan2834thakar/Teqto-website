import { useState, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import CustomCursor from "./components/CustomCursor";
import IntroOverlay from "./components/loader/IntroOverlay";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import { useLayoutEffect } from "react";

const Atmosphere = lazy(() => import("./components/background/Atmosphere"));

function ScrollToTop() {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppInner() {
  const [introDone, setIntroDone] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <div className="grain relative">
      <CustomCursor />
      <Suspense fallback={null}>
        <Atmosphere />
      </Suspense>
      <Routes>
        <Route path="/" element={<Home ready={introDone} />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
      {isHome && !introDone && (
        <IntroOverlay onComplete={() => setIntroDone(true)} />
      )}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppInner />
    </BrowserRouter>
  );
}