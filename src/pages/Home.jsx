import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Stats from "../components/Stats";
import HowItWorks from "../components/HowItWorks";

const Home = () => {
  return (
    <div className="bg-black min-h-screen">

      <Navbar />

      <Hero />

      <Features />

      
      <Stats />

      <HowItWorks />

      <Footer />

    </div>
  );
};

export default Home;