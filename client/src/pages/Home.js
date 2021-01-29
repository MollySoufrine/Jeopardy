import React, { useState, useContext } from "react";
import { MyContext } from "../App";

export const Home = () => {
  const [player, setPlayer] = useState("");
  const playerContext = useContext(MyContext);

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
            playerContext.callDispatch("ADD_NEW_PLAYER");
            setPlayer("");
            e.preventDefault();
          }}
        >
          <input
            value={player}
            onChange={(e) => setPlayer(e.target.value)}
          ></input>

          {console.log(player)}

          <button>Add New Player</button>
          {/* {players.map((player) => (
            <p key={player}></p>
          ))} */}
        </form>
        <div></div>
      </div>
    </div>
  );
};
