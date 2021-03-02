import React, { useState, useContext } from "react";
import questions from "../Json/questions.json";
import GameOver from "../components/GameOver/GameOver";
import Column from "../components/Column/Column";
import JeopardyModal from "../components/Modal/Modal";
import { GameContext } from "../App";
import PlayerCard from "../components/PlayerCard/PlayerCard";

function Game() {
  const { state } = useContext(GameContext);

  console.log(state.disabledQuestions);

  const [currQuestionID, setCurrQuestion] = useState(undefined);
  //this state should be blank or undefined until a user actually selects a question

  function getUniqueCategories(questions) {
    //extract categories from list of questions
    const categories = questions.map((question) => question.category);

    //remove duplicate categories, return result
    const uniqueCat = [...new Set(categories)];

    return uniqueCat;
  }

  //when a user selects a question, display the question by the question ID
  const handleQuestionChange = function (questionID) {
    setCurrQuestion(questionID);
  };

  const question = questions.find((question) => question.id === currQuestionID);

  //do not display game page until a user is created
  if (state.players.length === 0) {
    return <div className="no-players">Please create a player first.</div>;
  }

  return (
    <div className="wrapper">
      {/* {isGameOver === false && <Column /> && <JeopardyModal />}
      {isGameOver === true && <GameOver />} */}
      <div className="game-wrapper">
        {/* {console.trace()} */}

        {getUniqueCategories(questions).map((category) => (
          <Column
            key={category}
            category={category}
            onQuestionChange={handleQuestionChange}
          />
        ))}
      </div>
      <PlayerCard />

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
