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
  }
};
