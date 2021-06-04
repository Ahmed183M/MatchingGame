export const StartGame = () => {
  return { type: "Start_Game" };
};

export const SaveCards = (cards) => {
  return { type: "Save_Cards", payload: cards };
};

export const MatchCards = (match = []) => {
  return {
    type: "Match_Cards",
    payload: match
  };
};

export const UseMove = () => {
  return {
    type: "Use_Move"
  };
};

export const CorrectMove = () => {
  return {
    type: "Correct_Move"
  };
};

export const PlayAgain = () => {
  return {
    type: "Play_Again"
  };
};
