import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

export const Buttons = ({ state }) => {
  return (
    <div className="buttons-container">
      <Link className="link-btn" to="/">
        Home
      </Link>

      {state.players.length > 0 && (
        <Link to="/game" className="link-btn">
          Start Game!
        </Link>
      )}

      <Link to="/scores" className="link-btn">
        Scores
      </Link>

      <Link to="/about" className="link-btn">
        About
      </Link>
    </div>
  );
};
