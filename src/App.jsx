import { useState } from "react";
import "./App.css";
import "./style.css";
import Header from "./components/header/Header";
import Contact from "./components/contact/Contact";
import AboutMe from "./components/aboutme/AboutMe";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div>
      <body>
        <section>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </section>
      </body>
      <div className="center">
        <div className="container">
          <Header />
          <Contact />
          <Projects />
          <AboutMe />
        </div>
      </div>
    </div>
  );
}

export default App;
