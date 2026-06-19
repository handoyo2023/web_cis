import CTA from "./components/CTA";
import CoreValues from "./components/CoreValues";
import Ecosystem from "./components/Ecosystem";
import ExecutiveOverview from "./components/ExecutiveOverview";
import Experience from "./components/Experience";
import Expertise from "./components/Expertise";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Team from "./components/Team";
import WhyCIS from "./components/WhyCIS";

export default function App() {
  return (
    <div className="relative overflow-hidden bg-white text-[#0a2444]">
      <div className="pointer-events-none absolute inset-x-0 top-[32rem] h-[32rem] bg-[radial-gradient(circle_at_top_left,_rgba(170,207,247,0.22),_transparent_58%)]" />
      <div className="pointer-events-none absolute right-0 top-[120rem] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,_rgba(240,196,90,0.1),_transparent_68%)] blur-3xl" />
      <Navbar />
      <Hero />
      <ExecutiveOverview />
      <CoreValues />
      <Expertise />
      <WhyCIS />
      <Ecosystem />
      <Experience />
      <Services />
      <Team />
      <CTA />
      <Footer />
    </div>
  );
}
