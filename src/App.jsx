import React from "react";
import Header from "./components/header/Header.jsx";
import Intro from "./components/intro/Intro.jsx";
import Expertise from "./components/expertise/Expertise.jsx";
//import Work from "./components/work/Work.jsx";
import Projects from "./components/projects/Projects.jsx";
import Footer from "./components/footer/Footer.jsx";


import css from "./styles/App.module.scss";

function App() {
  return (
    <div className={css.app}>
      <Header/>
      <Intro/>
      <Expertise/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
