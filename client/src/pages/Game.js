import React, {useState} from "react";
// import { useHistory } from "react-router-dom";
import questions from "../Json/questions.json";
import "../css/game.css";
import Column from "../components/Column/Column";
import JeopardyModal from "../components/Modal/Modal";

function Game() {
  const [currQuestionID, setCurrQuestion] = useState(undefined);

  //get players name from local storage
  const playerName = localStorage.getItem("playerName");

  const [answeredQuestions, setAnsweredQuestions] = useState({})

  function getUniqueCategories(questions) {
    //extract categories from list of questions
    const categories = questions.map((question) => question.category);
    //remove duplicate categories, return result
    const uniqueCat = [...new Set(categories)];

    return uniqueCat;
  }

  const handleQuestionChange = function (questionID) {
    setCurrQuestion(questionID);

    // Update collection of questions that have been answered
    setAnsweredQuestions(prevAnsweredQuestions => ({
      ...prevAnsweredQuestions,
      [questionID]: true
    }))
  };

  // console.log(questions.filter(filterCurrQuestion)[0]);

  const question = questions.find((question) => question.id === currQuestionID);
  console.log(question)
  console.log(currQuestionID)
  return (
    <div className="wrapper">
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

            <p className="card-text">score</p>
          </div>
        </div>
      </div>
      <JeopardyModal
        show={currQuestionID != null}
        onClose={() => setCurrQuestion(undefined)}
        question={question}
      />
      {/* investigate filter or question id...failing because cant get question */}
    </div>
  );
}

export default Game;
