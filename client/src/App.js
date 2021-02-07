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
      const newPlayer = {
        player: payload,
        score: 0,
        id: state.players.length + 1,
      };
      return {
        ...state,
        players: [...state.players, newPlayer],
        activePlayerId: state.activePlayerId ?? newPlayer.id,
        //always use ...state, at the beginnning incase you have multiple objects in initial state
        //return players already there and the new one
      };
    case "ON_QUESTION_ANSWERED":
      const newPlayerState = state.players.map((player) => {
        debugger;
        if (player.id === payload.playerID) {
          return { ...player, score: player.score + payload.score };
        } else {
          return player;
        }
      });
      return {
        ...state,
        players: newPlayerState,
      };
    case "CHANGE_PLAYER":
      const currentPlayerIndex = state.players.findIndex(
        (player) => player.id === state.activePlayerId
      );

      return {
        ...state,
        activePlayerId:
          state.players[(currentPlayerIndex + 1) % state.players.length].id,
      };

    default:
      throw Error("error occured");
    //set default to throw an error
  }
};

export const GameContext = createContext();

const INITIAL_STATE = {
  players: [],
  activePlayerId: null,
  answereQuestions: {}, // FODO: move question state here
};

function App() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  //always assign an initial state
  const game = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  console.log(state.players);

  return (
    <GameContext.Provider value={game}>
      <div className="gif-container">
        <Router>
          <div className="app">
            <Buttons state={state} />

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
