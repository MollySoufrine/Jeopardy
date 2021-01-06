import React from "react";
import "./style.css";

export const Home = () => {
  return (
    <div className="readyBanner">
      <h2>Are you Ready to Play Jeopardy?</h2>
      <img
        src="https://i.ibb.co/mvvMCpD/America-jeopardy-2019-web-app.png"
        height="370"
        alt="jeopardy tag"
      />

      <div>
        <input
          className="insertPlayerName"
          type="input"
          placeholder=" enter player name"
        ></input>
        <button className="submit" type="submit">
          submit
        </button>
      </div>
    </div>
  );
};
