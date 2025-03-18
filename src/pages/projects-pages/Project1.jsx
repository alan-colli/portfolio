import CompCountryGIF from "../../figures/project1/CompGIF.gif";
import MobileCountryApp from "../../figures/project1/MobileCountryApp.png";
import MobileGIF from "../../figures/project1/MobileGIF.gif";
import { motion } from "framer-motion";

function Route1() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-black to-gray-900 flex flex-col items-center justify-start pt-[15vh] px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full"
      >
        <h1 className="text-4xl lg:text-6xl font-bold mb-8 text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Countries App
        </h1>

        <div className="space-y-12">
          <div className="bg-gray-800 p-6 rounded-xl shadow-xl">
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-blue-400">
              About the Project
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              A web application that allows users to explore detailed
              information about countries from all over the world. Developed
              with a mobile-first approach, offering a fluid and intuitive
              experience on any device.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-xl">
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-blue-400">
              Technologies Used
            </h2>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full">
                React
              </span>
              <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full">
                TailwindCSS
              </span>
              <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full">
                Axios
              </span>
              <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full">
                REST API
              </span>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-xl">
            <h2 className="text-2xl lg:text-3xl font-semibold mb-6 text-blue-400">
              Mobile View
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl text-gray-300 mb-4">
                  Mobile App Interface
                </h3>
                <img
                  src={MobileCountryApp}
                  alt="App Screenshot"
                  className="w-full rounded-lg shadow-lg lg:w-1/2 mx-auto"
                />
              </div>
              <div>
                <h3 className="text-xl text-gray-300 mb-4">Demo of Features</h3>
                <img
                  src={MobileGIF}
                  alt="App Animation"
                  className="w-full rounded-lg shadow-lg lg:w-1/2 mx-auto"
                />
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-xl">
            <h2 className="text-2xl lg:text-3xl font-semibold mb-6 text-blue-400">
              Desktop View
            </h2>
            <div>
              <h3 className="text-xl text-gray-300 mb-4">Complete Demo</h3>
              <img
                src={CompCountryGIF}
                alt="Desktop App Animation"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-xl">
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-blue-400">
              Main Features
            </h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center space-x-2">
                <span className="text-blue-400">▹</span>
                <span>Search by country name</span>
              </li>

              <li className="flex items-center space-x-2">
                <span className="text-blue-400">▹</span>
                <span>Detailed information view</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-blue-400">▹</span>
                <span>Responsive and adaptive design</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Route1;
