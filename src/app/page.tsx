import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import BestCars from './components/BestCars';

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="min-h-screen pt-20">
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <AboutUs />
        </section>
        <section id="features">
          <Features />
        </section>
        <section id="how-it-works">
          <HowItWorks />
        </section>
        <section id="best-cars">
          <BestCars />
        </section>
        {/* Add a Footer component here later if needed */}
      </main>
    </>
  );
}
