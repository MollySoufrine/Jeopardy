import React, { useReducer, createContext } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Buttons } from "./components/Buttons/index";
import Game from "./pages/Game";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Highscores } from "./pages/Highscores";
import questions from "../src/Json/questions.json";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.scss";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_NEW_PLAYER":
      return {
        players: [...state.players, { player: payload, score: 0 }],

        //return players already there and the new one
      };
    case "UPDATE_PLAYER_SCORE":
      return {
        //updating an item in array, map over the values, get the value you want to update
        //otherwise return current player and their score
        players: state.players.map((p, index) =>
          index === type.index ? { ...p, score: questions.question.score } : p
        ),
      };
    default:
      return state;
  }
};
// const [{ players }, dispatch] = useReducer(reducer, {
//   players: [],
// });

export const MyContext = createContext();

function App() {
  const [{ players }, dispatch] = useReducer(reducer, {
    players: [],
  });
  console.log(players);
  return (
    <MyContext.Provider value={{ addPlayer: players, callDispatch: dispatch }}>
      <div className="gif-container">
        <Router>
          <div className="app">
            <Buttons />

            <Route exact path="/" component={Home} />

            <Route exact path="/game" component={Game} />
            <Route exact path="/about" component={About} />
            <Route exact path="/scores" component={Highscores} />
          </div>
        </Router>
      </div>
    </MyContext.Provider>
  );
}

export default App;
