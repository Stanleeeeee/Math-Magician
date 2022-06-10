import React from 'react';

class Calculator extends React.PureComponent {
  render() {
    return (
      <div className="calcMainContainer">
        <div className="calcDisplay">0</div>
        <div className="calcKeysContainer">
          <div className="calcKeys">
            <div className="calcNumbers">
              <button type="button">AC</button>
              <button type="button">+/-</button>
              <button type="button">%</button>
            </div>
            <div className="calcNumbers">
              <button type="button">7</button>
              <button type="button">8</button>
              <button type="button">9</button>
            </div>
            <div className="calcNumbers">
              <button type="button">4</button>
              <button type="button">5</button>
              <button type="button">6</button>
            </div>
            <div className="calcNumbers">
              <button type="button">1</button>
              <button type="button">2</button>
              <button type="button">3</button>
            </div>
            <div className="calcNumbers footer">
              <button type="button">0</button>
              <button type="button">.</button>
            </div>
          </div>
          <div className="calcSymbols">
            <button type="button" className="calcSymbolsColor">÷</button>
            <button type="button" className="calcSymbolsColor">×</button>
            <button type="button" className="calcSymbolsColor">-</button>
            <button type="button" className="calcSymbolsColor">+</button>
            <button type="button" className="calcSymbolsColor">=</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Calculator;
