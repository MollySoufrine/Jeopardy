export default (state, action) => {
  switch (action.type) {
    case "NEW_PLAYER":
      return {
        ...state,
        playerName: [action.payload, ...state.playerName],
      };
    case "NEW_SCORE":
      return {
        ...state,
        score: [action.payload, ...state.score],
      };
    case "START_TIME":
      return {
        ...state,
        timerOn: true,
        timerTime: state.timerTime,
        timerStart: Date.now() - state.timerTime,
        timerId: action.timerId,
      };
    case "STOP_TIME":
      clearInterval(state.timer);
      return {
        ...state,
      };
    case "RESET_TIME":
      return {};
  }
};
