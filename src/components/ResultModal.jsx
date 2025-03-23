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

const ResultModal = forwardRef(function ResultModal({ result, targetTime }, ref) {
  const dialog = useRef(); // use separate ref to detach from outer components

  useImperativeHandle(ref, () => {
    return { // return object that exposes methods/properties to outer ref
      open() { 
        dialog.current.showModal();
      }
    }
  });
  
  return (
    <dialog ref={dialog} className="result-modal">
      <h2>You {result}</h2>
      <p>
        The target time was <strong>{targetTime}</strong> seconds.
      </p>
      <p>
        You stopeed the timer with <strong>X seconds left.</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
