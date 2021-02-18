import React from "react";
import questions from "../../Json/questions.json";
import QuestionButton from "../QuestionButton/QuestionButton";
import Button from "react-bootstrap/Button";

//column needs to know about question button & modal
//column needs to pass score info to Game.js

function Column({ onQuestionChange, category, disableQuestionContext }) {
  return (
    <>
      <Button className="button-category">{category}</Button>
      {/* /* mapping through the json file ot list out the info per question and
      generate a button with the score as the face*/}

      {questions

        .filter((question) => question.category === category)
        .map((question) => (
          <QuestionButton
            key={question.id}
            question={question}
            onQuestionChange={onQuestionChange}
          />
        ))}
    </>
  );
}
export default Column;
