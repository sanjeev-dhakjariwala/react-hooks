import React, { useState, useCallback } from 'react';
import Child from '../useMemoHook/Child';

const UseCallback = () => {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState(`Yo! Please subscribe to my channel`);

  const returnComment = useCallback(
    (name) => {
      return data + name;
    },
    [data]
  );
  return (
    <div className="App">
      <Child returnComment={returnComment} />

      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {' '}
        Toggle
      </button>
      {toggle && <h1> toggle </h1>}
    </div>
  );
};

export default UseCallback;
