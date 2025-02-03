import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

const Index = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be implemented later
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />

      {/* Planets Section */}
      <section id="planets" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-blue-500">Explore Our Solar System</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'].map((planet) => (
              <Card key={planet} className="bg-gray-900/50 p-6 backdrop-blur-lg border-blue-500/20 hover:scale-105 transition-transform">
                <h3 className="text-2xl font-semibold mb-4 text-blue-400">{planet}</h3>
                <p className="text-gray-300">
                  Discover the mysteries of {planet} and its unique characteristics in our solar system.
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-blue-500">About CosmicX</h2>
          <Card className="bg-gray-900/50 p-6 backdrop-blur-lg border-blue-500/20">
            <h3 className="text-2xl font-semibold mb-4 text-blue-400">Our Mission</h3>
            <p className="text-gray-300 mb-6">
              CosmicX is dedicated to making space exploration and education accessible to everyone. 
              Through cutting-edge technology and interactive experiences, we bring the wonders of the 
              universe right to your screen.
            </p>
            <h3 className="text-2xl font-semibold mb-4 text-blue-400">Features</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Interactive Space Learning Center</li>
              <li>AR Space Lessons</li>
              <li>3D Astronaut Training Simulation</li>
              <li>Space-themed Mini-Games</li>
              <li>Exclusive NFT Collections</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-blue-500">Contact Us</h2>
          <Card className="bg-gray-900/50 p-6 backdrop-blur-lg border-blue-500/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="bg-gray-800/50 border-blue-500/20"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="bg-gray-800/50 border-blue-500/20"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message..."
                  className="bg-gray-800/50 border-blue-500/20 min-h-[150px]"
                />
              </div>

              <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </Card>

          <Card className="mt-8 bg-gray-900/50 p-6 backdrop-blur-lg border-blue-500/20">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">Other Ways to Reach Us</h3>
            <div className="space-y-2 text-gray-300">
              <p>Email: contact@cosmicx.space</p>
              <p>Twitter: @CosmicX_Space</p>
              <p>Discord: Join our community</p>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
};

export default Index;