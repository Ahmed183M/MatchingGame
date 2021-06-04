import { useDispatch, useSelector } from "react-redux";
import { Flip } from "../Container/FlipFunction";

export function Card(props) {
  let cards = useSelector((state) => state.cards);
  let dispatch = useDispatch();

  return (
    <div className="flip-card">
      <div className={"flip-card-inner " + props.id} id={props.id}>
        <div
          className="flip-card-front"
          onClick={(e) => Flip(e, cards, dispatch)}
        ></div>
        <div className="flip-card-back">
          <img src={props.link} alt="cardback"></img>
        </div>
      </div>
    </div>
  );
}
