import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Countries App (API)",
      description:
        "Aplicativo que mostra informações sobre países usando uma API externa",
      path: "/projects/route1",
      tech: ["React", "TailwindCSS", "Axios"],
    },
    {
      title: "Contact Manager (CRUD)",
      description: "Gerenciador de contatos com operações completas de CRUD",
      path: "/projects/route2",
      tech: ["React", "Node.js", "SQLite"],
    },
    {
      title: "ReduxShop (Redux)",
      description: "E-commerce com gerenciamento de estado usando Redux",
      path: "/projects/route3",
      tech: ["React", "Redux", "TailwindCSS"],
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-black to-gray-900 flex flex-col items-center justify-start pt-[15vh] px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full"
      >
        <h1 className="text-4xl lg:text-6xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          My Projects
        </h1>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <Link to={project.path}>
                <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-blue-400 hover:text-blue-300 transition-colors">
                  {project.title}
                </h2>
              </Link>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
