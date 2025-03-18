import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-black to-gray-900 flex flex-col items-center justify-start pt-[15vh] px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full text-white"
      >
        <h1 className="text-4xl lg:text-6xl font-bold mb-8 text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          About Me
        </h1>

        <div className="space-y-6 text-lg lg:text-xl">
          <p className="leading-relaxed">
            Hi! I'm Alan Colli, a Full Stack developer passionate about creating
            innovative and efficient web solutions. My journey in programming
            began with a curiosity about how technology can transform people's
            lives.
          </p>

          <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-blue-400">
              Technical Skills
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <span className="text-green-400">▹</span>
                <span>JavaScript (ES6+)</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-400">▹</span>
                <span>React.js</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-400">▹</span>
                <span>Node.js</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-400">▹</span>
                <span>CSS</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-400">▹</span>
                <span>TailwindCSS</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-400">▹</span>
                <span>SQL</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-blue-400">
              Educação
            </h2>
            <p className="mb-2">
              🎓 Bachelor's Degree in Systems Analysis and Development
            </p>
            <p className="text-gray-400">
              Focused on web development and software architecture
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-blue-400">
              Professional Goals
            </h2>
            <p className="leading-relaxed">
              I am constantly learning new technologies and methodologies to
              develop more efficient and scalable solutions. My goal is to
              contribute to challenging projects that positively impact people's
              lives.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-blue-400">
              Interests
            </h2>
            <p className="leading-relaxed">
              Beyond programming, I am interested in emerging technologies,
              artificial intelligence and sustainable development. I believe
              that technology has the power to create a better future and more
              inclusive.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
