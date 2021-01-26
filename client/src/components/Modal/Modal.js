//Modal needs to know about QuestionButton and/or get data from question button
import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Timer from "../Timer";

function JeopardyModal(props) {
  // Flag to change contents of modal after timer expires
  const [isExpired, setIsExpired] = useState(false);

  /*
  detect if the answer a user selected is correct
  keep this in modal, The game only cares about tracking overall score. 
  This keep actual calculation for current question.answer in modal 
  */
  const onAnswerClick = (e, answer) => {
    // console.log(answer === question.correctAnswer);
    // console.log(answer + "was clicked");
    if (answer === props.question.correctAnswer) {
      props.onScoreChange();
      // props.dispatch({ type: "UPDATE_PLAYER_SCORE", index });
      props.onClose();
      alert("Correct!");
    } else {
      props.onScoreChange();
      // props.dispatch({ type: "UPDATE_PLAYER_SCORE", index });
      props.onClose();
      alert("Sorry! Wrong answer!");
    }
  };

  /* 
  Reset modal state whenever it is reopened
  w/o useEffect, once the modal expires once, the modal’s isExpired
  state will be set to true and will never change back to false, which then
  when a user selects another question, no modal would appear
  */
  useEffect(() => {
    if (props.show) {
      setIsExpired(false);
    }
  }, [props.show]);

  if (props.question == null) {
    return null;
  }

  return (
    <>
      <Modal
        show={props.show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Dialog>
          <Modal.Header>
            <h5
              className="modal-title"
              id={"categoryModal-" + props.question.category}
            >
              {" "}
              <Timer onTimeEnd={() => setIsExpired(true)} />
              {isExpired
                ? "Oops, no more time"
                : JSON.stringify(props.question.question)}
            </h5>
            <Button className="answer-button" onClick={props.onClose}>
              Close
            </Button>
          </Modal.Header>
          <Modal.Body>
            {/* close the modal out if user selects correct or wrong answer...will also have this happen if alotted time for question runs out as well */}
            {props.question.choices.map((answer) => (
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
          <Modal.Footer></Modal.Footer>
        </Modal.Dialog>
      </Modal>
    </>
  );
}
export default JeopardyModal;
