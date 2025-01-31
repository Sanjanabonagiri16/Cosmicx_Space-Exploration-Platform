import { motion } from "framer-motion";

const missions = [
  {
    id: 1,
    title: "Mars Colony Alpha",
    date: "2024",
    description: "First permanent human settlement on Mars",
    status: "Planning",
  },
  {
    id: 2,
    title: "Lunar Gateway",
    date: "2025",
    description: "Space station orbiting the Moon",
    status: "In Progress",
  },
  {
    id: 3,
    title: "Europa Explorer",
    date: "2026",
    description: "Mission to explore Jupiter's moon",
    status: "Research",
  },
];

const MissionTimeline = () => {
  return (
    <section id="missions" className="py-20 bg-space-black dark:bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 text-center dark:text-space-pink">
          Mission Timeline
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {missions.map((mission) => (
            <motion.div
              key={mission.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-space-black/50 dark:bg-black/30 backdrop-blur-lg p-6 rounded-lg border border-space-purple/20 hover:border-space-purple/50 transition-colors dark:border-space-pink/20 dark:hover:border-space-pink/50"
            >
              <div className="text-space-pink font-mono mb-2 dark:text-space-purple">
                {mission.date}
              </div>
              <h3 className="text-white text-xl font-bold mb-2 dark:text-space-pink">
                {mission.title}
              </h3>
              <p className="text-space-gray mb-4 dark:text-gray-300">
                {mission.description}
              </p>
              <span className="inline-block px-3 py-1 rounded-full text-sm bg-space-purple/20 text-space-purple dark:bg-space-pink/20 dark:text-space-pink">
                {mission.status}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionTimeline;