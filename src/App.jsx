import Player from "./components/Player.jsx";
import TimerChallenage from "./components/TimerChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenage title="Easy" targetTime={1} />
        <TimerChallenage title="Not easy" targetTime={5} />
        <TimerChallenage title="Getting tough" targetTime={10} />
        <TimerChallenage title="Pros Only" targetTime={15} />
      </div>
    </>
  );
}

export default App;
