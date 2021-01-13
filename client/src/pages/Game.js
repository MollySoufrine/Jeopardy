import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import questions from "../Json/questions.json";
import "../css/game.css";
import Column from "../components/Column/Column";
import JeopardyModal from "../components/Modal/Modal";

function Game() {
  const [currQuestionID, setCurrQuestion] = useState(questions[0].id);
  //game should be in charge of keeping track of score
  const [show, setShow] = useState(false);

  //get players name from local storage
  const playerName = localStorage.getItem("playerName");

  function getUniqueCategories(questions) {
    //extract categories from list of questions
    const categories = questions.map((question) => question.category);
    //remove duplicate categories, return result
    const uniqueCat = [...new Set(categories)];

    return uniqueCat;
  }

  const handleQuestionChange = function (questionID) {
    setCurrQuestion(questionID);
    setShow(!show);
  };

  // console.log(questions.filter(filterCurrQuestion)[0]);

  const question = questions.find((question) => question.id === currQuestionID);
  return (
    <div className="wrapper">
      <div className="game-wrapper">
        {getUniqueCategories(questions).map((category) => (
          <Column category={category} onQuestionChange={handleQuestionChange} />
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
        show={show}
        onClose={() => setShow(false)}
        question={question}
      />
      {/* investigate filter or question id...failing because cant get question */}
    </div>
  );
}

export default Game;
