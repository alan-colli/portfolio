import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Countries App",
      description:
        "A comprehensive application for exploring country information, featuring detailed data, interactive maps, and a modern user interface.",
      route: "/projects/1",
      technologies: ["React.JS", "TailwindCSS", "Axios"],
    },
    {
      id: 2,
      title: "Contact Manager",
      description:
        "A full-stack contact management system with CRUD operations, search functionality, and a responsive design.",
      route: "/projects/2",
      technologies: [
        "React.JS",
        "Node.js",
        "Express",
        "SQLite",
        "TailwindCSS",
        "Axios",
      ],
    },
    {
      id: 3,
      title: "E-commerce App",
      description:
        "A modern e-commerce platform with a mobile-first approach, featuring a functional shopping cart and Redux state management.",
      route: "/projects/3",
      technologies: ["React.JS", "Redux", "TailwindCSS"],
    },
    {
      id: 4,
      title: "SUBTRACK",
      description:
        "A modern task management application with real-time updates, drag-and-drop organization, and seamless task tracking capabilities.",
      route: "/projects/4",
      technologies: [
        "React.JS",
        "TailwindCSS",
        "JWT",
        "PostgreSQL",
        "Redux",
        "Express",
        "Axios",
      ],
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-black to-gray-900 flex flex-col items-center justify-start pt-[15vh] px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl w-full"
      >
        <h1 className="text-4xl lg:text-6xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: project.id * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-xl p-6"
            >
              <Link to={project.route} className="block">
                <h2 className="text-2xl font-bold text-white mb-4">
                  {project.title}
                </h2>
                <p className="text-gray-300 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
