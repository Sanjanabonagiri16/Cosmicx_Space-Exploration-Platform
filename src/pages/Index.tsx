import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MissionTimeline from "@/components/MissionTimeline";
import RocketLab from "@/components/RocketLab";
import PlanetExplorer from "@/components/PlanetExplorer";
import AIChatbot from "@/components/AIChatbot";
import SpaceWeather from "@/components/SpaceWeather";
import AstroNews from "@/components/AstroNews";
import SpaceTicketBooking from "@/components/SpaceTicketBooking";
import LiveDashboard from "@/components/LiveDashboard";

const Index = () => {
  return (
    <main className="min-h-screen bg-space-black text-white">
      <Navbar />
      <Hero />
      <MissionTimeline />
      <LiveDashboard />
      <div className="container mx-auto px-4 py-8 space-y-8">
        <RocketLab />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AIChatbot />
          <SpaceWeather />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AstroNews />
          <SpaceTicketBooking />
        </div>
        <PlanetExplorer />
      </div>
    </main>
  );
};

export default Index;