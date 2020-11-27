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
    case "QUESTION_ANSWERED":
      return {
        ...state,
        score: state.questions.filter(
          (question) => question.id !== action.payload
        ),
        //return all the questions except the one/ones answered
      };
    default:
      return state;
  }
};
