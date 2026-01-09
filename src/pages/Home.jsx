import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";
import GridBackground from "../components/layout/GridBackground";
import ScrollNavigator from "../components/layout/ScrollNavigator";

const Home = () => {
  return (
    <main>
      <GridBackground />
      <ScrollNavigator />
      <div className="space-y-20 md:space-y-32">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </main>
  );
};

export default Home;
