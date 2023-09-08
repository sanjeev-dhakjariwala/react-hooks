import React, { useState } from 'react';

const UseState = () => {
  const [count, setCount] = useState(0);
  const increaseButton = (operation) => {
    if (operation === 'increase') {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  };
  return (
    <div>
      <p>{count}</p>
      <br />
      <button onClick={() => increaseButton('increase')}>Increase</button>
      <button onClick={() => increaseButton('decrease')}>Decrease</button>
    </div>
  );
};

export default UseState;
