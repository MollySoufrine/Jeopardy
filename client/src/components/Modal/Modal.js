//div needs to know about QuestionButton and/or get data from question button
import React, { useState, useEffect, useContext } from "react";
// import div from "react-bootstrap/div";
// import Button from "react-bootstrap/Button";
import Timer from "../Timer";
import { GameContext } from "../../App";
import "./index.css";

function JeopardyModal({ question, show, onClose }) {
  const questionContext = useContext(GameContext);
  // const disableQuestionContext = useContext(GameContext);

  // Flag to change contents of modal after timer expires
  const [isExpired, setIsExpired] = useState(false);

  /*
  detect if the answer a user selected is correct
  keep this in modal, The game only cares about tracking overall score. 
  This keep actual calculation for current question.answer in modal 
  */

  const onAnswerClick = (e, answer) => {
    if (answer === question.correctAnswer) {
      alert("Correct!");
      questionContext.dispatch({
        type: "ON_QUESTION_ANSWERED",
        payload: {
          playerID: questionContext.state.activePlayerId,
          score: +question.score,
        },
      });

      /*question should be disabled after someone answers it...dispatch for adding 
      question to disabled obj should potentially go here
      */
    } else {
      alert("Sorry! Wrong answer!");
      questionContext.dispatch({
        type: "ON_QUESTION_ANSWERED",
        payload: {
          playerID: questionContext.state.activePlayerId,
          score: -question.score,
        },
      });
    }
    debugger;
    questionContext.dispatch({
      type: "ON_QUESTION_ANSWERED",
      payload: {
        question: question.id,
      },
    });
    questionContext.dispatch({
      type: "CHANGE_PLAYER",
    });

    onClose();
  };

  /* 
  Reset modal state whenever it is reopened
  w/o useEffect, once the modal expires once, the modal’s isExpired
  state will be set to true and will never change back to false, which then
  when a user selects another question, no modal would appear
  */
  useEffect(() => {
    if (show) {
      setIsExpired(false);
    }
  }, [show]);

  if (question == null) {
    return null;
  }

  return (
    <>
      <div
        className="modal-container"
        show={show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div className="modal-main-section">
          <div className="modal-header">
            <h5
              className="modal-title"
              id={"categoryModal-" + question.category}
            >
              {" "}
              <Timer onTimeEnd={() => setIsExpired(true)} />
              {isExpired ? onClose() : JSON.stringify(question.question)}
            </h5>
            <button className="modal-btn" onClick={onClose}>
              Close
            </button>
          </div>
          <div className="modal-body">
            {/* close the modal out if user selects correct or wrong answer...will also have this happen if alotted time for question runs out as well */}
            {question.choices.map((answer) => (
              <button
                key={answer}
                className="answer-button"
                onClick={(e) => onAnswerClick(e, answer)}

                /*
                when you click an answer it will check whether it is correct or not
                if it is then add to the score, if not subtract from the score
              */
              >
                {answer}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default JeopardyModal;
