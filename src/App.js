import React, { Component } from "react";
import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import Post from "./component/Post";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/:post_id" component={Post} />
        </div>
      </Router>
    );
  }
}

export default App;
