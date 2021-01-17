import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import questions from "../Json/questions.json";
import GameOver from "../components/GameOver/GameOver";
import "./game.css";
import Column from "../components/Column/Column";

import JeopardyModal from "../components/Modal/Modal";

function Game() {
  const [currQuestionID, setCurrQuestion] = useState(undefined);
  //this state should be blank or undefined until a user actually selects a question

  //get players name from local storage
  const playerName = localStorage.getItem("playerName");

  //state to update score
  const [score, setScore] = useState(0);

  //store collection of answered questions
  const [answeredQuestions, setAnsweredQuestions] = useState({});

  //detect if the answer a user selected is correct
  const onAnswerClick = (answer) => {
    if (answer === question.correctAnswer) {
      setScore((prevScore) => prevScore + question.score);
      // onClose();
      alert("Correct!");
    } else {
      alert("Sorry! Wrong answer!");
      // onClose();
      setScore((prevScore) => prevScore - question.score);
    }
  };

  function getUniqueCategories(questions) {
    //extract categories from list of questions
    const categories = questions.map((question) => question.category);
    //remove duplicate categories, return result
    const uniqueCat = [...new Set(categories)];

    return uniqueCat;
  }

  const isGameOver =
    Object.keys(answeredQuestions).length === Object.keys(questions).length;

  //when a user selects a question, display the question by the question ID
  const handleQuestionChange = function (questionID) {
    setCurrQuestion(questionID);

    // Update collection of questions that have been answered
    setAnsweredQuestions((prevAnsweredQuestions) => ({
      ...prevAnsweredQuestions,
      [questionID]: true,
      //if prevAnsweredQuestion is this questionID, add it to the object
    }));
  };

  const question = questions.find((question) => question.id === currQuestionID);

  return (
    <div className="wrapper">
      {isGameOver === false && <Column /> && <JeopardyModal />}
      {isGameOver === true && <GameOver />}
      <div className="game-wrapper">
        {getUniqueCategories(questions).map((category) => (
          <Column
            key={category}
            category={category}
            onQuestionChange={handleQuestionChange}
            answeredQuestions={answeredQuestions}
          />
        ))}
      </div>
      <div className="card-group">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{playerName}</h5>
            Score: {score}
            <p className="card-text"></p>
          </div>
        </div>
      </div>

      <JeopardyModal
        onAnswerClick={onAnswerClick}
        // getScoreForQuestions={(score) => setScore(score)}
        //this allows you to avoid explicitly tracking the modal show state, we know the modal will always be open if a question is selected
        //and will always be closed if no question is selected
        show={currQuestionID != null}
        //"when modal is closed, set game state as 'no question currently selected' "
        onClose={() => setCurrQuestion(undefined)}
        question={question}
      />

      {/* investigate filter or question id...failing because cant get question */}
    </div>
  );
}

export default Game;
