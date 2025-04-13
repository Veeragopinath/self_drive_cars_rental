import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import BestCars from './components/BestCars';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutUs />
      <Features />
      <HowItWorks />
      <BestCars />
    </main>
  );
}
