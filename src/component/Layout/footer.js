import React from 'react';
import Dollar from '../../format/dollar';

class footer extends React.Component {
  constructor(props)
  {
    super(props);
    this.state={
      total_marketcap: this.props.totalMarket,
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if(+nextProps.totalMarket !== +prevState.total_marketcap)
    {
      return{
        total_marketcap: nextProps.totalMarket,
      }
    }

    return null;
  }



  componentDidMount()
  {
    this.setState({
      total_marketcap: this.props.totalMarket,
    })
  }

  render(){
    return (
      <div className="footer">
        <div className="row text-center h3 margin-bottom--lv2">
          <strong>Total Market Cap: <span id="total-marketcap" className="market-cap">{Dollar(this.state.total_marketcap)}</span></strong>
        </div>
      </div>
    );
  }
}

export default footer;
