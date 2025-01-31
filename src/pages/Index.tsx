import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MissionTimeline from "@/components/MissionTimeline";
import RocketExplorer from "@/components/RocketExplorer";
import PlanetExplorer from "@/components/PlanetExplorer";

const Index = () => {
  return (
    <main className="min-h-screen bg-space-black text-white">
      <Navbar />
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <RocketExplorer />
        <PlanetExplorer />
      </div>
      <MissionTimeline />
    </main>
  );
};

export default Index;