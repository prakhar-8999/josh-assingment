import Contact from "./components/Contact";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Recommendations from "./components/Recommendations";

function App() {
  return (
    <div className="bg-background">
      <Navbar />
      <HeroSection />
      <Projects />
      <Recommendations />
      <Contact />
    </div>
  );
}

export default App;
