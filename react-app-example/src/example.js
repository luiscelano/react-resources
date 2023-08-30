import React, { useState } from 'react';

function A() {
  const [count, setCount] = useState(0);
  const updateCount = (value) => setCount((count) => count + value);

  return (
    <>
      <B count={count} />
      <C updateCount={updateCount} />
    </>
  );
}

function B(props) {
  return <div>{`count: ${props.count}`}</div>;
}

function C(props) {
  const { updateCount } = props;
  return (
    <>
      <button aria-label="Increment value" onClick={() => updateCount(1)}>
        Increment
      </button>
      <button aria-label="Decrement value" onClick={() => updateCount(-1)}>
        Decrement
      </button>
    </>
  );
}

export default A;
