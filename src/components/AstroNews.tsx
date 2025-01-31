import React from 'react';
import { Card } from "@/components/ui/card";
import { Calendar, ExternalLink } from "lucide-react";

const AstroNews = () => {
  const news = [
    {
      title: "New Discoveries on Mars",
      date: "2024-02-20",
      summary: "NASA's Perseverance rover has found new evidence of ancient microbial life on Mars.",
      link: "#"
    },
    {
      title: "SpaceX's Latest Launch",
      date: "2024-02-19",
      summary: "SpaceX successfully launches another batch of Starlink satellites into orbit.",
      link: "#"
    },
    {
      title: "James Webb's New Images",
      date: "2024-02-18",
      summary: "The James Webb Space Telescope captures stunning new images of distant galaxies.",
      link: "#"
    }
  ];

  return (
    <Card className="p-6 bg-space-black/90 text-white">
      <h2 className="text-2xl font-bold mb-4">Astro News Hub</h2>
      <div className="space-y-4">
        {news.map((item, index) => (
          <div key={index} className="bg-space-purple/20 p-4 rounded-lg">
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <div className="flex items-center gap-2 text-sm text-gray-300 mt-1">
              <Calendar className="w-4 h-4" />
              <span>{item.date}</span>
            </div>
            <p className="mt-2">{item.summary}</p>
            <a href={item.link} className="inline-flex items-center text-space-pink hover:text-space-pink/80 mt-2">
              Read more <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default AstroNews;