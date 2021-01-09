import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

export const Buttons = () => {
  return (
    <div className="container buttons-container">
      <Link className="btn" to="/">
        Home
      </Link>

      <Link to="/game" className="btn">
        Start Game!
      </Link>

      <Link to="/highscores" className="btn">
        Scores
      </Link>

      <Link to="/about" className="btn">
        About
      </Link>
    </div>
  );
};
