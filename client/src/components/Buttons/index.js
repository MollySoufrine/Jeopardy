import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

export const Buttons = () => {
  return (
    <div className="buttons-container">
      <Link className="link-btn" to="/">
        Home
      </Link>

      <Link to="/game" className="link-btn">
        Start Game!
      </Link>

      <Link to="/highscores" className="link-btn">
        Scores
      </Link>

      <Link to="/about" className="link-btn">
        About
      </Link>
    </div>
  );
};
