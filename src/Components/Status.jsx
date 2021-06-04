import { useSelector } from "react-redux";

export function Status() {
  let status = useSelector((state) => state);

  return (
    <div className="game-statuses">
      <span className="game-status">
        Remaining Moves: {status.remainingMoves}
      </span>
      <span className="game-status">
        Used Moves: {25 - status.remainingMoves}
      </span>
      <span className="game-status">Matches Found: {status.correctMoves}</span>
    </div>
  );
}
