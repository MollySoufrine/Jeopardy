import React, { useState, useContext } from "react";
import questions from "../Json/questions.json";
import GameOver from "../components/GameOver/GameOver";
import Column from "../components/Column/Column";
import JeopardyModal from "../components/Modal/Modal";
import { GameContext } from "../App";

function Game() {
  const { state } = useContext(GameContext);

  const [currQuestionID, setCurrQuestion] = useState(undefined);
  //this state should be blank or undefined until a user actually selects a question

  //store collection of answered questions
  const [answeredQuestions, setAnsweredQuestions] = useState({});

  function getUniqueCategories(questions) {
    //extract categories from list of questions
    const categories = questions.map((question) => question.category);
    //remove duplicate categories, return result
    const uniqueCat = [...new Set(categories)];

    return uniqueCat;
  }
  // console.log(getUniqueCategories());

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

      {state.players.map(({ player, score, index }) => (
        <div key={index} className="card-group player">
          <div className="card">
            <div className="card-body">
              <div>
                {player}
                <br />
                Score:{score}
                {/* {updateScore} */}
                {/* {updateScore.map(({ score }) => (
                  <p>Score:{score}</p>
                ))} */}
              </div>
            </div>
          </div>
        </div>
      ))}

      <JeopardyModal
        /* 
        this allows you to avoid explicitly tracking the modal show state, we know the modal will always be open if a question is selected
        and will always be closed if no question is selected
        */
        show={currQuestionID != null}
        //"when modal is closed, set game state as 'no question currently selected' "
        onClose={() => setCurrQuestion(undefined)}
        question={question}
      />
    </div>
  );
}

export default Game;
