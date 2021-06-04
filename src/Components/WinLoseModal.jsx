import { useDispatch } from "react-redux";
import { PlayAgain } from "../Container/Action";

export function Modal(props) {
  let dispatch = useDispatch();

  return (
    <div className={"modal " + props.status.show}>
      <div className="modal-content w3-animate-top">
        <h1>{props.status.state}</h1>
        <h2>{props.status.score}</h2>
        <h3>Wanna Play Again?</h3>
        <button
          onClick={(e) => {
            e.target.closest(".modal").style.class =
              "modal " + props.status.show;
            dispatch(PlayAgain());
          }}
        >
          Play Again
        </button>
      </div>
    </div>
  );
}
