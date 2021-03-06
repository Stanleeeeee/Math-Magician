import React from 'react';
import PropTypes from 'prop-types';

function DisplayResult(props) {
  const { displayState } = props;

  return (
    <div className="calcDisplay">
      {displayState.next || displayState.operation || displayState.total || 0}
    </div>
  );
}

DisplayResult.propTypes = {
  displayState: PropTypes.shape({
    total: PropTypes.string,
    next: PropTypes.string,
    operation: PropTypes.string,
  }).isRequired,
};

export default DisplayResult;
