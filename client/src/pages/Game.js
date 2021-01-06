import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import questions from "../Json/questions.json";
import "../css/game.css";
// import Timer from "../components/Timer/Timer";

function Game() {
  const [isDisabled, setDisabled] = useState(false);
  const [questiondata, setQuestion] = useState("");
  const [questiontitle, setTitle] = useState("");

  const [score, setScore] = useState(0);
  const [questionScore, setQuestionScore] = useState(0);

  const [choices, setChoices] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState("");

  const [questionCount, setCount] = useState(0);
  const history = useHistory();

  return (
    <div className="wrapper">
      <div className="game-wrapper">
        <button className="button" data-toggle="modal">
          Sports
        </button>
        <button className="button" data-toggle="modal">
          Music
        </button>
        <button className="button" data-toggle="modal">
          Movies
        </button>
        <button className="button" data-toggle="modal">
          Science
        </button>
        {/* mapping through the json file ot list out the info per question and generate a button with the score as the face*/}
        {questions.map(
          ({ id, question, title, choices, correctAnswer, score }, index) => (
            <button
              key={id}
              disabled={isDisabled}
              className="game-button"
              data-toggle="modal"
              data-target="#exampleModal"
              onClick={() => {
                setTitle(title);
                setQuestion(question);
                setChoices(choices);
                setCorrectAnswer(correctAnswer);
                setQuestionScore(score);
              }}
            >
              {score}
            </button>
          )
        )}
      </div>

      <div className="card-group">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">player</h5>
            <p className="card-text">{score}</p>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {questiontitle}
              </h5>
            </div>
            <div class="modal-body">{questiondata}</div>
            {/* close the modal out if user selectes correct or wrong answer...will also have this happen if alotted time for question runs out as well */}
            {choices.map((answer) => (
              <button
                className="answer-button"
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
                //when you click an answer it will check whether it is correct or not
                //if it is then add to the score, if not subtract from the score
                onClick={() => {
                  if (answer === correctAnswer) {
                    setScore(questionScore + score);
                  } else if (answer !== correctAnswer) {
                    setScore(score - questionScore);
                  }
                  // console.log(setScore(questionScore + score));

                  //counts the questions, once all have been selected it would then push the suer to the highscores page/ end the game

                  //i want to change it to just end the game.
                  setCount(questionCount + 1);
                  if (questionCount === questions.length) {
                    history.push("/highscores");
                  }
                  //after a user has selected an answer no matter right or wrong id like to disable the modal
                  //this way they can not select the same question again
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
}

export default Game;
