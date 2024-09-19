import { useState } from "react";
import "./App.css";
import "./style.css";
import Header from "./components/header/Header";
import Contact from "./components/contact/Contact";
import AboutMe from "./components/aboutme/AboutMe";

function App() {
  return (
    <div>
      <body>
        <section>
          <span></span>
          <span></span>
          <span></span>
        </section>
      </body>
      <div className="container">
        <Header />
        <AboutMe />
      </div>
    </div>
  );
}

export default App;
