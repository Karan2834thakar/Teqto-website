import { useState, lazy, Suspense } from "react";
import CustomCursor from "./components/CustomCursor";
import IntroOverlay from "./components/loader/IntroOverlay";
import Home from "./pages/Home";

// Three.js is heavy — split it out so the intro paints instantly while the
// atmosphere (which the intro covers anyway) streams in behind it.
const Atmosphere = lazy(() => import("./components/background/Atmosphere"));

function App() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <div className="grain relative">
      <CustomCursor />

      <Suspense fallback={null}>
        <Atmosphere />
      </Suspense>

      <Home ready={introDone} />

      {!introDone && <IntroOverlay onComplete={() => setIntroDone(true)} />}
    </div>
  );
}

export default App;
