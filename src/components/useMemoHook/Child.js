import React, { useEffect } from 'react';

const Child = ({ returnComment }) => {
  useEffect(() => {
    console.log('Function Was Called!!!');
  }, [returnComment]);
  return <div>{returnComment('Pedro')}</div>;
};

export default Child;
