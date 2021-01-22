import React, { useEffect, useState } from "react";
// import { useHistory } from "react-router-dom";

import Button from "react-bootstrap/Button";

function GameOver() {
  //set localstorage for the players name when they click submit
  const [value, setValue] = useState("");
  const [score, setScore] = useState("");

  useEffect(() => {
    localStorage.setItem("playerName", value);
    localStorage.setItem("score", score);
  }, [value][score]);
  const onChange = (e) => setValue(e.target.value);
  const onInput = (e) => setScore(e.target.value);

  return (
    <div className="game-over">
      <h1>GAME OVER</h1>
      <br />
      <input
        onInput={onInput}
        score={score}
        className="insertScore"
        type="input"
        placeholder="enter score"
      ></input>

      <input
        onChange={onChange}
        value={value}
        className="insertPlayerName"
        type="input"
        placeholder=" enter player name"
      ></input>
      <Button className="submit" type="submit">
        submit
      </Button>
    </div>
  );
}
export default GameOver;
