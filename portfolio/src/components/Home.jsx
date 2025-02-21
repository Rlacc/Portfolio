import React from "react";
import Contact from "./Contact";
import NavBar from "./NavBar";
import Projects from "./Projects";
import About from "./About";

function Home() {
  return (
    <div className="scroll-smooth">
      <NavBar />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default Home;
