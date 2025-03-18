import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-black to-gray-900 flex flex-col items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-4xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Welcome,
        </h1>
        <h2 className="text-3xl lg:text-6xl font-bold mb-8 text-white">
          I'm Alan!
        </h2>
        <div className="text-xl lg:text-4xl mb-12 text-gray-300">
          <Typewriter
            options={{
              strings: ["Full Stack Developer"],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
              delay: 100,
              cursor: "|",
            }}
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/projects"
            className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            My Projects
          </Link>
          <Link
            to="/about"
            className="px-8 py-3 border-2 border-blue-500 text-blue-500 hover:bg-blue-500/10 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            About Me
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
