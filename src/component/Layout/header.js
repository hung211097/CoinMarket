import React from 'react';
import {number} from '../../constant/config';

class header extends React.Component {
  render(){
    return(
      <div className="titleContain">
        <h2 className="title">Top {number.NUMBER_ITEMS} Cryptocurrencies by Market Capitalization</h2>
        <hr/><br/><br/>
      </div>
    );
  }
}

export default header;
