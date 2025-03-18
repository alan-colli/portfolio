import linkedinIcon from "../figures/iconmonstr-linkedin-4-240.png";
import emailImage from "../figures/iconmonstr-email-10-240.png";
import githubImage from "../figures/iconmonstr-github-1-240.png";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [showEmail, setShowEmail] = useState(false);

  const handleShowEmail = () => {
    setShowEmail(!showEmail);
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: linkedinIcon,
      url: "https://linkedin.com/in/alan-colli-314ab028a",
      color: "hover:bg-blue-500/20",
      description: "Connect with me on LinkedIn",
    },
    {
      name: "Email",
      icon: emailImage,
      onClick: handleShowEmail,
      color: "hover:bg-red-500/20",
      description: "Send me an email",
    },
    {
      name: "GitHub",
      icon: githubImage,
      url: "https://github.com/alan-colli",
      color: "hover:bg-gray-500/20",
      description: "Check out my GitHub profile",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-black to-gray-900 flex flex-col items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full text-center"
      >
        <h1 className="text-4xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Get in Touch
        </h1>
        <p className="text-gray-400 text-lg mb-12">
          Feel free to reach out through any of these platforms
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {socialLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group"
            >
              {link.url ? (
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex flex-col items-center p-6 rounded-xl transition-all duration-300 ${link.color} border border-gray-700 hover:border-blue-500/50`}
                >
                  <img
                    src={link.icon}
                    alt={`${link.name} icon`}
                    className="w-16 h-16 mb-4 group-hover:scale-110 transition-transform duration-300"
                  />
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {link.name}
                  </h3>
                  <p className="text-gray-400 text-sm">{link.description}</p>
                </a>
              ) : (
                <button
                  onClick={link.onClick}
                  className={`flex flex-col items-center p-6 rounded-xl transition-all duration-300 w-full ${link.color} border border-gray-700 hover:border-blue-500/50`}
                >
                  <img
                    src={link.icon}
                    alt={`${link.name} icon`}
                    className="w-16 h-16 mb-4 group-hover:scale-110 transition-transform duration-300"
                  />
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {link.name}
                  </h3>
                  <p className="text-gray-400 text-sm">{link.description}</p>
                </button>
              )}
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {showEmail && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 p-8 rounded-xl shadow-2xl z-50 border border-blue-500/50"
            >
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Email Address
                </h3>
                <p className="text-xl text-blue-400 mb-6 break-all">
                  alanbritocolli@gmail.com
                </p>
                <button
                  onClick={handleShowEmail}
                  className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
