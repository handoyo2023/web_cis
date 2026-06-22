import { useEffect, useState } from "react";
import CTA from "./components/CTA";
import CoreValues from "./components/CoreValues";
import Ecosystem from "./components/Ecosystem";
import ExecutiveOverview from "./components/ExecutiveOverview";
import Experience from "./components/Experience";
import Expertise from "./components/Expertise";
import Footer from "./components/Footer";
import DigitalDetailPage from "./components/DigitalDetailPage";
import Hero from "./components/Hero";
import HumanCapitalDetailPage from "./components/HumanCapitalDetailPage";
import Navbar from "./components/Navbar";
import RoboticsDetailPage from "./components/RoboticsDetailPage";
import Services from "./components/Services";
import ServicesClosing from "./components/ServicesClosing";
import Team from "./components/Team";
import WhyCIS from "./components/WhyCIS";

export default function App() {
  const [hash, setHash] = useState(() => window.location.hash);

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const roboticsSlug = hash.startsWith("#/robotics/") ? hash.replace("#/robotics/", "") : "";
  const digitalSlug = hash.startsWith("#/digital/") ? hash.replace("#/digital/", "") : "";
  const humanCapitalSlug = hash.startsWith("#/human-capital/") ? hash.replace("#/human-capital/", "") : "";

  if (roboticsSlug) {
    return (
      <div className="relative min-h-screen overflow-hidden bg-white text-[#0a2444]">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[26rem] bg-[radial-gradient(circle_at_top_left,_rgba(170,207,247,0.24),_transparent_52%)]" />
        <div className="pointer-events-none absolute right-0 top-[24rem] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,_rgba(240,196,90,0.1),_transparent_68%)] blur-3xl" />
        <Navbar />
        <RoboticsDetailPage slug={roboticsSlug} />
        <Footer />
      </div>
    );
  }

  if (digitalSlug) {
    return (
      <div className="relative min-h-screen overflow-hidden bg-white text-[#0a2444]">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[26rem] bg-[radial-gradient(circle_at_top_left,_rgba(170,207,247,0.24),_transparent_52%)]" />
        <div className="pointer-events-none absolute right-0 top-[24rem] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,_rgba(240,196,90,0.1),_transparent_68%)] blur-3xl" />
        <Navbar />
        <DigitalDetailPage slug={digitalSlug} />
        <Footer />
      </div>
    );
  }

  if (humanCapitalSlug) {
    return (
      <div className="relative min-h-screen overflow-hidden bg-white text-[#0a2444]">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[26rem] bg-[radial-gradient(circle_at_top_left,_rgba(170,207,247,0.24),_transparent_52%)]" />
        <div className="pointer-events-none absolute right-0 top-[24rem] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,_rgba(240,196,90,0.1),_transparent_68%)] blur-3xl" />
        <Navbar />
        <HumanCapitalDetailPage slug={humanCapitalSlug} />
        <Footer />
      </div>
    );
  }

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
      <ServicesClosing />
      <Team />
      <CTA />
      <Footer />
    </div>
  );
}
