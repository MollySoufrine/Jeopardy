import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import { GameContext } from "../../App";

function QuestionButton({ question, onQuestionChange, disabled }) {
  const { state } = useContext(GameContext);

  const handleClick = () => {
    if (!state.disabledQuestions.includes(question.id)) {
      console.log(question.id);
      //if question is not disabled, show question
      onQuestionChange(question.id);
    } else {
      alert("this question is disabled");
    }
  };

  return (
    <Button disabled={disabled} className="game-button" onClick={handleClick}>
      {/* {console.log(question)}
      {console.log(choices)} */}
      {/* make a component for each catrgory, filter list of questions down
            {/* make a component for each catrgory, filter list of questions down
              to specific category, print title in first row */}
      {question.score}
    </Button>
  );
}
export default QuestionButton;
