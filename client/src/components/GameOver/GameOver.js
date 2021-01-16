import React from "react";
// import { useHistory } from "react-router-dom";

import Button from "react-bootstrap/Button";

function GameOver({ isGameOver }) {
  //   const [isHidden, setHidden] = useState(false);
  return (
    <div>
      GAME OVER
      <input
        // onChange={onChange}
        // value={value}
        className="insertScore"
        type="input"
        placeholder="enter score"
      ></input>
      <Button className="submit" type="submit">
        submit
      </Button>
    </div>
  );
}
export default GameOver;
