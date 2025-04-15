// export default function ResultModal({ ref, result, targetTime }) {
//   return (
//     <dialog ref={ref} className="result-modal">
//       <h2>You {result}</h2>
//       <p>
//         The target time was <strong>{targetTime}</strong> seconds.
//       </p>
//       <p>
//         You stopeed the timer with <strong>X seconds left.</strong>
//       </p>
//       <form method="dialog">
//         <button>Close</button>
//       </form>
//     </dialog>
//   );
// }

// Section 8 140-142 forwarding refs prior to React 19 and using useImperativeHandle hook
import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const ResultModal = forwardRef(function ResultModal(
  { targetTime, remainingTime, onReset },
  ref
) {
  const dialog = useRef(); // use separate ref to detach from outer components

  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  // 'useImperativeHandle' defines properties/methods to make accessible outside of this component
  // see TimerChallenge handleStart() function
  useImperativeHandle(ref, () => {
    return {
      // "dialog" ref can now access this open() function
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    // instruct dialog to be rendered in the id='modal' div
    <dialog ref={dialog} className="result-modal" onClose={onReset}>
      {userLost && <h2>You lost</h2>}
      {!userLost && <h2>Your score: {score}</h2>}
      <p>
        The target time was <strong>{targetTime}</strong> seconds.
      </p>
      <p>
        You stopeed the timer with{" "}
        <strong>{formattedRemainingTime} seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default ResultModal;
