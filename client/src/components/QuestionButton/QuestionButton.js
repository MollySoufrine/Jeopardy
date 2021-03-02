import React, { useContext, useState } from "react";

import { GameContext } from "../../App";
import "./index.css";

function QuestionButton({ question, onQuestionChange }) {
  const { state } = useContext(GameContext);

  const handleClick = () => {
    debugger;

    onQuestionChange(question.id);
  };

  return (
    <button
      disabled={state.disabledQuestions.includes(question.id)}
      className="game-button"
      onClick={handleClick}
    >
      {question.score}
    </button>
  );
}
export default QuestionButton;
