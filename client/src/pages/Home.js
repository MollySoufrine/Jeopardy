import React, { useReducer, useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_NEW_PLAYER":
      return {
        ...state,
        players: [...state.players, { player: action.player }],
        //return players already there and the new one
      };
    default:
      return state;
  }
};

// const addNewPlayer = (player) =>
//   dispatch({ type: "ADD_NEW_PLAYER", players: [player] });
export const Home = () => {
  //state value and function called dispatch
  const [{ players }, dispatch] = useReducer(reducer, { players: [] });
  const [player, setPlayer] = useState();
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
          <input value={player} onChange={(e) => setPlayer(e.target.value)} />
          <pre>{JSON.stringify(players, null, 2)}</pre>
          <button>Add New Player:</button>
        </form>
      </div>
    </div>
  );
};
