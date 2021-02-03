import React, { useReducer, createContext, useMemo } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Buttons } from "./components/Buttons/index";
import Game from "./pages/Game";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Highscores } from "./pages/Highscores";
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
      const newPlayerState = state.players.map((player) => {
        if (player.player === type.player) {
          return { ...player, score: player.score + type.score };
        } else {
          return player;
        }
      });

      return {
        newPlayerState,
      };
    default:
      return state;
  }
};

//handle the change of the score
// const handleScoreChange = (newScore) => {
//   setScore((prevScore) => prevScore + newScore);
// };

export const GameContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, {
    players: [],
  });
  const game = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <GameContext.Provider value={game}>
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
    </GameContext.Provider>
  );
}

export default App;
