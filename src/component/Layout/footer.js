import React from 'react';
import ReactDOM from 'react-dom';
import Paging from '../../component/Button/pagingButton';

class footer extends React.Component {
  render(){
    return (
      <div className="footer">
        <div className="row text-center h3 margin-bottom--lv2">
          <strong>Total Market Cap: <span id="total-marketcap" className="market-cap">$267,653,949,612</span></strong>
        </div>
      </div>
    );
  }
}

export default footer;
