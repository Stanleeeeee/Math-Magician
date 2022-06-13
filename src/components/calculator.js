/* eslint-disable */
import React, { useState } from 'react';
import Button from './button';
import calculate from '../logic/calculate';
import DisplayResult from './Display';

/* eslint-enable */
function Calculator() {
  const [state, setState] = useState({
    obj: {
      total: null,
      next: null,
      operation: null,
    },
  });

  const handleButtonClick = (e) => {
    const buttonName = e.target.value;
    const { obj } = state;
    setState({
      obj: calculate(obj, buttonName),
    });
  };

  const { obj } = state;

  return (
    <div className="calcMainContainer">
      <DisplayResult displayState={obj} />
      <Button onButtonClick={handleButtonClick} />
    </div>
  );
}

export default Calculator;

