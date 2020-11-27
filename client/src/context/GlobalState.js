import React, { createContext } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  questions: [],
  score: [],
  playerName: [],
};

export const GameContext = createContext(initialState);
export const GameContextProvider = ({ children }) => {
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

  function updateQuestionModal(id) {
    dispatch({
      type: "QUESTION_ANSWERED",
      payload: id,
    });
  }

  return (
    <GameContextProvider
      value={{
        score: state.score,
        playerName: state.playerName,
        time: state.time,
        questions: state.questions,
        updatePlayerName,
        updateScore,
        updateQuestionModal,
      }}
    >
      {children}
    </GameContextProvider>
  );
};
