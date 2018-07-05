import React from 'react';
import ReactDOM from 'react-dom';

const Currency = () => {
  return(
    <div id="currency-switch" className="btn-group">  {/*Currency Component--------------------------------------------*/}
      <button type="button" id="currency-switch-button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">USD</button>
    </div>
  );
}

export default Currency;
