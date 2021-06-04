import { MatchCards, UseMove, CorrectMove } from "../Container/Action";

let moveCounter = 0;
let moveCheck = [];
export function Flip(event, cards, dispatch) {
  let element = event.target.closest(".flip-card-inner");
  if (element.className.split(" ")[0] === "flip-card-inner") {
    let isMatched = false;
    cards.forEach((match) => {
      if (match.id === element.className.split(" ")[1]) {
        if (match.isMatched === true) isMatched = true;
      }
    });

    if (!isMatched) {
      if (element.style.transform !== "rotateX(180deg)") {
        element.style.transform = "rotateX(180deg)";
        moveCounter++;
        moveCheck[moveCounter - 1] = element.className.split(" ")[1];
      }
    }

    if (moveCounter === 2) {
      document.getElementsByTagName("body")[0].style.pointerEvents = "none";
      if (moveCheck[0] === moveCheck[1]) {
        moveCounter = 0;
        dispatch(MatchCards(moveCheck));
        dispatch(UseMove());
        dispatch(CorrectMove());
        document.getElementsByTagName("body")[0].style.pointerEvents = "";
      } else {
        setTimeout(() => {
          document.getElementsByClassName(
            "flip-card-inner " + moveCheck[0]
          )[0].style.transform =
            document.getElementsByClassName(
              "flip-card-inner " + moveCheck[0]
            )[1].style.transform =
            document.getElementsByClassName(
              "flip-card-inner " + moveCheck[1]
            )[0].style.transform =
            document.getElementsByClassName(
              "flip-card-inner " + moveCheck[1]
            )[1].style.transform =
              "rotateX(0deg)";
          moveCounter = 0;
          dispatch(UseMove());
          document.getElementsByTagName("body")[0].style.pointerEvents = "";
        }, 1000);
      }
    }
  }
}
