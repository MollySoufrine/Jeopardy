import React, { useReducer, useState } from "react";
import questions from "../Json/questions.json";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_NEW_PLAYER":
      return {
        players: [...state.players, { player: action.player, score: 0 }],
        //return players already there and the new one
      };
    case "UPDATE_PLAYER_SCORE":
      return {
        //updating an item in array, map over the values, get the value you want to update
        //otherwise return current player and their score
        players: state.players.map((p, index) =>
          index === action.index
            ? { ...p, score: p.score + questions.question.score } || {
                ...p,
                score: p.score - questions.question.score,
              }
            : p
        ),
      };
    default:
      return state;
  }
};

//but I would still need some sort of state to hold the amount of each question and thatd be in game still where it is dispalyed?

export const Home = () => {
  const [player, setPlayer] = useState();
  //state value and function called dispatch
  const [{ players }, dispatch] = useReducer(reducer, {
    players: [],
  });

  return (
    <div className="readyBanner">
      <p className="intro-tag">Are you Ready to Play Jeopardy?</p>
      <img
        className="player-img"
        src="https://i.ibb.co/mvvMCpD/America-jeopardy-2019-web-app.png"
        height="370"
        alt="jeopardy tag"
      />

      <div className="player_names_input">
        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch({ type: "ADD_NEW_PLAYER", player });
          }}
        >
          <input
            value={player || ""}
            onChange={(e) => setPlayer(e.target.value)}
          />
          <pre>{JSON.stringify(players, null, 2)}</pre>
          {console.log(players)}
          <button>Add New Player:</button>
        </form>
      </div>
    </div>
  );
};
