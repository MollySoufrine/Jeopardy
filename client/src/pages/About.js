import React from "react";

export const About = () => {
  return (
    <div id="about" class="container-fluid mycontainer">
      <div className="jumbotron">
        <h1>About</h1>
        <hr className="my-4 hexagons" />
        <div className="about">
          <h2 className="h1-intro">Introduction</h2>
          <p className="intro">
            This is based of the TV show Jeopardy. Rather than inputting your
            answer, you're presented with choices. You have 15 seconds to select
            your answer and if you run out of time you will not be given another
            chance to answer. If you select the correct answer you earn points!
            If you select the wrong answer, points will be deducted.
          </p>
        </div>
        <div className="rules-wrapper">
          <h2 className="rules">Rules</h2>
          <p>
            1) On The home page input your name in the player name section, then
            hit start game!
          </p>
          <p>2) You can select any question on the board to get started!</p>
          <p>3) Select your answer within 15 seconds!</p>
        </div>
      </div>
    </div>
  );
};
