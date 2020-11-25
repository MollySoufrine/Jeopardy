import React, { createContext, useState } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  questions: [],
  score: [],
  playerName: [],
  time: 15,
};

export const GameContext = createContext(initialState);
const GameContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  function updatePlayerName(id) {
    dispatch({
      type: "NEW_PLAYER",
      payload: id,
    });
  }
  function updateScore(score) {
    dispatch({
      type: "NEW_SCORE",
      payload: score,
    });
  }
  function updateTime(timer) {
    dispatch({
      type: "UPDATE_TIME",
      payload: timer,
    });
  }
  function updateQuestionModal(questionID) {
    dispatch({
      type: "QUESTION_ANSWERED",
      payload: questionID,
    });
  }

  return (
    <GameContextProvider
      value={{
        score: state.score,
        playerName: state.playerName,
        time: state.time,
        questions: state.questions,
      }}
    >
      {children}
    </GameContextProvider>
  );
};
