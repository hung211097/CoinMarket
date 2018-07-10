import React, { Component } from 'react';
import _ from 'lodash';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import List from './List';
import TickerWithConvert from '../../services/tickerWithConvert';
import Header from '../../component/Layout/header';
import Footer from '../../component/Layout/footer';


class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
        coin: null,
        i : this.props.match.params.id,
        flag: false
        };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    // console.log(prevState);
    // console.log(nextProps.match.params.id);
    if(nextProps.match.params.id != prevState.i)
    {
      return{
        coin: null,
        i: nextProps.match.params.id, 
        flag: true
      }
    }

    return null;
  }



  componentDidUpdate() {
    if (this.state.flag){
      this.setState(
      {
        flag: false
      }, function(){
      TickerWithConvert(this.state.i)
      .then((data) => this.setState({coin: data}));
    });
  }
  }
  
  componentDidMount()
  {
    
      TickerWithConvert(this.state.i)
      .then((data) =>{this.setState({coin: data, flag: false})});
  }


  

  render(){
    
    return(
      <div className="container">
        {this.state && this.state.coin && (
        <div className="row">
        <div className="col-md-3">
          <div className="details-panel-item--name">
            <h1>
            <img  src={`https://s2.coinmarketcap.com/static/img/coins/32x32/${this.state.coin.id}.png`} />
              {this.state.coin.name}
              <span className="text-bold h3 text-gray text-large">({this.state.coin.symbol})</span>
            </h1>
          </div>
        </div>
        <div className="col-md-9 ">
          <div className="details-panel-item--price">
            <span id="quote_price">
              <span className="currency-value">${this.state.coin.quotes.USD.price}</span>
              <span className="currency-code"> USD </span>
            </span>
            <span className="percentage">
              <span className={this.state.coin.quotes.USD.percent_change_24h < 0 ? "no-wrap percent-change text-right drop" :this.state.coin.quotes.USD.percent_change_24h  > 0 ? "no-wrap  percent-change text-right rise" : "no-wrap  percent-change text-right"}>({this.state.coin.quotes.USD.percent_change_24h }%)</span>
            </span>
            <br />
            <span className="price-cryto">
              <span>{this.state.coin.quotes.BTC.price} BTC </span>
            </span>
            <span className="percentage-change">
              <span className={this.state.coin.quotes.BTC.percent_change_24h  < 0 ? "no-wrap percent-change text-right drop" :this.state.coin.quotes.BTC.percent_change_24h  > 0 ? "no-wrap  percent-change text-right rise" : "no-wrap  percent-change text-right"}>({this.state.coin.quotes.BTC.percent_change_24h }%)</span>
            </span>
          </div>
          <br />
          <div>
            <div className="table-responsive">
              <table className="table table-hover">
                <thead className="menu">
                  <tr>
                    <th>
                      <h5>Market Cap</h5>
                    </th>
                    <th>
                      <h5>Volume (24h)</h5>
                    </th>
                    <th>
                      <h5>Circulating Supply</h5>
                    </th>
                    <th>
                      <h5>Max Supply</h5>
                    </th>
                    <th>
                      <h5>Total Supply</h5>
                    </th>
                  </tr>
                </thead>
                <tbody className="value">
                  <tr>
                    <td>
                      <span>${this.state.coin.quotes.USD.market_cap }</span>
                      <span> USD</span>
                      <br />
                      <span className="price-cryto">
                        <span>{this.state.coin.quotes.BTC.market_cap} </span>
                        BTC
                        <br />
                      </span>
                    </td>
                    <td>
                      <span>${this.state.coin.quotes.USD.volume_24h}</span>
                      <span> USD</span>
                      <br />
                      <span className="price-cryto">
                        <span>{this.state.coin.quotes.BTC.volume_24h} </span>
                        BTC
                        <br />
                      </span>
                    </td>
                    <td>
                      <span>{this.state.coin.circulating_supply}</span>
                      <span> {this.state.coin.symbol}</span>
                      <br />
                    </td>
                    <td>
                      <span>{this.state.coin.max_supply}</span>
                      <span> {this.state.coin.symbol}</span>
                      <br />
                    </td>
                    <td>
                    <span>{this.state.coin.total_supply}</span>
                    <span> {this.state.coin.symbol}</span>
                    <br />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
         <br/>
       <hr/>
      </div>
        )}
        <br/>
        <div >
          <p className = "ListCoin"> LIST COIN </p>
          <List />
        </div>
      </div>
    )
  }
}
export default Content;




