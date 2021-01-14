import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Buttons } from "./components/Buttons/index";
import Game from "./pages/Game";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Buttons />

        <Route exact path="/" component={Home} />

        <Route exact path="/game" component={Game} />
        <Route exact path="/about" component={About} />
      </div>
    </Router>
  );
}

export default App;
