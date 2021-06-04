function Reducer(
  state = {
    start: false,
    remainingMoves: 25,
    correctMoves: 0,
    cards: []
  },
  action
) {
  switch (action.type) {
    case "Start_Game":
      return { ...state, start: true };

    case "Save_Cards":
      return { ...state, cards: action.payload };

    case "Match_Cards":
      return {
        ...state,
        cards: state.cards.map((card) => {
          if (action.payload.includes(card.id)) card.isMatched = true;
          return card;
        })
      };

    case "Use_Move":
      return {
        ...state,
        remainingMoves: state.remainingMoves - 1
      };

    case "Correct_Move":
      return {
        ...state,
        correctMoves: state.correctMoves + 1
      };

    case "Play_Again":
      return {
        start: false,
        remainingMoves: 25,
        correctMoves: 0,
        cards: []
      };

    default:
      return state;
  }
}

export default Reducer;
