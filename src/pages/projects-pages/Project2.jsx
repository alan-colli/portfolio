import AddingComp from "../../figures/project2/AddingComp.gif";
import AddingMob from "../../figures/project2/AddingMob.gif";
import DeletingMob from "../../figures/project2/DeletingMob.gif";
import MobImg from "../../figures/project2/MobImg.png";
import SearchMob from "../../figures/project2/SearchMob.gif";
import UpdatingMob from "../../figures/project2/UpdatingMob.gif";
import { motion } from "framer-motion";

function Route2() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-black to-gray-900 flex flex-col items-center justify-start pt-[15vh] px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full"
      >
        <h1 className="text-4xl lg:text-6xl font-bold mb-8 text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Contact Manager
        </h1>

        <div className="space-y-12">
          <div className="bg-gray-800 p-6 rounded-xl shadow-xl">
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-blue-400">
              About the Project
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              A complete contact manager with CRUD (Create, Read, Update,
              Delete) and search functionality. Developed with a full-stack
              architecture, offering a fluid and efficient experience for
              managing contact information.
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
                Node.js
              </span>
              <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full">
                Express
              </span>
              <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full">
                SQLite
              </span>
              <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full">
                TailwindCSS
              </span>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-xl">
            <h2 className="text-2xl lg:text-3xl font-semibold mb-6 text-blue-400">
              Mobile App Interface
            </h2>
            <img
              src={MobImg}
              alt="App Screenshot"
              className="w-full rounded-lg shadow-lg lg:w-1/2 mx-auto"
            />
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-xl">
            <h2 className="text-2xl lg:text-3xl font-semibold mb-6 text-blue-400">
              Main Features
            </h2>
            <div className="grid gap-8">
              <div>
                <h3 className="text-xl text-gray-300 mb-4">Add Contact</h3>
                <img
                  src={AddingMob}
                  alt="Adding Contact Demo"
                  className="w-full rounded-lg shadow-lg lg:w-1/2 mx-auto"
                />
              </div>
              <div>
                <h3 className="text-xl text-gray-300 mb-4">Update Contact</h3>
                <img
                  src={UpdatingMob}
                  alt="Updating Contact Demo"
                  className="w-full rounded-lg shadow-lg lg:w-1/2 mx-auto"
                />
              </div>
              <div>
                <h3 className="text-xl text-gray-300 mb-4">Delete Contact </h3>
                <img
                  src={DeletingMob}
                  alt="Deleting Contact Demo"
                  className="w-full rounded-lg shadow-lg lg:w-1/2 mx-auto"
                />
              </div>
              <div>
                <h3 className="text-xl text-gray-300 mb-4">Search Contact</h3>
                <img
                  src={SearchMob}
                  alt="Searching Contact Demo"
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
                src={AddingComp}
                alt="Desktop App Demo"
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
                <span>API RESTful completa</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-blue-400">▹</span>
                <span>SQLite database</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-blue-400">▹</span>
                <span>Responsive interface</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-blue-400">▹</span>
                <span>Data validation</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-blue-400">▹</span>
                <span>Visual feedback for actions</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Route2;
