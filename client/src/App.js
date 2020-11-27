import React, { Component } from "react";
import { Game } from "./pages/Game";
import { Home } from "./pages/Home";
import { Higscores } from "./pages/Highscores";
import { GameContextProvider } from "./context/GlobalState";

class App extends Component {
  render() {
    return <GameContextProvider></GameContextProvider>;
  }
}

export default App;
