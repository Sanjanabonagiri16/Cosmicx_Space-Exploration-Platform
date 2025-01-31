import React from 'react';
import { Card } from "@/components/ui/card";
import { Thermometer, Wind, Cloud } from "lucide-react";

const SpaceWeather = () => {
  return (
    <Card className="p-6 bg-space-black/90 text-white">
      <h2 className="text-2xl font-bold mb-4">Space Weather Updates</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-space-purple/20 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Mars Weather</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Thermometer className="w-4 h-4" />
              <span>Temperature: -63°C</span>
            </div>
            <div className="flex items-center gap-2">
              <Wind className="w-4 h-4" />
              <span>Wind Speed: 7.2 m/s</span>
            </div>
            <div className="flex items-center gap-2">
              <Cloud className="w-4 h-4" />
              <span>Atmospheric Pressure: 715 Pa</span>
            </div>
          </div>
        </div>
        <div className="bg-space-purple/20 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Moon Weather</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Thermometer className="w-4 h-4" />
              <span>Temperature: -153°C</span>
            </div>
            <div className="flex items-center gap-2">
              <Wind className="w-4 h-4" />
              <span>Solar Wind: Active</span>
            </div>
            <div className="flex items-center gap-2">
              <Cloud className="w-4 h-4" />
              <span>Radiation Level: Moderate</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SpaceWeather;