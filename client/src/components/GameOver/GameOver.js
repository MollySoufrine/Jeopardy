import React, { useEffect, useState } from "react";
// import { useHistory } from "react-router-dom";

import Button from "react-bootstrap/Button";

function GameOver() {
  //set localstorage for the players name when they click submit
  const [score, setScore] = useState("");

  useEffect(() => {
    localStorage.setItem("score", score);
  }, [score]);
  const onChange = (e) => setScore(e.target.value);

  return (
    <div className="game-over">
      <h1>GAME OVER</h1>
      <br />
      <input
        className="insertScore"
        onChange={onChange}
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
