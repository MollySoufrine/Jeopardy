import React from "react";

function GameOver() {
  return (
    <div className="game-over">
      <h1>GAME OVER</h1>
      <br />
      <input
        className="insertScore"
        type="input"
        placeholder="enter score"
      ></input>

      <input
        className="insertPlayerName"
        type="input"
        placeholder=" enter player name"
      ></input>
      <button className="submit" type="submit">
        submit
      </button>
    </div>
  );
}
export default GameOver;
