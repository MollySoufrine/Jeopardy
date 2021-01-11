import React from "react";
import Button from "react-bootstrap/Button";

function QuestionButton(props) {
  const handleClick = () => {
    props.onQuestionChange(props.question.id);
  };

  return (
    <Button
      className="game-button"
      key={props.question.id}
      onClick={handleClick}
    >
      {/* {console.log(question)}
      {console.log(choices)} */}
      {/* make a component for each catrgory, filter list of questions down
            {/* make a component for each catrgory, filter list of questions down
              to specific category, print title in first row */}
      {props.question.score}
    </Button>
  );
}
export default QuestionButton;
