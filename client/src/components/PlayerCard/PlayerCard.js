import React, { useContext } from "react";

import GameContext from "../../App";

function PlayerCard() {
  const { state } = useContext(GameContext);

  return (
    <>
      {state.players.map(({ player, score, id }) => {
        const activePlayer = state.players.find(
          (player) => player.id === state.activePlayerId
        );

        return (
          <div key={id} className="card-group player">
            <div className="card">
              <div className="card-body">
                <div>
                  {player}
                  <br />
                  Score:{score}
                  {activePlayer.id === id && <span>ACTIVE!</span>}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
export default PlayerCard;
