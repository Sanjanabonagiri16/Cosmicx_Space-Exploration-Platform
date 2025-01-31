import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MissionTimeline from "@/components/MissionTimeline";

const Index = () => {
  return (
    <main className="min-h-screen bg-space-black text-white">
      <Navbar />
      <Hero />
      <MissionTimeline />
    </main>
  );
};

export default Index;