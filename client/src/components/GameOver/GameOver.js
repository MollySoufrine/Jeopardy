import React from "react";
// import { useHistory } from "react-router-dom";

import Button from "react-bootstrap/Button";

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
      <Button className="submit" type="submit">
        submit
      </Button>
    </div>
  );
}
export default GameOver;
