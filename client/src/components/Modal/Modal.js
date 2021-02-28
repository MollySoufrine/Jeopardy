//Modal needs to know about QuestionButton and/or get data from question button
import React, { useState, useEffect, useContext } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Timer from "../Timer";
import { GameContext } from "../../App";

function JeopardyModal({ question, show, onClose }) {
  const scoreContext = useContext(GameContext);
  const disableQuestionContext = useContext(GameContext);

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
      scoreContext.dispatch({
        type: "ON_QUESTION_ANSWERED",
        payload: {
          playerID: scoreContext.state.activePlayerId,
          score: +question.score,
        },
      });

      /*question should be disabled after someone answers it...dispatch for adding 
      question to disabled obj should potentially go here
      */
    } else {
      alert("Sorry! Wrong answer!");
      scoreContext.dispatch({
        type: "ON_QUESTION_ANSWERED",
        payload: {
          playerID: scoreContext.state.activePlayerId,
          score: -question.score,
        },
      });
    }
    disableQuestionContext.dispatch({
      type: "DISABLE_QUESTION",
      payload: {
        question: question.id,
      },
    });
    scoreContext.dispatch({
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
      <Modal
        show={show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Dialog>
          <Modal.Header>
            <h5
              className="modal-title"
              id={"categoryModal-" + question.category}
            >
              {" "}
              <Timer onTimeEnd={() => setIsExpired(true)} />
              {isExpired ? onClose() : JSON.stringify(question.question)}
            </h5>
            <Button className="answer-button" onClick={onClose}>
              Close
            </Button>
          </Modal.Header>
          <Modal.Body>
            {/* close the modal out if user selects correct or wrong answer...will also have this happen if alotted time for question runs out as well */}
            {question.choices.map((answer) => (
              <Button
                key={answer}
                className="answer-button"
                onClick={(e) => onAnswerClick(e, answer)}

                /*
                when you click an answer it will check whether it is correct or not
                if it is then add to the score, if not subtract from the score
              */
              >
                {answer}
              </Button>
            ))}
          </Modal.Body>
        </Modal.Dialog>
      </Modal>
    </>
  );
}
export default JeopardyModal;
