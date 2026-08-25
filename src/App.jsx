import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import HeroBannerShowcase from './components/sections/HeroBannerShowcase';
import MetricsStrip from './components/sections/MetricsStrip';
import About from './components/sections/About';
import WhyGrowMore from './components/sections/WhyGrowMore';
import Solutions from './components/sections/Solutions';
import TechnologyACS from './components/sections/TechnologyACS';
import NativeCalling from './components/sections/NativeCalling';
import CampaignEngine from './components/sections/CampaignEngine';
import CustomerSegmentation from './components/sections/CustomerSegmentation';
import FieldOperations from './components/sections/FieldOperations';
import SecurityCompliance from './components/sections/SecurityCompliance';
import IndiaCoverage from './components/sections/IndiaCoverage';
import TeamStructure from './components/sections/TeamStructure';
import Clients from './components/sections/Clients';
import InfrastructureGallery from './components/sections/InfrastructureGallery';
import FinalCTA from './components/sections/FinalCTA';
import Contact from './components/sections/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#334155] flex flex-col font-sans selection:bg-[#0057A8] selection:text-white">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Corporate Content Sections */}
      <main className="flex-grow">
        <Hero />
        <HeroBannerShowcase />
        <MetricsStrip />
        <About />
        <WhyGrowMore />
        <Solutions />
        <TechnologyACS />
        <CampaignEngine />
        <NativeCalling />
        <CustomerSegmentation />
        <FieldOperations />
        <SecurityCompliance />
        <IndiaCoverage />
        <TeamStructure />
        <Clients />
        <InfrastructureGallery />
        <FinalCTA />
        <Contact />
      </main>

      {/* Enterprise Dark Navy Footer */}
      <Footer />
    </div>
  );
}
