useEffect(() => {
  // console.log(playerName);
  if (timeLeft === 0) {
    // alert("TIMES UP");
    setTimeLeft(null);
    // setShowModal(false);
  }

  // exit early when we reach 0
  if (!timeLeft) return;

  // save intervalId to clear the interval when the
  // component re-renders
  const intervalId = setInterval(() => {
    setTimeLeft(timeLeft - 1);
  }, 1000);

  // clear interval on re-render to avoid memory leaks
  return () => clearInterval(intervalId);
  // add timeLeft as a dependency to re-rerun the effect
  // when we update it
}, [timeLeft]);

//storing this here for now for the count down time
