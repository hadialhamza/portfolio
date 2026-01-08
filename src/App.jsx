// import Link from "./components/ui/Link";
import { ReactLenis } from "lenis/react";
import { Toaster } from "sonner";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GridBackground from "./components/GridBackground";

function App() {
  return (
    <ReactLenis root>
      <div>
        <Toaster position="top-center" richColors />
        <GridBackground />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </ReactLenis>
  );
}

export default App;
