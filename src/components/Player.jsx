import { useState, useRef } from "react";

export default function Player() {
  const playerInput = useRef();
  const [playerName, setPlayerName] = useState(null);

  function handleClick() {
    setPlayerName(playerInput.current.value);
    playerInput.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {playerName ?? " unknown entity"}!</h2>
      <p>
        <input ref={playerInput} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}

// BERORE USING REFS MANAGING MULTIPLE STATES:

// export default function Player() {
//   const [playerName, setPlayerName] = useState('');
//   const [nameSubmitted, setNameSubmitted] = useState(false);

//   function handleChange(event) {
//     setNameSubmitted(false);
//     setPlayerName(event.target.value);
//   }

//   function handleClick() {
//     setNameSubmitted(true);
//   }

//   return (
//     <section id="player">
//       <h2>Welcome {nameSubmitted ? ` ${playerName}` : " unknown entity"}</h2>
//       <p>
//         <input type="text" onChange={handleChange} value={playerName}/>
//         <button onClick={handleClick}>Set Name</button>
//       </p>
//     </section>
//   );
// }
