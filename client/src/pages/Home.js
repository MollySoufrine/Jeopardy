import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

import "../css/style.css";

export const Home = () => {
  //set localstorage for the players name when they click submit
  const [value, setValue] = useState("");

  useEffect(() => {
    localStorage.setItem("playerName", value);
  }, [value]);
  const onChange = (e) => setValue(e.target.value);

  return (
    <div className="readyBanner">
      <p className="intro-tag">Are you Ready to Play Jeopardy?</p>
      <img
        className="player-img"
        src="https://i.ibb.co/mvvMCpD/America-jeopardy-2019-web-app.png"
        height="370"
        alt="jeopardy tag"
      />

      <div>
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
    </div>
  );
};
