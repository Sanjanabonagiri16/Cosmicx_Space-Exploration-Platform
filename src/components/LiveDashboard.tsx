import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Skeleton } from "./ui/skeleton";
import { ScrollArea } from "./ui/scroll-area";
import { Rocket, Clock, Satellite, Users } from "lucide-react";
import { format, formatDistanceToNow } from "date-fns";

// Simulated API calls (replace with real API endpoints)
const fetchLaunches = async () => {
  // Simulated data
  return [
    {
      id: 1,
      mission: "SpaceX Crew-7",
      date: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
      location: "Kennedy Space Center",
    },
    {
      id: 2,
      mission: "Artemis II",
      date: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
      location: "Cape Canaveral",
    },
  ];
};

const fetchSatellites = async () => {
  // Simulated data
  return [
    {
      id: 1,
      name: "ISS",
      altitude: "408 km",
      velocity: "7.66 km/s",
      lastUpdate: new Date(),
    },
    {
      id: 2,
      name: "Hubble",
      altitude: "540 km",
      velocity: "7.59 km/s",
      lastUpdate: new Date(),
    },
  ];
};

const fetchAstronauts = async () => {
  // Simulated data
  return [
    {
      id: 1,
      name: "Christina Koch",
      role: "Commander",
      mission: "ISS Expedition 69",
      status: "In orbit",
    },
    {
      id: 2,
      name: "Thomas Pesquet",
      role: "Pilot",
      mission: "ISS Expedition 69",
      status: "In orbit",
    },
  ];
};

const LiveDashboard = () => {
  const launches = useQuery({
    queryKey: ["launches"],
    queryFn: fetchLaunches,
    refetchInterval: 60000,
  });

  const satellites = useQuery({
    queryKey: ["satellites"],
    queryFn: fetchSatellites,
    refetchInterval: 30000,
  });

  const astronauts = useQuery({
    queryKey: ["astronauts"],
    queryFn: fetchAstronauts,
    refetchInterval: 60000,
  });

  return (
    <section className="py-20 bg-space-black/80 dark:bg-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 text-center dark:text-space-pink">
          Live Mission Control
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Upcoming Launches */}
          <Card className="bg-space-black/50 dark:bg-black/30 backdrop-blur-lg border-space-purple/20 hover:border-space-purple/50 transition-all duration-300 dark:border-space-pink/20 dark:hover:border-space-pink/50">
            <CardHeader>
              <CardTitle className="text-white dark:text-space-pink flex items-center gap-2">
                <Rocket className="w-5 h-5" />
                Upcoming Launches
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[300px]">
                {launches.isLoading ? (
                  <div className="space-y-4">
                    <Skeleton className="h-12 w-full" />
                    <Skeleton className="h-12 w-full" />
                  </div>
                ) : launches.data ? (
                  <div className="space-y-4">
                    {launches.data.map((launch) => (
                      <motion.div
                        key={launch.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 rounded-lg bg-space-purple/10 dark:bg-space-pink/10"
                      >
                        <h4 className="text-white dark:text-space-pink font-semibold">
                          {launch.mission}
                        </h4>
                        <p className="text-space-gray dark:text-gray-300 text-sm">
                          {launch.location}
                        </p>
                        <div className="mt-2 flex items-center gap-2 text-space-purple dark:text-space-pink">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm">
                            {formatDistanceToNow(launch.date, { addSuffix: true })}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : null}
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Satellite Tracking */}
          <Card className="bg-space-black/50 dark:bg-black/30 backdrop-blur-lg border-space-purple/20 hover:border-space-purple/50 transition-all duration-300 dark:border-space-pink/20 dark:hover:border-space-pink/50">
            <CardHeader>
              <CardTitle className="text-white dark:text-space-pink flex items-center gap-2">
                <Satellite className="w-5 h-5" />
                Satellite Tracking
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[300px]">
                {satellites.isLoading ? (
                  <div className="space-y-4">
                    <Skeleton className="h-12 w-full" />
                    <Skeleton className="h-12 w-full" />
                  </div>
                ) : satellites.data ? (
                  <div className="space-y-4">
                    {satellites.data.map((satellite) => (
                      <motion.div
                        key={satellite.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 rounded-lg bg-space-purple/10 dark:bg-space-pink/10"
                      >
                        <h4 className="text-white dark:text-space-pink font-semibold">
                          {satellite.name}
                        </h4>
                        <div className="text-space-gray dark:text-gray-300 text-sm space-y-1">
                          <p>Altitude: {satellite.altitude}</p>
                          <p>Velocity: {satellite.velocity}</p>
                          <p className="text-xs">
                            Last update: {format(satellite.lastUpdate, "HH:mm:ss")}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : null}
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Astronaut Updates */}
          <Card className="bg-space-black/50 dark:bg-black/30 backdrop-blur-lg border-space-purple/20 hover:border-space-purple/50 transition-all duration-300 dark:border-space-pink/20 dark:hover:border-space-pink/50">
            <CardHeader>
              <CardTitle className="text-white dark:text-space-pink flex items-center gap-2">
                <Users className="w-5 h-5" />
                Astronaut Updates
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[300px]">
                {astronauts.isLoading ? (
                  <div className="space-y-4">
                    <Skeleton className="h-12 w-full" />
                    <Skeleton className="h-12 w-full" />
                  </div>
                ) : astronauts.data ? (
                  <div className="space-y-4">
                    {astronauts.data.map((astronaut) => (
                      <motion.div
                        key={astronaut.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 rounded-lg bg-space-purple/10 dark:bg-space-pink/10"
                      >
                        <h4 className="text-white dark:text-space-pink font-semibold">
                          {astronaut.name}
                        </h4>
                        <div className="text-space-gray dark:text-gray-300 text-sm space-y-1">
                          <p>Role: {astronaut.role}</p>
                          <p>Mission: {astronaut.mission}</p>
                          <p className="text-space-purple dark:text-space-pink">
                            Status: {astronaut.status}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : null}
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LiveDashboard;