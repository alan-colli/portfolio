import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Project1 from "./pages/projects-pages/Project1";
import Project2 from "./pages/projects-pages/Project2";
import Project3 from "./pages/projects-pages/Project3";
import Project4 from "./pages/projects-pages/Project4";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects/1" element={<Project1 />} />
          <Route path="/projects/2" element={<Project2 />} />
          <Route path="/projects/3" element={<Project3 />} />
          <Route path="/projects/4" element={<Project4 />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
