import Navbar from "./navbar/Navbar";
import Footer from "./sections/Footer";
import useLenis from "../hooks/useLenis";

export default function PageLayout({ children }) {
  useLenis();
  return (
    <>
      <Navbar />
      <main className="relative z-10 pt-32">
        {children}
      </main>
      <Footer />
    </>
  );
}