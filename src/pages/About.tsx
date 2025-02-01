import React from 'react';
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen pt-20 px-4 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-500">About CosmicX</h1>
        
        <Card className="bg-gray-900/50 p-6 mb-8 backdrop-blur-lg border-blue-500/20">
          <h2 className="text-2xl font-semibold mb-4 text-blue-400">Our Mission</h2>
          <p className="text-gray-300 mb-4">
            CosmicX is dedicated to making space exploration and education accessible to everyone. 
            Through cutting-edge technology and interactive experiences, we bring the wonders of the 
            universe right to your screen.
          </p>
        </Card>

        <Card className="bg-gray-900/50 p-6 mb-8 backdrop-blur-lg border-blue-500/20">
          <h2 className="text-2xl font-semibold mb-4 text-blue-400">Features</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Interactive Space Learning Center</li>
            <li>AR Space Lessons</li>
            <li>3D Astronaut Training Simulation</li>
            <li>Space-themed Mini-Games</li>
            <li>Exclusive NFT Collections</li>
          </ul>
        </Card>

        <Card className="bg-gray-900/50 p-6 backdrop-blur-lg border-blue-500/20">
          <h2 className="text-2xl font-semibold mb-4 text-blue-400">Coming Soon</h2>
          <p className="text-gray-300">
            Stay tuned for exciting new features including Web3 integration for NFTs, 
            augmented reality experiences, and more interactive space exploration tools!
          </p>
        </Card>
      </div>
    </div>
  );
};

export default About;