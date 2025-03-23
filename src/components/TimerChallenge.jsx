import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

// let timer; // available to all instances of components

export default function TimerChallenage({ title, targetTime }) {
  const timer = useRef(); // instance specific timer and NOT re-initialized
  const dialog = useRef();

  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimeExpired] = useState(false);

  // let timer; // re-initializes when state changes

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimeExpired(true);
      // dialog.current.showModal();
      dialog.current.open(); // detached TimerChallenge from dialog component in ResultModal
    }, targetTime * 1000);

    setTimerStarted(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
  }

  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} result="lost" />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerStarted ? "active" : undefined}>
          {timerStarted ? "Timer is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
