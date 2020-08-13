import React from "react";
import "./App.css";
import FrontPage from "./components/frontpage";
import About from "./components/about";
import Experience from "./components/experience";
import Expertise from "./components/expertise";
import Projects from "./components/projects";
import Achievement from "./components/imageGrid";
import Contact from "./components/contact";
import Footer from "./components/footer";
//import Education1 from "./components/education1";
//import Education from "./components/education";
import CheckEdu from "./components/checkEdu";

function App() {
  return (
    <div className="App" style={{ alignContent: "center" }}>
      <FrontPage />
      <About />
      <CheckEdu />
      <Experience />
      <Expertise />
      <Projects />
      <Achievement />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
