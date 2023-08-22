import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch({ type: 'counter/increment' })}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch({ type: 'counter/decrement' })}
        >
          Decrement
        </button>
        <button
          aria-label="IncrementByAmount value"
          onClick={() =>
            dispatch({ type: 'counter/incrementByAmount', payload: 2 })
          }
        >
          Increment by amount of 2
        </button>
      </div>
    </div>
  );
}

export default App;
