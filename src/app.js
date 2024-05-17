import React, { useState } from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
  Link,
} from "react-router-dom";
import Home from "./pages/home";
import Skills from "./pages/skills";
import Projects from "./pages/projects";
import Resume from "./pages/resume";
import { Moon, Sun } from "@phosphor-icons/react";

const App = () => {
  const [theme, setTheme] = useState("light");
  const handleTheme = (color) => {
    setTheme(color);
    if (color == "light") {
      document.body.classList.remove("dark-theme");
    } else {
      document.body.classList.add("dark-theme");
    }
  };
  return (
    <Router>
      <div className="container">
        <header>
          <h2> Sejal Chougule </h2>
          <nav>
            <ul>
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <Link to="/skills">skills</Link>
              </li>

              <li>
                <Link to="/projects">projects</Link>
              </li>

              <li>
                <Link to="/resume">resume</Link>
              </li>

              <li>
                <Link>
                  {theme == "light" ? (
                    <Moon onClick={() => handleTheme("dark")} />
                  ) : (
                    <Sun onClick={() => handleTheme("light")} />
                  )}
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
          <Route path="resume" element={<Resume />} />
        </Routes>
        <footer>
          <h4>hosted with ♥ on Github</h4>
          <h6>Developed and Maintained by Sejal Chougule.</h6>
        </footer>
      </div>
    </Router>
  );
};

export default App;
