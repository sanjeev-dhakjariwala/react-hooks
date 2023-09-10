import React, { useEffect, useLayoutEffect, useRef } from 'react';

const UseLayoutEffect = () => {
  const inputRef = useRef();

  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);
  useEffect(() => {
    inputRef.current.value = 'HELLO';
  }, []);
  return (
    <div>
      <input type="text" value={'SANJEEV!!!'} ref={inputRef} />
    </div>
  );
};

export default UseLayoutEffect;
