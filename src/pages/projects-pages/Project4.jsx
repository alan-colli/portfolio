import fullScreen from "../../figures/project4/fullScreen.gif";
import homePage from "../../figures/project4/homePage.gif";
import login from "../../figures/project4/login.gif";
import register from "../../figures/project4/register.gif";
import using from "../../figures/project4/using.gif";
import { motion } from "framer-motion";

function Route4() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-black to-gray-900 flex flex-col items-center justify-start pt-[15vh] px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full"
      >
        <h1 className="text-4xl lg:text-6xl font-bold mb-8 text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          SUBTRACK
        </h1>

        <div className="space-y-12">
          <div className="bg-gray-800 p-6 rounded-xl shadow-xl">
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-blue-400">
              About the Project
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              A modern task management application with real-time updates,
              drag-and-drop organization, and seamless task tracking
              capabilities. Built with a focus on user experience and
              productivity.
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
                JavaScript
              </span>
              <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full">
                TailwindCSS
              </span>
              <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full">
                Express
              </span>
              <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full">
                PostgreSQL
              </span>
              <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full">
                Axios
              </span>
              <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full">
                JWT
              </span>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-xl">
            <h2 className="text-2xl lg:text-3xl font-semibold mb-6 text-blue-400">
              Authentication
            </h2>
            <div className="grid gap-8">
              <div>
                <h3 className="text-xl text-gray-300 mb-4">Login</h3>
                <img
                  src={login}
                  alt="Login Demo"
                  className="w-full rounded-lg shadow-lg lg:w-1/2 mx-auto"
                />
              </div>
              <div>
                <h3 className="text-xl text-gray-300 mb-4">Register</h3>
                <img
                  src={register}
                  alt="Register Demo"
                  className="w-full rounded-lg shadow-lg lg:w-1/2 mx-auto"
                />
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-xl">
            <h2 className="text-2xl lg:text-3xl font-semibold mb-6 text-blue-400">
              Main Features
            </h2>
            <div className="grid gap-8">
              <div>
                <h3 className="text-xl text-gray-300 mb-4">Home Page</h3>
                <img
                  src={homePage}
                  alt="Home Page Demo"
                  className="w-full rounded-lg shadow-lg lg:w-1/2 mx-auto"
                />
              </div>
              <div>
                <h3 className="text-xl text-gray-300 mb-4">Task Management</h3>
                <img
                  src={using}
                  alt="Task Management Demo"
                  className="w-full rounded-lg shadow-lg lg:w-1/2 mx-auto"
                />
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-xl">
            <h2 className="text-2xl lg:text-3xl font-semibold mb-6 text-blue-400">
              Full Screen View
            </h2>
            <div>
              <h3 className="text-xl text-gray-300 mb-4">
                Complete Application Interface
              </h3>
              <img
                src={fullScreen}
                alt="Full Screen Demo"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-xl">
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-blue-400">
              Key Features
            </h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center space-x-2">
                <span className="text-blue-400">▹</span>
                <span>User authentication and authorization</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-blue-400">▹</span>
                <span>Real-time task updates</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-blue-400">▹</span>
                <span>Drag and drop task organization</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-blue-400">▹</span>
                <span>Responsive design for all devices</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-blue-400">▹</span>
                <span>Task categories and priority levels</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Route4;
