import "./styles.css";

import { Card } from "./Components/Card";
import { Status } from "./Components/Status";
import { Modal } from "./Components/WinLoseModal";

import { ShuffleArray } from "./Container/ArrayShuffler";
import { Delayed } from "./Container/ShowDelay";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StartGame, SaveCards } from "./Container/Action";

export default function App() {
  let data = useSelector((state) => state);
  let dispatch = useDispatch();

  const [end, setEnd] = useState({ show: "hidden", state: "", score: "" });

  useEffect(() => {
    fetch(
      "https://picsum.photos/v2/list?page=" +
        (Math.floor(Math.random() * (100 - 1)) + 1) +
        "&limit=8"
    )
      .then((response) => response.json())
      .then((json) => {
        json.push.apply(json, json);
        ShuffleArray(json);
        dispatch(
          SaveCards(
            json.map((card) => {
              return {
                id: card.id,
                download_url: card.download_url,
                isMatched: false
              };
            })
          )
        );
      });
    setEnd({ show: "hidden", state: "", score: "" });
  }, [data.start]);

  useEffect(() => {
    if (data.correctMoves === 8) {
      setTimeout(
        () =>
          setEnd({
            show: "shown",
            state: "You Won The Game ✔",
            score: "Your Score is: " + data.remainingMoves
          }),
        500
      );
    }

    if (data.remainingMoves === 0) {
      setTimeout(
        () =>
          setEnd({
            show: "shown",
            state: "You Lost The Game ❌",
            score: ""
          }),
        500
      );
    }
  }, [data.remainingMoves]);

  return (
    <div className="App">
      <Modal status={end} />
      <div className="card-holder">
        {data.start == false ? (
          <button
            onClick={() => dispatch(StartGame())}
            className="start-button"
          >
            Start Game
          </button>
        ) : (
          data.cards.map((image, i) => (
            <Delayed waitBeforeShow={i * 125}>
              <Card id={image.id} link={image.download_url} />
            </Delayed>
          ))
        )}
      </div>
      <Status />
    </div>
  );
}
