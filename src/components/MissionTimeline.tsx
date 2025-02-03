import { motion } from "framer-motion";
import { format } from "date-fns";
import { useState } from "react";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ChevronRight, Rocket, Calendar, Users, Target, Clock, MapPin } from "lucide-react";
import { Badge } from "./ui/badge";

const missions = [
  {
    id: 1,
    title: "Mars Colony Alpha",
    date: "2024-06-15",
    description: "First permanent human settlement on Mars, marking a historic milestone in human space colonization. This mission aims to establish sustainable living conditions for future generations of Mars settlers.",
    status: "Planning",
    location: "Acidalia Planitia, Mars",
    duration: "5 years",
    objectives: [
      "Establish sustainable habitat",
      "Deploy solar power grid",
      "Initialize water extraction system",
      "Create oxygen generation facility",
      "Build agricultural domes"
    ],
    crew: ["Sarah Chen - Commander", "Marcus Rodriguez - Engineer", "Elena Popov - Botanist"],
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb"
  },
  {
    id: 2,
    title: "Lunar Gateway",
    date: "2025-03-20",
    description: "Construction of humanity's first permanent space station orbiting the Moon. This station will serve as a vital stepping stone for deep space exploration and lunar surface missions.",
    status: "In Progress",
    location: "Lunar Orbit",
    duration: "2 years",
    objectives: [
      "Assemble orbital modules",
      "Test deep space systems",
      "Support lunar surface missions",
      "Establish communication relay",
      "Create refueling station"
    ],
    crew: ["James Wilson - Station Commander", "Aisha Patel - Systems Engineer", "Viktor Petrov - Operations"],
    image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f"
  },
  {
    id: 3,
    title: "Europa Explorer",
    date: "2026-08-10",
    description: "Groundbreaking mission to explore Jupiter's moon Europa, searching for signs of life beneath its icy surface. This mission could revolutionize our understanding of extraterrestrial life.",
    status: "Research",
    location: "Europa, Jupiter's Moon",
    duration: "3 years",
    objectives: [
      "Study ice shell composition",
      "Search for biosignatures",
      "Map subsurface ocean",
      "Analyze chemical composition",
      "Deploy underwater probes"
    ],
    crew: ["Maria Santos - Lead Scientist", "David Kim - Astrobiologist", "Anna Kowalski - Ice Specialist"],
    image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc"
  },
];

const MissionTimeline = () => {
  const [expandedMission, setExpandedMission] = useState<number | null>(null);

  return (
    <section id="missions" className="py-20 bg-space-black/90 dark:bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 text-center dark:text-space-pink">
          Upcoming Missions
        </h2>
        
        <ScrollArea className="w-full whitespace-nowrap rounded-md">
          <div className="flex space-x-8 p-4">
            {missions.map((mission) => (
              <motion.div
                key={mission.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-[400px] flex-none"
              >
                <Card className="bg-space-black/50 dark:bg-black/30 backdrop-blur-lg border-space-purple/20 hover:border-space-purple/50 transition-all duration-300 dark:border-space-pink/20 dark:hover:border-space-pink/50 overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={mission.image} 
                      alt={mission.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-white dark:text-space-pink flex items-center justify-between">
                      {mission.title}
                      <button
                        onClick={() => setExpandedMission(expandedMission === mission.id ? null : mission.id)}
                        className="text-space-purple dark:text-space-pink hover:opacity-80 transition-opacity"
                      >
                        <ChevronRight
                          className={`transform transition-transform duration-200 ${
                            expandedMission === mission.id ? "rotate-90" : ""
                          }`}
                        />
                      </button>
                    </CardTitle>
                    <div className="flex items-center gap-4 mt-2">
                      <CardDescription className="text-space-gray dark:text-gray-300 flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {format(new Date(mission.date), "MMMM d, yyyy")}
                      </CardDescription>
                      <Badge variant="secondary" className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {mission.duration}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-space-gray dark:text-gray-300 mb-4">
                      <div className="flex items-center gap-2 text-sm mb-2">
                        <MapPin className="w-4 h-4" />
                        {mission.location}
                      </div>
                      <p className="text-sm">{mission.description}</p>
                    </div>
                    
                    {expandedMission === mission.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-4"
                      >
                        <div className="space-y-2">
                          <h4 className="text-space-purple dark:text-space-pink flex items-center gap-2">
                            <Target className="w-4 h-4" /> Mission Objectives
                          </h4>
                          <ul className="list-disc list-inside text-space-gray dark:text-gray-300 text-sm">
                            {mission.objectives.map((objective, index) => (
                              <li key={index} className="mb-1">{objective}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="space-y-2">
                          <h4 className="text-space-purple dark:text-space-pink flex items-center gap-2">
                            <Users className="w-4 h-4" /> Crew Members
                          </h4>
                          <ul className="text-space-gray dark:text-gray-300 text-sm">
                            {mission.crew.map((member, index) => (
                              <li key={index} className="mb-1 flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-space-purple dark:bg-space-pink"></div>
                                {member}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="mt-4">
                          <Badge variant="outline" className="flex items-center gap-2">
                            <Rocket className="w-4 h-4" />
                            {mission.status}
                          </Badge>
                        </div>
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  );
};

export default MissionTimeline;