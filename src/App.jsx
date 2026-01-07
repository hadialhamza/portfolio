// import Link from "./components/ui/Link";
import { ReactLenis } from "lenis/react";
// import Link from "./components/ui/Link";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <ReactLenis root>
      <div>
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
