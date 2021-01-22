import React from "react";

export const Highscores = () => {
  // const playerName = localStorage.getItem("playername");
  // const score = localStorage.getItem("score");
  var playerName = localStorage.getItem("playerName");
  var score = localStorage.getItem("score");

  return (
    <div className="highscores">
      <div>
        <h1>High Scores</h1>
        <li>
          {playerName} {score}
        </li>
      </div>
    </div>
  );
};
