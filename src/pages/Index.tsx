import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PlanetExplorer from "@/components/PlanetExplorer";
import MissionTimeline from "@/components/MissionTimeline";
import AstroNews from "@/components/AstroNews";
import RocketExplorer from "@/components/RocketExplorer";
import SpaceLearningCenter from "@/components/SpaceLearningCenter";
import SpaceTicketBooking from "@/components/SpaceTicketBooking";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />

      {/* Planets Section */}
      <section id="planets" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-blue-500 mb-4">Explore Our Solar System</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Journey through our interactive solar system explorer and discover the wonders of space
            </p>
          </motion.div>
          <PlanetExplorer />
          <RocketExplorer />
        </div>
      </section>

      {/* Mission Timeline Section */}
      <section id="missions" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-blue-500 mb-4">Upcoming Missions</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Stay updated with our latest space missions and explorations
            </p>
          </motion.div>
          <MissionTimeline />
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-20 bg-space-black/50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-blue-500 mb-4">Space News</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Latest updates from the space industry
            </p>
          </motion.div>
          <AstroNews />
        </div>
      </section>

      {/* Learning Center */}
      <section id="learn" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-blue-500 mb-4">Space Learning Center</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Expand your knowledge about space through interactive lessons
            </p>
          </motion.div>
          <SpaceLearningCenter />
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 bg-space-black/50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-blue-500 mb-4">Book Your Mars Trip</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Ready for the adventure of a lifetime? Book your trip to Mars today!
            </p>
          </motion.div>
          <div className="max-w-xl mx-auto">
            <SpaceTicketBooking />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-blue-500 mb-4">About CosmicX</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Pioneering the future of space exploration and education
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-space-black/50 p-6 rounded-lg"
            >
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Our Mission</h3>
              <p className="text-gray-300">
                CosmicX is dedicated to making space exploration and education accessible to everyone. 
                Through cutting-edge technology and interactive experiences, we bring the wonders of the 
                universe right to your screen.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-space-black/50 p-6 rounded-lg"
            >
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Our Vision</h3>
              <p className="text-gray-300">
                We envision a future where space travel is accessible to all, where education knows no 
                bounds, and where humanity's greatest adventures lie in the stars above.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-space-black/50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-blue-500 mb-4">Contact Us</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Have questions? We'd love to hear from you.
            </p>
          </motion.div>
          <div className="max-w-xl mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-space-black/50 border border-blue-500/20 rounded-lg text-white"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-space-black/50 border border-blue-500/20 rounded-lg text-white"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-space-black/50 border border-blue-500/20 rounded-lg text-white"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;