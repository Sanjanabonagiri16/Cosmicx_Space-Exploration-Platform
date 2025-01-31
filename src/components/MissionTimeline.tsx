import { motion } from "framer-motion";
import { format } from "date-fns";
import { useState } from "react";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ChevronRight, Rocket, Calendar, Users, Target } from "lucide-react";

const missions = [
  {
    id: 1,
    title: "Mars Colony Alpha",
    date: "2024-06-15",
    description: "First permanent human settlement on Mars",
    status: "Planning",
    objectives: [
      "Establish sustainable habitat",
      "Deploy solar power grid",
      "Initialize water extraction system"
    ],
    crew: ["Sarah Chen", "Marcus Rodriguez", "Elena Popov"],
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "Lunar Gateway",
    date: "2025-03-20",
    description: "Space station orbiting the Moon",
    status: "In Progress",
    objectives: [
      "Assemble orbital modules",
      "Test deep space systems",
      "Support lunar surface missions"
    ],
    crew: ["James Wilson", "Aisha Patel", "Viktor Petrov"],
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Europa Explorer",
    date: "2026-08-10",
    description: "Mission to explore Jupiter's moon",
    status: "Research",
    objectives: [
      "Study ice shell composition",
      "Search for biosignatures",
      "Map subsurface ocean"
    ],
    crew: ["Maria Santos", "David Kim", "Anna Kowalski"],
    image: "/placeholder.svg"
  },
];

const MissionTimeline = () => {
  const [expandedMission, setExpandedMission] = useState<number | null>(null);

  return (
    <section id="missions" className="py-20 bg-space-black/90 dark:bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 text-center dark:text-space-pink">
          Mission Timeline
        </h2>
        
        <ScrollArea className="w-full whitespace-nowrap rounded-md">
          <div className="flex space-x-8 p-4">
            {missions.map((mission) => (
              <motion.div
                key={mission.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-[350px] flex-none"
              >
                <Card className="bg-space-black/50 dark:bg-black/30 backdrop-blur-lg border-space-purple/20 hover:border-space-purple/50 transition-all duration-300 dark:border-space-pink/20 dark:hover:border-space-pink/50">
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
                    <CardDescription className="text-space-gray dark:text-gray-300 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {format(new Date(mission.date), "MMMM d, yyyy")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-space-gray dark:text-gray-300 mb-4">
                      {mission.description}
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
                            <Target className="w-4 h-4" /> Objectives
                          </h4>
                          <ul className="list-disc list-inside text-space-gray dark:text-gray-300">
                            {mission.objectives.map((objective, index) => (
                              <li key={index}>{objective}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="space-y-2">
                          <h4 className="text-space-purple dark:text-space-pink flex items-center gap-2">
                            <Users className="w-4 h-4" /> Crew
                          </h4>
                          <ul className="text-space-gray dark:text-gray-300">
                            {mission.crew.map((member, index) => (
                              <li key={index}>{member}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="mt-4">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-space-purple/20 text-space-purple dark:bg-space-pink/20 dark:text-space-pink gap-2">
                            <Rocket className="w-4 h-4" />
                            {mission.status}
                          </span>
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