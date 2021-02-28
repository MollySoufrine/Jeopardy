import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import { GameContext } from "../../App";

function QuestionButton({ question, onQuestionChange }) {
  const { state } = useContext(GameContext);

  const handleClick = () => {
    debugger;

    onQuestionChange(question.id);
  };

  return (
    <Button
      disabled={state.disabledQuestions.includes(question.id)}
      className="game-button"
      onClick={handleClick}
    >
      {question.score}
    </Button>
  );
}
export default QuestionButton;
