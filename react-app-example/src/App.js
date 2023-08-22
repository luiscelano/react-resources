import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);

  return (
    <div className="container">
      <button
        aria-label="Increment value"
        onClick={() => setCount(count + 1)}
        disabled={disabled}
      >
        Increment
      </button>
      <span>{count}</span>
      <button
        aria-label="Decrement value"
        onClick={() => setCount(count - 1)}
        disabled={disabled}
      >
        Decrement
      </button>
      <button
        aria-label="enable/disable value"
        onClick={() => setDisabled(!disabled)}
      >
        enable/disable buttons
      </button>
    </div>
  );
}

export default App;
