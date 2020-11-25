import React, { createContext, useState } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  score: [],
  playerName: [],
  time: 15,
};

export const GameContext = createContext(initialState);
const GameContextProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
};

const [showModal, setShowModal] = useState(true);

const playerName = props.location.playerName;
const [score, setScore] = useState(0);

const [questionCount, setCount] = useState(0);
const history = useHistory();
