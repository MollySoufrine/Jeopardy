import React, { useContext } from "react";
import { GameContext } from "../context/GlobalState";

export const Game = () => {
  const { questions } = useContext(GameContext);
  return (
    <div className="wrapper">
      <h2>Random Jeopardy</h2>

      <div className="card-group">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{playerName}</h5>
            <p className="card-text">{score}</p>
            <button type="button" className="btn btn-danger">
              Give Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
