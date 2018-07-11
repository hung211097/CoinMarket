import React from 'react';
import {number} from '../../constant/config';

class header extends React.Component {
  constructor(props)
  {
    super(props);
    this.state={
      page: this.props.page,
    }
  }

  static getDerivedStateFromProps(nextProps, prevState)
  {
      if(nextProps.page !== prevState.page)
      {
        return{
          page: nextProps.page,
        }
      }
      return null;
  }

  render(){
    return(
      <div className="titleContain">
        <h2 className="title">Top {number.NUMBER_ITEMS} Cryptocurrencies by Market Capitalization {this.state.page > 1 && `(page ${this.state.page})`}</h2>
        <hr/><br/><br/>
      </div>
    );
  }
}

export default header;
