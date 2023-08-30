import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function A() {
  return (
    <>
      <B />
      <C />
    </>
  );
}

function B() {
  const count = useSelector((state) => state.counter.value);

  return <div>{`count: ${count}`}</div>;
}

function C() {
  const dispatch = useDispatch();

  return (
    <>
      <button
        aria-label="Increment value"
        onClick={() => dispatch({ type: 'counter/increment' })}
      >
        Increment
      </button>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch({ type: 'counter/decrement' })}
      >
        Decrement
      </button>
    </>
  );
}

export default A;
