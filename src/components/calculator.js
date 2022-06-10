import React from 'react';
import Button from './Button';
import calculate from '../logic/calculate';
import DisplayResult from './Display';

class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      obj: {
        total: null,
        next: null,
        operation: null,
      },
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(e) {
    const buttonName = e.target.value;
    const { obj } = this.state;
    this.setState({
      obj: calculate(obj, buttonName),
    });
  }

  render() {
    const { obj } = this.state;

    return (
      <div className="calcMainContainer">
        <DisplayResult displayState={obj} />
        <Button onButtonClick={this.handleButtonClick} />
      </div>
    );
  }
}

export default Calculator;
