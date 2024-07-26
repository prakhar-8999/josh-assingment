import Contact from "../components/Contact";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Recommendations from "../components/Recommendations";
import Sponsores from "../components/Sponsores";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Projects />
      <Recommendations />
      <Contact />
      <Sponsores />
      <Footer />
    </>
  );
};

export default Home;
