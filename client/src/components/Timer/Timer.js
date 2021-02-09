import React, { useState, useEffect } from "react";

export default function Timer(props) {
  // remember -- state changes in react don't happen immediately
  // they are only applied after a rerender
  // Initial time can be passed as a prop. For now we hardcode 10s.
  const [timeLeft, setTimeLeft] = useState(5);

  useEffect(() => {
    // console.log(playerName);
    if (timeLeft === 0) {
      props.onTimeEnd();

      return;
    }

    // save intervalId to clear the interval when the
    // component re-renders
    const intervalId = setInterval(() => {
      // Don't do this! Non-functional update risks stale values.
      // setTimeLeft(timeLeft - 1);
      // Functional update will always have an up-to-date state.
      setTimeLeft((currentTime) => currentTime - 1);
    }, 1000);

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
    // add timeLeft as a dependency to re-rerun the effect
    // when we update it
  }, [props, timeLeft]);

  return <div className="timer">Time left: {String(timeLeft)}</div>;
}
