import GIF from "../../figures/project3/GIF.gif";
import Comp from "../../figures/project3/Comp.png";
import Screen from "../../figures/project3/Screen.png";
import { motion } from "framer-motion";

function Route3() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-black to-gray-900 flex flex-col items-center justify-start pt-[15vh] px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full"
      >
        <h1 className="text-4xl lg:text-6xl font-bold mb-8 text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          E-commerce App
        </h1>

        <div className="space-y-12">
          <div className="bg-gray-800 p-6 rounded-xl shadow-xl">
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-blue-400">
              About the Project
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              A complete and responsive e-commerce developed with a Mobile First
              approach. The project implements a shopping cart and uses Redux
              for global state management, offering a modern and intuitive
              shopping experience.
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
                Redux
              </span>
              <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full">
                TailwindCSS
              </span>
              <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full">
                Mobile First
              </span>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-xl">
            <h2 className="text-2xl lg:text-3xl font-semibold mb-6 text-blue-400">
              Mobile Interface
            </h2>
            <div>
              <h3 className="text-xl text-gray-300 mb-4">Mobile App View</h3>
              <img
                src={Screen}
                alt="Mobile App Screenshot"
                className="w-full rounded-lg shadow-lg lg:w-1/2 mx-auto"
              />
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-xl">
            <h2 className="text-2xl lg:text-3xl font-semibold mb-6 text-blue-400">
              Demo of Features
            </h2>
            <div>
              <h3 className="text-xl text-gray-300 mb-4">
                Interaction with the Cart
              </h3>
              <img
                src={GIF}
                alt="App Functionality Demo"
                className="w-full rounded-lg shadow-lg lg:w-1/2 mx-auto"
              />
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-xl">
            <h2 className="text-2xl lg:text-3xl font-semibold mb-6 text-blue-400">
              Desktop View
            </h2>
            <div>
              <h3 className="text-xl text-gray-300 mb-4">
                Large Screen Interface
              </h3>
              <img
                src={Comp}
                alt="Desktop App View"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-xl">
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-blue-400">
              Implemented Features
            </h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center space-x-2">
                <span className="text-blue-400">▹</span>
                <span>Global state management with Redux</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-blue-400">▹</span>
                <span>Functional shopping cart</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-blue-400">▹</span>
                <span>Responsive and adaptive design</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-blue-400">▹</span>
                <span>Intuitive and modern interface</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-blue-400">▹</span>
                <span>Optimized user experience</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Route3;
