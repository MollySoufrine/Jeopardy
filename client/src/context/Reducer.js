import { settings } from "pixi.js";
import React, { useReducer } from "react";

const initialState = {
  player: "",
  score: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_NEW_PLAYER":
      return {
        ...state,
        players: [player, ...state.players],
        //return players already there and the new one
      };
    case "UPDATE_PLAYER_SCORE":
      return { ...state, score: [score, ...state.score] };
    default: {
      return state;
    }
  }
};

function addPlayer() {
  const [{ player, score }, dispatch] = useReducer(reducer, initialState);

  const addNewPlayer = (player) =>
    dispatch({ type: "ADD_NEW_PLAYER", player: player });
  return (
    <>
      <input></input>
      <button onClick={addNewPlayer}>Add New Player</button>
    </>
  );
}

// const [{ player, score }, dispatch] = useReducer(reducer, initialState);

// const addNewPlayer = (player) =>
//   dispatch({ type: "ADD_NEW_PLAYER", player: player });
const updatePlayerScore = (player, score) =>
  dispatch({ type: "UPDATE_PLAYER_SCORE", player: player, score: score });
