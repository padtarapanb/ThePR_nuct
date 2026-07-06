import Navbar from "./components/landing/Navbar";
import Hero from "./components/landing/Hero";
import About from "./components/landing/About";
import Activities from "./components/landing/Activities";
import UpcomingEvents from "./components/landing/UpcomingEvents";
import Connect from "./components/landing/Connect";
import Gallery from "./components/landing/Gallery";
import Team from "./components/landing/Team";
import Testimonials from "./components/landing/Testimonials";
import FAQ from "./components/landing/FAQ";
import Footer from "./components/landing/Footer";
import FloatingCTA from "./components/landing/FloatingCTA";
import InstallPWA from "./components/InstallPWA";

export default function App() {
  return (
    <div className="min-h-screen bg-paper font-th">
      <Navbar />
      <Hero />
      <About />
      <Activities />
      <UpcomingEvents />
      <Connect />
      <Gallery />
      <Team />
      <Testimonials />
      <FAQ />
      <Footer />
      <FloatingCTA />
      <InstallPWA />
    </div>
  );
}
