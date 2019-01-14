import { BrowserRouter as Router, Route } from "react-router-dom";

import GetNavBar from "./NavBar";
import React from "react";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Blog from "./Blog";
import Profile from "./Profile";
import News from "./News";

function App() {
  return (
    <Router>
      <div>
        <GetNavBar />
        <Route exact path="/home" component={Home} />
        <Route path="/about" component={AboutMe} />
        <Route path="/blog" component={Blog} />
        <Route path="/profile" component={Profile} />
        <Route path="/news" component={News} />
      </div>
    </Router>
  );
}
export default App;
