import React, { Component } from "react";
import GetJumbotron from "./GetJumbotron";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import "./Home.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <GetJumbotron />
        <AboutMe />
        <Projects />
      </div>
    );
  }
}

export default Home;
