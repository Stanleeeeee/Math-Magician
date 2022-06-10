import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { onButtonClick } = props;

  return (
    <div className="calcKeysContainer">
      <div className="calcKeys">
        <div className="calcNumbers">
          <button type="button" value="AC" onClick={onButtonClick}>
            AC
          </button>
          <button type="button" value="+/" onClick={onButtonClick}>
            +/-
          </button>
          <button type="button" value="%" onClick={onButtonClick}>
            %
          </button>
        </div>
        <div className="calcNumbers">
          <button type="button" value={7} onClick={onButtonClick}>
            7
          </button>
          <button type="button" value={8} onClick={onButtonClick}>
            8
          </button>
          <button type="button" value={9} onClick={onButtonClick}>
            9
          </button>
        </div>
        <div className="calcNumbers">
          <button type="button" value={4} onClick={onButtonClick}>
            4
          </button>
          <button type="button" value={5} onClick={onButtonClick}>
            5
          </button>
          <button type="button" value={6} onClick={onButtonClick}>
            6
          </button>
        </div>
        <div className="calcNumbers">
          <button type="button" value={1} onClick={onButtonClick}>
            1
          </button>
          <button type="button" value={2} onClick={onButtonClick}>
            2
          </button>
          <button type="button" value={3} onClick={onButtonClick}>
            3
          </button>
        </div>
        <div className="calcNumbers footer">
          <button type="button" value={0} onClick={onButtonClick}>
            0
          </button>
          <button type="button" value="." onClick={onButtonClick}>
            .
          </button>
        </div>
      </div>
      <div className="calcSymbols">
        <button
          type="button"
          value="÷"
          className="calcSymbolsColor"
          onClick={onButtonClick}
        >
          ÷
        </button>
        <button
          type="button"
          value="x"
          className="calcSymbolsColor"
          onClick={onButtonClick}
        >
          x
        </button>
        <button
          type="button"
          value="-"
          className="calcSymbolsColor"
          onClick={onButtonClick}
        >
          -
        </button>
        <button
          type="button"
          value="+"
          className="calcSymbolsColor"
          onClick={onButtonClick}
        >
          +
        </button>
        <button
          type="button"
          value="="
          className="calcSymbolsColor"
          onClick={onButtonClick}
        >
          =
        </button>
      </div>
    </div>
  );
}

Button.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};

export default Button;
