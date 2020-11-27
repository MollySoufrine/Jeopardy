import React, { useContext } from "react";
import { GameContext } from "../context/GlobalState";

export const Game = () => {
  const { questions } = useContext(GameContext);
  return (
    <div className="wrapper">
      <h2>Random Jeopardy</h2>

      <div className="card-group">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{playerName}</h5>
            <p className="card-text">{score}</p>
            <button type="button" className="btn btn-danger">
              Give Up
            </button>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {timeLeft} {questiontitle}
              </h5>
            </div>
            <div class="modal-body">{questiondata}</div>

            {answers.map((answer) => (
              <button
                key={answer}
                data-dismiss={
                  answer === correctAnswer || answer !== correctAnswer
                    ? "modal"
                    : null
                }
                aria-label={
                  answer === correctAnswer || answer !== correctAnswer
                    ? "modal"
                    : null
                }
                onClick={() => {
                  if (answer === correctAnswer) {
                    setScore(questionScore + score);
                  } else if (answer !== correctAnswer) {
                    setScore(score - questionScore);
                  }
                  // console.log(setScore(questionScore + score));
                  setCount(questionCount + 1);
                  if (questionCount === questions.length) {
                    history.push("/highscores");
                  }
                }}
              >
                {answer}
              </button>
            ))}

            <div class="modal-footer"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
