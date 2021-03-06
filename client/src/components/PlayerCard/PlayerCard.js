import React, { useContext } from "react";
import { GameContext } from "../../App";
import "./index.css";

function PlayerCard() {
  const { state } = useContext(GameContext);

  return (
    <>
      {state.players.map(({ player, score, id }) => {
        const activePlayer = state.players.find(
          (player) => player.id === state.activePlayerId
        );

        return (
          <div key={id} className="card-container">
            <div className="card">
              <div className="card-body">
                {player}
                <br />
                Score:{score}{" "}
                {activePlayer.id === id && (
                  <span className="active-dot"> </span>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
export default PlayerCard;
